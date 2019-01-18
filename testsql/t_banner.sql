/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_banner
-- ----------------------------
DROP TABLE IF EXISTS `t_banner`;
CREATE TABLE `t_banner` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `linkurl` varchar(255) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `frag` int(11) NOT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_banner
-- ----------------------------
INSERT INTO `t_banner` VALUES ('1', 'http://127.0.0.1:9000/images/banner1.png', '0', 'banner1', '100');
INSERT INTO `t_banner` VALUES ('2', 'http://127.0.0.1:9000/images/banner2.png', '0', 'banner2', '100');
INSERT INTO `t_banner` VALUES ('3', 'http://127.0.0.1:9000/images/banner3.png', '0', 'banner3', '100');
