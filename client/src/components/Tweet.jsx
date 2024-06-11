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





  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleSubmit = (e) => {

    console.log(tweet)
    if (selectedFile !== null) console.log(selectedFile)

    const postData = {
      twt: tweet,
      userId: 1
    }
    axios.post('http://localhost:3001/tweet', postData)
      .then(res => {
        // console.log()
         alert(res.data.success)
      })
      .catch (error => alert(error));
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
      <button type="submit" onClick={handleSubmit}>Post</button>
    </div>
  </div>
)
}
