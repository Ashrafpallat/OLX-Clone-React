import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { db } from '../../config'; // Import the Firestore instance from your firebase.js file
import './ViewPost.css';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'

function ViewPost() {
    // console.log('p:', postId);
    const { postId } = useParams();
    const docRef = doc(db, "products", postId);

    const [productDetails, setProductDetails] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productSnapshot = await getDoc(docRef);
                const productData = productSnapshot.data();
                setProductDetails(productData);

                if (productData && productData.userId) {
                    const userRef = doc(db, 'user', productData.userId);
                    const userSnapshot = await getDoc(userRef);
                    const userData = userSnapshot.data();
                    setUser(userData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [docRef]);



    return (
        <div>
            <Navbar />
            <div className="viewParentDiv">
                <div className="imageShowDiv">
                    <img src={productDetails?.imageUrl || "https://via.placeholder.com/400"} alt={productDetails?.title || "Demo Image"} />
                </div>
                <div className="rightSection">
                    <div className="productDetails">
                        <p>&#x20B9; {productDetails?.price || 1000}</p>
                        <span>{productDetails?.name || "Demo Product Title"}</span>
                        <p>{productDetails?.description || "Demo Category"}</p>
                        {/* <span>{productDetails ? new Date(productDetails.createdAt?.toDate()).toDateString() : new Date().toDateString()}</span> */}
                    </div>
                    {/* <div className="contactDetails">
                        <p>Seller details</p>
                        <>
                            <p>{user.username || "Demo User"}</p>
                            <p>{user.phone || "1234567890"}</p>
                        </>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ViewPost;
