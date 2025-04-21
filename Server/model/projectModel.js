import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    liveDemo: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {timestamps: true});


const Project = mongoose.model("Project", projectSchema);
export default Project;
