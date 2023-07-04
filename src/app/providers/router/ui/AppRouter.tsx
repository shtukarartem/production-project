import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    { Object.values(routeConfig).map(({ element, path }) => (
      <Route
      key={path}
      element={<div className='page-wrapper'>{element}</div>}
      path={path}
      />
    )) }
    </Routes>
    </Suspense>
  );
}
