/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_product
-- ----------------------------
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(30) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `pfrag` int(11) NOT NULL,
  `pcode` varchar(255) NOT NULL,
  `pcount` int(11) NOT NULL DEFAULT '0',
  `largeImg` varchar(255) NOT NULL,
  `smallImg` varchar(255) NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `pfrag` (`pfrag`),
  CONSTRAINT `pfrag` FOREIGN KEY (`pfrag`) REFERENCES `t_classify` (`cfrag`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('1', '专利私模应急电源', '310.00', '0.00', '1003', 'AF00301', '30', 'http://127.0.0.1:9000/images/gp04_i@3x.png', 'http://127.0.0.1:9000/images/gp04_i@3x.png');
INSERT INTO `t_product` VALUES ('2', '迷你果乐移动充', '79.00', '0.00', '1003', 'AF00302', '26', 'http://127.0.0.1:9000/images/mili_i@3x.png', 'http://127.0.0.1:9000/images/mili_i@3x.png');
INSERT INTO `t_product` VALUES ('3', '果乐10000毫安大容量', '179.00', '0.00', '1003', 'AF00303', '32', 'http://127.0.0.1:9000/images/ta_i@3x.png', 'http://127.0.0.1:9000/images/ta_i@3x.png');
INSERT INTO `t_product` VALUES ('4', '新款高通QC3.0快充', '125.00', '0.00', '1003', 'AF00304', '65', 'http://127.0.0.1:9000/images/qc03_i@3x.png', 'http://127.0.0.1:9000/images/qc03_i@3x.png');
INSERT INTO `t_product` VALUES ('5', 'office4电霸版', '130.00', '0.00', '1007', 'QB00212', '42', 'http://127.0.0.1:9000/images/officei4_i@3x.png', 'http://127.0.0.1:9000/images/officei4_i@3x.png');
INSERT INTO `t_product` VALUES ('6', '多口无线充电器', '200.00', '0.00', '1007', 'QB86521', '31', 'http://127.0.0.1:9000/images/brand_i@3x.png', 'http://127.0.0.1:9000/images/brand_i@3x.png');
INSERT INTO `t_product` VALUES ('7', '无人机航拍电源', '130.00', '0.00', '1007', 'QB53422', '2', 'http://127.0.0.1:9000/images/empty_i@3x.png', 'http://127.0.0.1:9000/images/empty_i@3x.png');
INSERT INTO `t_product` VALUES ('8', '超薄便携M13', '125.00', '0.00', '1004', 'SS24234', '13', 'http://127.0.0.1:9000/images/M13@3x.png', 'http://127.0.0.1:9000/images/M13@3x.png');
INSERT INTO `t_product` VALUES ('9', '化妆盒移动电源', '75.00', '0.00', '1004', 'SS35264', '55', 'http://127.0.0.1:9000/images/zuixin_i@3x.png', 'http://127.0.0.1:9000/images/zuixin_i@3x.png');
INSERT INTO `t_product` VALUES ('10', '弹夹式移动电源', '200.00', '0.00', '1004', 'SS98463', '9', 'http://127.0.0.1:9000/images/gun_i@3x.png', 'http://127.0.0.1:9000/images/gun_i@3x.png');
