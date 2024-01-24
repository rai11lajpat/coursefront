
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Allcourse from './components/Allcourses';
import AddCourses from './components/AddCourses';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  // const notify=()=>{
  //   toast.dark("Waoooo",{position:"bottom-left"});
  // };
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>


            <Col md={8}>
              <Routes>
                
              <Route path='/' Component={Home}/>
              <Route path='/add-course' Component={AddCourses} exact/>
              <Route path='/view-course' Component={Allcourse}/>
         

              </Routes>
                 </Col>


          </Row>
        </Container>
      </Router>


    </div>


  );
}

export default App;
