import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import NavBar from "../Components/Navbar/NavBar"


const Rotas = () => {
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>} ></Route>
                <Route path="*" ></Route>
            </Routes>
        </Router>
    )
}

export default Rotas