module.exports = {
  attributes: {
    phone: { type: 'string', required: true,unique:true },
    nickname: { type: 'string', defaultsTo:'用户666'},
    portrait: { type: 'string', defaultsTo:'portrait.jpg'},
    headlines: {type: 'number', defaultsTo: 0 },
    liked: {type: 'number', defaultsTo: 0 },
    fans: {type: 'number', defaultsTo: 0 },
    describe: {type: 'number', defaultsTo: 0 },
  }
};

