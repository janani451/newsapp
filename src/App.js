import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import "bootstrap/dist/css/bootstrap.min.css";
import NewsPage from './pages/NewsPage';
import NavbarComponents from "./componets/NavbarComponents";
import Footer from './componets/Footer';

function App() {

  return (
    <div className="App">
        <NavbarComponents />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/category/:id" element={<CategoryPage/>} />
          <Route exact path="/news/:id" element={<NewsPage/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
