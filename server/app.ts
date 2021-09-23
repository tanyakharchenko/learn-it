import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(5000, () => {
    console.log('The application is listening on port 3000!');
})

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tanyakh1606:<Alicein2002>@cluster0.5olbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  console.log(collection, 'collection');
  client.close();
});