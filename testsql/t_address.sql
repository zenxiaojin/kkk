/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_address
-- ----------------------------
DROP TABLE IF EXISTS `t_address`;
CREATE TABLE `t_address` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `addTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `editTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `defaultAddress` int(11) NOT NULL,
  PRIMARY KEY (`aid`),
  KEY `uid` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `t_user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_address
-- ----------------------------
INSERT INTO `t_address` VALUES ('1', '11', '15219209751', '广州市天河区车陂大道醉爱4楼', '2018-01-04 16:37:01', null, '1');
INSERT INTO `t_address` VALUES ('2', '11', '15219209751', '深圳市罗湖区', '2018-01-04 16:37:48', null, '0');
