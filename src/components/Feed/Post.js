import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import './post.css'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'


function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
      <div className="postHeader">
      <Avatar src={photoUrl} alt={name}/>
        <div className="postInfo">
        <h2>{name}</h2>
          <p>{description}  </p>

        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>
      <div className="postBtn">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
        <InputOptions Icon={ChatOutlinedIcon} title="comment" color="gray"/> 
        <InputOptions Icon={ShareOutlinedIcon} title="Like" color="gray"/>
        <InputOptions Icon={SendOutlinedIcon} title="Like" color="gray"/>
      </div>
    </div>
  )
}

export default Post
