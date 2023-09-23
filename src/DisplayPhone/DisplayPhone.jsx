import{ useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';


const DisplayPhone = () => {
    const [phone,setPhone]=useState([])
    useEffect(()=>{
        fetch('phone.json')
        .then(res=>res.json())
        .then(data=>setPhone(data))
    },[])




    return (
        <div>
            <div className='grid grid-cols-4 gap-4 max-w-6xl mx-auto'>
                {
                    phone.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default DisplayPhone;