import { useState } from "react";

function Accordion({items}){
const [expandedIndex,setExpendedIndex] = useState(0)
    let renderedItems = items.map((item,index)=>{
        const isExpended = index === expandedIndex
        
        if (index === expandedIndex) {
            console.log("expended")
            
        }
        else{
            console.log('collapsed')
        }
        return(
            <div key={item.id}> 
                <div>
                    {item.label}
                </div>
                
                    {isExpended && <div>{item.content}</div>}
                
            </div>
        )
    })
    return <div>{renderedItems}</div>
}

export default Accordion;