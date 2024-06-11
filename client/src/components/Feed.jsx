import React from 'react'
import profileImage from "../media/profile.png"
import post from "../media/logo.jpg"
import "../styles/feed.css"

export default function Feed() {
  return (
    <div className='feed'>

      <div className="tweet-card">
        <div className="tweet-header">
          <img src={profileImage} alt="Profile" className="tweet-card-profile-image" />
          <div className="tweet-card-content">
            <div className="tweet-card-header">
              <span className="tweet-card-username">Sameer</span>
              <span className="tweet-card-handle">@Sameer</span>
            </div>
            <span className="tweet-card-time">09:21 PM</span>
          </div>
        </div>
        <p className="tweet-card-text">Welcome to the college Our "Try it Yourself" editor makes it easy to learn Java. You can edit Java code and view the result in your browser.</p>
        <div className="tweet-card-post-image">
          <img src={post} alt="twitter" className="tweet-card-image" />
        </div>
        <div className="post-tools">
          <div className='like'><button>Like</button></div>
          <div className='comment'><button>Comment</button></div>
          <div className='share'><button>Share</button></div>
        </div>
      </div>

    



    </div>
  )
}
