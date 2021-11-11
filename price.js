const api = require('./api.json');
const https = require('https');


function get(from, to, date) {
    const request = https.get(`https://api.polygon.io/v1/open-close/crypto/${from}/${to}/${date}?adjusted=true&apiKey=${api.key}`,
    response => {
        let body = "";
        response.on('data', chunk => {
            body += chunk
        });

        response.on('end', () => {
            const data = JSON.parse(body);
            console.dir(data);   
        });
    }
    );
}

module.exports.get = get;