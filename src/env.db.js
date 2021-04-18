MONGODB_HOST     = "bdjtdiulbhsrmaq-mongodb.services.clever-cloud.com",
MONGODB_DB       = "bdjtdiulbhsrmaq",
MONGODB_USER     = "ukrrgpsdqvd3j6rwjcvg",
MONGODB_PORT     = "27017",
MONGODB_PASSWORD = "4jR7ncra2VZn5HnemJu6"


module.exports = {
    database:[`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`]
}