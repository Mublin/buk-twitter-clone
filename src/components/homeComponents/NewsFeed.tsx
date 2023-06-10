import React from 'react'
import reactIm from "../../assets/react.svg"
import { Post } from '../../data'

const NewsFeed = ({item} : {item : Post}) => {
  return (
    <div className="public-tweets">
      <div className="user-details">
        <div className="pic" style={{marginLeft: "1rem"}}>
          <img src={reactIm} alt="pro-pic" />
        </div>
        <div className="user-post-d">
          <div className="post-user-detail">
            <div className="user-display-name space">
              <p style={{fontWeight: "bold"}}>{item.displayName}</p>
            </div>
            <div className="user-username space">
              <p style={{color: 'gray'}}>@{item.username}</p>
            </div>
            <div style={{color: "grey", fontSize: "5px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "2px"}}>
            <i className="fa-solid fa-circle"></i>
            </div>
            <div className="time-posted">
              <p style={{color: "grey"}}>{item.date}</p>
            </div>
          </div>
          <div className="post-text" style={{ width: "100%"}}>
            <p style={{fontWeight: "bold"}}>{item.text}</p>
            <img src={reactIm} alt="post"  style={{backgroundColor: "white", width: "100%", height: "auto", borderRadius: "30px", marginTop: "1rem"}} />
            {/* <img src={reactIm} alt="post"  style={{backgroundColor: "white", width: "100%", height: "auto", borderRadius: "30px", marginTop: "1rem"}} /> */}
          </div>
        </div>
        <div className="post-options">
          <p style={{fontWeight: 'bold'}}>...</p>
        </div>
      </div>
      <div className="call-to-action"></div>
    </div>
    
  )
}

export default NewsFeed