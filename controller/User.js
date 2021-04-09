const userModel= require('../model/User')
const bcrypt = require('bcrypt')
exports.register = (data) =>
    new Promise ((resolve, reject)=>{
        userModel.findOne({
            uname: data.uname
        }).then(user => {
            if(user) {
                resolve({
                    status : false,
                    pesan: 'dah ada'
                })
            }else{
                bcrypt.hash(data.password, 10 , (err, hash) => {
                  data.password = hash
                  userModel.create(data)
                    .then (()=>{
                        //console.log('berhasil')
                        resolve({
                            status : true,
                            pesan : 'berhasil'
                        })
                    }).catch(() =>{
                        //console.log('gagal')
                        reject ({
                            status : false,
                            pesan : 'gagal'
                        })
                    })   
                }) 
            }
        })
        
    })