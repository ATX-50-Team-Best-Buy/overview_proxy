require('babel-register');
const express = require('express')
const app = express();
const port = 4001;
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { routes } = require('../config.json');


// for (route of routes) {
//   app.use(route.route,
//     createProxyMiddleware({
//       target:route.address,
//       pathRewrite: (path, req) => {
//         return path.split('/').slice(2).join('/');
//       }
//     })
//   );
// }

// app.use('/reviews', createProxyMiddleware('http://localhost:4000'));
// app.use('/products/*', createProxyMiddleware('http://localhost:3001'));


// const searchProxy = httpProxy.createProxyServer({target:'http://localhost:3001'}).listen(port);
// const reviewProxy = httpProxy.createProxyServer({target:'http://localhost:4000'}).listen(port);

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json())


app.listen(port, () => console.log(`Proxy server is hanging out at http://localhost:${4001}`));