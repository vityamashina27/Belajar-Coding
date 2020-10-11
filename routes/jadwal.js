var express = require('express');
const { listJadwal } = require('../lib/jadwalLib');
var router = express.Router();
var jsonJadwal;

router.get('/', function(req, res, next) {
    //get api Jadwal (dir = lib/jadwalLib.js)
    listJadwal(function(response){
        //cek apakah respon yg diambil sesuai dengan keinginan
        console.log(response.results.datetime[0].times);
        //masukin respon kedalam variable jsonJadwal
        jsonJadwal = response.results.datetime[0].times;
    });
    //rapihin data parser ke json
    var data = {
        'title' : 'Jadwal Sholat',
        'jadwals' : jsonJadwal
    }
    //buka view jadwal sambil ngirimin data dari json diatas (var data)
    res.render('jadwal', data );
});

module.exports = router;
