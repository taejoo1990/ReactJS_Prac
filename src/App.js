import {
    BrowserRouter as Router,
    Routes,
    Route
}from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import './index.css';
function App() {
    return (
    <Router>
        <Routes>
            <Route path="/movies/:id" element={<Detail />}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    )
}
export default App;
