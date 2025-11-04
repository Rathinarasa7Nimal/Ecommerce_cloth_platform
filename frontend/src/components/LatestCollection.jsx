import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProudcts,setLatestProudcts] = useState([]);

    useEffect(() => {
        setLatestProudcts(products.slice(0,10));
    },[])


  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1="LATEST" text2="COLLECTION"/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our latest collection of trendy and stylish clothing, carefully curated to keep you ahead in fashion. From casual wear to statement pieces, explore the newest arrivals that blend comfort with contemporary design.
            </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProudcts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name = {item.name} price={item.price} />  
                ))
            }

        </div>
    </div>
  )
}

export default LatestCollection