import { Router } from "express";
import coursesRoute from './coursesRoute';

const router = Router();

router.use('/courses', coursesRoute);

export default router;

