import React from 'react';

import './styles.css';

export default function Input({name, type='text', label, required, settableValue}) {
  const [value, setValue] = settableValue;

  function renderLabel() {
    return required ? (
      <label htmlFor={name} className="required">
        {label}
      </label>
    ) : (
      <label htmlFor={name}>
        {label}
      </label>
    );
  }

  function renderInput() {
    return setValue ? (
      <input 
        type={type}
        name={name} 
        id={name} 
        required={required}
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    ) : (
      <input 
        type={type}
        name={name} 
        id={name} 
        required={required}
        value={value} 
        disabled
      />
    );
  }
  return (
    <div className="input-block">
      {renderLabel()}
      {renderInput()}
    </div>
  );
}
