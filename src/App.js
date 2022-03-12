import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import Section from './components/Section';
import testData from './test-data';
import { Route, Routes } from 'react-router-dom';
import Page from './pages/Page';
import homePageData from './homePageData';
import PageBuilder from './pages/PageBuilder';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Page data={homePageData} /> }></Route>
        <Route path="example-page" element={ <Page data={testData} /> }></Route>
        <Route path="page-builder" element={ <PageBuilder /> }></Route>
        {/* <Route path="/*" element={ <ErrorPage /> }></Route> */}
      </Routes>
    </div>
  );
}

export default App;
