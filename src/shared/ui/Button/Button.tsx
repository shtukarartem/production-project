import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtomSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtomSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtomSize.M,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };
  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
