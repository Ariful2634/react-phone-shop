/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const PhoneCard = ({phone}) => {
    const {id,image,rating,phone_name,brand_name,price}=phone
    return (
        <div className='border p-4 rounded-lg space-y-4'>
            <div className='flex justify-center mb-4'><img className='w-[250px] h-[250px] rounded-lg' src={image} alt="" /></div>
            <p>{rating}</p>
            <h2 className="bg-red-300 rounded py-1 text-xl text-black px-1">{brand_name}</h2>
            <div className='flex justify-between'>
               <p> {phone_name}</p>
               <p>$ {price}</p>
            </div>
            <div className="text-center">
                <Link to={`/phone/${id}`}><button className="btn btn-primary">See Details</button></Link>
            </div>
        </div>
    );
};

export default PhoneCard;