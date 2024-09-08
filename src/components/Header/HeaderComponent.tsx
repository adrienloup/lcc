import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useActivePage } from '../../hooks/useActivePage';
import { NavigationComponent } from '../Navigation/NavigationComponent';
import { TooltipComponent } from '../Tooltip/TooltipComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './HeaderComponent.module.scss';

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header role="banner" className={styles.header}>
      <div className={styles.inner}>
        <ButtonComponent
          cssClass={styles.burger}
          onClick={() => console.log('menu')}
        >
          <IconComponent icon="menu" />
        </ButtonComponent>
        <ButtonComponent cssClass={styles.name} to="/lcc">
          <SvgComponent cssClass={styles.svg} svg="lcc" />
          <span dangerouslySetInnerHTML={{ __html: t('common.header.name') }} />
        </ButtonComponent>
        <NavigationComponent cssClass={styles.navigation}>
          <ButtonComponent
            cssClass={[
              styles.tab,
              useActivePage('calculator') ? ` ${styles.active}` : '',
            ].join('')}
            to="/lcc/calculator/website"
          >
            {t('common.header.navigation.calculator')}
          </ButtonComponent>
          <ButtonComponent
            cssClass={[
              styles.tab,
              useActivePage('reference-models') ? ` ${styles.active}` : '',
            ].join('')}
            to="/lcc/documentation/reference-models"
          >
            {t('common.header.navigation.models')}
          </ButtonComponent>
          <ButtonComponent
            cssClass={[
              styles.tab,
              useActivePage('resources') ? ` ${styles.active}` : '',
            ].join('')}
            to="/lcc/documentation/resources"
          >
            {t('common.header.navigation.resources')}
          </ButtonComponent>
        </NavigationComponent>
        <TooltipComponent
          label={t('common.header.profile.tooltip')}
          position="bottom-end"
          onKeyDown={() => navigate('/lcc/profile')}
        >
          <ButtonComponent
            cssClass={[
              styles.button,
              useActivePage('profile') ? ` ${styles.active}` : '',
            ].join('')}
            tabIndex={-1}
            to="/lcc/profile"
          >
            <IconComponent icon="account_circle" />
          </ButtonComponent>
        </TooltipComponent>
      </div>
    </header>
  );
};
