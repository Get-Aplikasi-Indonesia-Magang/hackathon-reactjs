import React from 'react';
import './WebComponent.css';

const WebComponent = (props) => {
  return (
    <div className="web-wrapper">
      <div className="img-thumb">
        <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/15/Pemandnagan-hutan-lebat-yang-ada-di-indonesia-4139765200.jpg" alt="Logo" />
        <p className="waktu">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

WebComponent.defaultProps = {
  time: '00.00',
  title: 'Title Here',
  desc: 'Default',
};

export default WebComponent;
