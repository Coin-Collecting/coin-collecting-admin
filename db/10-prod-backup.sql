-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: coins_db
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coins` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `variety` varchar(50) DEFAULT NULL,
  `mint` varchar(10) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL,
  `mintage` float DEFAULT NULL,
  `keyDate` tinyint(1) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,'2','3','1909',0,1,'','2017-08-26 21:36:29','2017-08-26 21:36:29');
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compositions`
--

DROP TABLE IF EXISTS `compositions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compositions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `gold` float DEFAULT '0',
  `silver` float DEFAULT '0',
  `copper` float DEFAULT '0',
  `nickel` float DEFAULT '0',
  `brass` float DEFAULT '0',
  `zinc` float DEFAULT '0',
  `steel` float DEFAULT '0',
  `tin` float DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compositions`
--

LOCK TABLES `compositions` WRITE;
/*!40000 ALTER TABLE `compositions` DISABLE KEYS */;
INSERT INTO `compositions` VALUES (1,0,0.9,0.1,0,0,0,0,0,'2017-08-23 03:13:19','2017-08-23 03:13:19'),(2,0,0.8924,0.1076,0,0,0,0,0,'2017-08-23 03:13:19','2017-08-23 03:13:19'),(3,0,0,1,0,0,0,0,0,'2017-08-27 06:06:28','2017-08-27 06:06:28'),(4,0,0,0.88,0.12,0,0,0,0,'2017-08-23 03:13:19','2017-08-23 03:13:19'),(5,0,0,0.95,0,0,0.05,0,0,'2017-08-23 03:13:19','2017-08-23 03:13:19'),(6,0,0,0,0,0,0,1,0,'2017-08-23 03:13:19','2017-08-23 03:13:19'),(7,0,0,0,0,0,0,0.5,0.5,'2017-08-27 05:59:40','2017-08-27 05:59:40'),(8,0,0,0.95,0,0,0,0,0.05,'2017-08-23 03:13:19','2017-08-23 03:13:19');
/*!40000 ALTER TABLE `compositions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `denominations`
--

DROP TABLE IF EXISTS `denominations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `denominations` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `kind` varchar(201) DEFAULT NULL,
  `val` float DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `denominations`
--

LOCK TABLES `denominations` WRITE;
/*!40000 ALTER TABLE `denominations` DISABLE KEYS */;
INSERT INTO `denominations` VALUES (1,'HALF_CENT',0.005,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(2,'LARGE_CENT',0.01,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(3,'SMALL_CENT',0.01,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(4,'TWO_CENT_PIECE',0.02,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(5,'NICKEL_THREE_CENT_PIECE',0.03,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(6,'SILVER_THREE_CENT_PIECE',0.03,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(7,'NICKEL',0.05,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(8,'HALF_DIME',0.05,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(9,'DIME',0.1,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(10,'TWENTY_CENT_PIECE',0.2,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(11,'QUARTER_DOLLAR',0.25,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(12,'HALF_DOLLAR',0.5,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(13,'DOLLAR',1,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(14,'GOLD_DOLLAR',1,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(15,'QUARTER_EAGLE',2.5,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(16,'THREE_DOLLAR_GOLD_PIECE',3,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(17,'FOUR_DOLLAR_GOLD_PIECE',4,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(18,'HALF_EAGLE',5,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(19,'EAGLE',10,'2017-08-23 03:12:55','2017-08-23 03:12:55'),(20,'DOUBLE_EAGLE',20,'2017-08-23 03:12:55','2017-08-23 03:12:55');
/*!40000 ALTER TABLE `denominations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designers`
--

DROP TABLE IF EXISTS `designers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `designers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designers`
--

LOCK TABLES `designers` WRITE;
/*!40000 ALTER TABLE `designers` DISABLE KEYS */;
INSERT INTO `designers` VALUES (1,'Joseph Wright','2017-08-23 03:13:30','2017-08-23 03:13:30'),(2,'Robert Scot','2017-08-23 03:13:30','2017-08-23 03:13:30'),(3,'John Reich','2017-08-23 03:13:30','2017-08-23 03:13:30'),(4,'Christian Gobrecht','2017-08-23 03:13:30','2017-08-23 03:13:30'),(5,'Henry Voigt','2017-08-23 03:13:30','2017-08-23 03:13:30'),(6,'James B Longacre','2017-08-23 03:13:30','2017-08-23 03:13:30'),(7,'William Kneass','2017-08-23 03:13:30','2017-08-23 03:13:30'),(8,'William Barber','2017-08-23 03:13:30','2017-08-23 03:13:30'),(9,'Charles E Barber','2017-08-23 03:13:30','2017-08-23 03:13:30'),(10,'George T Morgan','2017-08-23 03:13:30','2017-08-23 03:13:30'),(11,'Augustus Saint Gaudens','2017-08-23 03:13:30','2017-08-23 03:13:30'),(12,'Bela Lyon Pratt','2017-08-23 03:13:30','2017-08-23 03:13:30'),(13,'Victor D Brenner','2017-08-23 03:13:30','2017-08-23 03:13:30'),(14,'James Earle Fraser','2017-08-23 03:13:30','2017-08-23 03:13:30'),(15,'Adolph A Weinman','2017-08-23 03:13:30','2017-08-23 03:13:30'),(16,'Hermon A MacNeil','2017-08-23 03:13:30','2017-08-23 03:13:30'),(17,'Anthony de Fracisci','2017-08-23 03:13:30','2017-08-23 03:13:30'),(18,'John Flanagan','2017-08-23 03:13:30','2017-08-23 03:13:30'),(19,'Felix Schlag','2017-08-23 03:13:30','2017-08-23 03:13:30'),(20,'John R Sinnock','2017-08-23 03:13:30','2017-08-23 03:13:30'),(21,'Frank Gasparro','2017-08-23 03:13:30','2017-08-23 03:13:30'),(22,'Gilroy Roberts','2017-08-23 03:13:30','2017-08-23 03:13:30'),(23,'Jack L Ahr','2017-08-23 03:13:30','2017-08-23 03:13:30'),(24,'Seth G Huntington','2017-08-23 03:13:30','2017-08-23 03:13:30'),(25,'Dennis R Williams','2017-08-23 03:13:30','2017-08-23 03:13:30'),(26,'John M Mercanti','2017-08-23 03:13:30','2017-08-23 03:13:30'),(27,'William Cousins','2017-08-23 03:13:30','2017-08-23 03:13:30'),(28,'Glenna Goodacre','2017-08-23 03:13:30','2017-08-23 03:13:30'),(29,'Elizabeth Jones','2017-08-23 03:13:30','2017-08-23 03:13:30'),(30,'Don Everhart','2017-08-23 03:13:30','2017-08-23 03:13:30');
/*!40000 ALTER TABLE `designers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edges`
--

DROP TABLE IF EXISTS `edges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `edges` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edges`
--

LOCK TABLES `edges` WRITE;
/*!40000 ALTER TABLE `edges` DISABLE KEYS */;
INSERT INTO `edges` VALUES (1,'plain',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(2,'grooved',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(3,'reeded',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(4,'security',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(5,'inscribed',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(6,'decorated',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(7,'interrupted reeded edge',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(8,'indented edge',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(9,'herringbone edge',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(10,'serrated edge',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(11,'polygons',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(12,'bars and slender vine with leaves',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(13,'vine and bars',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(14,'ONE HUNDRED FOR A DOLLAR single leaf',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(15,'ONE HUNDRED FOR A DOLLAR double leaf',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(16,'TWO HUNDRED FOR A DOLLAR',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(17,'FIFTY CENTS OR A HALF DOLLAR',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10'),(18,'HUNDRED CENTS ONE DOLLAR OR UNIT',NULL,'2017-08-23 03:13:10','2017-08-23 03:13:10');
/*!40000 ALTER TABLE `edges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `obverse` varchar(600) DEFAULT NULL,
  `reverse` varchar(600) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'http://www.image.com/obverse.jpg','http://www.image.com/reverse.jpg','2017-08-23 03:11:42','2017-08-23 03:11:42');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issues`
--

DROP TABLE IF EXISTS `issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issues`
--

LOCK TABLES `issues` WRITE;
/*!40000 ALTER TABLE `issues` DISABLE KEYS */;
INSERT INTO `issues` VALUES (1,'Barber Dime',NULL,'9','1892','1916','2017-08-23 04:50:04','2017-08-23 04:50:04'),(2,'Lincoln','','3','1909','Date','2017-08-25 04:51:38','2017-08-25 04:51:38'),(3,'Washington','','11','1932','Date','2017-08-25 04:52:06','2017-08-25 04:52:06'),(4,'Standing Liberty','','11','1916','1930','2017-08-25 04:52:35','2017-08-25 04:52:35'),(5,'Barber','','11','1892','1916','2017-08-25 04:52:54','2017-08-25 04:52:54'),(6,'Liberty Seated','','11','1838','1891','2017-08-25 04:53:22','2017-08-25 04:53:22'),(7,'Capped Bust','','11','1815','1838','2017-08-25 04:53:39','2017-08-25 04:53:39'),(8,'Draped Bust','','11','1796','1807','2017-08-25 04:53:51','2017-08-25 04:53:51');
/*!40000 ALTER TABLE `issues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mints`
--

DROP TABLE IF EXISTS `mints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mints` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(201) DEFAULT NULL,
  `mark` varchar(5) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mints`
--

LOCK TABLES `mints` WRITE;
/*!40000 ALTER TABLE `mints` DISABLE KEYS */;
INSERT INTO `mints` VALUES (1,'Denver','D','2017-08-23 03:12:11','2017-08-23 03:12:11'),(2,'Philidelphia','P','2017-08-23 03:12:11','2017-08-23 03:12:11'),(3,'San Fransisco','S','2017-08-23 03:12:11','2017-08-23 03:12:11'),(4,'New Orleans','O','2017-08-23 03:12:11','2017-08-23 03:12:11'),(5,'Charlotte','C','2017-08-23 03:12:11','2017-08-23 03:12:11'),(6,'Carson City','CC','2017-08-23 03:12:11','2017-08-23 03:12:11'),(7,'West Point','W','2017-08-23 03:12:11','2017-08-23 03:12:11'),(8,'Dahlonega','D','2017-08-23 03:12:11','2017-08-23 03:12:11');
/*!40000 ALTER TABLE `mints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varieties`
--

DROP TABLE IF EXISTS `varieties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `varieties` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `issue` varchar(10) DEFAULT NULL,
  `designer` varchar(10) DEFAULT NULL,
  `images` varchar(10) DEFAULT NULL,
  `edge` varchar(10) DEFAULT NULL,
  `composition` varchar(10) DEFAULT NULL,
  `name` varchar(300) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `mass` float DEFAULT NULL,
  `diameter` float DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` VALUES (1,'1','9','1','3','1','Barber Dime',NULL,2.5,17.9,'2017-08-23 04:51:04','2017-08-23 04:51:04'),(2,'2','13','1','3','3','Wheat','',12,12,'2017-08-26 01:13:12','2017-08-26 01:13:12');
/*!40000 ALTER TABLE `varieties` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-27 16:11:40
