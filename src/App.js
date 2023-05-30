import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRouter } from './router';
import DefaultLayout from './layout/defaultLayout';
import Login from './pages/Login';
import Home from './pages/Home/Home';
function App() {
  const ischeck = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRouter.map((router, index) => {
            let Layout = DefaultLayout;
            const Page = router.component;
            
            if (router?.layout) 
              Layout = router.layout;
            else if (["/login", "/register"].includes(router.path))
              Layout = Fragment;
              return (
                <Route
                  key={index}
                  path={router.path}
                  element={
                      ischeck ? 
                      <Layout>
                        <Page/>
                      </Layout> :
                      <Navigate to={"/login"} />
                  }
                />
              )
          })}
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
