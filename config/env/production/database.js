var parse = require("pg-connection-string").parse;

var config = parse(process.env.DATABASE_URL);

console.log(config);

// This is my Heroku Config

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        schema: config.schema,
      },
      options: {
        ssl: false,
        debug: true,
      },
    },
  },
});
