
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children ,className,activeClassname}) {
    const { navigate , currentpath} = useNavigation()
    const classes = classNames('text-blue-500',
        className,
        currentpath === to && activeClassname
    )

    

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault()

        navigate(to)
    }
    return <a href={to} className={classes} onClick={handleClick}>{children}</a>
}
export default Link;