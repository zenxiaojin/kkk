/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_productdetail
-- ----------------------------
DROP TABLE IF EXISTS `t_productdetail`;
CREATE TABLE `t_productdetail` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `code` varchar(50) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `describe` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) NOT NULL DEFAULT '0.00',
  `type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`did`),
  KEY `pid` (`pid`),
  CONSTRAINT `pid` FOREIGN KEY (`pid`) REFERENCES `t_product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_productdetail
-- ----------------------------
INSERT INTO `t_productdetail` VALUES ('1', '1', '专利私模应急电源', '310.00', 'AF00301', 'http://127.0.0.1:9000/images/gp04_i@3x.png', '电源持续长久', '0.00', '');
INSERT INTO `t_productdetail` VALUES ('2', '2', '迷你果乐移动充', '79.00', 'AF00302', 'http://127.0.0.1:9000/images/mili_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('3', '3', '果乐10000毫安大容量', '179.00', 'AF00303', 'http://127.0.0.1:9000/images/ta_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('4', '4', '新款高通QC3.0快充', '125.00', 'AF00304', 'http://127.0.0.1:9000/images/qc03_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('5', '5', 'office4电霸版', '130.00', 'QB00212', 'http://127.0.0.1:9000/images/officei4_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('6', '6', '多口无线充电器', '200.00', 'QB86521', 'http://127.0.0.1:9000/images/brand_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('7', '7', '无人机航拍电源', '130.00', 'QB53422', 'http://127.0.0.1:9000/images/empty_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('8', '8', '超薄便携M13', '125.00', 'SS24234', 'http://127.0.0.1:9000/images/M13@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('9', '9', '化妆盒移动电源', '75.00', 'SS35264', 'http://127.0.0.1:9000/images/zuixin_i@3x.png', null, '0.00', null);
INSERT INTO `t_productdetail` VALUES ('10', '10', '弹夹式移动电源', '200.00', 'SS98463', 'http://127.0.0.1:9000/images/gun_i@3x.png', null, '0.00', null);
