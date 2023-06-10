import React, { ChangeEvent, useState } from 'react'
import icon from "../assets/react.svg"
import Button from './homeComponents/Button';
import NewsFeed from './homeComponents/NewsFeed';
import { posts } from '../data';
export default function Home() {
    const [value, setValue] = useState('');
  
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };
  
    const handleAutoExpand = (event: ChangeEvent<HTMLTextAreaElement>) => {
      // event.target.style.height = 'auto';
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  return (
    <div className="nav border" style={{marginLeft: "200px"}}>
        <div className="nav-items">
          <div className="title">
            <h3>Home</h3>
          </div>
          <div className="p-tweet">
            <div className="follow">
              <p className="follow-up">For you</p>
              <p className="follow-up f-active">Following</p>
            </div>
            <div className="tweets" style={{marginLeft: "2rem"}}>
              <div className="pic-tweets">
                <img src={icon} alt="profile pic" />
              </div>
              <div className="tweet-attach">
                <div className="text-area">
                  <textarea
                    value={value}
                    onChange={handleChange}
                    onInput={handleAutoExpand}
                    placeholder='What is happening?!'
                    rows={10} style={{resize: "none"}} />
                    <div className="text-border"></div>
                </div>
                <div className="text-attach" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "7px", marginBottom: "7px"}}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} className="text-row1">
                    <p className='tweet-items'>1</p>
                    <p className='tweet-items'>1</p>
                    <p className='tweet-items'>1</p>
                    <p className='tweet-items'>1</p>
                    <p className='tweet-items'>1</p>
                    <p className='tweet-items'>1</p>
                    <p className='tweet-items'>1</p>
                  </div>
                  <Button />
                </div>              
              </div>
            </div>
            {posts.map(item => <NewsFeed item={item}/>)}
          </div>
        </div>
    </div>
  )
  }
