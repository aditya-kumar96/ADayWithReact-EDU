import { useContext } from "react";

const NavigationContext = useContext()
function NavigationProvider({ children }) {

    <NavigationContext.Provider value={{}}>
        {children}
    </NavigationContext.Provider>

}
export { NavigationProvider }
export default NavigationContext;