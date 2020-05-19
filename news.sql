-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2020 at 06:42 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `andonovs_news`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_news`
--

CREATE TABLE `t_news` (
  `id` int(40) NOT NULL,
  `date` date NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_news`
--

INSERT INTO `t_news` (`id`, `date`, `title`, `description`, `text`) VALUES
(1, '2020-03-06', 'FC Barcelona buys Ronaldo', 'Is possible FC Barcelona to buy Ronaldo ?', 'Oh, ye!'),
(2, '2020-03-06', 'FC Real Madrid buy a new stadium', 'Is possible FC Real Madrid to buy a new stadium ?', 'Yes, but not immediately!'),
(3, '2020-03-07', 'Pesho is playing football', 'Pesho is a football player', 'Pesho is not a football player!'),
(4, '2020-03-06', 'Berba', 'Berba\'s foundation', 'Berba has an own Foundation! It is for the children!'),
(7, '2020-03-07', 'Tedy Bear', 'Tedi is a little bear', 'Tedi is always hungry!'),
(8, '2020-03-07', 'Aliens are here', 'Aliens seen near the disco', 'A group of aliens have been seen near a disco!'),
(9, '2020-03-10', 'Rabbits', 'Rabbits in attack', 'Two men have been bitten by an evil rabits!'),
(10, '2020-03-10', 'Stopped traffic', 'Stopped the traffic in Sofia at 11.03.2020', 'The bus traffic has been stopped in Sofia for an hour at 11.03.2020');

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `uid` int(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pwd` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`uid`, `email`, `pwd`) VALUES
(1, 'admin@admin.com', '0ed148b1c278a612c14e588d11afe430'),
(2, 'pesho@visitor.com', '94b799202d670df53cb663bf147fd726'),
(3, 'gosho@visitor.com', 'cef842997fc41461bbbdf0dfb15f4716'),
(4, 'johny@visitor.com', 'a15ab13f01e8ad46e4638ecc9eff35db');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_news`
--
ALTER TABLE `t_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_news`
--
ALTER TABLE `t_news`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `uid` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
