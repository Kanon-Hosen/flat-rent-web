import jwt from "jsonwebtoken";

export const verifyToken = async (token) => {
  try {
    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userId) return null;

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
