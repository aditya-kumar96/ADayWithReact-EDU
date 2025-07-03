import classNames from "classnames";
function Panel({ children, className, ...rest }) {
    const finalClassName = classNames('border shadow p-3 rounded bg-white w-full', className)
    return <div {...rest} className={finalClassName}>{children}</div>
}

export default Panel;