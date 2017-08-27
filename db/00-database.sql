CREATE DATABASE coins_db;

USE coins_db;

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `obverse` varchar(600) DEFAULT NULL,
  `reverse` varchar(600) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(600) DEFAULT NULL,
  `description` varchar(600) DEFAULT NULL,
  `denomination` varchar(10) DEFAULT NULL,
  `startYear` varchar(4) DEFAULT NULL,
  `endYear` varchar(4) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `varieties`;
CREATE TABLE `varieties` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `issue` varchar(10) DEFAULT NULL,
  `designer` varchar(10) DEFAULT NULL,
  `images` varchar(10) DEFAULT NULL,
  `edge` varchar(10) DEFAULT NULL,
  `composition` varchar(10) DEFAULT NULL,
  `name` varchar(300) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `mass` float(10) DEFAULT NULL,
  `diameter` float(10) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `coins`;
CREATE TABLE `coins` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `variety` varchar(50) DEFAULT NULL,
  `mint` varchar(10) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL,
  `mintage` float(10) DEFAULT NULL,
  `keyDate` BOOLEAN DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `mints`;
CREATE TABLE `mints` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(201) DEFAULT NULL,
  `mark` varchar(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `denominations`;
CREATE TABLE `denominations` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `kind` varchar(201) DEFAULT NULL,
  `val` float(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `edges`;
CREATE TABLE `edges` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `designers`;
CREATE TABLE `designers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `compositions`;
CREATE TABLE `compositions` (
  `id` int(10) NOT NULL UNIQUE,
  `gold` float(8) DEFAULT 0,
  `silver` float(8) DEFAULT 0,
  `copper` float(8) DEFAULT 0,
  `nickel` float(8) DEFAULT 0,
  `brass` float(8) DEFAULT 0,
  `zinc` float(8) DEFAULT 0,
  `steel` float(8) DEFAULT 0,
  `tin` float(8) DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `compositions` (`id`, `nickel`,`copper`) VALUES ('1', 0.250 , 0.750);

INSERT INTO `mints` (`name`,`mark`) VALUES ('Denver', 'D');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Philidelphia', 'P');
INSERT INTO `mints` (`name`,`mark`) VALUES ('San Fransisco', 'S');
INSERT INTO `mints` (`name`,`mark`) VALUES ('New Orleans', 'O');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Charlotte', 'C');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Carson City', 'CC');
INSERT INTO `mints` (`name`,`mark`) VALUES ('West Point', 'W');
INSERT INTO `mints` (`name`,`mark`) VALUES ('Dahlonega', 'D');

INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_CENT', '0.005');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('LARGE_CENT', '0.01');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('SMALL_CENT', '0.01');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('TWO_CENT_PIECE', '0.02');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('NICKEL_THREE_CENT_PIECE', '0.03');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('SILVER_THREE_CENT_PIECE', '0.03');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('NICKEL', '0.05');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_DIME', '0.05');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('DIME', '0.1');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('TWENTY_CENT_PIECE', '0.2');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('QUARTER_DOLLAR', '0.25');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_DOLLAR', '0.5');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('DOLLAR', '1');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('GOLD_DOLLAR', '1');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('QUARTER_EAGLE', '2.5');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('THREE_DOLLAR_GOLD_PIECE', '3');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('FOUR_DOLLAR_GOLD_PIECE', '4');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_EAGLE', '5');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('EAGLE', '10');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('DOUBLE_EAGLE', '20');

INSERT INTO `edges` (`type`,`note`) VALUES ('plain', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('grooved', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('reeded', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('security', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('inscribed', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('decorated', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('interrupted reeded edge', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('indented edge', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('herringbone edge', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('serrated edge', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('polygons', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('bars and slender vine with leaves', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('vine and bars', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('ONE HUNDRED FOR A DOLLAR single leaf', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('ONE HUNDRED FOR A DOLLAR double leaf', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('TWO HUNDRED FOR A DOLLAR', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('FIFTY CENTS OR A HALF DOLLAR', null);
INSERT INTO `edges` (`type`,`note`) VALUES ('HUNDRED CENTS ONE DOLLAR OR UNIT', null);

INSERT INTO `designers` (`name`) VALUES ('Joseph Wright');
INSERT INTO `designers` (`name`) VALUES ('Robert Scot');
INSERT INTO `designers` (`name`) VALUES ('John Reich');
INSERT INTO `designers` (`name`) VALUES ('Christian Gobrecht');
INSERT INTO `designers` (`name`) VALUES ('Henry Voigt');
INSERT INTO `designers` (`name`) VALUES ('James B Longacre');
INSERT INTO `designers` (`name`) VALUES ('William Kneass');
INSERT INTO `designers` (`name`) VALUES ('William Barber');
INSERT INTO `designers` (`name`) VALUES ('Charles E Barber');
INSERT INTO `designers` (`name`) VALUES ('George T Morgan');
INSERT INTO `designers` (`name`) VALUES ('Augustus Saint Gaudens');
INSERT INTO `designers` (`name`) VALUES ('Bela Lyon Pratt');
INSERT INTO `designers` (`name`) VALUES ('Victor D Brenner');
INSERT INTO `designers` (`name`) VALUES ('James Earle Fraser');
INSERT INTO `designers` (`name`) VALUES ('Adolph A Weinman');
INSERT INTO `designers` (`name`) VALUES ('Hermon A MacNeil');
INSERT INTO `designers` (`name`) VALUES ('Anthony de Fracisci');
INSERT INTO `designers` (`name`) VALUES ('John Flanagan');
INSERT INTO `designers` (`name`) VALUES ('Felix Schlag');
INSERT INTO `designers` (`name`) VALUES ('John R Sinnock');
INSERT INTO `designers` (`name`) VALUES ('Frank Gasparro');
INSERT INTO `designers` (`name`) VALUES ('Gilroy Roberts');
INSERT INTO `designers` (`name`) VALUES ('Jack L Ahr');
INSERT INTO `designers` (`name`) VALUES ('Seth G Huntington');
INSERT INTO `designers` (`name`) VALUES ('Dennis R Williams');
INSERT INTO `designers` (`name`) VALUES ('John M Mercanti');
INSERT INTO `designers` (`name`) VALUES ('William Cousins');
INSERT INTO `designers` (`name`) VALUES ('Glenna Goodacre');
INSERT INTO `designers` (`name`) VALUES ('Elizabeth Jones');
INSERT INTO `designers` (`name`) VALUES ('Don Everhart');

INSERT INTO `images` (`id`, `obverse`, `reverse`)
VALUES ('1', 'http://www.image.com/obverse.jpg', 'http://www.image.com/reverse.jpg');
