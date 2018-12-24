CREATE DATABASE `tokitoki`;
CREATE TABLE `Locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `propertyName` varchar(255) NOT NULL,
  `locationId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `locationId` (`locationId`),
  CONSTRAINT `Properties_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `Locations` (`id`)
);
CREATE TABLE `Units` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `propertyId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `propertyId` (`propertyId`),
  CONSTRAINT `Units_ibfk_1` FOREIGN KEY (`propertyId`) REFERENCES `Properties` (`id`)
);
CREATE TABLE `Rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomNo` varchar(255) NOT NULL,
  `unitId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `unitId` (`unitId`),
  CONSTRAINT `Rooms_ibfk_1` FOREIGN KEY (`unitId`) REFERENCES `Units` (`id`)
);
CREATE TABLE `Bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomId` int(11) NOT NULL,
  `guestName` varchar(255) NOT NULL,
  `checkIn` datetime NOT NULL,
  `checkOut` datetime NOT NULL,
  `status` enum('checked in','not checked in') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `roomId` (`roomId`),
  CONSTRAINT `Bookings_ibfk_1` FOREIGN KEY (`roomId`) REFERENCES `Rooms` (`id`)
);
