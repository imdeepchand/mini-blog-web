import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const SignupPage = React.lazy(() => import('./pages/signup/Signup'));
const SigninPage = React.lazy(() => import('./pages/signin/Signin'));
const MainLayout = React.lazy(() => import('./layout/MainLayout'));
const Blogs = React.lazy(() => import('./pages/blog/Blogs'));
const MyBlogs = React.lazy(() => import('./pages/myBlogs/MyBlogs'));
function App() {
  return (
    <Router basename='/'>
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Blogs />} />
            <Route path="/my-blogs" element={<MyBlogs />} />
          </Route>
           {/* Catch-all for 404 */}
           <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense >
    </Router >
  );
}

export default App;
