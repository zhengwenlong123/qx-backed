// const {Info, Code,Product} = require('../model')
// const common = require('../helper/commom')
// const Joi = require('joi')
// const ERRORS = require('../helper/errors')
// const db = require('../init')
// const Sequelize = require('sequelize')
// module.exports.index = (req, res) => {
//   res.render('html/main',
//     {}
//   );
// }
const {newsBlock,banner,newsSingle} = require('../model')

/* 菜单切换路由 */
module.exports.homePage = async (req, res) => {
  console.info('....首页....')
  let banner_data = await banner.findAll();
  res.render('html/home_page',
    {
      sy_visited:'active',
      banner:'partials/banner',
      bannerData:JSON.parse(JSON.stringify(banner_data))
    }
  );
}
module.exports.aboutUs = async (req, res) => {
  console.info('....关于我们....')
  let banner_data = await banner.findAll();
  res.render('html/about_us',
    { 
      gywm_visited:'active',
      banner:'partials/banner',
      bannerData:JSON.parse(JSON.stringify(banner_data))
    }
  );
}
module.exports.products = async (req, res) => {
  console.info('....产品中心....')
  let banner_data = await banner.findAll();
  res.render('html/products',
    {
      cpzx_visited:'active',
      banner:'partials/banner',
      bannerData:JSON.parse(JSON.stringify(banner_data))
    }
  );
}
module.exports.projects = async (req, res) => {
  console.info('....案例展示....')
  let banner_data = await banner.findAll();
  res.render('html/projects',
    {
      alzs_visited:'active',
      banner:'partials/banner',
      bannerData:JSON.parse(JSON.stringify(banner_data))
    }
  );
}
module.exports.news = async (req, res) => {
  console.info('....新闻中心....')
  let banner_data = await banner.findAll();
  const newsBlock_data = await newsBlock.findAll();
  const newsSingle_data = await newsSingle.findAll();
  res.render('html/news',
    {
      xwzx_visited:'active',
      banner:'partials/banner',
      bannerData:JSON.parse(JSON.stringify(banner_data)),
      newsBlockData: JSON.parse(JSON.stringify(newsBlock_data)),
      newsSingleData: JSON.parse(JSON.stringify(newsSingle_data)),
      currentUrl:'新闻中心'
    }
  );
}
module.exports.contactUs = async (req, res) => {
  console.info('....联系我们....')
  let banner_data = await banner.findAll();
  res.render('html/contact_us',
    {
      lxwm_visited:'active',
      banner:'partials/banner',
      bannerData:JSON.parse(JSON.stringify(banner_data))
    }
  );
}

function handleBanner(data){
  let banner_da = {}
  banner_da = JSON.parse(JSON.stringify(data))
  banner_da.forEach((el,index) => {
    if(index != 0){
      banner_da[index].display = 'display:none'
    }
  })
  return banner_da
}
