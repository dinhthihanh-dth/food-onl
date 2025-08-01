import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Generate JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "Người dùng đã tồn tại" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Vui lòng nhập địa chỉ email hợp lệ" });
        }

        // Check password strength
        if (password.length < 8) {
            return res.json({ success: false, message: "Mật khẩu phải có ít nhất 8 ký tự" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Đã xảy ra lỗi khi đăng ký người dùng" });
    }
};

// Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Người dùng không tồn tại" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Email hoặc mật khẩu không đúng" });
        }

        // Create token
        const token = createToken(user._id);

        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Đã xảy ra lỗi khi đăng nhập" });
    }
};

export { registerUser, loginUser };
