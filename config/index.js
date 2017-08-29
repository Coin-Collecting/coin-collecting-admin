let config = {
  development: {
    url: 'http://www.mycoin.store',
    db: {
      host:   'localhost',
      port:   '3301',
      user:     'root',
      pass:     ''
    },
    api: {
      url: 'http://localhost:5000/graphql',
      port: 5000,
    }
  },
  production: {
    url: 'http://www.mycoin.store',
    db: {
      host:   'localhost',
      port:   '3306',
      user:     'root',
      pass:     'Dalekini21'
    },
    api: {
      url: 'http://www.mycoin.store:5000/graphql',
      port: 8080,
    }
  }
};

module.exports = config;