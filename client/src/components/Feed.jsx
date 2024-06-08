import React from 'react'
import profileImage from "../media/profile.png"
import "../styles/feed.css"

export default function Feed() {
  return (
    <div>
        <div className="tweet-card">
            <img src={profileImage} alt="Profile" className="tweet-card-profile-image" />
            <div className="tweet-card-content">
                <div className="tweet-card-header">
                    <span className="tweet-card-username">Sameer</span>
                    <span className="tweet-card-handle">@Sameer</span>
                    <span className="tweet-card-time">123</span>
                </div>
                <p className="tweet-card-text">Welcome to the college Our "Try it Yourself" editor makes it easy to learn Java. You can edit Java code and view the result in your browser.

Example</p>
            </div>
        </div>
    </div>
  )
}
