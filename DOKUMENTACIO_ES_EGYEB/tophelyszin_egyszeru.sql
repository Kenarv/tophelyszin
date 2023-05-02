CREATE TABLE IF NOT EXISTS `felhasznalo` (
  `userID` int(11) AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8,
  `vezNev` varchar(50) CHARACTER SET utf8,
  `kerNev` varchar(50) CHARACTER SET utf8,
  `email` varchar(100) CHARACTER SET utf8,
  `phone` varchar(100) CHARACTER SET utf8,
  `password` varchar(100) CHARACTER SET utf8,
  PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS `helyszin` (
  `userID` int(11),
  `helyszinID` int(11) AUTO_INCREMENT,
  `helyszinNev` varchar(100),
  `helyszinVarMegye` varchar(30),
  `helyszinVaros` varchar(50),
  `helyszinUtca` varchar(50),
  `helyszinHsz` varchar(20),
  `helyszinIrsz` int(4),
  `helyszinEmail` varchar(100),
  `kapacitas` varchar(30),
  `etel` varchar(10),
  `ital` varchar(10),
  `klima` varchar(10),
  `tancter` varchar(30),
  `parkolo` varchar(10),
  `szallas` varchar(10),
  `arkategoria` varchar(30),
  `megjegyzes` varchar(200) NULL,
  `picFileName` varchar(100),
  `picData` varbinary(1000),
  PRIMARY KEY (`helyszinID`)
) DEFAULT CHARACTER SET=utf8;