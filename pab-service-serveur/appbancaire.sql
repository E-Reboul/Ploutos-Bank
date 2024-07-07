-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 22 déc. 2023 à 20:11
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `appbancaire`
--

-- --------------------------------------------------------

--
-- Structure de la table `banque`
--

DROP TABLE IF EXISTS `banque`;
CREATE TABLE IF NOT EXISTS `banque` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_banque` varchar(255) NOT NULL,
  `numero_guichet` varchar(255) NOT NULL,
  `numero_telephone` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `banque`
--

INSERT INTO `banque` (`id`, `nom_banque`, `numero_guichet`, `numero_telephone`, `email`, `adresse`) VALUES
(1, 'Plutos BanK', '03A', 467051717, 'plutos@bank.com', '16 rue de la richesse 3500 Béziers');

-- --------------------------------------------------------

--
-- Structure de la table `carte`
--

DROP TABLE IF EXISTS `carte`;
CREATE TABLE IF NOT EXISTS `carte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_carte` varchar(255) NOT NULL,
  `type_carte` varchar(255) NOT NULL,
  `titulaires` varchar(255) NOT NULL,
  `date_expiration` date NOT NULL,
  `contrat` varchar(255) NOT NULL,
  `compte_bancaire_id` int NOT NULL,
  `compte_bancaire_banque_id` int NOT NULL,
  `compte_bancaire_user_id` int NOT NULL,
  PRIMARY KEY (`id`,`compte_bancaire_id`,`compte_bancaire_banque_id`,`compte_bancaire_user_id`),
  KEY `fk_carte_compte_bancaire1_idx` (`compte_bancaire_id`,`compte_bancaire_banque_id`,`compte_bancaire_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `carte`
--

INSERT INTO `carte` (`id`, `nom_carte`, `type_carte`, `titulaires`, `date_expiration`, `contrat`, `compte_bancaire_id`, `compte_bancaire_banque_id`, `compte_bancaire_user_id`) VALUES
(1, 'Black Card', 'Retrait/Dépot', 'CLIENT', '2024-01-26', '10202020202A', 1, 1, 1),
(2, 'POOR CARD', 'DEPOT', 'CLIENT', '2031-12-11', '0101010122912A', 3, 1, 2),
(4, 'GOOD CARD', 'Retrait', 'CLIENT', '2023-12-26', 'oaojoanaizna13', 1, 1, 1),
(5, 'GREEN CARD', 'DEPOT', 'CLIENT', '2023-12-17', 'ZIDIAZ2', 1, 1, 1),
(12, 'Black Card', 'Retrait/Dépot', 'CLIENT', '2024-01-26', '10202020202A', 2, 1, 1),
(13, 'POOR CARD', 'DEPOT', 'CLIENT', '2031-12-11', '0101010122912A', 2, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `compte_bancaire`
--

DROP TABLE IF EXISTS `compte_bancaire`;
CREATE TABLE IF NOT EXISTS `compte_bancaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_de_compte` varchar(255) NOT NULL,
  `banque_id` int NOT NULL,
  `user_id` int NOT NULL,
  `solde` float DEFAULT NULL,
  PRIMARY KEY (`id`,`banque_id`,`user_id`),
  KEY `fk_compte_bancaire_banque_idx` (`banque_id`),
  KEY `fk_compte_bancaire_user1_idx` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `compte_bancaire`
--

INSERT INTO `compte_bancaire` (`id`, `type_de_compte`, `banque_id`, `user_id`, `solde`) VALUES
(1, 'Compte courant', 1, 1, 10000),
(2, 'Compte épargne', 1, 1, 200000),
(3, 'Compte courant', 1, 2, 1000),
(4, 'Compte assurance vie', 1, 1, 1000000),
(5, 'Compte épargne', 1, 2, 100),
(7, 'Compte bourse', 1, 1, 10000);

-- --------------------------------------------------------

--
-- Structure de la table `depenses_revenus`
--

DROP TABLE IF EXISTS `depenses_revenus`;
CREATE TABLE IF NOT EXISTS `depenses_revenus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `depenses_revenus`
--

INSERT INTO `depenses_revenus` (`id`, `type`) VALUES
(1, 'Alimentation'),
(2, 'Impot'),
(3, 'Travaux'),
(4, 'Autre'),
(5, 'Salaire'),
(6, 'Revenu Foncier'),
(7, 'Transport'),
(8, 'Loisir');

-- --------------------------------------------------------

--
-- Structure de la table `etablissement`
--

DROP TABLE IF EXISTS `etablissement`;
CREATE TABLE IF NOT EXISTS `etablissement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_etablissement` varchar(255) NOT NULL,
  `type_etablissement` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `etablissement`
--

INSERT INTO `etablissement` (`id`, `nom_etablissement`, `type_etablissement`) VALUES
(1, 'MacDonald', 'Restauration'),
(2, 'INTERMARCHE', 'Magasin Alimentaire'),
(3, 'BeWebSARL', 'Employeur'),
(4, 'Centre des împots', 'Etat'),
(5, 'Bricomarché', 'Magasin'),
(6, 'Quick', 'Restauration'),
(7, 'Leclerc', 'Magasin Alimentaire'),
(8, 'Super U', 'Magasin Alimentaire'),
(9, 'SFR', 'Abonnement'),
(10, 'Netflix', 'Abonnement'),
(11, 'OpenAI\r\n', 'Abonnement');

-- --------------------------------------------------------

--
-- Structure de la table `moyen de paiement`
--

DROP TABLE IF EXISTS `moyen de paiement`;
CREATE TABLE IF NOT EXISTS `moyen de paiement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_de_paiement` varchar(255) NOT NULL,
  `carte_id` int NOT NULL,
  PRIMARY KEY (`id`,`carte_id`),
  KEY `fk_paiement_carte1_idx` (`carte_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `moyen de paiement`
--

INSERT INTO `moyen de paiement` (`id`, `type_de_paiement`, `carte_id`) VALUES
(1, 'CB', 1),
(2, 'CB', 2),
(3, 'CHEQUE', 1),
(4, 'CHEQUE', 2),
(5, 'VIREMENT', 1),
(6, 'VIREMENT', 2);

-- --------------------------------------------------------

--
-- Structure de la table `pret`
--

DROP TABLE IF EXISTS `pret`;
CREATE TABLE IF NOT EXISTS `pret` (
  `id` int NOT NULL AUTO_INCREMENT,
  `taux` varchar(255) NOT NULL,
  `montant` float NOT NULL,
  `contrat` varchar(255) NOT NULL,
  `nom_du_pret` varchar(255) NOT NULL,
  `mensualite_restante` datetime(6) NOT NULL,
  `compte_bancaire_id` int NOT NULL,
  `compte_bancaire_banque_id` int NOT NULL,
  PRIMARY KEY (`id`,`compte_bancaire_id`,`compte_bancaire_banque_id`),
  KEY `fk_pret_compte_bancaire1_idx` (`compte_bancaire_id`,`compte_bancaire_banque_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `pret`
--

INSERT INTO `pret` (`id`, `taux`, `montant`, `contrat`, `nom_du_pret`, `mensualite_restante`, `compte_bancaire_id`, `compte_bancaire_banque_id`) VALUES
(1, '5.5', 255555, '10103219219AHAA', 'PRET IMMO CONFIANCE', '2023-12-26 14:21:00.000000', 1, 1),
(2, '3', 500000, ' OAS392003N03', 'PRET CONSO', '2023-12-31 14:21:00.000000', 1, 1),
(3, '10', 2000, 'D0IKS929292929', 'PRET VOITURE', '2024-03-31 14:23:02.000000', 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_transaction` date NOT NULL,
  `somme_transaction` float NOT NULL,
  `paiement_id` int NOT NULL,
  `etablissement_id` int NOT NULL,
  `depenses_revenus_id` int NOT NULL,
  `compte_bancaire_id` int NOT NULL,
  `compte_bancaire_banque_id` int NOT NULL,
  `compte_bancaire_user_id` int NOT NULL,
  PRIMARY KEY (`id`,`paiement_id`,`etablissement_id`,`depenses_revenus_id`,`compte_bancaire_id`,`compte_bancaire_banque_id`,`compte_bancaire_user_id`),
  KEY `fk_transaction_paiement1_idx` (`paiement_id`),
  KEY `fk_transaction_etablissement1_idx` (`etablissement_id`),
  KEY `fk_transaction_depenses_revenus1_idx` (`depenses_revenus_id`),
  KEY `fk_transaction_compte_bancaire1_idx` (`compte_bancaire_id`,`compte_bancaire_banque_id`,`compte_bancaire_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `transaction`
--

INSERT INTO `transaction` (`id`, `date_transaction`, `somme_transaction`, `paiement_id`, `etablissement_id`, `depenses_revenus_id`, `compte_bancaire_id`, `compte_bancaire_banque_id`, `compte_bancaire_user_id`) VALUES
(1, '2023-12-05', 1500, 1, 3, 5, 1, 1, 1),
(2, '2023-12-01', -10, 1, 2, 1, 1, 1, 1),
(3, '2023-12-04', -20, 3, 5, 3, 1, 1, 1),
(5, '2023-12-04', 5500, 1, 3, 5, 1, 1, 1),
(6, '2023-06-12', -200, 1, 7, 1, 1, 1, 1),
(7, '2023-12-19', -189, 3, 5, 3, 1, 1, 1),
(8, '2023-12-05', -1500, 5, 3, 5, 2, 1, 1),
(9, '2023-12-01', -10, 1, 2, 1, 1, 1, 1),
(10, '2023-12-04', -20, 5, 5, 3, 1, 1, 1),
(12, '2023-12-04', 100, 1, 3, 5, 1, 1, 1),
(13, '2023-06-12', -56, 1, 7, 1, 1, 1, 1),
(14, '2023-12-19', -179, 3, 5, 3, 1, 1, 1),
(15, '2023-12-05', 1500, 1, 3, 5, 3, 1, 2),
(16, '2023-12-01', -10, 1, 2, 1, 3, 1, 2),
(17, '2023-12-04', -20, 3, 5, 3, 3, 1, 2),
(19, '2023-12-04', 5500, 1, 3, 5, 1, 1, 1),
(20, '2023-06-12', -200, 1, 7, 1, 1, 1, 1),
(21, '2023-12-19', -189, 3, 5, 3, 1, 1, 1),
(22, '2023-12-05', -1500, 5, 3, 5, 3, 1, 2),
(23, '2023-12-01', -10, 1, 2, 1, 1, 1, 1),
(24, '2023-12-04', -20, 5, 5, 3, 1, 1, 1),
(25, '2023-12-19', -150, 5, 4, 2, 3, 1, 2),
(26, '2023-12-04', 100, 1, 3, 5, 3, 1, 2),
(27, '2023-06-12', -56, 1, 7, 1, 3, 1, 2),
(28, '2023-12-19', -179, 3, 5, 3, 3, 1, 2),
(29, '2023-12-05', 1500, 1, 3, 5, 1, 1, 1),
(30, '2023-12-01', -10, 1, 2, 1, 1, 1, 1),
(31, '2023-12-04', -20, 3, 5, 3, 1, 1, 1),
(33, '2023-12-04', 5500, 1, 3, 5, 1, 1, 1),
(34, '2023-06-12', -200, 1, 7, 1, 1, 1, 1),
(35, '2023-12-19', -189, 3, 5, 3, 1, 1, 1),
(36, '2023-12-05', -1500, 5, 3, 5, 2, 1, 1),
(37, '2023-12-01', -10, 1, 2, 1, 1, 1, 1),
(38, '2023-12-04', -20, 5, 5, 3, 1, 1, 1),
(40, '2023-12-04', 100, 1, 3, 5, 1, 1, 1),
(41, '2023-06-12', -56, 1, 7, 1, 1, 1, 1),
(42, '2023-12-19', -179, 3, 5, 3, 1, 1, 1),
(43, '2023-12-05', 1500, 1, 3, 5, 3, 1, 2),
(44, '2023-12-01', -10, 1, 2, 1, 3, 1, 2),
(45, '2023-12-04', -20, 3, 5, 3, 3, 1, 2),
(47, '2023-12-04', 5500, 1, 3, 5, 1, 1, 1),
(48, '2023-06-12', -200, 1, 7, 1, 1, 1, 1),
(49, '2023-12-19', -189, 3, 5, 3, 1, 1, 1),
(50, '2023-12-05', -1500, 5, 3, 5, 3, 1, 2),
(51, '2023-12-01', -10, 1, 2, 1, 1, 1, 1),
(52, '2023-12-04', -20, 5, 5, 3, 1, 1, 1),
(53, '2023-12-19', -150, 5, 4, 2, 3, 1, 2),
(54, '2023-12-19', -1500, 5, 4, 2, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `numero_telephone` int NOT NULL,
  `etat` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `identifiant` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `email`, `numero_telephone`, `etat`, `role`, `password`, `identifiant`) VALUES
(1, 'Barre', 'Lenny', 'lb@mail.com', 4004040, 'ACTIF', 'CLIENT', '$2b$10$smuJnpRCYctD6ncpRh38HOArS1r2a/y0XXUy2Qq1JMxk.zoCdUSeC', '010101'),
(2, 'Mové', 'Jesuis', 'jm@mail.com', 60202020, 'ACTIF', 'CLIENT', '$2b$10$T7jMfoqc0IIYuw3OFbUfvu9tdLCY/.2X3nJUQ6ILnpcFDGb8oWBP6', '0202020');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `carte`
--
ALTER TABLE `carte`
  ADD CONSTRAINT `fk_carte_compte_bancaire1` FOREIGN KEY (`compte_bancaire_id`,`compte_bancaire_banque_id`,`compte_bancaire_user_id`) REFERENCES `compte_bancaire` (`id`, `banque_id`, `user_id`);

--
-- Contraintes pour la table `compte_bancaire`
--
ALTER TABLE `compte_bancaire`
  ADD CONSTRAINT `fk_compte_bancaire_banque` FOREIGN KEY (`banque_id`) REFERENCES `banque` (`id`),
  ADD CONSTRAINT `fk_compte_bancaire_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `moyen de paiement`
--
ALTER TABLE `moyen de paiement`
  ADD CONSTRAINT `fk_paiement_carte1` FOREIGN KEY (`carte_id`) REFERENCES `carte` (`id`);

--
-- Contraintes pour la table `pret`
--
ALTER TABLE `pret`
  ADD CONSTRAINT `fk_pret_compte_bancaire1` FOREIGN KEY (`compte_bancaire_id`,`compte_bancaire_banque_id`) REFERENCES `compte_bancaire` (`id`, `banque_id`);

--
-- Contraintes pour la table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_transaction_compte_bancaire1` FOREIGN KEY (`compte_bancaire_id`,`compte_bancaire_banque_id`,`compte_bancaire_user_id`) REFERENCES `compte_bancaire` (`id`, `banque_id`, `user_id`),
  ADD CONSTRAINT `fk_transaction_depenses_revenus1` FOREIGN KEY (`depenses_revenus_id`) REFERENCES `depenses_revenus` (`id`),
  ADD CONSTRAINT `fk_transaction_etablissement1` FOREIGN KEY (`etablissement_id`) REFERENCES `etablissement` (`id`),
  ADD CONSTRAINT `fk_transaction_paiement1` FOREIGN KEY (`paiement_id`) REFERENCES `moyen de paiement` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
