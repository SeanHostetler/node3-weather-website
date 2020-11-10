const request = require('postman-request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4762a0f44a9d230c68411c2f8022fc3e&query='+ latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined, body.current.weather_descriptions[0] + '. The temperature is '
                + body.current.temperature+ ' degrees.  It feels like '+ body.current.feelslike + ' degrees.  The humidity is ' 
                + body.current.humidity + '%.')
        }
    })
}


module.exports = forecast