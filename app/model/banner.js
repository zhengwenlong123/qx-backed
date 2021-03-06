const Sequelize = require('sequelize');
const db = require('../init').db;

let banner = db.define('banner_img',//轮播图片
  {
    id: {
      type: Sequelize.INTEGER(4),
      allowNull:false,//非空
      autoIncrement:true,//自增加
      primaryKey:true,//主键
      field:'id'
    },
    url: {
      type: Sequelize.STRING(300),
      comment:'轮播图片路径',
      field:'url'
    },
    name: {
      type: Sequelize.STRING(255),
      comment:'图片文件名',
      field:'name'
    }
  },
  {
		freezeTableName: true,
		timestamps: false, //取消默认生成的createdAt、updatedAt字段
  }
);

module.exports = banner;
