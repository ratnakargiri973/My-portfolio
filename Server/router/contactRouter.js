import express from 'express';
import { sendingEmail } from '../utils/nodeMailer.js';

const contactRouter = express.Router();

contactRouter.post('/send', sendingEmail);

export default contactRouter;