Collectibles Manager 

deployed: https://collectibles-manager.herokuapp.com/

The app uses React, Express, Node, and MySQL.
Authentication/encryption for user info uses the npm package "bcrypt".

***--- Clone Repo & Install Dependencies ---***

Make sure you have the following installed: 
Node.js: https://nodejs.org/en/download/ (this should also include NPM)
NPM: https://www.npmjs.com/get-npm (in case it doesn't not automatically install with Node)

To clone and run the app locally, you will need to "git clone" the repo to your local machine.
Once cloned, go to the root folder of where you saved the repo, which will included the "server.js" file as a reference.

- Run "npm install" from your console to install all necessary packages required to run the app. This should automatically install your   client-side dependencies as well. After completion of node modules installation, you can check this by moving to your "client" folder and there should be a separate "node modules" folder install separate from the "node modules" folder in your root.  The minimal folder structure should look like below.  If there isn't a separate node modules folder in your client folder, while in the client folder enter "npm install" in your console to install the client-side dependencies.


root
  (inside root folder)
  -node modules
  -server.js
  -...
  -client
      (inside client folder)
      -node modules
      -src
      -...
      
***--- Configure MySQL Connection ---***
 
If you do not MySQL installed, go here to download and install MySQL: 
https://dev.mysql.com/downloads/mysql/ 
 - Choose the download package according to the platform you are using.
 
(Assuming MySQL is install)
Within the root folder is a folder named "config". Inside that folder is the config.js file that will look as below.
 
---config.js---
 
 module.exports = {
 
  development: {
 
    username: process.env.MYSQL_USER,
 
    password: process.env.MYSQL_PASS,
    
    database: process.env.MYSQL_DB,
    
    host: "localhost",
    
    dialect: "mysql"
  
  },
  ....etc...

---------------
  
Ideally, you will create a ".env" file in your root folder. And a ".gitignore" that include ".env" and "node modules" files and folders in your root folder.  This will ensure your credentials and unnecessary files are not pushed to your own github repo if you save this to your account.  The ".env" should mimic as follows:

---.gitignore---

node_modules

npm-debug.log

.env

----------------

---.env---

MYSQL_USER='yourUsername'
  
MYSQL_PASS='yourPassword'

MYSQL_DB='collectiblesDB'

JWT_SECRET='yourSecretKey'

-----------

Inside the "development" section, replace the username, password, and secret key with your own credentials.  
You do not have to change the MYSQL_DB since I have provided a schema for you that is located in the "models" folder within the root.

To get a random secret key, you can go here: 
https://www.grc.com/passwords.htm

So as an example, your ".env" file will look like this:

MYSQL_USER='user'

MYSQL_PASS='password'

MYSQL_DB='collectiblesDB'

JWT_SECRET='XQZdampM3TbPku09Ut9526enCWPYWg7DGfpAwhZESMgrvcJCgMT3CW1n0eeqwIb' (do NOT use this for your own file).


Now to your MySQL Workbench.
- Open the program and open your default connection or create a new one under "MySQL Connections".  Steps to create a new one can be found here: https://dev.mysql.com/doc/workbench/en/wb-mysql-connections-new.html

- Once you have opened your connection, find the "schema.sql" file within the "models" folder. Drag and drop the file , or copy and paste contents of the file to your open query file in MySQL Workbench.

It should appear as so:

---MySQL Workbench Query Dashboard---
DROP DATABASE IF EXISTS collectiblesDB;
CREATE DATABASE collectiblesDB;

-------------------

- Now click the lightning bolt shaped button that is just above your query dashboard.  This will install the "collectiblesDB" database that listed in our previous ".env" file.
- To verify installation. To the left of the query dashboard should be a "Schemas" box.  Hit the "refresh" icon on the top right of that box (looks like your typical refresh button with double arrows). "collectiblesDB" should be listed in alphabetical order if you have previous schemas still on file.

Your connection and the database is now ready for use.

Those familiar with MySQL might ask, "Why are we not creating the tables in MySQL Workbench?"  The answer to that is because "sequelize" (an npm package install upon setup is used to help us simplify the use of MySQL) will create the tables for us when we run the actual application on our local server. It will reference "Collectible.js" and "User.js" within the "models" folder to create the tables.

Sequelize Docs: http://docs.sequelizejs.com/manual/getting-started.html
- See section for "Modeling A Table"


***---Run App---***

In your console, make sure you are in the root folder.  Again the root folder will include your "server.js" file as a point of reference.
- Now key in "npm run start" or "npm start" in your console.  This will connect the app to your local machine server.

You may see something like this in your console upon completion, and a browser should automatically open to your "localhost" page:

---------------------------------
Starting the development server...

Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.212:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
-----------------------------------------------

If a browser does not automatically open, copy the listed "Local" URL to your browser to see the running app.


***---Using App---***

The landing page is the "Login" page.  As a first time user, you will need to click "Register" on either the login dashboard or on the Nav Bar to get you to the registration page.

Fill out the registration accordingly, and create your account.  Once complete, you will automatically be taken to your Collection Dashboard.  

As a new user, you will not have an existing collection. So ADD to your collection by clicked "Add Collectible" and this will open up a form to add an item. Fill out the form accordingly. The only field not required is the Serial Number since not all items have one but you can create your own for your own reference.  Once submitted, it will be added to your collection.

You can now view the details of this item or update it's info by clicked the "Details" link at the end of the item listed on the table. 

On the "Details" page.  You can "Update" any or all the information if needed, or "Delete" the item completely.  Again, this will update the "Collection" table accordingly if changes are made.

If you logout of your account, when you return, it will automatically populate your last saved collection from the database.
