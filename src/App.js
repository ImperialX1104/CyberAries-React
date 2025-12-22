// import logo from './logo.svg';
import './css/style.css';
// import About from "./about"
import Home from "./home"
import ExternalScripts from './ExternalScripts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <ScrollToTopOnRouteChange /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/single" element={<Single />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<Error />} /> */}
        
      </Routes>
    </BrowserRouter>
    <ExternalScripts />
    </>
  );
}

export default App;
