import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Landing from './pages/Landing';
import CreateBook from './pages/CreateBook';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {
  // state declaration useState
  // get all books
  //update books
  //edit
  //delete
  //useParams 
  //useNavigate
  return (
    <>
   
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} ></Route>
        
        
        <Route path="/books" element={<Home/>} ></Route>
        {/* <Route path="/books/:id" element={<Singlebook/>} ></Route> */}
        <Route path="/createbook" element={<CreateBook/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        {/* <Route path="/newbook" element={<Newbook/>} ></Route> */}
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
