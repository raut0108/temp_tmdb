import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import WatchList from './Components/WatchList'
import MovieContextWrapper from './Context/MovieContextWrapper'
function App() {


  return (
    <>
   <NavBar/>
    <MovieContextWrapper>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/watchlist' element={<WatchList/>}></Route>
   </Routes> 
    </MovieContextWrapper>
  
    </>
  )
}

export default App
