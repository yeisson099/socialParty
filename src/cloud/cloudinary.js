const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'socialparty',
    api_key: '277741645629917',
    api_secret: 'xCDhIg0CGrh2uxB_A5V58uyZnL8'
})

module.exports = cloudinary;