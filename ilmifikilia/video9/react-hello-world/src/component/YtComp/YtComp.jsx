import React from 'react';
import './YtComp.css';

const YtComp = (props) => {
  return (
    <div className='yt-wrapper'>
        <div className='img-thumb'>
            <img src={props.img} alt="" />
            <p className='time'>{props.time}</p>
        </div>
      <p className='title'>{props.title}</p>
      <p className='desc'>{props.desc}</p>
    </div>
  )
}

YtComp.defaultProps = {
  time: '00.00',
  title: 'Title here',
  desc: 'desc',
  img: 'img'
}

export default YtComp;