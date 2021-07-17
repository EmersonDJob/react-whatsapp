import logo from './logo.svg';
import './App.css';
import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <FloatingWhatsApp phoneNumber={5567999468759} />
      </header>
    </div>
  );
}

export default App;
