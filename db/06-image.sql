USE coins_db;

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(10) NOT NULL UNIQUE,
  `obverse` varchar(600) DEFAULT NULL,
  `reverse` varchar(600) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `images` (`id`, `obverse`, `reverse`)
VALUES ('1', 'http://www.image.com/obverse.jpg', 'http://www.image.com/reverse.jpg');
