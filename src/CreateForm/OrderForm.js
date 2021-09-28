import React from 'react'
import CreateForm from '../components/CreateForm'

function OrderForm() {
    function handleChange(event) {
          console.log(event.target.value);
         }
    return (
        <form>
        orderName: <CreateForm type={"text"} onChange={handleChange} />
        CustomerName: <CreateForm type={"text"} onChange={handleChange} />
        Price: <CreateForm type={"number"} onChange={handleChange} />
        </form>
    )
}

export default OrderForm
