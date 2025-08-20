import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import Navigation from './Navigation';

import MainPage from './components/pages/MainPage';
import PostViewPage from './components/pages/PostViewPage';
import PostWritePage from './components/pages/PostWritePage';
import Hook from './hook/Hook';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Header />
      <Navigation />
      {/* </Header> */}
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/miniblog" element={<MainPage />} />
          <Route path="/post-write" element={<PostWritePage />} />
          <Route path="/post/:postId" element={<PostViewPage />} />
          {/* <Route path="/miniblog/post-write" element={<PostWritePage />} /> */}
          {/* <Route path="/miniblog/post/:postId" element={<PostViewPage />} /> */}

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />

    </>
  )
}
export default App
