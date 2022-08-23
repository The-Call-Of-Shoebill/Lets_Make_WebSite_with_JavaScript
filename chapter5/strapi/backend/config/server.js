module.exports = ({ env }) => ({
  host: env('HOST', '10.10.10.173'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
