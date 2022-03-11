import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import Section from './components/Section';
import testData from './test-data';

function App() {

  return (
    <div className="App">
      {testData.map(item => <Section object={item} />)}
    </div>
  );
}

export default App;
