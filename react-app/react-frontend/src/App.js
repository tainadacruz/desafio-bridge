import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListNumbersComponent from './components/ListNumbersComponent'

function App() {
  return (
    <div>
      <HeaderComponent />
    <div className="container">
      <ListNumbersComponent />
    </div>
      <FooterComponent />
    </div>
    
  );
}

export default App;
