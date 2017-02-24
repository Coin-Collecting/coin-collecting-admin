USE coins_db;

DROP TABLE IF EXISTS `denominations`;
CREATE TABLE `denominations` (
  `id` int(10) DEFAULT NULL,
  `kind` varchar(201) DEFAULT NULL,
  `val` float(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('1', 'HALF_CENT', '0.005');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('2', 'LARGE_CENT', '0.01');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('3', 'SMALL_CENT', '0.01');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('4', 'TWO_CENT_PIECE', '0.02');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('5', 'NICKEL_THREE_CENT_PIECE', '0.03');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('6', 'SILVER_THREE_CENT_PIECE', '0.03');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('7', 'NICKEL', '0.05');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('8', 'HALF_DIME', '0.05');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('9', 'TWENTY_CENT_PIECE', '0.2');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('10', 'QUARTER_DOLLAR', '0.25');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('11', 'HALF_DOLLAR', '0.5');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('12', 'DOLLAR', '1');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('13', 'GOLD_DOLLAR', '1');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('14', 'QUARTER_EAGLE', '2.5');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('15', 'THREE_DOLLAR_GOLD_PIECE', '3');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('16', 'FOUR_DOLLAR_GOLD_PIECE', '4');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('17', 'HALF_EAGLE', '5');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('18', 'EAGLE', '10');
INSERT INTO `denominations` (`id`, `kind`,`val`) VALUES ('19', 'DOUBLE_EAGLE', '20');
