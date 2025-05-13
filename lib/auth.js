import jwt from "jsonwebtoken";

export const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    return decoded;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
};

export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d", // 30 days
  });
};
