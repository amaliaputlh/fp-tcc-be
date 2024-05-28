module.exports = {
  HOST: "34.30.85.108",
  USER: "postgres",
  PASSWORD: "152003",
  DB: "learnnode",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
