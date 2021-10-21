import { merge } from 'lodash';
import { generate } from './generate';

export const getColorVar = () => ({
  blue: '#143476',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#FB5A1B',
  yellow: '#F5C253',
  green: '#69E012',
  darkgreen: '#36A43D',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#ffffff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000000'
});

let styleVar = {} as any;

export const getDefaultStyleVar = () => {
  const colorVar = getColorVar();
  const colorList = generate(colorVar.orange);

  return {
    primaryColor: colorVar.orange,
    hoverColor: colorList[4],
    activeColor: colorList[6]
  };
};

export const registerStyleVar = (obj: any) => {
  merge(styleVar, obj);
}

export default styleVar;
