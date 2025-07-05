import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext()
function NavigationProvider({ children }) {
    const [currentpath, setCurrentpath] = useState(window.location.pathname)
    useEffect(() => {
        const handler = () => {
            // event.preventDefault()
            setCurrentpath(window.location.pathname)
        }
        window.addEventListener('popstate', handler)
        return (() => {
            window.removeEventListener('popstate', handler)
        })
    })

    const navigate=(to)=>{
        window.history.pushState({},'',to);
        setCurrentpath(to)
    }


    return (<NavigationContext.Provider value={{currentpath,navigate}}>
        {children}
    </NavigationContext.Provider>
    )

}
export { NavigationProvider }
export default NavigationContext;