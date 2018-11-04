/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : wuliu

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2017-12-10 13:50:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `car`
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `car_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '车牌号',
  `car_xh` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '型号',
  `w` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '载重量',
  `v` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '体积',
  `drivename` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '驾驶员姓名',
  `driver_tel` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '联系号码',
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('5', '5', '5', '5', '5', '5');
INSERT INTO `car` VALUES ('湘E156', '随便', '2t', '100kg', '随便', '165156');

-- ----------------------------
-- Table structure for `client`
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `client_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '客户编码',
  `client_name` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '客户名称',
  `client_tel` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '联系号码',
  `client_dz` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '地址',
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES ('', '', '', '');
INSERT INTO `client` VALUES ('002', '随便', '12315615', '三中');
INSERT INTO `client` VALUES ('5', '5', '5', '5');

-- ----------------------------
-- Table structure for `ddgl`
-- ----------------------------
DROP TABLE IF EXISTS `ddgl`;
CREATE TABLE `ddgl` (
  `Order_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '订单号',
  `client_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '客户编码',
  `client_name` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '客户名称',
  `product_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '产品编码',
  `product_name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '产品名称',
  `order_date` datetime NOT NULL COMMENT '下订单时间',
  `amount` int(20) NOT NULL COMMENT '数量',
  `dw` char(10) CHARACTER SET utf8 DEFAULT NULL COMMENT '单位',
  `price` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '单价',
  `zt` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '状态',
  PRIMARY KEY (`Order_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ddgl
-- ----------------------------
INSERT INTO `ddgl` VALUES ('', '123', '随便', '22', '句子', '2017-10-02 00:00:00', '10', '个', '11', '没有');

-- ----------------------------
-- Table structure for `fahuodan`
-- ----------------------------
DROP TABLE IF EXISTS `fahuodan`;
CREATE TABLE `fahuodan` (
  `yd_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '运单号',
  `product_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '产品编号',
  `product_name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '产品名称',
  `amount` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '数量',
  `dw` char(10) CHARACTER SET utf8 NOT NULL COMMENT '单位',
  `price` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '单价',
  `fh_date` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '发货时间',
  `car_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '车牌号',
  `client_name` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '客户名称',
  `bz` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '备注',
  PRIMARY KEY (`yd_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fahuodan
-- ----------------------------
INSERT INTO `fahuodan` VALUES ('002', '151', '阿斯顿', '16', '个', '22', '20171102', '无法155', '刚刚', '刮风');

-- ----------------------------
-- Table structure for `huizhidan`
-- ----------------------------
DROP TABLE IF EXISTS `huizhidan`;
CREATE TABLE `huizhidan` (
  `yd_id` varchar(20) CHARACTER SET utf8 NOT NULL,
  `client_name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `shr_name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `shr_tel` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`yd_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of huizhidan
-- ----------------------------
INSERT INTO `huizhidan` VALUES ('23', '23', '23', '23');
INSERT INTO `huizhidan` VALUES ('5', '5', '5', '5');

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '产品编码',
  `product_name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '产品名称',
  `amount` int(20) NOT NULL COMMENT '数量',
  `dw` char(10) CHARACTER SET utf8 DEFAULT NULL COMMENT '单位',
  `price` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '单价',
  `bz` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '备注',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('12', '随便', '10', '个', '10', '备注');
INSERT INTO `product` VALUES ('5', '5', '5', '5', '5', '5');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(15) NOT NULL DEFAULT '',
  `password` char(32) NOT NULL DEFAULT '',
  `regdate` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('11', 'fcg', '19980908', '1512833779');
INSERT INTO `users` VALUES ('1', 'root', '1111', '1512233211');
