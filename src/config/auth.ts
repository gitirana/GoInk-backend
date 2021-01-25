export default {
  jwt: {
    secret: process.env.APP_SECRETE,
    expiresIn: '1d',
  },
};
