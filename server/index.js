const express = require('express')
const app = express();
const port = 2005;
const path = require('path');
const cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));



app.listen(port, () => console.log(`Proxy server is hanging out at http://localhost:${port}`));