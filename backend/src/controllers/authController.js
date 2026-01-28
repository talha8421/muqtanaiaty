const { prisma } = require("../config/db.js");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { fullName, email, phone, nationalId, password, role } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const userExists = await prisma.user.findUnique({where :{email }})
    if (userExists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        fullName :fullName,
        email,
        phone,
        nationalId,
        password: hashedPassword,
        role: role ? role.toUpperCase() : "BUYER", 
      },
    });

    res.status(201).json({
      message: "User created successfully!",
      user: { id: user.id, email: user.email, role: user.role }
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register };