import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  //
}

const InputForm: React.FC<Props> = (props) => {
  return <input {...props} />;
};

export default InputForm;
