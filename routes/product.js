import { getAll, getDetail } from './../controller/product';
import { Router } from 'express';

const router = Router()
router.get('/product', getAll)
router.get('/product/:id', getDetail)
router.delete('/product/:id', remove)

export default router()
