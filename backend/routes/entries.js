import express from 'express';
import { createEntry, getEntry } from '../controller/main-controller.js';

const router = express.Router();


router.post("/new", createEntry);
router.get("", getEntry);


export default router;