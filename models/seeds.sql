use jwtTest;

ALTER TABLE Users CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Users CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE Collectibles CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Collectibles CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

/*INSERT INTO Users (firstName, lastName, email, password)
	VALUES ("Adrian", "Briones", "adrianb13@yahoo.com", "password");
*/

USE jwtTest; 
SELECT * FROM Users;
SELECT * FROM Collectibles;