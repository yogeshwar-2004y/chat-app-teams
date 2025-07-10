import jwt from "jsonwebtoken"
export const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
    // cookies
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // Milleseconds
        httpOnly: true, // Prevent from attacks like Xss
        sameSite: "strict", // csrf attacks
        secure: process.env.NODE_ENV !== "development"
    })

    return token;
};

