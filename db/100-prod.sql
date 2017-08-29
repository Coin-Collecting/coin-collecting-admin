CREATE DATABASE coins_db;

USE coins_db;

CREATE TABLE `coins` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `variety` varchar(50) DEFAULT NULL,
  `mint` varchar(10) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL,
  `mintage` float DEFAULT NULL,
  `keyDate` tinyint(1) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;