const { default: Axios } = require("axios")

exports.listJadwal = function(callback) {
    Axios.get('https://api.pray.zone/v2/times/day.json?city=Cimahi&date=2020-10-11')
        .then(function(resp){
            callback(resp.data)
        });
}