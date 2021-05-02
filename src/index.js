const app = require('./app');
var PORT = process.env.PORT || app.get('port');
require('./database/database');

async function main() {
    await app.listen(PORT);
    console.log('server on port: '+ PORT);
}

main();