import Accordion from "./component/Accordion";
import Button from "./component/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {
    const items= [
        {
            id:'1dd',
            label: 'Home',
            content: 'Here is the Home'
        },
        {
            id:'23',
            label: 'Menu',
            content: 'Here is the Menu'
        },
        {
            id:'dfjh',
            label: 'Settings',
            content: 'Here is the Settings'
        },
    ]
    return <Accordion items={items} />
}
export default App;
