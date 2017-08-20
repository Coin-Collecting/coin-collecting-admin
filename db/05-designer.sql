USE coins_db;

DROP TABLE IF EXISTS `designers`;
CREATE TABLE `designers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

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
