import { useState } from "react";
import Dropdown from "../component/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null)
    const handleSelction = (option) => {
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
    return <div  className="flex">
    <Dropdown
        options={Options}
        onChange={handleSelction}
        value={selection}
    />
    <Dropdown
        options={Options}
        onChange={handleSelction}
        value={selection}
    />
    </div>
}
export default DropdownPage;
