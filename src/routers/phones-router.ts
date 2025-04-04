import { Router } from 'express';
import { createNewPhone, getPhoneByCpf } from '../controllers/phones-controller';
import { schemaValidate } from '../middlewares/schema-middleware';
import { phoneSchema } from '../schemas/phones-schema';

const phonesRouter = Router();

phonesRouter.post("/phones", schemaValidate(phoneSchema), createNewPhone);
phonesRouter.get("/phones/:document", getPhoneByCpf);

export default phonesRouter;