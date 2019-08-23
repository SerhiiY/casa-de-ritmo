const express = require('express');
const app = express();
const pagesRouter = require('./src/routers/pages-router');
const cors = require('cors');
const {port} = require('./config/config');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use('/pages', pagesRouter);


app.listen(port, (err) => {
  if (err) {
    return console.log('Something was going wrond!', err)
  }
  console.log(`Server is listening on ${port}`);
});