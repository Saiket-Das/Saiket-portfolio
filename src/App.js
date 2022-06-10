import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import About from './Components/Pages/About/About';
import AllProjects from './Components/Pages/All Projects/AllProjects/AllProjects';
import Blogs from './Components/Pages/Blogs/Blogs';



function App() {
  return (
    <div className="">

      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>


        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<AllProjects></AllProjects>}></Route>
        {/* <Route path='#contact' element={<Contact></Contact>}></Route> */}

      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
