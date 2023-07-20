import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ButtomSize, Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Main from 'shared/assets/icons/About.svg';
import About from 'shared/assets/icons/clarity_list-outline-badged.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation('about');
  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
      data-testid='sidebar-toggle'
      onClick={onToggle}
      square
      className={cls.collapseBtn}
      theme={ThemeButton.BACKGROUND_INVERTED}
      size={ButtomSize.L}
      >
        {collapsed ? '>' : '<' }
      </Button>
      <div className={cls.items}>
      <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={cls.item}
      to={RoutePath.main}>
        <Main className={cls.icon} />
        <span className={cls.link}>
        {t('Главная страница')}
        </span>
      </AppLink>
      <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={cls.item}
      to={RoutePath.about}>
         <About className={cls.icon} />
       <span className={cls.link}>{t('О сайте')}</span>
      </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
