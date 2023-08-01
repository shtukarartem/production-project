import { useTheme } from 'app/providers/ThemeProvider';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen?: boolean,
  onClose?: () => void,
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const ANIMATION_DELAY = 300;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onContentClick = (event:React.MouseEvent) => {
    event.stopPropagation();
  };
  const mods:Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
          <div className={cls.overlay} onClick={closeHandler}>
            <div className={cls.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
    </Portal>
  );
};
