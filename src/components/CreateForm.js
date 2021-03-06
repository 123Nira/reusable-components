import React, {useState} from 'react'

function CreateForm(props) {
    const [inputType] = useState(props.type)
    const [inputValue, setInputValue] = useState('')

    function handleChange(event){
        setInputValue(event.target.value);
       if(props.onChange) props.onChange(inputValue)
      }
    return (
        <div>
           <input type={inputType}
            value={inputValue}
            name="input-form"
            onChange={handleChange} 
            className="inputclass"/>
         
        </div>
    )
}

export default CreateForm;
