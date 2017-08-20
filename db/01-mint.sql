USE coins_db;

DROP TABLE IF EXISTS `mints`;
CREATE TABLE `mints` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(201) DEFAULT NULL,
  `mark` varchar(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO `mints` (`name`,`mark`) VALUES ('Denver', 'D');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Philidelphia', 'P');
INSERT INTO `mints` (`name`,`mark`) VALUES ('San Fransisco', 'S');
INSERT INTO `mints` (`name`,`mark`) VALUES ('New Orleans', 'O');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Charlotte', 'C');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Carson City', 'CC');
INSERT INTO `mints` (`name`,`mark`) VALUES ('West Point', 'W');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Dahlonega', 'D');
