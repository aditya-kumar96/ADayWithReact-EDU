import { useEffect, useRef, useState } from "react";
import {GoChevronDown} from 'react-icons/go'
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {
    const [IsSelected, setIsSelected] = useState(false)
    const handleClick = () => {
        setIsSelected(!IsSelected)
    }

    const divEl = useRef()
    useEffect(()=>{
        const handler=(event)=>{
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setIsSelected(false)
            }
        }
        document.addEventListener('click',handler,true);
        return(()=>{
                document.removeEventListener('click',handler)
        })
    },[])

    const handleOptionclick = (option) => {
        setIsSelected(false)
        onChange(option)
    }

    const renderedItems = options.map((option) => {
        return (
            <div
                className={style.renderItem}
                onClick={() => handleOptionclick(option)}
                key={option.value}>
                {option.label}
            </div>
        )
    })
    return <div ref={divEl} className="w-48 relative ml-2 mt-3">
        <Panel className={style.selectDiv} onClick={handleClick}>{value?.label || 'Select...'}
        <GoChevronDown/>

        </Panel>
        
        {IsSelected && (<Panel className={style.renderedOptions}>{renderedItems}</Panel>)}
    </div>
}
let style = {
    renderItem: "hover:bg-sky-100 rounded cursor-pointer p-1",
    selectDiv: "flex justify-between items-center cursor-pointer ",
    renderedOptions:"absolute top-full "
}

export default Dropdown;