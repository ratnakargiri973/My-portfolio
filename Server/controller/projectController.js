import Project from "../model/projectModel.js";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../utils/cloudinary.js";

export const addProject = async (req, res) => {
     try {
        const imageObj = await uploadToCloudinary(req.file.buffer);
        const {name, githubLink, liveDemo, description, features, techStack} = req.body;

        const project = new Project({
            name,
            githubLink,
            liveDemo,
            description,
            features,
            techStack,
            image: imageObj.secure_url
        });

        await project.save();
        res.status(201).json({message: "New Project is uploaded successfully", project});
     } catch (error) {
        res.status(500).json({error: "Error in uploading project", error});
        console.log(error);
     }
}

export const getAllProjects = async (req, res) => {
    try {
        let query = {};

        if(req.query.name){
            query.name = { $regex: new RegExp(req.query.name, "i")};
        }

        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = 9;
        const skip = (page - 1) * limit;

        const projects = await Project.find(query).skip(skip).limit(limit);

        const totalCount = await Project.countDocuments(query);
        res.send({
            projects,
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
          });
    } catch (error) {
        res.status(500).json({error: "Error in fetching projects"});
    }
}

export const getSingleProject = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: "Given ID is not in proper format"})
        }

        const project = await Project.findById(id);

        if(!project){
            return res.status(404).json({message: "Project with given ID is not found"});
        }

        res.status(200).json({message: "Project with given ID is fetched successfully", project});

    } catch (error) {
        res.status(500).json({error: "Error in fetching the project of given ID"});
    }
}