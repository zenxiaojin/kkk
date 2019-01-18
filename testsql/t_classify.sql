/*
Navicat MySQL Data Transfer

Source Server         : guole
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : guole

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-01-05 17:53:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_classify
-- ----------------------------
DROP TABLE IF EXISTS `t_classify`;
CREATE TABLE `t_classify` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(30) NOT NULL,
  `cimg` varchar(255) NOT NULL,
  `cfrag` int(11) NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `cfrag` (`cfrag`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_classify
-- ----------------------------
INSERT INTO `t_classify` VALUES ('1', '液晶显示器', 'http://127.0.0.1:9000/images/phone_i@3x.png', '1001');
INSERT INTO `t_classify` VALUES ('2', '汽车点火', 'http://127.0.0.1:9000/images/car_i@3x.png', '1002');
INSERT INTO `t_classify` VALUES ('3', '多U口输出', 'http://127.0.0.1:9000/images/computer_i@3x.png', '1003');
INSERT INTO `t_classify` VALUES ('4', '带LED手电', 'http://127.0.0.1:9000/images/computer_i@3x.png', '1004');
INSERT INTO `t_classify` VALUES ('5', '太阳能', 'http://127.0.0.1:9000/images/phone_i@3x.png', '1005');
INSERT INTO `t_classify` VALUES ('6', '笔记本', 'http://127.0.0.1:9000/images/computer_i@3x.png', '1006');
INSERT INTO `t_classify` VALUES ('7', '充电宝', 'http://127.0.0.1:9000/images/car_i@3x.png', '1007');