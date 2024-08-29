import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "../Components/dashboard/Dashboard"
import NavBar from "../Components/Navbar/NavBar"


const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<NavBar/>} ></Route>
                <Route path="/dashboard" element={<Dashboard />} ></Route>
                <Route path="*" ></Route>
            </Routes>
        </Router>
    )
}

export default Rotas