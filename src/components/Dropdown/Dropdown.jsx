import React, { useState } from 'react';
import './dorpdown.css';

export default function DropDown({ data, children, valeur }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <div className={`btn ${valeur ? 'valueHeight' : ''}`} onClick={handleClick}>
        <p className={`${valeur ? 'value' : ''}`}>{children}</p>
        {open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
      </div>
      {open && typeof data === 'object' && (
        <ul className="body">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {open && typeof data === 'string' && (
        <p className={`text ${valeur ? 'value' : ''}`}>{data}</p>
      )}
    </div>
  );
}
