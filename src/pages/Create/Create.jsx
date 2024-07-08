import React, { useState } from 'react';
import './Create.css';
import Navbar from '../../components/Navbar/Navbar';
import { storage, db } from '../../config'; // Adjust the path according to your project structure
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../../Store/FirebaseContext'; // Adjust the path according to your project structure
import {useNavigate} from 'react-router-dom'


function Create() {
    const { currentUser } = useAuth();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert('You need to be logged in to create a product');
            return;
        }
        if (image) {
            const storageRef = ref(storage, `images/${image.name}`);
            try {
                await uploadBytes(storageRef, image);
                const imageUrl = await getDownloadURL(storageRef);
                console.log('File available at', imageUrl);

                // Save the product details to Firestore
                await addDoc(collection(db, 'products'), {
                    name: name,
                    description: description,
                    price: price,
                    imageUrl: imageUrl,
                    userId: currentUser.uid
                });
                console.log('Product details saved successfully');
                navigate('/')
                
                
            } catch (error) {
                console.error('Error uploading file and saving product details:', error);
            }
        } else {
            console.log('No image selected');
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="create-container">
                <div className="form-container">
                    <h2>Product Form</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="4" required onChange={(e) => setDescription(e.target.value)}></textarea>

                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" step="0.01" required onChange={(e) => setPrice(e.target.value)} />

                        <label htmlFor="image">Upload Image</label>
                        <img width='200px' height='200px' src={image ? URL.createObjectURL(image) : ''} alt='Preview' />
                        <input type="file" id="image" name="image" accept="image/*" onChange={(e) => { setImage(e.target.files[0]) }} />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;
