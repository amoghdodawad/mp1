import React, { useState } from 'react';
import './Pick.css';
import { useSelector } from 'react-redux';
import Card from './Card';

function Deliver() {
    // let pickupLocation = '';
    // let dropLocation = '';
    const [ pickupLocation, setPickupLocation ] = useState('');
    const [ dropLocation, setDropLocation ] = useState('');
    const { token, numberOfDelivery } = useSelector(store => store.user);
    const [ cards, setCards ] = useState([]);

    const handlePickupSelect = (e) => {
        // console.log(e.target.value);
        setPickupLocation(e.target.value);
        // pickupLocation = e.target.value;
    }

    const handleDropSelect = (e) => {
        setDropLocation(e.target.value);
        // dropLocation = e.target.value;
    }

    const handleFetchClick = async () => {
        try {
            console.log(pickupLocation);
            console.log(dropLocation);
            console.log(token);
            const response = await fetch(`/orders/order/${pickupLocation}/${dropLocation}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response);
            if(response.status === 403){
                setCards([]);
                return;
            }
            const json = await response.json();
            // console.log(json);

            function fil(item){
                console.log(item.minDelivery,numberOfDelivery);
                return item.minDelivery <= numberOfDelivery;
            }
            const arr = json.filter(fil)
            console.log(arr);
            
            setCards([...arr]);
        } catch(error){

        }
        
    }

    return (
        <div className='pick-container'>
            <div className='location-container'>
                <select name='pickupLocation' onChange={handlePickupSelect}>
                    <option>
                        Select
                    </option>
                    <option value='Dharwad'>
                        Dharwad
                    </option>
                    <option value='Hubballi'>
                        Hubballi
                    </option>
                    <option value='Bengaluru'>
                        Bengaluru
                    </option>
                    <option value='Mysuru'>
                        Mysuru
                    </option>
                    <option value='Belagavi'>
                        Belagavi
                    </option>
                    <option value='Gadag'>
                        Gadag
                    </option>
                </select>
                <select name='dropLocation' onChange={handleDropSelect}>
                    <option>
                        Select
                    </option>
                    <option value='Dharwad'>
                        Dharwad
                    </option>
                    <option value='Hubballi'>
                        Hubballi
                    </option>
                    <option value='Bengaluru'>
                        Bengaluru
                    </option>
                    <option value='Mysuru'>
                        Mysuru
                    </option>
                    <option value='Belagavi'>
                        Belagavi
                    </option>
                    <option value='Gadag'>
                        Gadag
                    </option>
                </select>
                <div onClick={handleFetchClick} className='fetch-click'>
                    Fetch
                </div>
            </div>
            <div className='card-super-container'>
                {cards.length === 0 ? '' : cards.map(card => <Card key={card.orderId} name={card.toUser} item={card.title} pickupLocation={card.pickupLocation} deliveryLocation={card.dropLocation} price={card.amount} orderId={card.orderId}/>)}
            </div>
        </div>
    )
}

export default Deliver