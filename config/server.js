module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8080),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cd92749f9f1e876eef87931c9c9d89fd"),
    },
  },
});
