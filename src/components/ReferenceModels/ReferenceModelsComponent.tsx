import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './ReferenceModelsComponent.module.scss';
import { IconComponent } from '../Icon/IconComponent';

export const ReferenceModelsComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['reference-models']}>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles['raw-materials']}`].join('')}
        to="/lcc/documentation/reference-models/raw-materials"
      >
        <SvgComponent cssClass={styles.svg} name="raw-materials" />
        {t('common.referenceModels.rawMaterials')}
        <IconComponent name="link" cssClass={styles.icon} />
      </ButtonComponent>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles.water}`].join('')}
        to="/lcc/documentation/reference-models/water"
      >
        <SvgComponent cssClass={styles.svg} name="water" />
        {t('common.referenceModels.water')}
        <IconComponent name="link" cssClass={styles.icon} />
      </ButtonComponent>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles['primary-energy']}`].join('')}
        to="/lcc/documentation/reference-models/primary-energy"
      >
        <SvgComponent cssClass={styles.svg} name="primary-energy" />
        {t('common.referenceModels.primaryEnergy')}
        <IconComponent name="link" cssClass={styles.icon} />
      </ButtonComponent>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles['greenhouse-gas']}`].join('')}
        to="/lcc/documentation/reference-models/greenhouse-gas"
      >
        <SvgComponent cssClass={styles.svg} name="greenhouse-gas" />
        {t('common.referenceModels.greenhouseGas')}
        <IconComponent name="link" cssClass={styles.icon} />
      </ButtonComponent>
    </div>
  );
};
