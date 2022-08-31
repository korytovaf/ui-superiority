import React, { ReactNode } from 'react';
import './Button.css';

export type ButtonProps = {
  onClick(): void;
  children: ReactNode;
  isDisabled?: boolean;
  variant?: 'primary' | 'success';
};

export function Button({
  children,
  isDisabled = false,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  const className = `button button-${variant}`;

  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
}
