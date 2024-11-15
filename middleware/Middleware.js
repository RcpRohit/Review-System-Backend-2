import UserModel from "../models/User.js"
import AlumniModel from "../models/reviews.js"
import StudentModel from "../models/Likes.js"

export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email });

    if (userInfo && userInfo.role === "Admin") {
      next();
    } else {
      res.status(403).json({
        message: "Access Denied: Only Admins can access this resource.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const isAlumni = async (req, res, next) => {
  try {
    const { email } = req.body;

    const alumniInfo = await AlumniModel.findOne({ email });

    if (alumniInfo && alumniInfo.role === "Alumni") {
      next();
    } else {
      res.status(403).json({
        message: "Access Denied: Only Alumni can access this resource.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const isStudent = async (req, res, next) => {
  try {
    const { email } = req.body;

    const studentInfo = await StudentModel.findOne({ email });

    if (studentInfo && studentInfo.role === "Student") {
      next();
    } else {
      res.status(403).json({
        message: "Access Denied: Only Students can access this resource.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
