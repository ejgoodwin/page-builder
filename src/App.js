import './App.css';
import testData from './test-data';
import { Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import homePageData from './homePageData';
import PageBuilder from './pages/PageBuilder';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
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
