USE coins_db;

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

INSERT INTO `varieties` (`id`, `issue`, `designer`, `images`, `edge`, `composition`, `name`, `description`, `mass`, `diameter`)
VALUES ('1','1','1','1','1','1','Heraldic Eagle Reverse','variety description', 6.74, 27.5);
