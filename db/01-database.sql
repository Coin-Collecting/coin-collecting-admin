-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: coins_db
-- ------------------------------------------------------
-- Server version	5.7.18-log

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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,'1','2','1883',5474300,0,'Without CENTS','2017-08-29 00:15:27','2017-08-29 00:15:27'),(2,'1','2','1883',16026200,0,'With CENTS','2017-08-29 00:15:49','2017-08-29 00:15:49'),(3,'1','2','1884',11270000,0,'','2017-08-29 00:17:45','2017-08-29 00:17:45'),(4,'1','2','1885',1472700,0,'','2017-08-29 00:18:06','2017-08-29 00:18:06'),(5,'1','2','1886',3326000,0,'','2017-08-29 00:18:24','2017-08-29 00:18:24'),(6,'1','2','1887',15260700,0,'','2017-08-29 00:18:50','2017-08-29 00:18:50'),(7,'1','2','1888',10167900,0,'','2017-08-29 00:19:03','2017-08-29 00:19:03'),(8,'1','2','1889',15878000,0,'','2017-08-29 00:19:20','2017-08-29 00:19:20'),(9,'1','2','1890',16256500,0,'','2017-08-29 00:19:38','2017-08-29 00:19:38'),(10,'1','2','1891',16832000,0,'','2017-08-29 00:19:52','2017-08-29 00:19:52'),(11,'1','2','1892',11696900,0,'','2017-08-29 00:20:08','2017-08-29 00:20:08'),(12,'1','2','1893',12368000,0,'','2017-08-29 00:20:23','2017-08-29 00:20:23'),(13,'1','2','1894',5410500,0,'','2017-08-29 00:20:42','2017-08-29 00:20:42'),(14,'1','2','1895',9977820,0,'','2017-08-29 00:20:59','2017-08-29 00:20:59'),(15,'1','2','1896',8841060,0,'','2017-08-29 00:21:30','2017-08-29 00:21:30'),(16,'1','2','1897',20426800,0,'','2017-08-29 00:21:54','2017-08-29 00:21:54'),(17,'1','2','1898',12530300,0,'','2017-08-29 00:22:04','2017-08-29 00:22:04'),(18,'1','2','1899',26027000,0,'','2017-08-29 00:22:17','2017-08-29 00:22:17'),(19,'1','2','1900',27253700,0,'','2017-08-29 00:22:37','2017-08-29 00:22:37'),(20,'1','2','1901',26478200,0,'','2017-08-29 00:22:53','2017-08-29 00:22:53'),(21,'1','2','1902',31487600,0,'','2017-08-29 00:23:08','2017-08-29 00:23:08'),(22,'1','2','1903',28004900,0,'','2017-08-29 00:23:19','2017-08-29 00:23:19'),(23,'1','2','1904',21403200,0,'','2017-08-29 00:23:29','2017-08-29 00:23:29'),(24,'1','2','1905',29825100,0,'','2017-08-29 00:23:51','2017-08-29 00:23:51'),(25,'1','2','1906',36612000,0,'','2017-08-29 00:24:02','2017-08-29 00:24:02'),(26,'1','2','1907',39213300,0,'','2017-08-29 00:24:17','2017-08-29 00:24:17'),(27,'1','2','1908',22684600,0,'','2017-08-29 00:24:34','2017-08-29 00:24:34'),(28,'1','2','1909',11585800,0,'','2017-08-29 00:24:49','2017-08-29 00:24:49'),(29,'1','2','1910',30166900,0,'','2017-08-29 00:25:01','2017-08-29 00:25:01'),(30,'1','2','1911',39557600,0,'','2017-08-29 00:25:15','2017-08-29 00:25:15'),(31,'1','2','1912',26234600,0,'','2017-08-29 00:25:30','2017-08-29 00:25:30'),(32,'1','1','1912',8474000,0,'','2017-08-29 00:25:44','2017-08-29 00:25:44'),(33,'1','3','1912',238000,1,'','2017-08-29 00:26:00','2017-08-29 00:26:00');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compositions`
--

LOCK TABLES `compositions` WRITE;
/*!40000 ALTER TABLE `compositions` DISABLE KEYS */;
INSERT INTO `compositions` VALUES (1,0,0,0.75,0.25,0,0,0,0,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(2,0,0,1,0,0,0,0,0,'2017-08-29 00:59:40','2017-08-29 00:59:40');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `denominations`
--

LOCK TABLES `denominations` WRITE;
/*!40000 ALTER TABLE `denominations` DISABLE KEYS */;
INSERT INTO `denominations` VALUES (1,'HALF_CENT',0.005,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(2,'LARGE_CENT',0.01,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(3,'SMALL_CENT',0.01,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(4,'TWO_CENT_PIECE',0.02,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(5,'NICKEL_THREE_CENT_PIECE',0.03,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(6,'SILVER_THREE_CENT_PIECE',0.03,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(7,'NICKEL',0.05,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(8,'HALF_DIME',0.05,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(9,'DIME',0.1,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(10,'TWENTY_CENT_PIECE',0.2,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(11,'QUARTER_DOLLAR',0.25,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(12,'HALF_DOLLAR',0.5,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(13,'DOLLAR',1,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(14,'GOLD_DOLLAR',1,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(15,'QUARTER_EAGLE',2.5,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(16,'THREE_DOLLAR_GOLD_PIECE',3,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(17,'FOUR_DOLLAR_GOLD_PIECE',4,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(18,'HALF_EAGLE',5,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(19,'EAGLE',10,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(20,'DOUBLE_EAGLE',20,'2017-08-27 16:43:57','2017-08-27 16:43:57');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designers`
--

LOCK TABLES `designers` WRITE;
/*!40000 ALTER TABLE `designers` DISABLE KEYS */;
INSERT INTO `designers` VALUES (1,'Joseph Wright','2017-08-27 16:43:58','2017-08-27 16:43:58'),(2,'Robert Scot','2017-08-27 16:43:58','2017-08-27 16:43:58'),(3,'John Reich','2017-08-27 16:43:58','2017-08-27 16:43:58'),(4,'Christian Gobrecht','2017-08-27 16:43:58','2017-08-27 16:43:58'),(5,'Henry Voigt','2017-08-27 16:43:58','2017-08-27 16:43:58'),(6,'James B Longacre','2017-08-27 16:43:58','2017-08-27 16:43:58'),(7,'William Kneass','2017-08-27 16:43:58','2017-08-27 16:43:58'),(8,'William Barber','2017-08-27 16:43:58','2017-08-27 16:43:58'),(9,'Charles E Barber','2017-08-27 16:43:58','2017-08-27 16:43:58'),(10,'George T Morgan','2017-08-27 16:43:58','2017-08-27 16:43:58'),(11,'Augustus Saint Gaudens','2017-08-27 16:43:58','2017-08-27 16:43:58'),(12,'Bela Lyon Pratt','2017-08-27 16:43:58','2017-08-27 16:43:58'),(13,'Victor D Brenner','2017-08-27 16:43:58','2017-08-27 16:43:58'),(14,'James Earle Fraser','2017-08-27 16:43:58','2017-08-27 16:43:58'),(15,'Adolph A Weinman','2017-08-27 16:43:58','2017-08-27 16:43:58'),(16,'Hermon A MacNeil','2017-08-27 16:43:58','2017-08-27 16:43:58'),(17,'Anthony de Fracisci','2017-08-27 16:43:58','2017-08-27 16:43:58'),(18,'John Flanagan','2017-08-27 16:43:58','2017-08-27 16:43:58'),(19,'Felix Schlag','2017-08-27 16:43:58','2017-08-27 16:43:58'),(20,'John R Sinnock','2017-08-27 16:43:58','2017-08-27 16:43:58'),(21,'Frank Gasparro','2017-08-27 16:43:58','2017-08-27 16:43:58'),(22,'Gilroy Roberts','2017-08-27 16:43:58','2017-08-27 16:43:58'),(23,'Jack L Ahr','2017-08-27 16:43:58','2017-08-27 16:43:58'),(24,'Seth G Huntington','2017-08-27 16:43:58','2017-08-27 16:43:58'),(25,'Dennis R Williams','2017-08-27 16:43:58','2017-08-27 16:43:58'),(26,'John M Mercanti','2017-08-27 16:43:58','2017-08-27 16:43:58'),(27,'William Cousins','2017-08-27 16:43:58','2017-08-27 16:43:58'),(28,'Glenna Goodacre','2017-08-27 16:43:58','2017-08-27 16:43:58'),(29,'Elizabeth Jones','2017-08-27 16:43:58','2017-08-27 16:43:58'),(30,'Don Everhart','2017-08-27 16:43:58','2017-08-27 16:43:58');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edges`
--

LOCK TABLES `edges` WRITE;
/*!40000 ALTER TABLE `edges` DISABLE KEYS */;
INSERT INTO `edges` VALUES (1,'plain',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(2,'grooved',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(3,'reeded',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(4,'security',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(5,'inscribed',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(6,'decorated',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(7,'interrupted reeded edge',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(8,'indented edge',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(9,'herringbone edge',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(10,'serrated edge',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(11,'polygons',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(12,'bars and slender vine with leaves',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(13,'vine and bars',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(14,'ONE HUNDRED FOR A DOLLAR single leaf',NULL,'2017-08-27 16:43:57','2017-08-27 16:43:57'),(15,'ONE HUNDRED FOR A DOLLAR double leaf',NULL,'2017-08-27 16:43:58','2017-08-27 16:43:58'),(16,'TWO HUNDRED FOR A DOLLAR',NULL,'2017-08-27 16:43:58','2017-08-27 16:43:58'),(17,'FIFTY CENTS OR A HALF DOLLAR',NULL,'2017-08-27 16:43:58','2017-08-27 16:43:58'),(18,'HUNDRED CENTS ONE DOLLAR OR UNIT',NULL,'2017-08-27 16:43:58','2017-08-27 16:43:58');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'http://www.image.com/obverse.jpg','http://www.image.com/reverse.jpg','2017-08-27 16:43:58','2017-08-27 16:43:58');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issues`
--

LOCK TABLES `issues` WRITE;
/*!40000 ALTER TABLE `issues` DISABLE KEYS */;
INSERT INTO `issues` VALUES (1,'Liberty Head','','7','1883','1913','2017-08-29 00:14:05','2017-08-29 00:14:05'),(2,'Liberty Cap','','1','1793','1793','2017-08-29 01:00:47','2017-08-29 01:00:47'),(3,'Liberty Cap','','1','1794','1797','2017-08-29 01:00:59','2017-08-29 01:00:59'),(4,'Draped Bust','','1','1800','1808','2017-08-29 01:01:16','2017-08-29 01:01:16'),(5,'Classic Head','','1','1809','1836','2017-08-29 01:01:31','2017-08-29 01:01:31'),(6,'Braided Hair','','1','1840','1857','2017-08-29 01:01:52','2017-08-29 01:01:52'),(7,'Flowing Hair','','2','1793','1793','2017-08-29 01:24:06','2017-08-29 01:24:06'),(8,'Liberty Cap','','2','1793','1796','2017-08-29 01:24:28','2017-08-29 01:24:28'),(9,'Draped Bust','','2','1796','1807','2017-08-29 01:24:40','2017-08-29 01:24:40'),(10,'Classic Head','','2','1808','1814','2017-08-29 01:24:54','2017-08-29 01:24:54'),(11,'Liberty Head','','2','1816','1857','2017-08-29 01:25:09','2017-08-29 01:25:09');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mints`
--

LOCK TABLES `mints` WRITE;
/*!40000 ALTER TABLE `mints` DISABLE KEYS */;
INSERT INTO `mints` VALUES (1,'Denver','D','2017-08-27 16:43:57','2017-08-27 16:43:57'),(2,'Philidelphia','P','2017-08-27 16:43:57','2017-08-27 16:43:57'),(3,'San Fransisco','S','2017-08-27 16:43:57','2017-08-27 16:43:57'),(4,'New Orleans','O','2017-08-27 16:43:57','2017-08-27 16:43:57'),(5,'Charlotte','C','2017-08-27 16:43:57','2017-08-27 16:43:57'),(6,'Carson City','CC','2017-08-27 16:43:57','2017-08-27 16:43:57'),(7,'West Point','W','2017-08-27 16:43:57','2017-08-27 16:43:57'),(8,'Dahlonega','D','2017-08-27 16:43:57','2017-08-27 16:43:57');
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
  `createdAt` timestamp NOT NULL DEFAULT 0,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` VALUES (1,'1','9','1','1','1','Liberty Head','',5,21.2,'2017-08-29 01:20:47','2017-08-29 01:20:47'),(2,'2','5','1','16','2','Head Facing Left','',6.74,22,'2017-08-29 01:04:17','2017-08-29 01:04:17'),(3,'3','2','1','1','2','Head Facing Right','Some 1797 edges are lettered or gripped',5.44,23.5,'2017-08-29 01:15:22','2017-08-29 01:15:22'),(4,'4','2','1','1','2','Draped Bust','',5.44,23.5,'2017-08-29 01:15:53','2017-08-29 01:15:53'),(5,'5','3','1','1','2','Classic Head','',5.44,23.5,'2017-08-29 01:16:49','2017-08-29 01:16:49'),(6,'6','4','1','1','2','Braided Hair','',5.44,23,'2017-08-29 01:17:25','2017-08-29 01:17:25'),(7,'7','5','1','12','2','Chain Reverse','',13.48,27,'2017-08-29 01:26:20','2017-08-29 01:26:20'),(8,'7','5','1','13','2','Wreath Reverse','',13.48,28,'2017-08-29 01:27:31','2017-08-29 01:27:31'),(9,'7','5','1','14','2','Wreath Reverse','',13.48,28,'2017-08-29 01:28:04','2017-08-29 01:28:04'),(10,'7','5','1','15','2','Wreath Reverse','',13.48,28,'2017-08-29 01:28:27','2017-08-29 01:28:27'),(11,'8','1','1','14','2','Liberty Cap','',13.48,28,'2017-08-29 01:29:08','2017-08-29 01:29:08'),(12,'9','2','1','1','2','Draped Bust','',10.89,29,'2017-08-29 01:29:38','2017-08-29 01:29:38'),(13,'10','3','1','1','2','Classic Head','',10.89,29,'2017-08-29 01:30:17','2017-08-29 01:30:17'),(14,'11','2','1','1','2','Matron Head','',10.89,29,'2017-08-29 01:30:54','2017-08-29 01:30:54'),(15,'11','4','1','1','2','Matron Head Modified (Young Head)','',10.89,27.5,'2017-08-29 01:31:46','2017-08-29 01:31:46'),(16,'11','4','1','1','2','Braided Hair','',10.89,27.5,'2017-08-29 01:32:41','2017-08-29 01:32:41');
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

-- Dump completed on 2017-08-29  1:41:57
