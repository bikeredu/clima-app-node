const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'X-RapidAPI-Key': 'WEMcjdNJt5mshPrfC4le3mRdJWBxp1q4XZnjsn8PLf8MNyQPXd' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No encontraron resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}