import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Country from "../pages/Country"
import Error from "../pages/Error"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<Country />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router