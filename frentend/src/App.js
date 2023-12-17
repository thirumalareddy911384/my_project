import './App.css';
import { Login } from './components/Login';
import { Front } from './components/Front';
import { Message } from './components/Message';
import { Grievance } from './components/Grievance';
import { Routes, Route} from 'react-router-dom';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterStudentComponent';
import { Admin } from './components/Admin';
// import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/message' element={<Message/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Front/>}/>
        <Route path='/grievance' element={<Grievance/>}/>
        <Route path='/admin'element={<Admin/>}/>
        {/* <Route path='/registration' element={<Registration/>}/> */}
        {/* <HeaderComponent /> */}
                {/* <div className="container"> */}
                          <Route path = "/registration" element= {<CreateStudentComponent/>}></Route>
                          <Route path = "/registration"element = {ListStudentComponent}/>
                          <Route path = "/add-student/:id" element = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:id" element = {ViewStudentComponent}></Route>
                          <Route path = "/update-student/:id" element = {UpdateStudentComponent}></Route>
                          {/* </div> */}
              {/* <FooterComponent /> */}
      </Routes>
      
    </div>
  );
}export default App;