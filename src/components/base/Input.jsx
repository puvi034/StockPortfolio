import React from 'react';

const Input = ({label,onChange, id, placeholder, type, ...rest}) => {
  let inputRef;
  return (
    <div>
      <label for={id} className="sr-only">
        {label}
      </label>
      <input
        id = {id}
        type = {type}
        ref = {(input) => inputRef = input}
        onChange = {() => onChange(inputRef.value)}
        placeholder={placeholder}
        className="form-control"
        {...rest}
      />
    </div>
  );
};

export default Input;