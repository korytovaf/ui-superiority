import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProps } from '../Theme/Theme';

export type ButtonProps = {
  onClick(): void;
  children: ReactNode;
  disabled?: boolean;
  transparent?: boolean;
  accent?: boolean;
  fs?: number;
};

export type ButtonStyle = {
  transparent?: boolean;
  fs?: number;
};

const useStyles = makeStyles<ThemeProps>(({ palette, typography }) => ({
  button: {
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
    fontSize: ({ fs }: ButtonStyle) => (fs ? fs : 12),
    '&:focus-visible': {
      '-webkit-box-shadow': '0px 0px 2px 1px rgb(255 255 255)',
      '-moz-box-shadow': '0px 0px 2px 1px rgb(255 255 255)',
      boxShadow: '0px 0px 2px 1px rgb(255 255 255)',
    },
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },
  button_default: {
    backgroundColor: ({ transparent }: ButtonStyle) =>
      transparent ? 'transparent' : palette.primary.dim,
    border: `1px solid ${palette.primary.dim}`,
    color: typography.color,
    '&:hover': {
      backgroundColor: `${palette.primary.dim}f0`,
      color: '#FFFFFF',
      border: `1px solid ${palette.primary.dim}`,
    },
    '&:disabled': {
      backgroundColor: ({ transparent }: ButtonStyle) =>
        transparent ? 'transparent' : palette.primary.dim,
    },
  },
  button_accent: {
    backgroundColor: ({ transparent }: ButtonStyle) =>
      transparent ? 'transparent' : palette.button.primary,
    border: `1px solid ${palette.button.primary}`,
    color: typography.color,
    '&:hover': {
      backgroundColor: `${palette.button.primary}f0`,
      color: '#FFFFFF',
      border: `1px solid ${palette.button.primary}`,
    },
    '&:disabled': {
      backgroundColor: ({ transparent }: ButtonStyle) =>
        transparent ? 'transparent' : palette.button.primary,
    },
  },
}));

export function Button({
  children,
  disabled,
  transparent,
  accent,
  onClick,
  fs,
}: ButtonProps) {
  const { button, button_default, button_accent } = useStyles({
    transparent,
    fs,
  });

  return (
    <button
      type="button"
      className={`${button} ${accent ? button_accent : button_default}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
