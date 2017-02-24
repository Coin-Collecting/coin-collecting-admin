USE coins_db;

DROP TABLE IF EXISTS `edges`;
CREATE TABLE `edges` (
  `id` int(10) NOT NULL UNIQUE,
  `type` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('1', 'plain', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('2', 'grooved', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('3', 'reeded', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('4', 'security', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('5', 'inscribed', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('6', 'decorated', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('7', 'interrupted reeded edge', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('8', 'indented edge', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('9', 'herringbone edge', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('10', 'serrated edge', null);
INSERT INTO `edges` (`id`, `type`,`note`) VALUES ('11', 'polygons', null);
