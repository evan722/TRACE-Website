import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: string;
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ asChild = false, className = '', children, size, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: `${className} ${child.props.className ?? ''}`.trim(),
        ref,
        ...props,
      });
    }
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={className} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
