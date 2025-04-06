import { Router } from 'express';
import { schemaValidate } from '../middlewares/schema-middleware';
import { rechargeDataSchema } from '../schemas/recharges-schema';
import { getRecharges, newRecharge } from '../controllers/recharges-controller';

const rechargesRouter = Router();

rechargesRouter.post("/recharges", schemaValidate(rechargeDataSchema),newRecharge);
rechargesRouter.get("/recharges/:number", getRecharges)

export default rechargesRouter;
