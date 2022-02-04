module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b474f4730ff8ccfacf9ecbeea4be7272'),
  },
});
