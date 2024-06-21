import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Deliver.css'
import DeliverCard from './DeliverCard';

function Deliver() {
    const [ cards, setCards ] = useState([]);
    const { email, token } = useSelector(store => store.user);

    async function getDeliverables(){
        try {
            const response = await fetch('/orders/deliverables',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ fromUser: email })
            })
            console.log(response);
            const json = await response.json();
            console.log(json);
            setCards([...json]);
        } catch (error){

        }
    }

    useEffect(() => {
        getDeliverables()
    },[])

  return (
    <div className='deliver-container'>
        <div className='deliver-cards-container'>
            {cards.length === 0 ? '' : cards.map(card => <DeliverCard key={card.orderId} name={card.toUser} item={card.title} pickupLocation={card.pickupLocation} deliveryLocation={card.dropLocation} price={card.amount} orderId={card.orderId}/>)}
        </div>
    </div>
  )
}

export default Deliver