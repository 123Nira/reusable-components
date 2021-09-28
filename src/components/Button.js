import React,{useState} from 'react'

function Button(props) {
    const [size] = useState(props.size);
    const [variant] = useState(props.variant);

    return (
        <div>
            <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
        </div>
    )
}

export default Button
