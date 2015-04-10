var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    userName:{
        type:'string',
        required:true,
        unique:true
    },
    email:{
        type:'email',
        required:true,
        unique:true
    },
    password:{
        type:'string',
        required:true
    },

    /// associations


    /// instance methods
    toJSON: function(){
        var userObj = this.toObject();
        delete userObj.password;
        return userObj;
    }
  },

  //req.body  {email:"...",password:"qwerty"}
  //User.create(req.body)
  //Model.beforeCreate(value,function(err,data){ ... })
  //...next line of code
  beforeCreate:function(values,cb){
    bcrypt.hash(values.password,10,function(err,hash){
        if(err) return cb(err);
        values.password=hash;
        cb();
    })
  }
};