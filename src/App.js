
import './App.css';
import Button from './components/Button.jsx';
import Greeting from './components/Greeting.jsx';
import Massage from './components/Message.jsx';

function App() {
  const MessageOnConsole=()=>{
    return(
      console.log("Hello")
    )
  }
  return (
    <>
    <Greeting name="Сергій"/>
    <Massage text="Це я"/>
    <Button onClick={MessageOnConsole}/>
    </>
  );
}

export default App;
