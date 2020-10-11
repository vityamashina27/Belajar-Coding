const { default: Axios } = require("axios")
//axios merupakan library yg saya gunakan untuk mengambil api atau untuk mengakses endpoint api yg akan digunakan

exports.listJadwal = function(callback) {
    Axios.get('https://api.pray.zone/v2/times/day.json?city=Cimahi&date=2020-10-11')
        .then(function(resp){
            //callback disini hanya sebuah variable, kalian boleh mengubahnya sesuai selera
            // saya menggunakan callback karena logic disini mirip dengan return karna itu saya menggunakan variable 'callback' 
            callback(resp.data)
        });
}