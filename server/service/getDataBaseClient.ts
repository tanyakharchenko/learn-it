const { MongoClient } = require('mongodb');

console.log(process.env.DB_NAME, process.env.DB_PASSWORD, 'process.env.DB_NAMEprocess.env.DB_NAME')

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.5olbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default client;