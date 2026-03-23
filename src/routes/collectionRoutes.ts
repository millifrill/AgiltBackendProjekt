import express from 'express';

import {
  createCollection,
  deleteCollection,
  getCollectionById,
  getCollections,
  updateCollection,
  getCollectionByType,
  getCollectionByTypeUserId,
} from '../controllers/collectionController.ts';

const router = express.Router();

router.get('/collections', getCollections);
router.post('/collections', createCollection);
router.delete('/collections/:id', deleteCollection);
router.get('/collections/:id', getCollectionById);
router.put('/collections/:id', updateCollection);
router.get('/collectionType/:type', getCollectionByType);
router.post('/collectionTypeUser', getCollectionByTypeUserId);
export default router;
