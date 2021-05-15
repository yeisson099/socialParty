MONGODB_HOST     = "buurnejvits6h8p-mongodb.services.clever-cloud.com",
MONGODB_DB       = "buurnejvits6h8p",
MONGODB_USER     = "urndudnf5igxujvybidy",
MONGODB_PORT     = "27017",
MONGODB_PASSWORD = "dmdvD0kd1QHbhrpdQYkD"


module.exports = {
    database:[`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`]
}
