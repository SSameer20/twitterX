import React, { useEffect, useState } from 'react';
import axios from 'axios';
import profile from '../media/profile.png';
import "../styles/feed.css" // Adjust the path

const TweetCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get('http://localhost:3001/api/posts')
        .then(res => {
          setPosts(res.data);
        })
        .catch(error => {
          console.error("Error fetching posts:", error);
        });
    };

    // Initial fetch
    fetchPosts();

    // Fetch posts every 60 seconds
    const interval = setInterval(fetchPosts, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <div className="tweet-card" style={{margin: "10px 0px"}} key={post._id}>
            <div className="tweet-header">
              <img src={profile} alt="Profile" className="tweet-card-profile-image" />
              <div className="tweet-card-content">
                <div className="tweet-card-header">
                  <span className="tweet-card-username">{post.userId}</span>
                  <span className="tweet-card-handle">@{post.userId.username}</span>
                </div>
                <span className="tweet-card-time">{new Date(post.createdAt).toLocaleTimeString()}</span>
              </div>
            </div>
            <p className="tweet-card-text">{post.content}</p>
            {/* {post.media && (
              <div className="tweet-card-post-image">
                <img src={`http://localhost:3001/uploads/${post.media}`} alt="twitter" className="tweet-card-image" />
              </div>
            )} */}
            <div className="post-tools">
              <div className='like'><button>Like</button></div>
              <div className='comment'><button>Comment</button></div>
              <div className='share'><button>Share</button></div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default TweetCard;
