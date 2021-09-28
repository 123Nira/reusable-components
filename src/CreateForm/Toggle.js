import React from 'react'
import ToggleSwitch from '../components/ToggleSwitch'

function Toggle() {
    function onToggleChange(event) {
        console.log(event.target.checked);
      }
      
    return (
        <div>
             <ToggleSwitch
            id="id"
            defaultChecked={false}
            disabled={false}
            Text={["Yes", "No"]}
            onToggleChange={onToggleChange}
          />
        </div>
    )
}

export default Toggle
