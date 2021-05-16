MONGODB_HOST     = "bw1qyxvshidsxhc-mongodb.services.clever-cloud.com",
MONGODB_DB       = "bw1qyxvshidsxhc",
MONGODB_USER     = "uusfpvbtu9oj7933gmfj",
MONGODB_PORT     = "27017",
MONGODB_PASSWORD = "hVqRmYLfYZkQIMyYiM98"


module.exports = {
    database:[`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`]
}
