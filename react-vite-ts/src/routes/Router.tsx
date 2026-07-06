import { Route, Routes } from 'react-router';

import { HomePage, NotFoundPage } from '@/routes/pages';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
