-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2020 at 05:14 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ves_3dlobby`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `committee`
--

CREATE TABLE `committee` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `committeetype`
--

CREATE TABLE `committeetype` (
  `id` int(11) NOT NULL,
  `typename` varchar(255) NOT NULL,
  `isactive` int(11) NOT NULL COMMENT '0=notactive, 1=active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `committeetype`
--

INSERT INTO `committeetype` (`id`, `typename`, `isactive`) VALUES
(1, 'Faculty', 1),
(2, 'Case Presenter', 1),
(3, 'Healthcare Committee', 0),
(4, 'cat 4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `download`
--

CREATE TABLE `download` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `document` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `download`
--

INSERT INTO `download` (`id`, `name`, `document`) VALUES
(3, 'download', 'comingsoon.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `eposter`
--

CREATE TABLE `eposter` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `pname` varchar(255) NOT NULL,
  `eid` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `institute` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `stime` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `etime` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `youtube` text COLLATE utf8_unicode_ci NOT NULL,
  `detail` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` int(11) NOT NULL COMMENT '0-past, 1-upcoming'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `title`, `date`, `stime`, `etime`, `youtube`, `detail`, `image`, `type`) VALUES
(1, 'upcoming event', '28-09-2020', '10', '2', 'dgh', 'upcoming event detail', 'comingsoon.jpeg', 1),
(2, 'past event', '12-08-2020', '10', '20', 'vcnfcng', 'past event detail', 'comingsoon.jpeg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `eventsetting`
--

CREATE TABLE `eventsetting` (
  `id` int(11) NOT NULL,
  `footerbanner` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `titlelong` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `titleshort` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `middletitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `weburl` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `support` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `eventname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `eventdate` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `registertext` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `logintext` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `footerurl` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `csvbutton` int(11) NOT NULL COMMENT '0 - hide, 1 - show',
  `pollbutton` int(11) NOT NULL COMMENT '0 - hide, 1 - show',
  `attendeebutton` int(11) NOT NULL COMMENT '0 - hide, 1 - show',
  `gtmwbutton` int(11) NOT NULL COMMENT '0-Show, 1-Hidden',
  `pollmin` int(11) NOT NULL,
  `footertab` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `eventsetting`
--

INSERT INTO `eventsetting` (`id`, `footerbanner`, `logo`, `titlelong`, `titleshort`, `middletitle`, `weburl`, `support`, `eventname`, `eventdate`, `registertext`, `logintext`, `footerurl`, `csvbutton`, `pollbutton`, `attendeebutton`, `gtmwbutton`, `pollmin`, `footertab`) VALUES
(2, 'fbanner.jpeg', 'comingsoon.jpeg', 'Know Thrombosis', 'KT', 'Know Thrombosis', 'http:///facebook.com', '7331132', 'Know Thrombosis Webinar', '28-08-2020', 'Register Text', 'Login Text', 'footer url', 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `exhibition_hall_sponsor`
--

CREATE TABLE `exhibition_hall_sponsor` (
  `id` int(11) NOT NULL,
  `ex_hallid` int(11) NOT NULL,
  `sponsorid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `dleft` varchar(255) NOT NULL,
  `dwidth` varchar(255) NOT NULL,
  `dheight` varchar(255) NOT NULL,
  `dtop` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exhibition_hall_sponsor`
--

INSERT INTO `exhibition_hall_sponsor` (`id`, `ex_hallid`, `sponsorid`, `name`, `image`, `dleft`, `dwidth`, `dheight`, `dtop`) VALUES
(1, 1, 1, 'blue stall', 'bluestall.png', '39.7', '20.3', '25', '15.5'),
(2, 2, 1, 'blue stall', 'bluestall.png', '15.8', '19.1', '22.5', '51.7'),
(3, 2, 1, 'blue stall', 'bluestall.png', '15.8', '19.1', '22.5', '30'),
(4, 2, 1, 'blue stall', 'bluestall.png', '30', '19.1', '22.5', '30');

-- --------------------------------------------------------

--
-- Table structure for table `exhibition_lobby`
--

CREATE TABLE `exhibition_lobby` (
  `id` int(11) NOT NULL,
  `ex_hallid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `dleft` varchar(255) NOT NULL,
  `dwidth` varchar(255) NOT NULL,
  `dheight` varchar(255) NOT NULL,
  `dtop` varchar(255) NOT NULL,
  `isactive` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exhibition_lobby`
--

INSERT INTO `exhibition_lobby` (`id`, `ex_hallid`, `name`, `image`, `dleft`, `dwidth`, `dheight`, `dtop`, `isactive`) VALUES
(1, 1, 'exhibition hall 1', 'exhibition_hall.png', '5.8', '20.3', '25', '15.5', 1),
(2, 2, 'exhibition hall 2', 'exhibition_hall.png', '73.5', '20.3', '25', '15.5', 1),
(3, 3, 'exhibition hall 2', 'exhibition_hall.png', '73.5', '20.3', '25', '50', 1);

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `institute` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `facultytype`
--

CREATE TABLE `facultytype` (
  `id` int(11) NOT NULL,
  `typename` varchar(255) NOT NULL,
  `isactive` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facultytype`
--

INSERT INTO `facultytype` (`id`, `typename`, `isactive`) VALUES
(1, 'type 1', 1),
(2, 'type 2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `uid` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `feedback` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `datetime` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `uid`, `feedback`, `datetime`) VALUES
(1, '8', '   xvxcvb', '2020-08-22 17:07:18'),
(2, '9', '     xbcvxcbxcb', '2020-08-22 17:07:21'),
(4, '9', 'cbdfbv', '2020-08-27 17:06:20'),
(5, '8', 'sdgdfgv', '2020-08-27 17:06:30');

-- --------------------------------------------------------

--
-- Table structure for table `hall_agenda`
--

CREATE TABLE `hall_agenda` (
  `id` int(11) NOT NULL,
  `hallid` int(11) NOT NULL,
  `document` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hall_agenda`
--

INSERT INTO `hall_agenda` (`id`, `hallid`, `document`) VALUES
(1, 1, 'comingsoon.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `homebanner`
--

CREATE TABLE `homebanner` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `homebanner`
--

INSERT INTO `homebanner` (`id`, `name`, `image`) VALUES
(13, 'banner 1', '1598534266081biteable-post-modern-meeting-room.jpg'),
(14, 'Home 2', '1599133002323biteable-post-modern-meeting-room.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `homemessage`
--

CREATE TABLE `homemessage` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `homemessage`
--

INSERT INTO `homemessage` (`id`, `message`) VALUES
(1, '{\"blocks\":[{\"key\":\"7jhhf\",\"text\":\"hghgfghgf\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}');

-- --------------------------------------------------------

--
-- Table structure for table `home_scientific`
--

CREATE TABLE `home_scientific` (
  `id` int(11) NOT NULL,
  `hallid` int(11) NOT NULL DEFAULT '0' COMMENT '0 for lobby, any id for hall',
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `dleft` varchar(255) NOT NULL,
  `dwidth` varchar(255) NOT NULL,
  `dheight` varchar(255) NOT NULL,
  `dtop` varchar(255) NOT NULL,
  `isactive` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `home_scientific`
--

INSERT INTO `home_scientific` (`id`, `hallid`, `name`, `image`, `url`, `dleft`, `dwidth`, `dheight`, `dtop`, `isactive`) VALUES
(1, 1, 'Conference hall', NULL, '/pages/scientifichall/1', '40.8', '18.4', '8.3', '65.7', 1),
(2, 0, 'Conference hall 2', NULL, '/pages/eposter', '20', '18.4', '8.3', '65.7', 1);

-- --------------------------------------------------------

--
-- Table structure for table `home_sponsor`
--

CREATE TABLE `home_sponsor` (
  `id` int(11) NOT NULL,
  `sponsorid` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dleft` varchar(255) NOT NULL,
  `dwidth` varchar(255) NOT NULL,
  `dheight` varchar(255) NOT NULL,
  `dtop` varchar(255) NOT NULL,
  `isactive` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `home_sponsor`
--

INSERT INTO `home_sponsor` (`id`, `sponsorid`, `url`, `image`, `name`, `dleft`, `dwidth`, `dheight`, `dtop`, `isactive`) VALUES
(1, 1, '/pages/sponsordetails/1', 'usv.png', 'orange stall', '76.7', '16.3', '25', '50', 1),
(2, 0, '/pages/eposter', 'bluestall.png', 'blue stall', '6.8', '16.3', '25', '71.5', 1);

-- --------------------------------------------------------

--
-- Table structure for table `livelink`
--

CREATE TABLE `livelink` (
  `id` int(11) NOT NULL,
  `hallname` varchar(255) DEFAULT NULL,
  `livelink` varchar(50) NOT NULL,
  `livebanner` varchar(100) NOT NULL,
  `bannerurl` varchar(255) NOT NULL,
  `backbanner` varchar(255) NOT NULL,
  `dleft` varchar(100) NOT NULL,
  `dwidth` varchar(100) NOT NULL,
  `dheight` varchar(100) NOT NULL,
  `dtop` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `livelink`
--

INSERT INTO `livelink` (`id`, `hallname`, `livelink`, `livebanner`, `bannerurl`, `backbanner`, `dleft`, `dwidth`, `dheight`, `dtop`) VALUES
(1, 'abc', 'https://www.youtube.com/embed/5gTbfaWLdf8', 'ktfb.png', 'https://www.emcure.com', 'MainHall11.jpg', '0', '56.8', '70.7', '15'),
(2, 'xyz', 'https://www.youtube.com/embed/5gTbfaWLdf8', 'ktfb.png', 'https://www.emcure.com', 'MainHall11.jpg', '0', '56.8', '70.7', '15');

-- --------------------------------------------------------

--
-- Table structure for table `pollquestion`
--

CREATE TABLE `pollquestion` (
  `id` int(11) NOT NULL,
  `hallid` int(11) NOT NULL,
  `question` text NOT NULL,
  `o1` text NOT NULL,
  `o2` text NOT NULL,
  `o3` text NOT NULL,
  `o4` text NOT NULL,
  `isactive` int(11) NOT NULL COMMENT '0 - deactive, 1 -active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pollquestion`
--

INSERT INTO `pollquestion` (`id`, `hallid`, `question`, `o1`, `o2`, `o3`, `o4`, `isactive`) VALUES
(1, 1, 'Question 1', 'option 1', 'option 2 ', 'option 3', 'option 4', 1),
(2, 1, 'question 2', 'q2 o1', 'q2 o2', 'q2 o3', 'q2 o4', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pollresult`
--

CREATE TABLE `pollresult` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `qid` int(11) NOT NULL,
  `o1` int(11) NOT NULL DEFAULT '0',
  `o2` int(11) NOT NULL DEFAULT '0',
  `o3` int(11) NOT NULL DEFAULT '0',
  `o4` int(11) NOT NULL DEFAULT '0',
  `datetime` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pollresult`
--

INSERT INTO `pollresult` (`id`, `uid`, `qid`, `o1`, `o2`, `o3`, `o4`, `datetime`) VALUES
(1, 14, 2, 0, 1, 0, 0, '2020-08-22 17:28:27'),
(2, 1, 2, 0, 1, 0, 0, '2020-08-22 20:47:36'),
(3, 2, 2, 1, 0, 0, 0, '2020-08-24 13:55:42');

-- --------------------------------------------------------

--
-- Table structure for table `programme`
--

CREATE TABLE `programme` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pdf` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `programme`
--

INSERT INTO `programme` (`id`, `title`, `image`, `pdf`) VALUES
(1, 'Agenda', '1598704222423biteable-post-modern-meeting-room.jpg', '1598704222425calendar.ics');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `uid` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `hallid` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `datetime` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `uid`, `hallid`, `question`, `datetime`) VALUES
(1, '1', 1, 'fsdgdfxhdxfhd', '2020-09-12 23:26:07'),
(2, '1', 2, 'hgjjfcjhcxhg', '2020-09-12 23:26:32');

-- --------------------------------------------------------

--
-- Table structure for table `scientific_lobby`
--

CREATE TABLE `scientific_lobby` (
  `id` int(11) NOT NULL,
  `hallid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `dleft` varchar(255) NOT NULL,
  `dwidth` varchar(255) NOT NULL,
  `dheight` varchar(255) NOT NULL,
  `dtop` varchar(255) NOT NULL,
  `backbanner` varchar(255) NOT NULL,
  `livelink` varchar(255) NOT NULL,
  `yleft` varchar(255) NOT NULL,
  `ywidth` varchar(255) NOT NULL,
  `yheight` varchar(255) NOT NULL,
  `ytop` varchar(255) NOT NULL,
  `isactive` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scientific_lobby`
--

INSERT INTO `scientific_lobby` (`id`, `hallid`, `name`, `image`, `dleft`, `dwidth`, `dheight`, `dtop`, `backbanner`, `livelink`, `yleft`, `ywidth`, `yheight`, `ytop`, `isactive`) VALUES
(1, 1, 'conference hall', 'scientific_hall.png', '10', '20.3', '28', '22.5', 'MainHall11.jpg', 'https://www.youtube.com/embed/5gTbfaWLdf8', '20', '56.8', '70.7', '15', 1),
(2, 2, 'conference hall 2', 'scientific_hall.png', '69.7', '20.3', '28', '22.5', 'MainHall11.jpg', 'https://www.youtube.com/embed/5gTbfaWLdf8', '0', '50', '20', '0', 1),
(3, 3, 'conference hall 2', 'scientific_hall.png', '69.7', '20.3', '28', '50.5', 'MainHall11.jpg', 'https://www.youtube.com/embed/5gTbfaWLdf8', '0', '50', '20', '0', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sponsor`
--

CREATE TABLE `sponsor` (
  `id` int(11) NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `banner` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8_unicode_ci,
  `facebook` text COLLATE utf8_unicode_ci,
  `youtube` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sponsor`
--

INSERT INTO `sponsor` (`id`, `company`, `type`, `email`, `website`, `logo`, `banner`, `about`, `facebook`, `youtube`, `password`) VALUES
(1, 'usv private limited', 'Diabetes Education', 'sponsor@gmail.com', 'https://www.usvindia.com/', 'usv.png', 'banner.jpg', 'sponsor about', 'facebook', '', ''),
(2, 'sun pharmaceutical industries ltd', 'Clinical Diabetes', 'sponsor@gmail.com', 'https://www.sunpharma.com/', 'sunpharma.png', NULL, 'sponsor about 2', NULL, '', ''),
(3, 'emcure pharmaceuticals', 'Diabetes Innovations', 'sponsor@gmail.com', 'https://www.emcure.com/', 'emcure.png', NULL, NULL, NULL, '', ''),
(4, 'eris lifesciences ltd', 'Patient Care', 'sponsor@gmail.com', 'https://eris.co.in/', 'eris.png', NULL, NULL, NULL, '', ''),
(5, 'glenmark pharmaceuticals', 'Diabetes Research', 'sponsor@gmail.com', 'https://www.glenmarkpharma.com/', 'glenmark.png', NULL, NULL, NULL, '', ''),
(6, 'ipca pharmaceuticals', 'Community Service', 'sponsor@gmail.com', 'https://www.ipca.com/', 'ipca.png', NULL, NULL, NULL, '', ''),
(7, 'docplexus', 'Medical Education', 'sponsor@gmail.com', 'https://www.docplexus.com/index?redirecturl=/', 'docphexus.png', NULL, NULL, NULL, '', ''),
(8, 'goqii technologies pvt. ltd.', 'Preventive Health Care', 'sponsor@gmail.com', 'https://goqii.com/in-en', 'goqii.png', NULL, NULL, NULL, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `sponsordetails`
--

CREATE TABLE `sponsordetails` (
  `id` int(11) NOT NULL,
  `sponsorid` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `facebook` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sponsordetails`
--

INSERT INTO `sponsordetails` (`id`, `sponsorid`, `company`, `email`, `website`, `logo`, `banner`, `about`, `facebook`) VALUES
(1, 1, 'usv', 'usv@gmail.com', 'www.usv.com', 'usv.png', 'banner.jpg', 'about usv', 'facebook');

-- --------------------------------------------------------

--
-- Table structure for table `sponsordoc`
--

CREATE TABLE `sponsordoc` (
  `id` int(11) NOT NULL,
  `sponsorid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `pdf` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sponsordoc`
--

INSERT INTO `sponsordoc` (`id`, `sponsorid`, `title`, `img`, `pdf`) VALUES
(1, 1, 'sponsor doc1', 'eris.png', 'd1.pdf'),
(2, 1, 'sponsor doc', 'eris.png', 'd1.pdf'),
(3, 1, 'sponsor doc', 'eris.png', 'd1.pdf'),
(4, 2, 'sponsor doc', 'eris.png', 'd1.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `sponsorstaff`
--

CREATE TABLE `sponsorstaff` (
  `id` int(11) NOT NULL,
  `sponsorid` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `link` text NOT NULL,
  `isactive` int(11) NOT NULL DEFAULT '1' COMMENT '0-Deactive, 1- active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sponsorstaff`
--

INSERT INTO `sponsorstaff` (`id`, `sponsorid`, `photo`, `name`, `designation`, `link`, `isactive`) VALUES
(1, 1, 'eris.png', 'sponsor staff', 'Devloper', 'https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09', 1),
(2, 2, 'eris.png', 'sponsor staff', 'Devloper', 'https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09', 1),
(3, 1, 'eris.png', 'sponsor staff', 'Devloper', 'https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09', 0);

-- --------------------------------------------------------

--
-- Table structure for table `sponsortype`
--

CREATE TABLE `sponsortype` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sponsortype`
--

INSERT INTO `sponsortype` (`id`, `type`) VALUES
(1, 'Platinum Sponsor'),
(2, 'Diamond Sponsor'),
(3, 'Gold Sponsor'),
(4, 'Silver Sponsor'),
(5, 'Sponsor');

-- --------------------------------------------------------

--
-- Table structure for table `sponsorvideos`
--

CREATE TABLE `sponsorvideos` (
  `id` int(11) NOT NULL,
  `sponsorid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `youtubelink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sponsorvideos`
--

INSERT INTO `sponsorvideos` (`id`, `sponsorid`, `title`, `img`, `youtubelink`) VALUES
(1, 1, 'sponsor videos', 'eris.png', 'https://www.youtube.com/embed/3dSXSkWmJ24'),
(2, 2, 'sponsor title 2', 'eris.png', 'https://www.youtube.com/embed/-z_UvHknyrc');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `name`) VALUES
(1, 'Andaman and Nicobar Islands'),
(2, 'Andhra Pradesh'),
(3, 'Arunachal Pradesh'),
(4, 'Assam'),
(5, 'Bihar'),
(6, 'Chandigarh'),
(7, 'Chhattisgarh'),
(8, 'Dadra and Nagar Haveli and Daman and Diu'),
(9, 'Delhi'),
(10, 'Goa'),
(11, 'Gujarat'),
(12, 'Haryana'),
(13, 'Himachal Pradesh'),
(14, 'Jammu and Kashmir'),
(15, 'Jharkhand'),
(16, 'Karnataka'),
(17, 'Kerala'),
(18, 'Ladakh'),
(19, 'Lakshadweep'),
(20, 'Madhya Pradesh'),
(21, 'Maharashtra'),
(22, 'Manipur'),
(23, 'Meghalaya'),
(24, 'Mizoram'),
(25, 'Nagaland'),
(26, 'Odisha'),
(27, 'Puducherry'),
(28, 'Punjab'),
(29, 'Rajasthan'),
(30, 'Sikkim'),
(31, 'Tamil Nadu'),
(32, 'Telangana'),
(33, 'Tripura'),
(34, 'Uttar Pradesh'),
(35, 'Uttarakhand'),
(36, 'West Bengal'),
(37, 'International / Foreign Delegate');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uid` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `designation` text COLLATE utf8_unicode_ci NOT NULL,
  `institute` text COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `txn_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8_unicode_ci,
  `web` text COLLATE utf8_unicode_ci,
  `type` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `loginstatus` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `viewlivecount`
--

CREATE TABLE `viewlivecount` (
  `id` int(11) NOT NULL,
  `hallid` int(11) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `datetime` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `viewlivecount`
--

INSERT INTO `viewlivecount` (`id`, `hallid`, `userid`, `datetime`) VALUES
(2, 1, '1', '2020-09-12 22:59:50'),
(3, 2, '1', '2020-09-12 23:37:37'),
(4, 3, '1', '2020-09-13 08:15:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `committee`
--
ALTER TABLE `committee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `committeetype`
--
ALTER TABLE `committeetype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `download`
--
ALTER TABLE `download`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eposter`
--
ALTER TABLE `eposter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eventsetting`
--
ALTER TABLE `eventsetting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exhibition_hall_sponsor`
--
ALTER TABLE `exhibition_hall_sponsor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exhibition_lobby`
--
ALTER TABLE `exhibition_lobby`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facultytype`
--
ALTER TABLE `facultytype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hall_agenda`
--
ALTER TABLE `hall_agenda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homebanner`
--
ALTER TABLE `homebanner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homemessage`
--
ALTER TABLE `homemessage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_scientific`
--
ALTER TABLE `home_scientific`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_sponsor`
--
ALTER TABLE `home_sponsor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livelink`
--
ALTER TABLE `livelink`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pollquestion`
--
ALTER TABLE `pollquestion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pollresult`
--
ALTER TABLE `pollresult`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programme`
--
ALTER TABLE `programme`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scientific_lobby`
--
ALTER TABLE `scientific_lobby`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsor`
--
ALTER TABLE `sponsor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsordetails`
--
ALTER TABLE `sponsordetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsordoc`
--
ALTER TABLE `sponsordoc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsorstaff`
--
ALTER TABLE `sponsorstaff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsortype`
--
ALTER TABLE `sponsortype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsorvideos`
--
ALTER TABLE `sponsorvideos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viewlivecount`
--
ALTER TABLE `viewlivecount`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `committee`
--
ALTER TABLE `committee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `committeetype`
--
ALTER TABLE `committeetype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `download`
--
ALTER TABLE `download`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `eventsetting`
--
ALTER TABLE `eventsetting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `exhibition_hall_sponsor`
--
ALTER TABLE `exhibition_hall_sponsor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `exhibition_lobby`
--
ALTER TABLE `exhibition_lobby`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `facultytype`
--
ALTER TABLE `facultytype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hall_agenda`
--
ALTER TABLE `hall_agenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `homebanner`
--
ALTER TABLE `homebanner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `homemessage`
--
ALTER TABLE `homemessage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_scientific`
--
ALTER TABLE `home_scientific`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `home_sponsor`
--
ALTER TABLE `home_sponsor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `livelink`
--
ALTER TABLE `livelink`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pollquestion`
--
ALTER TABLE `pollquestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pollresult`
--
ALTER TABLE `pollresult`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `programme`
--
ALTER TABLE `programme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `scientific_lobby`
--
ALTER TABLE `scientific_lobby`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sponsor`
--
ALTER TABLE `sponsor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sponsordetails`
--
ALTER TABLE `sponsordetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sponsordoc`
--
ALTER TABLE `sponsordoc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sponsorstaff`
--
ALTER TABLE `sponsorstaff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sponsortype`
--
ALTER TABLE `sponsortype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sponsorvideos`
--
ALTER TABLE `sponsorvideos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `viewlivecount`
--
ALTER TABLE `viewlivecount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
