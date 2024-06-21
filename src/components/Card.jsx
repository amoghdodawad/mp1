import React from 'react';
import './Card.css'
import { useSelector } from 'react-redux';

function Card({ name, item, pickupLocation, deliveryLocation, price, orderId }) {
  const { email, token } = useSelector(store => store.user);
  async function pick(){
    try {
      const response = await fetch('/orders/pick',{
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ fromUser: email, orderId })
      });
      console.log(response);
      const json = await response.text();
      if(json === 'Not OK'){
        alert('You are ineligible for this delivery as you do not have required minimum deliveries');
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='card-container'>
        <div>Customer name: {name}</div>
        <div>Item name: {item}</div>
        <div>Pickup location: {pickupLocation}</div>
        <div>Delivery Location: {deliveryLocation}</div>
        <div>Price: {price}</div>
        <div className='pick-button' onClick={pick}>Pick</div>
    </div>
  )
}

export default Card