import './App.css';
import testData from './data/test-data';
import { Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import homePageData from './data/home-page-data';
import PageBuilder from './components/page-builder/PageBuilder';
import Header from './components/Header';
import { BrandingColourContextProvider } from "./components/context/BrandingColorContext";


function App() {

  return (
    <div className="App">
      <Header />
      <BrandingColourContextProvider>
        <Routes>
          <Route path="/" element={ <Page data={homePageData} /> }></Route>
          <Route path="example-page" element={ <Page data={testData} /> }></Route>
          <Route path="page-builder" element={ <PageBuilder /> }></Route>
          <Route path="preview" element={ <Page data={testData} /> }></Route>
          {/* <Route path="/*" element={ <ErrorPage /> }></Route> */}
        </Routes>
      </BrandingColourContextProvider>
    </div>
  );
}

export default App;
