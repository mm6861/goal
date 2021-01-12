import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Main from './Main';
import { Navbar } from "react-bootstrap";

function App() {
  let login = true;
  let user = '김은미';

  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand
            href="#home">
            {/* <span style={{ lineHeight: "45px", fontSize: "1.5em" }}>JNK_목표관리</span> */}
            JNK_목표관리
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text style={{margin: "0 15px", fontSize: "1.5em"}}> */}
            <Navbar.Text>
              {login? `${user}님 오늘도 목표!달성!`:' '}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      {login ? <Main></Main> : <Login></Login>}
    </div>
  );
}

export default App;
