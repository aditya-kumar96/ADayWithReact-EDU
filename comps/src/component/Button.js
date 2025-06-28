function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    return <button>{children}</button>
}
Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = !!Number(primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)
        if (count > 1) {
            throw new Error('Only one of primary, secondary , success , warning , danger use at a time')
        }
    }
}
export default Button;