import UserModel from "../models/User.js"
import AlumniModel from "../models/reviews.js"
import StudentModel from "../models/Likes.js"

export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email })

    if(userInfo && userInfo.role=="Admin")
    {
        next();
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};

export const isAlumni = async (req, res, next) => {
  try {
    const { email } = req.body;

    const alumniInfo = await AlumniModel.findOne({ email })

    if(alumniInfo && alumniInfo.role=="Alumni")
    {
        next();
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};

export const isStudent = async (req, res, next) => {
  try {
    const { email } = req.body;

    const studentiInfo = await StudentModel.findOne({ email })

    if(studentiInfo && studentiInfo.role=="Student")
    {
        next();
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
    }

  } 
  catch(error) 
  {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};


