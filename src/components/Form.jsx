import React, { useState } from 'react';
import Input from './Input';
import Text from './Text';

const Form = () => {
  const [msg, setMsg] = useState('');
  return (
    <>
      <div>
        <label>Name:</label>
        <Input
          changeHandler={(e) => {
            setMsg(e.target.value);
          }}
        />
      </div>
      <div>
        <Text msg={msg} />
      </div>
    </>
  );
};

export default Form;
