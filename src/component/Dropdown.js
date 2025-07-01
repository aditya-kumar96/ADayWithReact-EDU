import { useState } from "react";

function Dropdown({ options, onSelect, selection }) {
    const [IsSelected, setIsSelected] = useState(false)
    const handleClick = () => {
        setIsSelected(!IsSelected)
    }
    const handleOptionclick = (option) => {
        setIsSelected(false)
        onSelect(option)
    }
    const renderedItems = options.map((option) => {
        return (
            <div
                onClick={() => handleOptionclick(option)}
                key={option.value}>
                {option.label}
            </div>
        )
    })
    let content = 'Select'
    if (selection) {
        content = selection.label
    }
    return <div >
        <div onClick={handleClick}>{content}</div>
        {IsSelected && <div>{renderedItems}</div>}
    </div>
}
export default Dropdown;