import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = '', ...props }, ref) => (
  <input ref={ref} className={`border border-gray-300 rounded-md px-3 py-2 ${className}`} {...props} />
));
Input.displayName = 'Input';
