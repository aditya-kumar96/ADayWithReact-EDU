import { useState } from "react";
import Dropdown from "./component/Dropdown";

function App() {
    const [selection, setSelection] = useState(null)
    const handleSelction = (option) => {
        console.log(option)
        setSelection(option)
    }
    const Options = [
        {
            label: 'Menu 1',
            value: 'menu1'
        },
        {
            label: 'Menu 2',
            value: 'menu2'
        },
        {
            label: 'Menu 3',
            value: 'menu3'
        },
        {
            label: 'Menu 4',
            value: 'menu4'
        }
    ]
    return <Dropdown
        options={Options}
        onSelect={handleSelction}
        selection={selection}
    />
}
export default App;
