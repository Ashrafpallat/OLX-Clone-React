import React from 'react'
import Card from '../../components/Card/Card'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import { db } from '../../config'; // Adjust the import path as needed
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <>
      <Navbar />
      <div className="categories">
        <select >
          <option >ALL CATEGORIES</option>
        </select>
          <p className='text-sm'>Cars</p>
          <p className='text-sm'>Motorcycles</p>
          <p className='text-sm'>Mobile Phones</p>
          <p className='text-sm'>For Sale: Houses & Apartments</p>
          <p className='text-sm'>Scooters</p>
          <p className='text-sm'>Commercial & Other Vehicles</p>
          <p className='text-sm'>For Rent: Houses & Apartments</p>
      </div>
      <h1 className='page-heading'>Fresh recommendations</h1>
      <div className='card-container'>
        {products.map(product => (
          <Link to={`/viewpost/${product.id}`} className='cardHome'>
            <Card key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </>

  )
}

export default Home
