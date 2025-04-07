import { Router } from 'express';
import { getSummary } from '../controllers/summary-controller';

const summaryRouter = Router();

summaryRouter.get("/summary/:document", getSummary);

export default summaryRouter;