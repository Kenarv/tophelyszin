CREATE DATABASE tophelyszin default character set utf8;
USE tophelyszin;

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
  `picData` varchar(200),
  PRIMARY KEY (`helyszinID`)
) DEFAULT CHARACTER SET=utf8;

INSERT INTO `felhasznalo` (`userID`, `username`, `vezNev`, `kerNev`, `email`, `phone`, `password`) VALUES
(1, 'csibike', 'Csiba', 'János', 'csibajanos@me.com', '+36205559874', '$2y$10$2DIdiTHQBEowpuONPBBZ0u1boQXMHISfWyRS2zudfD8VPJgfknUBi'),
(2, 'bazsi', 'Nagy', 'Balázs', 'bazsika@gmail', '+36204578693', '$2y$10$rPo64QtrnvnacdO900JLDurcs5qhzuFNap6uYKDcWykzia.pjBDGi'),
(3, 'Bélus', 'Kovács', 'Béla', 'belus@hotmail.hu', '+36203547893', '$2y$10$sqmtxEwneBk2024DMpfVIOXnr1FjZclneW2D21A3QJlGYsS0r2Irq'),
(4, 'Teki', 'Mester', 'Krisztina', 'tekike@gmail.com', '+36309987654', '$2y$10$ZpcGF4ui9Zjfj048Rym/UevmcLEazz9vlNZF.qoOwKnF/tltChjAq'),
(5, 'Vranek84', 'Vranek', 'Dóra', 'vranekdora@gmail.com', '06305656855', '$2y$10$OXBwxHIPq5zEW7qi5HQVm.0r5JExb7eaMgi8EEfziy8fViezPmpmu'),
(6, 'koczka', 'Kocka', 'Árpád', 'koczka@me.com', '+36305678954', '$2y$10$H9JOTdl1.VXT879E/JBiauPNaBHSbCViAscvBjvAM3it4ymaHVeCe'),
(7, 'Fefe87', 'Vranek', 'Ferenc', 'ferenc.vranek@gmail.com', '06203298847', '$2y$10$43vUWjHU9XB4O7VmKbicLO9bcg3mnFBM/6.hTMwhtOwK08Sg.X.zO');

INSERT INTO `helyszin` (`userID`, `helyszinID`, `helyszinNev`, `helyszinVarMegye`, `helyszinVaros`, `helyszinUtca`, `helyszinHsz`, `helyszinIrsz`, `helyszinEmail`, `kapacitas`, `etel`, `ital`, `klima`, `tancter`, `parkolo`, `szallas`, `arkategoria`, `megjegyzes`, `picFileName`, `picData`) VALUES
(1, 1, 'Csibike Kifőzde', 'Pest vármegye', 'Dunakeszi', 'Fő', '45', 2120, 'csibike@me.com', '50', '1', '1', '1', '50', '1', '0', 'Szerény', '', NULL, NULL),
(2, 2, 'Bazsika Palotaja', 'Komárom-Esztergom vármegye', 'Felsőpakony', 'hal utca', '32', 2263, 'bpalota@info.hu', '120', '1', '1', '0', '100', '1', '0', 'Átlagos', 'Szep kis tája van', NULL, NULL),
(1, 3, 'Likasfogú Kalóz', 'Budapest vármegye', 'Budapest', 'Családos', '3', 1245, 'kaloz@me.com', '100', '0', '1', '1', '200', '1', '0', 'Átlagos', 'Állj be hozzánk kalóznak.', NULL, NULL),
(3, 4, 'Szépszál fogadó', 'Budapest vármegye', 'Budapest', 'Andor utca', '34', 1119, 'szepszal@info.hu', '60', '1', '1', '0', '80', '0', '0', 'Szerény', 'Aranyos kis fogadó', NULL, NULL),
(4, 5, 'Teknőslak', 'Budapest vármegye', 'Budapest', 'Gerely utca', '21', 1189, 'teknos@info.com', '120', '1', '0', '1', '88', '1', '0', 'Prémium', 'Egy igazi élmény a természet kedvelőinek', NULL, NULL),
(7, 6, 'Rozmaring Kertvendéglő', 'Budapest vármegye', 'Budapest', 'Árpád fejedelem útja', '125', 1036, 'info@rozmaringkertvendeglo.hu', '100+', '1', '1', '1', '100+', '1', '0', 'Átlagos', '', NULL, NULL),
(6, 7, 'Piros Pipacs Fogadó', 'Vas vármegye', 'Vasvár', 'Piros', '45', 9800, 'pipacs@me.com', '100', '1', '1', '1', '200', '1', '1', 'Átlagos', 'Piros Pipacs mindig Önökért...', NULL, NULL);
