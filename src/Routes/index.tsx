import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" ></Route>
                <Route path="/dashboard" ></Route>
                <Route path="*" ></Route>
            </Routes>
        </Router>
    )
}

export default Rotas