const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=327cc1d022609e0c7e1982b56a6caa6e&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}