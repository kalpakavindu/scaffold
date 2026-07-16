import { Router } from 'express';

const indexRoutes = Router();

indexRoutes.get('/', (_, res) => {
  res.status(200).json({ message: 'API is running' });
});

export { indexRoutes };
