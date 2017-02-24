USE coins_db;

DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `id` int(10) DEFAULT NULL,
  `name` varchar(600) DEFAULT NULL,
  `description` varchar(600) DEFAULT NULL,
  `denomination` varchar(10) DEFAULT NULL,
  `startYear` varchar(4) DEFAULT NULL,
  `endYear` varchar(4) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `issues` (`id`, `name`, `description`, `denomination`, `startYear`, `endYear`)
VALUES ('1', 'Liberty Cap, Head Facing Left', 'Issue description', '1', '1793', '1793');
