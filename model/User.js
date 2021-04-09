const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    //username : String
    //pakai defautl
    uname : {
        default: '',
        type: String
    },
    password : {
        default: '',
        type: String
    },
    namalengkap: {
        default: '',
        type: String
    },
    alamat: {
        default: '',
        type: String
    }
})

module.exports = mongoose.model('user', UserSchema)