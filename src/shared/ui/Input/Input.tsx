import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value:string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autoFocus]);
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  const onSelect = (e: any) => {
    setCaretPosition(e.target.selectionStart || 0);
  };
  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>}
        <div className={cls.caretWrapper}>
          <input
              ref={ref}
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
              className={cls.input}
              type={type}
              value={value}
              onChange={onChangeHandler}
              onSelect={onSelect}
              {...otherProps}
          />
          {isFocused && <span style={{ left: `${caretPosition * 9}px` }} className={cls.caret}/>}
        </div>
    </div>
  );
});
