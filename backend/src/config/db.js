  const { PrismaClient } = require("@prisma/client");

  const prisma = new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

  const connectDB = async () => {
    try {
      await prisma.$connect();
      console.log("DB connented via prisma");
    } catch (error) {
      console.error(`database connection error ${error}`);
      process.exit(1);
    }
  };
  const disConnectDB = async () => {
    await prisma.$disconnect();
  };

  module.exports = {
    prisma,
    connectDB,
    disConnectDB,
  };
