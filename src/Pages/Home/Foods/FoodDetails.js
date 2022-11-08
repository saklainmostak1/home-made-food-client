import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const FoodDetails = ({ food }) => {
    console.log(food);
    const { title, img, description, price, rating, _id } = food
    return (

        <div>
            <div className="card shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-2xl card-title">{title}</h2>
                    <p className='  font-semibold text-left'><span className='font-bold text-xl'>Description:</span> {description.slice(0, 100) + '...'}</p>
                    <div>
                        <div className='flex justify-between'>
                            <p>Price: {price}</p>
                            <div className='flex'>
                                <FaStar></FaStar><p className='ml-2'>{rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 card-actions justify-center'>
                <Link to={`/details/${_id}`}>
                <button className="w-64 btn btn-info ">View Details</button>
                    </Link>
                </div>
               
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;