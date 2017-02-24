USE coins_db;

DROP TABLE IF EXISTS `designers`;
CREATE TABLE `designers` (
  `id` int(10) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `designers` (`id`, `name`) VALUES ('1', 'Joseph Wright');
INSERT INTO `designers` (`id`, `name`) VALUES ('2', 'Robert Scot');
INSERT INTO `designers` (`id`, `name`) VALUES ('3', 'John Reich');
INSERT INTO `designers` (`id`, `name`) VALUES ('4', 'Christian Gobrecht');
INSERT INTO `designers` (`id`, `name`) VALUES ('5', 'Henry Voigt');
INSERT INTO `designers` (`id`, `name`) VALUES ('6', 'James B Longacre');
INSERT INTO `designers` (`id`, `name`) VALUES ('7', 'William Kneass');
INSERT INTO `designers` (`id`, `name`) VALUES ('8', 'William Barber');
INSERT INTO `designers` (`id`, `name`) VALUES ('9', 'Charles E Barber');
INSERT INTO `designers` (`id`, `name`) VALUES ('10', 'George T Morgan');
INSERT INTO `designers` (`id`, `name`) VALUES ('11', 'Augustus Saint Gaudens');
INSERT INTO `designers` (`id`, `name`) VALUES ('12', 'Bela Lyon Pratt');
INSERT INTO `designers` (`id`, `name`) VALUES ('13', 'Victor D Brenner');
INSERT INTO `designers` (`id`, `name`) VALUES ('14', 'James Earle Fraser');
INSERT INTO `designers` (`id`, `name`) VALUES ('15', 'Adolph A Weinman');
INSERT INTO `designers` (`id`, `name`) VALUES ('16', 'Hermon A MacNeil');
INSERT INTO `designers` (`id`, `name`) VALUES ('17', 'Anthony de Fracisci');
INSERT INTO `designers` (`id`, `name`) VALUES ('18', 'John Flanagan');
INSERT INTO `designers` (`id`, `name`) VALUES ('19', 'Felix Schlag');
INSERT INTO `designers` (`id`, `name`) VALUES ('20', 'John R Sinnock');
INSERT INTO `designers` (`id`, `name`) VALUES ('21', 'Frank Gasparro');
INSERT INTO `designers` (`id`, `name`) VALUES ('22', 'Gilroy Roberts');
INSERT INTO `designers` (`id`, `name`) VALUES ('23', 'Jack L Ahr');
INSERT INTO `designers` (`id`, `name`) VALUES ('24', 'Seth G Huntington');
INSERT INTO `designers` (`id`, `name`) VALUES ('25', 'Dennis R Williams');
INSERT INTO `designers` (`id`, `name`) VALUES ('26', 'John M Mercanti');
INSERT INTO `designers` (`id`, `name`) VALUES ('27', 'William Cousins');
INSERT INTO `designers` (`id`, `name`) VALUES ('28', 'Glenna Goodacre');
INSERT INTO `designers` (`id`, `name`) VALUES ('29', 'Elizabeth Jones');
INSERT INTO `designers` (`id`, `name`) VALUES ('30', 'Don Everhart');
