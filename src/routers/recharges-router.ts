import { Router } from 'express';
import { schemaValidate } from '../middlewares/schema-middleware';
import { rechargeDataSchema } from '../schemas/recharges-schema';
import { newRecharge } from '../controllers/recharges-controller';

const rechargesRouter = Router();

rechargesRouter.post("/recharges", schemaValidate(rechargeDataSchema),newRecharge);

export default rechargesRouter;