
module.exports = {
  getData: function (req, res) {
    Promise.all([
      new Promise(async (resolve, reject) => {
        const adv = await Adv.find();
        resolve(adv)
      }),
      new Promise(async (resolve, reject) => {
        const handline = await News.find({ newType: 'headlines' }).sort('id asc').limit(4);
        resolve(handline)
      }),
      new Promise(async (resolve, reject) => {
        const comprehensive = await News.find({ newType: 'comprehensive' }).sort('id asc').limit(4);
        resolve(comprehensive)
      }),
      new Promise(async (resolve, reject) => {
        const learning = await News.find({ newType: 'learning' }).sort('id asc').limit(8);
        resolve(learning)
      }),
      new Promise(async (resolve, reject) => {
        const story = await News.find({ newType: 'story' }).sort('id asc').limit(8);
        resolve(story)
      }),
      new Promise(async (resolve, reject) => {
        const notice = await Notice.find().sort('id asc').limit(8);
        resolve(notice)
      }),
    ]).then(arr => {
      res.json(arr)
    }).catch(err => {
      console.log(err);
    })
  },
  getDetail: async function (req, res) {
    const tableName = req.query.tableName;
    const id = req.query.id;
    const obj = await eval(tableName).findOne({ id });
    res.json(obj)
  },
  getNews: async function (req, res) {
    const newType = req.query.type;
    const start = req.query.start;
    const size = req.query.size;
    const arr = await News.find({ newType }).sort('id asc').skip(start).limit(size);
    res.json(arr)
  },
  getVideo: async function (req, res) {
    const start = req.query.start;
    const size = req.query.size;
    const arr = await Video.find().sort("id asc").skip(start).limit(size);
    res.json(arr)
  },
  getCaptcha: async function (req, res) {
    let captcha = '';
    for(let i = 0;i < 6;i++){
      captcha += parseInt(Math.random()*10)
    }
    const arr = await Yzm.find();
    if(arr.length===0){
      await Yzm.create({captcha});
    }else{
      await Yzm.update({id:1},{captcha});
    }
    res.json(captcha)

  },
  getListTotal: async function (req, res) {
    const newType = req.query.type;
    const clsType = req.query.clsType;
    if (clsType === 'news') {
      const number = await News.count({ newType });
      return res.json(number)
    }
    const number = await eval(clsType).count();
    res.json(number)
  },
  getListMsg: async function (req, res) {
    const newType = req.query.type;
    const start = req.query.start;
    const clsType = req.query.clsType;
    if (clsType === 'news') {
      const arr = await News.find({ newType }).skip(start).limit(10);
      return res.json(arr)
    }
    const arr = await eval(clsType).find().skip(start).limit(10);;
    res.json(arr)
  },
  getSearchTotal: async function (req, res) {
    const newType = req.query.type;
    const tableName = req.query.tableName;
    const keyword = req.query.keyword;
    if (tableName === 'News') {
      const number = await News.count({ newType,title:{contains:keyword}});
      return res.json(number)
    }
    const number = await eval(tableName).count({title:{contains:keyword}});
    res.json(number)
  },
  getSearchMsg: async function (req, res) {
    const newType = req.query.type;
    const start = req.query.start;
    const tableName = req.query.tableName;
    const keyword = req.query.keyword;
    if (tableName === 'News') {
      const arr = await News.find({ newType,title:{contains:keyword} }).skip(start).limit(5);
      return res.json(arr)
    }
    const arr = await eval(tableName).find({title:{contains:keyword}}).skip(start).limit(5);;
    res.json(arr)
  },
  userVisit: async function (req, res) {
    const obj=await Timer.findOne({id:1});
    const arr=await Timer.update({id:1},{count:obj.count+1}).fetch()
    res.json(arr[0].count)
  },
  Login: async function (req, res) {
    const rs=await Yzm.find();
    res.json(rs[0].captcha)
  },
  LoginInfo: async function (req, res) {
    const phone = req.body.phone;
    const rs=await Users.find({phone});
    let flag = 1;
    if(rs.length !== 0){
      await Users.update({phone},{phone})
      flag = 2
    }else{
      await Users.create({phone})
    }
    res.json(flag)
  },
  getUserInfo: async function (req, res) {
    const phone = req.body.phone
    arr = await Users.find({phone});
    res.json(arr[0]);
  },
  SearchNews: async function (req, res) {
    const size  = req.body.size;
    const keyword = req.body.keyword;
    const start = req.body.start;
    arr = await News.find({title:{contains:keyword}}).skip(start).limit(size);
    res.json(arr);
    console.log(arr)
  }
};

