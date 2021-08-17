/** @jsx jsx */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import { jsx, css } from '@emotion/react';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

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

export const getButtonStyle = () => {
  return css`
    background: red;
    color: white;
    border-radius: 5px;
    padding: 5px;
  `
}

export const Button: FC = (props) => {
  const buttonStyle = getButtonStyle();

  return <button css={buttonStyle}>哈哈哈</button>
}
