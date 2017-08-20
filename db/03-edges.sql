USE coins_db;

DROP TABLE IF EXISTS `edges`;
CREATE TABLE `edges` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

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