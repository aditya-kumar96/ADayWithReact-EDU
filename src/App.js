import { useState } from "react";
import Dropdown from "./component/Dropdown";
import Link from "./component/Link";
import Route from "./component/Route";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from './pages/ButtonPage'
import Sidebar from "./component/Sidebar";
function App() {
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>

        </div>

    </div>
}
export default App;
