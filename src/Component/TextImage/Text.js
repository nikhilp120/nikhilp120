import React, { useState } from 'react';
import './Text.css';
import pngegg from '../../Image/pngegg.png';
import Popup from 'reactjs-popup';
import signVideo from '../../Video/signVideo.mp4';
import signimage from '../../Image/signimage.jpg';

const Text = () => {
  const [isSelect, setSelected] = useState('');
  const [isOpen, setOpen] = useState(false);

  const handleMouseUp = () => {
    setSelected(window.getSelection().toString());
    setOpen(true);
  };
  const imageClickHandler = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="text" onMouseUp={handleMouseUp}>
        Nitin Developer is always work hard!!!
        <p>Nikhil kumar is Tatti guy</p>
        <p>Pandey is a smart guy, kabhi nahi katwata</p>
      </div>

      <Popup
        contentStyle={{
          color: 'red',
          width: '400px',
          height: '400px',
          border: '2px solid black',
          opacity: '0.7',
          right: '0',
        }}
        type={'info'}
        open={isOpen}
        timeout={1000}
      >
        {' '}
        <div className="popup-video">
          <img src={signimage}></img>
        </div>
        <div className="popup-text">{isSelect}</div>
        <button
          className="button"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </button>
      </Popup>
      <div className="chat">
        <img src={pngegg} alt="chatbot"></img>
      </div>
    </div>
  );
};

export default Text;
