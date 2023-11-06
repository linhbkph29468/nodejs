import { getAll } from './../controller/product';
import { Router } from 'express';

const router = Router()
router.get('/product', getAll)

export default router()
