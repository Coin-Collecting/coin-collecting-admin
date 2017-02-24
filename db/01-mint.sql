USE coins_db;

DROP TABLE IF EXISTS `mints`;
CREATE TABLE `mints` (
  `id` int(10) NOT NULL UNIQUE,
  `name` varchar(201) DEFAULT NULL,
  `mark` varchar(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('1', 'Denver', 'D');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('2', 'Philidelphia', 'P');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('3', 'San Fransisco', 'S');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('4', 'New Orleans', 'O');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('5', 'Charlotte', 'C');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('6', 'Carson City', 'CC');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('7', 'West Point', 'W');
INSERT INTO `mints` (`id`, `name`,`mark`) VALUES ('8', 'Dahlonega', 'D');
