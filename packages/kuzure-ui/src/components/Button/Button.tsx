/** @jsx jsx */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import { jsx, css } from '@emotion/react';
import styleVar from '../../common/styleVar';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'link';

interface IButtonProps {
  className?: string;
  btnType?: ButtonType;
  btnSize?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const getButtonStyle = (type: ButtonType) => {
  switch (type) {
    case 'primary':
      return generateButtonStyle();
    case 'default':
      return generateButtonStyle(
        'transparent',
        styleVar.primaryColor,
        'transparent',
        'transparent',
        styleVar.hoverColor,
        styleVar.activeColor
      );
    default:
      return generateButtonStyle();
  }
};

export const generateButtonStyle = (
  bg: string = styleVar.primaryColor,
  color: string = 'white',
  hoverBg: string = styleVar.hoverColor,
  activeBg: string = styleVar.activeColor,
  hoverColor: string = 'white',
  activeColor: string = 'white'
) => {
  return css({
    background: bg,
    color: color,
    borderRadius: '3px',
    padding: '10px 14px',
    cursor: 'pointer',
    border: `1px solid ${color}`,
    boxShadow: 'inset 0 1px 0 rgba(white, .15), 0 1px 1px rgba(black, .075)',
    ':hover': {
      background: hoverBg,
      borderColor: hoverColor,
      hoverColor
    },
    ':active': {
      background: activeBg,
      borderColor: activeColor,
      activeColor
    },
    ':focus': {
      outline: 'none'
    },
    ':disabled': {
      opacity: 0.65,
      cursor: 'not-allowed',
      boxShadow: 'none',
      '> *': {
        pointerEvents: 'none'
      }
    }
  });
};

export const Button: FC<ButtonProps> = ({
  btnType = 'default',
  disabled = false,
  children,
  ...restProps
}: ButtonProps) => {
  const buttonStyle = getButtonStyle(btnType);

  return (
    <button css={buttonStyle} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
