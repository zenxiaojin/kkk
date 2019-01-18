/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `pwd` varchar(32) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `oldpwd` varchar(32) DEFAULT NULL,
  `registerTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `agreement` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `identity` varchar(18) DEFAULT NULL,
  `loginStatus` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('11', '1c63129ae9db9c60c3e8aa94d3e00495', '15219209751', null, '2018-01-05 17:43:34', '100', '1161437421@qq.com', '艾尔伦', null, null, '1');
