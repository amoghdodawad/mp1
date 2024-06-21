import React from 'react'
import './DeliverCard.css'
import { useSelector } from 'react-redux';

function DeliverCard({ name, item, pickupLocation, deliveryLocation, price, orderId }) {
    const { email, token } = useSelector(store => store.user);
    async function handleSubmit(){
        // console.log(orderId + ' Clicked');
        try {
            const response = await fetch('/orders/deliver',{
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ fromUser: email, orderId })
              });
              // alert()
              console.log(response);
              const json = await response.text();
              if(json === 'Ok') alert('Delivered')
              console.log(json);
        } catch (error){
            console.log(error);
        }
    }
  return (
    <div className='deliver-card-container'>
        <div>Customer name: {name}</div>
        <div>Item name: {item}</div>
        <div>Pickup location: {pickupLocation}</div>
        <div>Delivery Location: {deliveryLocation}</div>
        <div>Price: {price}</div>
        <div className='deliver-button' onClick={handleSubmit}>Deliver</div>
    </div>
  )
}

export default DeliverCard