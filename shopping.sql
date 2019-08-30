/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50553
Source Host           : 127.0.0.1:3306
Source Database       : abercrombie

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-08-30 11:11:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `clickinfo`
-- ----------------------------
DROP TABLE IF EXISTS `clickinfo`;
CREATE TABLE `clickinfo` (
  `id` int(20) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `mc` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of clickinfo
-- ----------------------------
INSERT INTO `clickinfo` VALUES ('62', '558', '长袖牛仔衬衫', '女装', '\n									类别 \n								', './images/0062/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('61', '558', 'LOGO 镶边束腰帽衫', '女装', '\n									类别 \n								', './images/0061/black1.jpg');
INSERT INTO `clickinfo` VALUES ('66', '358', 'ONE-SHOULDER BODYSUIT', '女装', '\n									类别 \n								', './images/0066/black1.jpg');
INSERT INTO `clickinfo` VALUES ('66', '358', 'ONE-SHOULDER BODYSUIT', '女装', '\n									类别 \n								', './images/0066/black1.jpg');
INSERT INTO `clickinfo` VALUES ('72', '698', 'LOGO 款全拉链帽衫', '女装', '\n									类别 \n								', './images/0072/black1.jpg');
INSERT INTO `clickinfo` VALUES ('75', '358', 'LOGO 款长袖舒适 T 恤', '女装', '\n									类别 \n								', './images/0075/red1.jpg');
INSERT INTO `clickinfo` VALUES ('74', '448', '亚麻混纺前身打结衬衫', '女装', '\n									类别 \n								', './images/0074/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('61', '558', 'LOGO 镶边束腰帽衫', '女装', '下装', './images/0061/black1.jpg');
INSERT INTO `clickinfo` VALUES ('73', '558', '标识款 V 领针织衫', '女装', '\n									类别 \n								', './images/0073/darkBlue1.jpg');
INSERT INTO `clickinfo` VALUES ('78', '448', '腰部系带缎面上衣', '女装', '\n									类别 \n								', './images/0078/black1.jpg');
INSERT INTO `clickinfo` VALUES ('70', '198', '柔软 A&amp;F 标识款 T 恤', '女装', '\n									类别 \n								', './images/0070/darkBlue1.jpg');
INSERT INTO `clickinfo` VALUES ('82', '558', '缎面高叉中长裙', '女装', '\n									类别 \n								', './images/0082/black1.jpg');
INSERT INTO `clickinfo` VALUES ('62', '558', '长袖牛仔衬衫', '女装', '\n									类别 \n								', './images/0062/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('73', '558', '标识款 V 领针织衫', '女装', '\n									类别 \n								', './images/0073/darkBlue1.jpg');
INSERT INTO `clickinfo` VALUES ('81', '448', '侧叉针织中长裙', '女装', '\n									类别 \n								', './images/0081/black1.jpg');
INSERT INTO `clickinfo` VALUES ('67', '228', '修身款罗纹 T 恤', '女装', '\n									类别 \n								', './images/0067/black1.jpg');
INSERT INTO `clickinfo` VALUES ('83', '558', '翻边裤脚运动裤', '女装', '\n									类别 \n								', './images/0083/black1.jpg');
INSERT INTO `clickinfo` VALUES ('18', '448', '弹力 LOGO 款 POLO 衫', '男装', '\n									类别 \n								', './images/0018/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('8', '&nbsp;198', '标识款短袖亨利式上衣', '男装', '\n									类别 \n								', './images/0008/black1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('1', '498', '短袖纽扣式衬衫', '男装', '\n									类别 \n								', './images/0001/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('19', '249', '贴花图案短袖 T 恤', '男装', '\n									类别 \n								', './images/0019/black1.jpg');
INSERT INTO `clickinfo` VALUES ('72', '698', 'LOGO 款全拉链帽衫', '女装', '\n									类别 \n								', './images/0072/black1.jpg');
INSERT INTO `clickinfo` VALUES ('118', '1150', '人造皮革摩托风夹克', '女装', '\n									类别 \n								', './images/0118/black1.jpg');
INSERT INTO `clickinfo` VALUES ('32', '648', '直筒卡其裤', '男装', '\n									类别 \n								', './images/0032/black1.jpg');
INSERT INTO `clickinfo` VALUES ('13', '224', '标识款弹力 POLO 衫', '男装', '\n									类别 \n								', './images/0013/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('7', '388', '标识款圆领 T 恤（3 件装）', '男装', '\n									类别 \n								', './images/0007/black1.jpg');
INSERT INTO `clickinfo` VALUES ('51', '798', '轻薄便携式羽绒马甲', '男装', '\n									类别 \n								', './images/0051/black1.jpg');
INSERT INTO `clickinfo` VALUES ('5', '448', '隐蔽式前襟 POLO 衫', '男装', '\n									类别 \n								', './images/0005/darkBlue2.jpg');
INSERT INTO `clickinfo` VALUES ('18', '448', '弹力 LOGO 款 POLO 衫', '男装', '\n									类别 \n								', './images/0018/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('58', '692', 'LOGO 款镶边防风服', '男装', '\n									类别 \n								', './images/0058/red1.jpg');
INSERT INTO `clickinfo` VALUES ('18', '448', '弹力 LOGO 款 POLO 衫', '男装', '\n									类别 \n								', './images/0018/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('14', '558', '标识款牛津衬衫', '男装', '\n									类别 \n								', './images/0014/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('10', '178', '标识款口袋 T 恤', '男装', '\n									类别 \n								', './images/0010/black1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('18', '448', '弹力 LOGO 款 POLO 衫', '男装', '\n									类别 \n								', './images/0018/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('10', '178', '标识款口袋 T 恤', '男装', '\n									类别 \n								', './images/0010/black1.jpg');
INSERT INTO `clickinfo` VALUES ('66', '358', 'ONE-SHOULDER BODYSUIT', '女装', '\n									类别 \n								', './images/0066/black1.jpg');
INSERT INTO `clickinfo` VALUES ('25', '448', '印花 LOGO 款抓绒短裤', '男装', '\n									类别 \n								', './images/0025/black1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue2.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('34', '319', '贴花 LOGO 运动裤', '男装', '\n									类别 \n								', './images/0034/black1.jpg');
INSERT INTO `clickinfo` VALUES ('105', '1088', 'SHERPA TRUCKER JACKET', '女装', '\n									类别 \n								', './images/0105/red1.jpg');
INSERT INTO `clickinfo` VALUES ('107', '988', 'COZY TEDDY JACKET', '女装', '\n									类别 \n								', './images/0107/white1.jpg');
INSERT INTO `clickinfo` VALUES ('38', '738', '加倍紧身牛仔裤', '男装', '\n									类别 \n								', './images/0038/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('35', '319', 'LOGO 款刺绣抓绒短裤', '男装', '\n									类别 \n								', './images/0035/red1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('49', '1150', '连帽牛仔夹克', '男装', '\n									类别 \n								', './images/0049/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('1', '498', '短袖纽扣式衬衫', '男装', '\n									类别 \n								', './images/0001/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('50', '1240', '仿羊羔绒内衬牛仔夹克', '男装', '\n									类别 \n								', './images/0050/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('53', '1240', '轻薄收纳式保暖服', '男装', '\n									类别 \n								', './images/0053/darkBlue1.jpg');
INSERT INTO `clickinfo` VALUES ('5', '448', '隐蔽式前襟 POLO 衫', '男装', '\n									类别 \n								', './images/0005/darkBlue1.jpg');
INSERT INTO `clickinfo` VALUES ('18', '448', '弹力 LOGO 款 POLO 衫', '男装', '\n									类别 \n								', './images/0018/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('9', '&nbsp;178', '大号标识圆领 T 恤', '男装', '\n									类别 \n								', './images/0009/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('18', '448', '弹力 LOGO 款 POLO 衫', '男装', '\n									类别 \n								', './images/0018/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('15', '178', '大号标识款圆领短袖 T 恤', '男装', '\n									类别 \n								', './images/0015/white1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('9', '&nbsp;178', '大号标识圆领 T 恤', '男装', '\n									类别 \n								', './images/0009/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('11', '198', '标识款弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0011/black1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');
INSERT INTO `clickinfo` VALUES ('17', '139', '弧形下摆圆领 T 恤', '男装', '\n									类别 \n								', './images/0017/blue1.jpg');

-- ----------------------------
-- Table structure for `shopping`
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping` (
  `id` int(20) NOT NULL DEFAULT '0' COMMENT '表示商品编码',
  `mc` varchar(255) NOT NULL COMMENT '表示商品名称',
  `price` varchar(10) NOT NULL COMMENT '表示商品价格',
  `category` varchar(255) NOT NULL COMMENT '表示商品类别',
  `size` varchar(255) NOT NULL COMMENT '表示商品尺码（用&拼接）',
  `color` varchar(255) NOT NULL COMMENT 'color表示商品颜色，即“显示于xxx”（用&拼接）',
  `discount` varchar(255) NOT NULL COMMENT '表示商品折扣，没有就输入1',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '表示男装或女装',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='id表示商品编码\r\nmc表示商品名称\r\nprice表示商品价格\r\ncategory表示商品类别\r\nsize表示商品尺码（用&拼接）\r\ncolor表示商品颜色，即“显示于xxx”（用&拼接）\r\ndiscount表示商品折扣，没有就输入1\r\nsex表示男装或女装\r\n要求，主页商品全部都要录入，并且分类';

-- ----------------------------
-- Records of shopping
-- ----------------------------
INSERT INTO `shopping` VALUES ('17', '弧形下摆圆领 T 恤', '139', '上装', 'XXL&XL&L&M&S&XS', 'white&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('18', '弹力 LOGO 款 POLO 衫', '448', '上装', 'XXL&XL&L&M&S&XS', 'white&blue&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('19', '贴花图案短袖 T 恤', '249', '上装', 'XXL&XL&L&M&S&XS', 'black&white', '20%', '男装');
INSERT INTO `shopping` VALUES ('20', '短袖 LOGO 镶边帽衫', '349', '上装', 'XXL&XL&L&M&S&XS', 'black&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('21', '工装短裤', '369', '下装', 'XXL&XL&L&M&S&XS', 'black&red&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('22', '方块 LOGO 款抓绒短裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'black&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('23', '无褶短裤', '269', '下装', 'XXL&XL&L&M&S&XS', 'black&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('24', '标识款慢跑休闲裤', '558', '下装', 'XXL&XL&L&M&S&XS', 'black&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('25', '印花 LOGO 款抓绒短裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'black&red&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('26', '刺绣标识款经典运动裤', '558', '下装', 'XXL&XL&L&M&S&XS', 'white&blue&red&black', '20%', '男装');
INSERT INTO `shopping` VALUES ('27', '弹力抓绒慢跑休闲裤', '648', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue&black', '20%', '男装');
INSERT INTO `shopping` VALUES ('28', '松紧腰短裤', '558', '下装', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('29', '暗门襟短裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue&black', '20%', '男装');
INSERT INTO `shopping` VALUES ('30', '标识款针织短裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue&black&white', '20%', '男装');
INSERT INTO `shopping` VALUES ('31', '紧身九分牛仔裤', '738', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue&black&white', '20%', '男装');
INSERT INTO `shopping` VALUES ('32', '直筒卡其裤', '648', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue&black&blue&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('33', '抓绒短裤', '319', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('34', '贴花 LOGO 运动裤', '319', '下装', 'XXL&XL&L&M&S&XS', 'red&black&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('35', 'LOGO 款刺绣抓绒短裤', '319', '下装', 'XXL&XL&L&M&S&XS', 'red', '20%', '男装');
INSERT INTO `shopping` VALUES ('36', '松紧带短裤', '335', '下装', 'XXL&XL&L&M&S&XS', 'darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('37', '男装风松紧带短裤', '419', '下装', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('38', '加倍紧身牛仔裤', '738', '下装', 'XXL&XL&L&M&S&XS', 'white&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('39', '工装风飞行员短裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'black', '20%', '男装');
INSERT INTO `shopping` VALUES ('40', '下摆刺绣 LOGO 款短裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'black&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('41', '徒步旅行派克大衣', '1780', '外套', 'XXL&XL&L&M&S&XS', 'darkBlue&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('42', '灯芯绒卡车司机夹克', '1088', '外套', 'XXL&XL&L&M&S&XS', 'black', '20%', '男装');
INSERT INTO `shopping` VALUES ('43', 'A&F 季节功能性夹克', '1380', '外套', 'XXL&XL&L&M&S&XS', 'red&black&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('44', '双面两穿飞行员夹克', '1150', '外套', 'XXL&XL&L&M&S&XS', 'black', '20%', '男装');
INSERT INTO `shopping` VALUES ('45', '中厚款夹克', '789', '外套', 'XXL&XL&L&M&S&XS', 'black&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('46', '牛仔夹克', '1088', '外套', 'XXL&XL&L&M&S&XS', 'blue&white&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('47', '收纳式轻便风衣', '798', '外套', 'XXL&XL&L&M&S&XS', 'black&white', '20%', '男装');
INSERT INTO `shopping` VALUES ('48', '中厚款夹克', '789', '外套', 'XXL&XL&L&M&S&XS', 'black&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('49', '连帽牛仔夹克', '1150', '外套', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('50', '仿羊羔绒内衬牛仔夹克', '1240', '外套', 'XXL&XL&L&M&S&XS', 'blue&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('51', '轻薄便携式羽绒马甲', '798', '外套', 'XXL&XL&L&M&S&XS', 'black', '20%', '男装');
INSERT INTO `shopping` VALUES ('52', '工装风衬衫式夹克', '738', '外套', 'XXL&XL&L&M&S&XS', 'black&white', '20%', '男装');
INSERT INTO `shopping` VALUES ('53', '轻薄收纳式保暖服', '1240', '外套', 'XXL&XL&L&M&S&XS', 'red&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('54', '泼溅图案牛仔夹克', '1150', '外套', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('55', '拉链款工装风衬衫式夹克', '988', '外套', 'XXL&XL&L&M&S&XS', 'black', '20%', '男装');
INSERT INTO `shopping` VALUES ('56', '半拉链尼龙夹克', '988', '外套', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('57', 'TREKKING PARKA', '1780', '外套', 'XXL&XL&L&M&S&XS', 'red&black', '20%', '男装');
INSERT INTO `shopping` VALUES ('58', 'LOGO 款镶边防风服', '692', '外套', 'XXL&XL&L&M&S&XS', 'red', '20%', '男装');
INSERT INTO `shopping` VALUES ('59', '风衣夹克', '499', '外套', 'XXL&XL&L&M&S&XS', 'red', '20%', '男装');
INSERT INTO `shopping` VALUES ('60', '中量级功能性夹克', '569', '外套', 'XXL&XL&L&M&S&XS', 'black&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('61', 'LOGO 镶边束腰帽衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'red&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('62', '长袖牛仔衬衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('63', '柔软圆领运动衫，饰有 A&F 标识图样', '558', '上装', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('64', 'LOGO 款圆领运动衫', '448', '上装', 'XXL&XL&L&M&S&XS', 'white&black&blue&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('65', '蕾丝饰边吊带衫', '328', '上装', 'XXL&XL&L&M&S&XS', 'white&black&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('66', 'ONE-SHOULDER BODYSUIT', '358', '上装', 'XXL&XL&L&M&S&XS', 'white&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('67', '修身款罗纹 T 恤', '228', '上装', 'XXL&XL&L&M&S&XS', 'white&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('68', '柔软 A&F 标识款 T 恤', '178', '上装', 'XXL&XL&L&M&S&XS', 'white&black&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('69', 'V 领网眼针织衫', '389', '上装', 'XXL&XL&L&M&S&XS', 'white&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('70', '柔软 A&F 标识款 T 恤', '198', '上装', 'XXL&XL&L&M&S&XS', 'white&black&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('71', '长袖标识款亨利式上衣', '258', '上装', 'XXL&XL&L&M&S&XS', 'white&black&darkBlue&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('72', 'LOGO 款全拉链帽衫', '698', '上装', 'XXL&XL&L&M&S&XS', 'white&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('73', '标识款 V 领针织衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'white&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('74', '亚麻混纺前身打结衬衫', '448', '上装', 'XXL&XL&L&M&S&XS', 'red&white&blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('75', 'LOGO 款长袖舒适 T 恤', '358', '上装', 'XXL&XL&L&M&S&XS', 'white&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('76', '标识款圆领针织衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'white&darkBlue&black&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('77', '牛津衬衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'white&blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('78', '腰部系带缎面上衣', '448', '上装', 'XXL&XL&L&M&S&XS', 'white&red&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('79', '前身打结纽扣式上衣', '358', '上装', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('80', '舒适裹身式上衣', '428', '上装', 'XXL&XL&L&M&S&XS', 'black&red&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('81', '侧叉针织中长裙', '448', '下装', 'XXL&XL&L&M&S&XS', 'black', '20%', '女装');
INSERT INTO `shopping` VALUES ('82', '缎面高叉中长裙', '558', '下装', 'XXL&XL&L&M&S&XS', 'black&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('83', '翻边裤脚运动裤', '558', '下装', 'XXL&XL&L&M&S&XS', 'black&red&white&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('84', '加高高腰腰带款短裤', '498', '下装', 'XXL&XL&L&M&S&XS', 'blue&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('85', '工装短裤', '498', '下装', 'XXL&XL&L&M&S&XS', 'black', '20%', '女装');
INSERT INTO `shopping` VALUES ('86', '前身裹身式裙裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'red&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('87', '腰带款迷你裙', '558', '下装', 'XXL&XL&L&M&S&XS', 'black&blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('88', '高叉中长裙', '558', '下装', 'XXL&XL&L&M&S&XS', 'white&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('89', '撕裂款高腰加倍紧身牛仔裤', '798', '下装', 'XXL&XL&L&M&S&XS', 'black&blue&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('90', '高腰紧身牛仔裤', '798', '下装', 'XXL&XL&L&M&S&XS', 'black&blue&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('91', '磨破款高腰牛仔短裤', '335', '下装', 'XXL&XL&L&M&S&XS', 'blue&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('92', 'SATIN BELTED TAPER PANTS', '648', '下装', 'XXL&XL&L&M&S&XS', 'red&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('93', '细条纹高腰九分牛仔裤', '798', '下装', 'XXL&XL&L&M&S&XS', 'black&blue&darkBlue&red&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('94', '加高高腰牛仔打底裤', '738', '下装', 'XXL&XL&L&M&S&XS', 'black&blue&darkBlue&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('95', '高腰九分喇叭牛仔裤', '738', '下装', 'XXL&XL&L&M&S&XS', 'black&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('96', '迷人曲线款高腰九分喇叭牛仔裤', '798', '下装', 'XXL&XL&L&M&S&XS', 'black', '20%', '女装');
INSERT INTO `shopping` VALUES ('97', '标识款高腰慢跑休闲裤', '448', '下装', 'XXL&XL&L&M&S&XS', 'black&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('98', '高腰针织短裤', '173', '下装', 'XXL&XL&L&M&S&XS', 'black', '20%', '女装');
INSERT INTO `shopping` VALUES ('99', '阔腿九分背带裤', '521', '下装', 'XXL&XL&L&M&S&XS', 'blue&darkBlue', '20%', '女装');
INSERT INTO `shopping` VALUES ('100', '加高高腰妈咪牛仔裤', '798', '下装', 'XXL&XL&L&M&S&XS', 'blue&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('101', '白色牛仔夹克', '988', '夹克', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('102', '大号短款牛仔夹克', '569', '夹克', 'XXL&XL&L&M&S&XS', 'blue&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('103', '亚麻休闲外套', '1150', '夹克', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('104', '经典假两件套牛仔夹克', '988', '夹克', 'XXL&XL&L&M&S&XS', 'blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('105', 'SHERPA TRUCKER JACKET', '1088', '夹克', 'XXL&XL&L&M&S&XS', 'white&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('106', 'TEDDY COAT', '1150', '夹克', 'XXL&XL&L&M&S&XS', 'black&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('1', '短袖纽扣式衬衫', '498', '上装', 'XXL&XL&L&M&S&XS', 'red&blue&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('2', 'SHORT-SLEEVE ICON OXFORD SHIRT', '498', '上装', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('3', '大号标识款加倍修身 POLO 衫', '498', '上装', 'XXL&XL&L&M&S&XS', 'blue&white', '20%', '男装');
INSERT INTO `shopping` VALUES ('4', 'LOGO 款图案圆领运动衫', '498', '上装', 'XXL&XL&L&M&S&XS', 'black', '20%', '男装');
INSERT INTO `shopping` VALUES ('5', '隐蔽式前襟 POLO 衫', '448', '上装', 'XXL&XL&L&M&S&XS', 'white&darkBlue', '20%', '男装');
INSERT INTO `shopping` VALUES ('6', '贴花 LOGO T 恤', '318', '上装', 'XXL&XL&L&M&S&XS', 'white&black&blue&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('7', '标识款圆领 T 恤（3 件装）', '388', '上装', 'XXL&XL&L&M&S&XS', 'white&black&blue&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('8', '标识款短袖亨利式上衣', ' 198', '上装', 'XXL&XL&L&M&S&XS', 'white&black', '20%', '男装');
INSERT INTO `shopping` VALUES ('9', '大号标识圆领 T 恤', ' 178', '上装', 'XXL&XL&L&M&S&XS', 'white&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('10', '标识款口袋 T 恤', '178', '上装', 'XXL&XL&L&M&S&XS', 'blue&black', '20%', '男装');
INSERT INTO `shopping` VALUES ('11', '标识款弧形下摆圆领 T 恤', '198', '上装', 'XXL&XL&L&M&S&XS', 'black&red', '20%', '男装');
INSERT INTO `shopping` VALUES ('12', '标识款牛津衬衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'white&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('13', '标识款弹力 POLO 衫', '224', '上装', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('14', '标识款牛津衬衫', '558', '上装', 'XXL&XL&L&M&S&XS', 'white&blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('15', '大号标识款圆领短袖 T 恤', '178', '上装', 'XXL&XL&L&M&S&XS', 'white', '20%', '男装');
INSERT INTO `shopping` VALUES ('16', '大号标识款弹力 POLO 衫', '229', '上装', 'XXL&XL&L&M&S&XS', 'blue', '20%', '男装');
INSERT INTO `shopping` VALUES ('107', 'COZY TEDDY JACKET', '988', '夹克', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('108', 'WOOL-BLEND DAD COAT', '1980', '夹克', 'XXL&XL&L&M&S&XS', 'black', '20%', '女装');
INSERT INTO `shopping` VALUES ('109', 'MINI SHERPA PUFFER JACKET', '1380', '夹克', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('110', '便携式保暖服', '1240', '夹克', 'XXL&XL&L&M&S&XS', 'red&black', '20%', '女装');
INSERT INTO `shopping` VALUES ('111', '不对称按扣抓绒上衣', '648', '夹克', 'XXL&XL&L&M&S&XS', 'blue&red&white', '20%', '女装');
INSERT INTO `shopping` VALUES ('112', '斜纹布机车夹克', '798', '夹克', 'XXL&XL&L&M&S&XS', 'blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('113', '格纹休闲外套', '1150', '夹克', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('114', '灯芯绒卡车司机夹克', '988', '夹克', 'XXL&XL&L&M&S&XS', 'white&black&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('115', '束带款工装夹克', '988', '夹克', 'XXL&XL&L&M&S&XS', 'white', '20%', '女装');
INSERT INTO `shopping` VALUES ('116', '人造毛领牛仔夹克', '1150', '夹克', 'XXL&XL&L&M&S&XS', 'white&black&blue', '20%', '女装');
INSERT INTO `shopping` VALUES ('117', '垂感军装风外套', '1240', '夹克', 'XXL&XL&L&M&S&XS', 'black&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('118', '人造皮革摩托风夹克', '1150', '夹克', 'XXL&XL&L&M&S&XS', 'black', '20%', '女装');
INSERT INTO `shopping` VALUES ('119', '轻便弹力羽绒保暖服', '1380', '夹克', 'XXL&XL&L&M&S&XS', 'black&red', '20%', '女装');
INSERT INTO `shopping` VALUES ('120', '仿羊羔绒衣领大号短款牛仔夹克', '988', '夹克', 'XXL&XL&L&M&S&XS', 'black&blue', '20%', '女装');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `username` varchar(255) NOT NULL DEFAULT '' COMMENT '表示用户名',
  `password` varchar(255) NOT NULL COMMENT '表示密码',
  `cookieId` varchar(255) NOT NULL COMMENT '表示加密的md5字符串（用于验证cookie登录）',
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='username表示用户名\r\npassword表示密码\r\ncookieId表示加密的md5字符串（用于验证cookie登录）\r\n其中cookieId用';

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('111@qq.com', '123456789', '4acb2cc005937a098de133040a6a7943');
