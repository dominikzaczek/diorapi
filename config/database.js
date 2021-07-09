module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'diorapi_'),
        username: env('DATABASE_USERNAME', 'maria'),
        password: env('DATABASE_PASSWORD', '1qw56_Mi'),
      },
      options: {},
    },
  },
});
