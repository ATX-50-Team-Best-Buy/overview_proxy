module.exports = {
  apps: [{
    name: 'proxy-server',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-23-59-112.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FEC-BestBuy-RW.pem',
      ref: 'origin/master',
      repo: 'https://github.com/ATX-50-Team-Best-Buy/rw_proxy.git',
      path: '/home/ubuntu/proxy-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}