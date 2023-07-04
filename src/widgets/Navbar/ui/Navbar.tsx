import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('about');
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>
        {t('Главная страница')}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
       {t('О сайте')}
      </AppLink>
    </div>
  );
};
