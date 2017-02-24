USE coins_db;

DROP TABLE IF EXISTS `coins`;
CREATE TABLE `coins` (
  `id` int(10) DEFAULT NULL,
  `variety` varchar(50) DEFAULT NULL,
  `mint` varchar(10) DEFAULT NULL,

  `year` varchar(4) DEFAULT NULL,
  `mintage` float(10) DEFAULT NULL,
  `keyDate` BOOLEAN DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `coins` (`id`, `variety`, `year`, `mint`, `mintage`, `keyDate`, `description`)
VALUES ('1', '1', '1795', '1', 95000, false, 'This is the coins description');
