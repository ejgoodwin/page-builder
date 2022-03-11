import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import Section from './components/Section';
import testData from './test-data';

function App() {

  return (
    <div className="App">
      <Section object={testData.hero} />
      <Section object={testData.keyFeatures2} />
      <Section object={testData.keyFeatures3} />
      <Section object={testData.textBlock} />
      <Section object={testData.textBlockCenter} />
      <Section object={testData.ctaBlock} />
      <Section object={testData.ctaBlock2} />
    </div>
  );
}

export default App;
