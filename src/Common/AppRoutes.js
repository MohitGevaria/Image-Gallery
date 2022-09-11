
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recents from '../Pages/Recents';
import BeforeAfter from '../Components/BeforeAfter';
import Pictures from '../Pages/Pictures';
import FileUpload from '../Pages/FileUpload';
import LoginForm from '../Pages/LoginForm'
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../Pages/ForgotPassword';
import Cards from '../Components/Cards';
import DisplayFullScreen from '../Components/FullScreen';

const AppRoutes = () => {
    return (  
        <Router>
            <div className="App" >
              <Routes>
                <Route path='/home' element={<Cards />}></Route>
              </Routes>
              <Routes>
                <Route path='/recents' element={<Recents />}></Route>
              </Routes>
              <Routes>
                <Route path='/befaft' element={<BeforeAfter />}></Route>
              </Routes>
              <Routes>
                <Route path='/pictures' element={<Pictures />}></Route>
              </Routes>
              <AuthProvider>
                <Routes>
                  <Route path='/upload' element={<PrivateRoute state={"upload"}/>}>
                    <Route path='/upload' element={<FileUpload />} />
                  </Route>
                </Routes>
                <Routes>
                  <Route path='/login' element={<PrivateRoute state={"login"}/>}>
                    <Route path='/login' element={<LoginForm />} />
                  </Route>
                </Routes>
                <Routes>
                  <Route path='/forgot-password' element={<PrivateRoute state={"forgot-password"}/>}>
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                  </Route>
                </Routes>
              </AuthProvider>
            </div>
          </Router>
    );
}
 
export default AppRoutes;