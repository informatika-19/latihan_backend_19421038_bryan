const kegiatanModel = require('../model/kegiatan')

exports.create= (data) =>
  new Promise((resolve, reject)=> {
    //kegiatanModel.create() fungsi untuk menyimpan kegiatan yang di imput
    kegiatanModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'berhasil iput'
      })).catch(()=> ({
        status : false,
        pesan : 'gagal iput'
      }))
  })