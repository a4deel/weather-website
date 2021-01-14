const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=10a3b80420195368b6da8d068e0cb8c3&query=' + latitude + ',' + longitude + '&units=m'
    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find Location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast