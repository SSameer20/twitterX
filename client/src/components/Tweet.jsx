import React, { useState } from 'react'
import profile from "../media/profile.png"
import "../styles/tweet.css"
import { Button, Input } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import axios from 'axios';

export default function Tweet() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tweet, setTweet] = useState("")
  const [image, setImage] = useState('');





  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // const file = selectedFile();
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', 'twitterx'); // Replace with your upload preset

    // fetch('https://api.cloudinary.com/v1_1/dvhib0gkc/image/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setImage(data.secure_url); // Save the image URL to state
    //   })
    //   .catch((error) => {
    //     console.error('Error uploading image to Cloudinary: ', error);
    //   });
  };


  const handleSubmit = (e) => {

    console.log(tweet)
    // if (selectedFile !== null) console.log(selectedFile)
    const userId = localStorage.getItem('userId');
    console.log(userId)
    const postData = {
      userId : userId,  
      content: tweet,
      media : selectedFile ? selectedFile : null
    }
    axios.post('http://localhost:3001/user/post', postData)
      .then(res => {
        console.log(res.data)
         alert("Post Created Successfully")
      })
      .catch (error => alert("Error While Creating" + error));

      setTweet("")
      setSelectedFile(null)
  }

const handleTweet = (e) => {
  setTweet(e.target.value)

}
return (
  <div className='tweet'>
    <div style={{ display: "flex" }}>
      <img src={profile} alt="profile" className='tweet-profile' />
      <input type="text" className='tweet-section' placeholder='What is Happening?' value={tweet} onChange={handleTweet} />

    </div>
    <div className="tweet-tools">
      <input type='file' id="tweet-img" name="img" onChange={handleChange} />
      {/* <button colorScheme='blue' onSubmit={handleSubmit}>Post</button>
         */}
      <button type="submit" style={{backgroundColor: "blue", color :"white", padding: "5px 10px"}} onClick={handleSubmit}>Post</button>
    </div>
  </div>
)
}
