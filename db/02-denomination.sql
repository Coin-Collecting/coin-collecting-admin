USE coins_db;

DROP TABLE IF EXISTS `denominations`;
CREATE TABLE `denominations` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `kind` varchar(201) DEFAULT NULL,
  `val` float(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_CENT', '0.005');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('LARGE_CENT', '0.01');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('SMALL_CENT', '0.01');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('TWO_CENT_PIECE', '0.02');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('NICKEL_THREE_CENT_PIECE', '0.03');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('SILVER_THREE_CENT_PIECE', '0.03');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('NICKEL', '0.05');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_DIME', '0.05');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('DIME', '0.1');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('TWENTY_CENT_PIECE', '0.2');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('QUARTER_DOLLAR', '0.25');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_DOLLAR', '0.5');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('DOLLAR', '1');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('GOLD_DOLLAR', '1');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('QUARTER_EAGLE', '2.5');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('THREE_DOLLAR_GOLD_PIECE', '3');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('FOUR_DOLLAR_GOLD_PIECE', '4');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('HALF_EAGLE', '5');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('EAGLE', '10');
INSERT INTO `denominations` (`kind`,`val`) VALUES ('DOUBLE_EAGLE', '20');
