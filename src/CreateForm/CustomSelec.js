import React from 'react'
import CustomSelect from '../components/CustomSelect'

function CustomSelec() {
    const data = [
        {
          id: "1",
          name: "One"
        },
        {
          id: "2",
          name: "Two"
        }
      ];    
      
  function onSelectChange(event) {
    console.log(event.target.value);
  }

    return (
        <div>
            <CustomSelect data={data} onSelectChange={onSelectChange} />
        </div>
    )
}

export default CustomSelec
