import useNavigation from "../hooks/use-navigation"


function Route({ path, children }) {
    const { currentpath } = useNavigation()

    if (path === currentpath) {
        return children
    }

    return null


}
export default Route