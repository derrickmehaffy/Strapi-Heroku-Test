module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_", 5432),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USER", "strapi"),
        password: env("DATABASE_PASS", "strapi"),
        schema: "test",
      },
      options: {
        ssl: false,
        debug: true,
      },
    },
  },
});
