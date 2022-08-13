import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  submit?: boolean;
}

const Button: React.FC<Props> = ({ text, submit = false, ...rest }) => {
  return (
    <button type={submit ? 'submit' : 'button'} {...rest}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  submit: false
};

export default Button;
