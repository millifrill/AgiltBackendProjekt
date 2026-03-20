import express from 'express';

import {
  createCollection,
  deleteCollection,
  getCollectionById,
  getCollections,
  updateCollection,
  getCollectionByType,
  getCollectionByUserId,
} from '../controllers/collectionController.ts';

const router = express.Router();

router.get('/collections', getCollections);
router.post('/collections', createCollection);
router.delete('/collections/:id', deleteCollection);
router.get('/collections/:id', getCollectionById);
router.put('/collections/:id', updateCollection);
router.get('/collectionType/:type', getCollectionByType);
router.get('/collectionUser/:id', getCollectionByUserId);
export default router;
