import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Restaurantlist from './components/Restaurantlist'
import ViewRestaurant from "./components/ViewRestaurant";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

      <header className="App-header">
      <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Restaurantlist/>} />
        <Route path='view-restaurant/:id' element={<ViewRestaurant/>} />
      </Routes>
      <Footer/>

      </Router>
    </div>
  );
}

export default App;
