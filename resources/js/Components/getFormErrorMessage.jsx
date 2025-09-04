
export const getFormErrorMessage = (errors,name) => {
    return (
        errors[name] && (
            <small className="p-error">{errors[name].message}</small>
        )
    );
};