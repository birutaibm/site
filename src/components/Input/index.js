import React from 'react';

import './styles.css';

export default function Input({name, type='text', label, settableValue}) {
  const [value, setValue] = settableValue;

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name} 
        id={name} 
        required 
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
