module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',  
        host: env('DATABASE_HOST', '77.68.115.165'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'diorapi2_'),
        username: env('DATABASE_USERNAME', 'maria2'),
        password: env('DATABASE_PASSWORD', '1qw56_Mi'),
      },
      options: {},
    },
  },
});
