import axios from 'axios';
import React, { useState } from 'react';
import './image.css';

//https://api.unsplash.com/search/photos?page=1&query=" +image + “&client_id=” + clientId

const Image = () => {
    const[result, setResult] = useState([]);
    const clintId = "Gsir8WkcqvsPNnHyOp0tdvZxeTBhd5PvWg3Jw2C34i4";
    const [image, setImage] = useState("");

    const handleChange = (event) => {
        setImage(event.target.value);
    }
    // useEffect(() =>{
        
    // },[])

    const handleSubmit = () =>{
        async function getImages(){
            const request = await axios.get("https://api.unsplash.com/search/photos?page=1&query=" +image+ "&client_id=" +clintId);
            console.log(request.data);
            setResult(request.data.results);
            return request;
        }
        getImages();
    }
    
    
    return (
        <div>
            <div className='heading'>
                <h1>Welcome to React Image Search Using Unsplash API </h1>
            </div>
                <input onClick = {handleChange} type="text" placeholder='Search for images' className="search_button"/>
                 <button onClick = {handleSubmit} type="submit" className='submit_button'>Search</button>
            {
                result.map((images) =>{
                    // const {id} = images;
                    return(
                        <div >
                            <img src={images.urls.thumb} />
                        </div>
                    )
                })
            }
        </div>
        
    );
};

export default Image;