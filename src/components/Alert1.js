import React from 'react'

const Alert1 = (props) => {

    const Capitalize = (text) => {
        const lowerCase = text.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    }
    return (
        props.alert && (<div>
            <div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{Capitalize(props.alert.type)}! </strong> {props.alert.message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                </div>
            </div>
        </div>)
    )
}

export default Alert1