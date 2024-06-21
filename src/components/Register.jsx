import React, { useRef, useState } from 'react';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../redux/deliverSlice';

function Register() {
    const dispatch = useDispatch();
    const { email, token } = useSelector(store => store.user);
    const [ title, setTitle ] = useState('');
    const [ pickupLocation, setPickupLocation ] = useState('');
    const [ dropLocation, setDropLocation ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ minDelivery, setMinDelivery ] = useState(0);


    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await fetch('/orders/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ toUser: email, title, pickupLocation, dropLocation, amount, minDelivery })
            })
            console.log(response);
            const json = await response.json();
            console.log(json);
        } catch (error){

        }
        // alert('Details submitted');
        // console.log(nameRef.current.value);
        // console.log(pickRef.current.value);
        // console.log(delLocRef.current.value);
        // console.log(priceRef.current.value);
        // dispatch(setOrder({
        //     item: nameRef.current.value,
        //     pickupLocation: pickRef.current.value,
        //     deliveryLocation: delLocRef.current.value,
        //     price: priceRef.current.value
        // }));
    };

    const nameRef = useRef('');
    const pickRef = useRef('');
    const delLocRef = useRef('');
    const priceRef = useRef('');

    return (
        <div className='register-container'>
            <div className='form-container'>
                <form action="" onSubmit={handleSubmit}>
                    <input required type='text' placeholder='name of the item' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input required type="text"  placeholder='pickup location' value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}/>
                    <input required type='text' placeholder='delivery location' value={dropLocation} onChange={(e) => setDropLocation(e.target.value)}/>
                    <input required type='number' placeholder='min delivery' value={minDelivery} onChange={(e) => setMinDelivery(e.target.value)}/>
                    <input required type='number' placeholder='price' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                    <input required type="submit" value='Pay and submit'/>
                </form>
            </div>
        </div>
    )
}

export default Register