import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRouter } from './router';
import DefaultLayout from './layout/defaultLayout';
import Login from './pages/Login';
import Home from './pages/Home/Home';
function App() {

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const accessToken = getCookie("token_3");
  const isLogin = accessToken;
  const props = { accessToken };
  
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
                    isLogin
                      ? <Layout>
                          <Page {...props}/>
                        </Layout>
                      : <Navigate to={"/login"} />
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
