/**
 * @<案例展示>编辑信息的图片模型
 */
const Sequelize = require('sequelize');
const db = require('../init').db;

let banner = db.define('projects_img',//轮播图片
  {
    picId: {
      type: Sequelize.INTEGER(4),
      allowNull:false,//非空
      autoIncrement:true,//自增加
      primaryKey:true,//主键
      field:'picId'
    },
    url: {
      type: Sequelize.STRING(255),
      comment:'轮播图片路径',
      field:'url'
    },
    name: {
      type: Sequelize.STRING(255),
      field:'name'
    },
    infoId:{
        type: Sequelize.INTEGER(4),
        field:'infoId'
        // allowNull:false,//非空
    }
  },
  {
		freezeTableName: true,
		timestamps: false, //取消默认生成的createdAt、updatedAt字段
  }
);

module.exports = banner;
