import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProps } from '../Theme/Theme';

export type ButtonProps = {
  onClick(): void;
  children: ReactNode;
  disabled?: boolean;
  transparent?: boolean;
};

export type ButtonStyle = {
  transparent?: boolean;
};

const useStyles = makeStyles<ThemeProps>(({ palette, typography }) => ({
  myButton: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    padding: '0 16px',
    borderRadius: 4,
    transition: 'all .4s',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 300,
    '&:focus-visible': {
      '-webkit-box-shadow': '0px 0px 2px 1px rgb(255 255 255)',
      '-moz-box-shadow': '0px 0px 2px 1px rgb(255 255 255)',
      boxShadow: '0px 0px 2px 1px rgb(255 255 255)',
    },
    color: typography.color,
    backgroundColor: (props: ButtonStyle) =>
      props.transparent ? 'transparent' : palette.primary.dim,
    border: `1px solid ${palette.primary.dim}`,
    '&:hover': {
      backgroundColor: `${palette.primary.dim}f0`,
      color: '#FFFFFF',
      border: `1px solid ${palette.primary.dim}`,
    },
    '&:disabled': {
      opacity: 0.5,
      backgroundColor: (props: ButtonStyle) =>
        props.transparent ? 'transparent' : palette.primary.dim,
      pointerEvents: 'none',
    },
  },
}));

export function Button({
  children,
  disabled,
  transparent,
  onClick,
}: ButtonProps) {
  const { myButton } = useStyles({ transparent });

  return (
    <button className={myButton} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
