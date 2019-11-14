const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api', async (req, res) => {
  const user = req.query.user || 'lukenems';
  let response = await axios.get(`https://api.github.com/users/${user}`);
  res.json({ user: response.data});
})

//sending html in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  //enforces behavior of SPA
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  }) 
}

const PORT = process.env.PORT || 8020;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));