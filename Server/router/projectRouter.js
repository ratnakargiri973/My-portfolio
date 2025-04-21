import express from 'express'
import { addProject, getAllProjects, getSingleProject } from '../controller/projectController.js';
import upload from '../middleware/multer.js';
const projectRouter = express.Router();

projectRouter.post('/add', upload.single("image"), addProject);
projectRouter.get('/get', getAllProjects);
projectRouter.get('/get/:id', getSingleProject);

export default projectRouter;