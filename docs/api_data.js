define({ "api": [
  {
    "type": "get",
    "url": "/commodities",
    "title": "Get list of Commodities",
    "version": "0.1.0",
    "group": "Commodity",
    "name": "GetCommodities",
    "description": "<p>获取商品列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>获取类型：owner, admin, nearby, search</p>"
          }
        ],
        "owner": [
          {
            "group": "owner",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>商家</p>"
          }
        ],
        "admin": [
          {
            "group": "admin",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          }
        ],
        "nearby": [
          {
            "group": "nearby",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "nearby",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          }
        ],
        "search": [
          {
            "group": "search",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "search",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "search",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "commodities",
            "description": "<p>商品列表</p>"
          }
        ]
      }
    },
    "filename": "dao/commodity/commodityDao.js",
    "groupTitle": "Commodity"
  },
  {
    "type": "get",
    "url": "/commodities/:cid",
    "title": "Get data of a Commodity",
    "version": "0.1.0",
    "group": "Commodity",
    "name": "GetCommoditiesCid",
    "permission": [
      {
        "name": "admin(when type is admin)"
      }
    ],
    "description": "<p>获取商品信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cid",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>获取类型：user, admin</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "commodity",
            "description": "<p>商品信息</p>"
          }
        ]
      }
    },
    "filename": "dao/commodity/commodityDao.js",
    "groupTitle": "Commodity"
  },
  {
    "type": "get",
    "url": "/commodities/count/onsale",
    "title": "Get number of Commodities on sales promotion",
    "version": "0.1.0",
    "group": "Commodity",
    "name": "GetCommoditiesCount",
    "description": "<p>获取商店促销商品个数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "count",
            "description": "<p>促销商品个数</p>"
          }
        ]
      }
    },
    "filename": "dao/commodity/commodityDao.js",
    "groupTitle": "Commodity"
  },
  {
    "type": "get",
    "url": "/commodities/shops/:sid/classes/:cls",
    "title": "Get list of Commodities by class",
    "version": "0.1.0",
    "group": "Commodity",
    "name": "GetCommoditiesSSCC",
    "description": "<p>用户按照分类获取商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sid",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cls",
            "description": "<p>商品分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "commodities",
            "description": "<p>商品列表</p>"
          }
        ]
      }
    },
    "filename": "dao/commodity/commodityDao.js",
    "groupTitle": "Commodity"
  },
  {
    "type": "post",
    "url": "/commodities",
    "title": "Add a Commodity",
    "version": "0.1.0",
    "group": "Commodity",
    "name": "PostCommodities",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>添加商品</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商店名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classValue",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "originalPrice",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>现价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "details",
            "description": "<p>商品详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "promotionInfo",
            "description": "<p>促销信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pic1",
            "description": "<p>图片1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic2",
            "description": "<p>图片2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic3",
            "description": "<p>图片3</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic4",
            "description": "<p>图片4</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic5",
            "description": "<p>图片5</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "startTime",
            "description": "<p>促销开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endTime",
            "description": "<p>促销结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"添加成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/commodity/commodityDao.js",
    "groupTitle": "Commodity"
  },
  {
    "type": "put",
    "url": "/commodities/:cid",
    "title": "Update data of a Commodity",
    "version": "0.1.0",
    "group": "Commodity",
    "name": "PutCommodiesCid",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>更新商品信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cid",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "classValue",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "originalPrice",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>现价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "details",
            "description": "<p>商品详情</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "promotionInfo",
            "description": "<p>促销信息</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pic1",
            "description": "<p>图片1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic2",
            "description": "<p>图片2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic3",
            "description": "<p>图片3</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic4",
            "description": "<p>图片4</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "pic5",
            "description": "<p>图片5</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "prePic1",
            "description": "<p>原图片1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "prePic2",
            "description": "<p>原图片2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "prePic3",
            "description": "<p>原图片3</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "prePic4",
            "description": "<p>原图片4</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "prePic5",
            "description": "<p>原图片5</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "startTime",
            "description": "<p>促销开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "endTime",
            "description": "<p>促销结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"修改成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/commodity/commodityDao.js",
    "groupTitle": "Commodity"
  },
  {
    "type": "post",
    "url": "/common/images",
    "title": "Add an Image",
    "version": "0.1.0",
    "group": "Common",
    "name": "PostCommonImages",
    "description": "<p>上传图片</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "img_path",
            "description": "<p>图片名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"上传成功！\"\n  \"img_path\": \"5a005820-cbb2-11e9-a21f-b747c0a25fd6.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/common/commonDao.js",
    "groupTitle": "Common"
  },
  {
    "type": "delete",
    "url": "/favors/:uid/shops/:sid",
    "title": "Delete a Favor",
    "version": "0.1.0",
    "group": "Favor",
    "name": "GetFavorsUSS",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>取消收藏</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sid",
            "description": "<p>商店ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"取消成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/favor/favorDao.js",
    "groupTitle": "Favor"
  },
  {
    "type": "get",
    "url": "/favors/:uid/shops",
    "title": "Get list of Favors",
    "version": "0.1.0",
    "group": "Favor",
    "name": "GetFavorsUidShops",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>获取收藏列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "favors",
            "description": "<p>收藏列表</p>"
          }
        ]
      }
    },
    "filename": "dao/favor/favorDao.js",
    "groupTitle": "Favor"
  },
  {
    "type": "post",
    "url": "/favors",
    "title": "Add a Favor",
    "version": "0.1.0",
    "group": "Favor",
    "name": "PostFavors",
    "description": "<p>添加收藏</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"收藏成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/favor/favorDao.js",
    "groupTitle": "Favor"
  },
  {
    "type": "get",
    "url": "/lbs/location",
    "title": "Get Location Info",
    "version": "0.1.0",
    "group": "Lbs",
    "name": "GetLbsLocation",
    "description": "<p>获取经纬度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "location",
            "description": "<p>位置对象</p>"
          }
        ]
      }
    },
    "filename": "dao/lbs/lbsDao.js",
    "groupTitle": "Lbs"
  },
  {
    "type": "get",
    "url": "/lbs/tips",
    "title": "Get Location Tips",
    "version": "0.1.0",
    "group": "Lbs",
    "name": "GetLbsTips",
    "description": "<p>获取输入提示</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tips",
            "description": "<p>提示列表</p>"
          }
        ]
      }
    },
    "filename": "dao/lbs/lbsDao.js",
    "groupTitle": "Lbs"
  },
  {
    "type": "post",
    "url": "/owners",
    "title": "Add an Owner",
    "version": "0.1.0",
    "group": "Owner",
    "name": "PostOwners",
    "description": "<p>商家注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"注册成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/owner/ownerDao.js",
    "groupTitle": "Owner"
  },
  {
    "type": "get",
    "url": "/reports",
    "title": "Get list of Reports",
    "version": "0.1.0",
    "group": "Report",
    "name": "GetReports",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>获取举报列表</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "reports",
            "description": "<p>举报列表</p>"
          }
        ]
      }
    },
    "filename": "dao/report/reportDao.js",
    "groupTitle": "Report"
  },
  {
    "type": "post",
    "url": "/reports",
    "title": "Add a Report",
    "version": "0.1.0",
    "group": "Report",
    "name": "PostReports",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>添加举报</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cmdtId",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reason",
            "description": "<p>举报理由</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"举报成功，系统将在三个工作日内处理您的举报！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/report/reportDao.js",
    "groupTitle": "Report"
  },
  {
    "type": "put",
    "url": "/reports/:rid",
    "title": "Update a Report",
    "version": "0.1.0",
    "group": "Report",
    "name": "PutReportsRid",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>更新举报信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rid",
            "description": "<p>举报ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"举报处理成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/report/reportDao.js",
    "groupTitle": "Report"
  },
  {
    "type": "post",
    "url": "/session/:type",
    "title": "Login",
    "version": "0.1.0",
    "group": "Session",
    "name": "PostSessionType",
    "description": "<p>登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型：user, owner, admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录通证</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型</p>"
          }
        ]
      }
    },
    "filename": "dao/owner/ownerDao.js",
    "groupTitle": "Session"
  },
  {
    "type": "post",
    "url": "/session/:type",
    "title": "Login",
    "version": "0.1.0",
    "group": "Session",
    "name": "PostSessionType",
    "description": "<p>登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型：user, owner, admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录通证</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型</p>"
          }
        ]
      }
    },
    "filename": "dao/admin/adminDao.js",
    "groupTitle": "Session"
  },
  {
    "type": "post",
    "url": "/session/:type",
    "title": "Login",
    "version": "0.1.0",
    "group": "Session",
    "name": "PostSessionType",
    "description": "<p>登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型：user, owner, admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录通证</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>登录类型</p>"
          }
        ]
      }
    },
    "filename": "dao/user/userDao.js",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/shops",
    "title": "Get list of Shops",
    "version": "0.1.0",
    "group": "Shop",
    "name": "GetShops",
    "description": "<p>获取商店列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>获取类型：search, toCheck, full, lite, checking, toBeChecked</p>"
          }
        ],
        "search": [
          {
            "group": "search",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "search",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "search",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字</p>"
          }
        ],
        "full, lite, checking, toBeChecked": [
          {
            "group": "full, lite, checking, toBeChecked",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>商家</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "shops",
            "description": "<p>商店列表</p>"
          }
        ]
      }
    },
    "filename": "dao/shop/shopDao.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shops/:sid/classes",
    "title": "Get classes of a Shop",
    "version": "0.1.0",
    "group": "Shop",
    "name": "GetShopsSC",
    "description": "<p>获取商店商品分类</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>获取类型: owner, user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "classes",
            "description": "<p>分类列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"class\": \"披萨\"\n  },\n  {\n    \"class\": \"套餐\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "dao/shop/shopDao.js",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "/shops/:sid",
    "title": "Get data of a Shop",
    "version": "0.1.0",
    "group": "Shop",
    "name": "GetShopsSid",
    "description": "<p>获取商店信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sid",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>获取类型：full, lite</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "full": [
          {
            "group": "full",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商家ID</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>商家</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商店名称</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>营业时间</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>商店地址</p>"
          },
          {
            "group": "full",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "full",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "legalRepr",
            "description": "<p>法人代表</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "idNumber",
            "description": "<p>法人身份证号</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "shopImg",
            "description": "<p>商店图片</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "withIdFrontImg",
            "description": "<p>法人手持身份证正面照</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "withIdBackImg",
            "description": "<p>法人手持身份证背面照</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "licenseImg",
            "description": "<p>营业执照</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "notice",
            "description": "<p>告示栏</p>"
          },
          {
            "group": "full",
            "type": "number",
            "optional": false,
            "field": "shopState",
            "description": "<p>商店状态</p>"
          },
          {
            "group": "full",
            "type": "number",
            "optional": false,
            "field": "toBeChecked",
            "description": "<p>待审核标志</p>"
          },
          {
            "group": "full",
            "type": "string",
            "optional": false,
            "field": "checkMsg",
            "description": "<p>审核意见</p>"
          }
        ],
        "lite": [
          {
            "group": "lite",
            "type": "number",
            "optional": false,
            "field": "shopId",
            "description": "<p>商家ID</p>"
          },
          {
            "group": "lite",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商店名称</p>"
          },
          {
            "group": "lite",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>商店地址</p>"
          },
          {
            "group": "lite",
            "type": "string",
            "optional": false,
            "field": "notice",
            "description": "<p>告示栏</p>"
          },
          {
            "group": "lite",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "lite",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>营业时间</p>"
          },
          {
            "group": "lite",
            "type": "string",
            "optional": false,
            "field": "shopImg",
            "description": "<p>商店图片</p>"
          }
        ]
      }
    },
    "filename": "dao/shop/shopDao.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/shops",
    "title": "Add a Shop",
    "version": "0.1.0",
    "group": "Shop",
    "name": "PostShops",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>添加商店</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>商家</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商店名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "startTime",
            "description": "<p>营业开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "endTime",
            "description": "<p>营业结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "legalRepr",
            "description": "<p>法人代表</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "idNumber",
            "description": "<p>法人身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shopImg",
            "description": "<p>商店图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "withIdFrontImg",
            "description": "<p>法人手持身份证正面照</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "withIdBackImg",
            "description": "<p>法人手持身份证背面照</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "licenseImg",
            "description": "<p>营业执照</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "notice",
            "description": "<p>告示栏</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"申请成功，系统将在三个工作日内审核您的信息！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/shop/shopDao.js",
    "groupTitle": "Shop"
  },
  {
    "type": "put",
    "url": "/shops/:sid",
    "title": "Update data of a Shop",
    "version": "0.1.0",
    "group": "Shop",
    "name": "PutShopsSid",
    "permission": [
      {
        "name": "owner, admin"
      }
    ],
    "description": "<p>更新商店信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sid",
            "description": "<p>商店ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>更新类型：update, alter, manage</p>"
          }
        ],
        "update": [
          {
            "group": "update",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商店名称</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "update",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "update",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": true,
            "field": "notice",
            "description": "<p>告示栏</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": true,
            "field": "startTime",
            "description": "<p>营业开始时间</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": true,
            "field": "endTime",
            "description": "<p>营业结束时间</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": false,
            "field": "shopImg",
            "description": "<p>商店图片</p>"
          },
          {
            "group": "update",
            "type": "string",
            "optional": true,
            "field": "preImg",
            "description": "<p>原商店图片</p>"
          }
        ],
        "alter": [
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>商店名称</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "alter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "alter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "notice",
            "description": "<p>告示栏</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "startTime",
            "description": "<p>营业开始时间</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "endTime",
            "description": "<p>营业结束时间</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "shopImg",
            "description": "<p>商店图片</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "preImg",
            "description": "<p>原商店图片</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "legalRepr",
            "description": "<p>法人代表</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "idNumber",
            "description": "<p>法人身份证号</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "withIdFrontImg",
            "description": "<p>法人手持身份证正面照</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "preIdFrontImg",
            "description": "<p>原法人手持身份证正面照</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "withIdBackImg",
            "description": "<p>法人手持身份证背面照</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "preIdBackImg",
            "description": "<p>原法人手持身份证背面照</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": false,
            "field": "licenseImg",
            "description": "<p>营业执照</p>"
          },
          {
            "group": "alter",
            "type": "string",
            "optional": true,
            "field": "preLicenseImg",
            "description": "<p>原营业执照</p>"
          }
        ],
        "manage": [
          {
            "group": "manage",
            "type": "string",
            "optional": false,
            "field": "op",
            "description": "<p>审核操作</p>"
          },
          {
            "group": "manage",
            "type": "string",
            "optional": true,
            "field": "checkMsg",
            "description": "<p>审核意见</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"修改成功！\"\n}\n\nHTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"申请提交成功，请耐心等待审核结果！\"\n}\n\nHTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"操作成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/shop/shopDao.js",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Add a User",
    "version": "0.1.0",
    "group": "User",
    "name": "PostUsers",
    "description": "<p>用户注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"注册成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/user/userDao.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:uid",
    "title": "Update data of a User",
    "version": "0.1.0",
    "group": "User",
    "name": "PutUsersUid",
    "description": "<p>用户修改密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>原密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPwd",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>成功标志</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"更改成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "dao/user/userDao.js",
    "groupTitle": "User"
  }
] });
