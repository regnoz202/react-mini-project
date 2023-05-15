import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Price from "./pages/Price"
import MovieList from "./pages/MovieList"


function App() {

  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/price" element={<Price />}></Route>
            <Route path="/movie-list" element={<MovieList />}></Route>
          </Routes>
        </Router>
  )
    }

export default App
