import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Homepage from './Components/Homepage';
import Cartpage from './Components/Cartpage';

function App() {
  return (
    
    <div>
       <LoginForm/>
       <Homepage/>
       <Cartpage/>
    </div>
  );
}

export default App;
