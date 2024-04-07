
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Allcourse from './components/Allcourses';
import AddCourses from './components/AddCourses';
import { Col, Row } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function App() {
  // const notify=()=>{
  //   toast.dark("Waoooo",{position:"bottom-left"});
  // };
  return (
    <div >
      <ToastContainer/>
      <Router>
        {/* <Container style={{backgroundImage:`url()` , height: 700, width: 1000 }}> */}
        <div>
          <Header />
          <Row>
            
            <Col md={4}>
              <Menu />
            </Col>


            <Col md={8}>
            <div >
              <Routes>
                
              <Route path='/' Component={Home}/>
              <Route path='/add-course' Component={AddCourses} exact/>
              <Route path='/view-course' Component={Allcourse}/>
         

              </Routes>
              </div>
                 </Col>

                 
          </Row>
          </div>
        {/* </Container> */}
      </Router>


    </div>


  );
}

export default App;
