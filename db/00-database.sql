CREATE DATABASE coins_db;

USE coins_db;

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(10) NOT NULL UNIQUE,
  `obverse` varchar(600) DEFAULT NULL,
  `reverse` varchar(600) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
  `id` int(10) NOT NULL UNIQUE,
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
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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