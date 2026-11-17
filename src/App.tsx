import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ScrollToTop } from '@/components/common/ScrollToTop';

// Lazy-loaded route views for optimized code splitting
const HomePage = lazy(() =>
  import('@/pages/Home').then((module) => ({ default: module.HomePage }))
);
const ProjectDetailsPage = lazy(() =>
  import('@/pages/ProjectDetails').then((module) => ({
    default: module.ProjectDetailsPage,
  }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound').then((module) => ({
    default: module.NotFoundPage,
  }))
);

// Minimalist Creative Tech fallback loader
const PageFallback: React.FC = () => (
  <div className="flex-1 flex items-center justify-center min-h-[50vh]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-accent-primary/20 border-t-accent-primary animate-spin" />
      <span className="text-xs font-mono text-text-muted">Loading view...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<PageFallback />}>
              <ProjectDetailsPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
    </>
  );
};

export default App;
