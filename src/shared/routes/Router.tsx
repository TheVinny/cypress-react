import { Route, Routes } from 'react-router-dom';
import { Home } from '../../modules/Home/Page/Home';
import { NotFound } from '../../modules/NotFound/Page/NotFound';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
