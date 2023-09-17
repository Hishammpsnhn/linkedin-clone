import React, { useState } from 'react'
import './Feed.css'
import InputOptions from './InputOptions'
import ImageIcon from '@mui/icons-material/Image'
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create'
import RightSection from '../RightSection'; 

function Feed() {
  const [posts,setPosts] = useState([])
  const sendPost = e =>{
    e.preventDefault()
  }



  return (
    <div className='feed'>
      <div className="inputContainer">
        <div className="input">
          <CreateIcon/>
          
        
          <form action="">
            <input type="text" placeholder='Start a post' />  
            <button onClick={sendPost}>Send</button>
          </form>
          
        </div>
        <div className="inputOption">
            <InputOptions Icon={ImageIcon} title='Media' color='blue'/>
            

          </div>
          <div className="Event">
            <InputOptions Icon={EventNoteIcon} title='Event' color='brown'/>
            

          </div>
          <div className="article">
            <InputOptions Icon={ArticleIcon} title='Write article' color='red'/>
            

          </div>
      </div>
      {/*post*/}

      {posts.map((post)=>(
       <Post/>
      ))}
      

      <Post name='Ashfaque' description='test of clone ' message='workeddd '/>
      
   
<RightSection/>
      

      
    </div>
  )
}

export default Feed
