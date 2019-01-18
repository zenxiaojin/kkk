/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_shopcart
-- ----------------------------
DROP TABLE IF EXISTS `t_shopcart`;
CREATE TABLE `t_shopcart` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `code` varchar(255) NOT NULL,
  `count` int(11) NOT NULL DEFAULT '1',
  `imgurl` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `addTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`sid`),
  KEY `psid` (`pid`),
  CONSTRAINT `psid` FOREIGN KEY (`pid`) REFERENCES `t_product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_shopcart
-- ----------------------------
INSERT INTO `t_shopcart` VALUES ('1', '2', '迷你果乐移动充', '79.00', 'AF00302', '8', 'http://127.0.0.1:9000/images/mili_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 14:44:55');
INSERT INTO `t_shopcart` VALUES ('2', '2', '迷你果乐移动充', '79.00', 'AF00302', '3', 'http://127.0.0.1:9000/images/mili_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 14:45:42');
INSERT INTO `t_shopcart` VALUES ('3', '2', '迷你果乐移动充', '79.00', 'AF00302', '9', 'http://127.0.0.1:9000/images/mili_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 14:47:22');
INSERT INTO `t_shopcart` VALUES ('4', '4', '新款高通QC3.0快充', '125.00', 'AF00304', '4', 'http://127.0.0.1:9000/images/qc03_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 14:48:42');
INSERT INTO `t_shopcart` VALUES ('5', '7', '无人机航拍电源', '130.00', 'QB53422', '2', 'http://127.0.0.1:9000/images/empty_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 14:52:33');
INSERT INTO `t_shopcart` VALUES ('6', '5', 'office4电霸版', '130.00', 'QB00212', '3', 'http://127.0.0.1:9000/images/officei4_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 14:53:32');
INSERT INTO `t_shopcart` VALUES ('7', '1', '专利私模应急电源', '310.00', 'AF00301', '1', 'http://127.0.0.1:9000/images/gp04_i@3x.png', '11', '15219209751', '艾尔伦', '2018-01-05 17:44:20');
