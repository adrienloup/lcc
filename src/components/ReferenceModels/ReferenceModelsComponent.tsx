import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './ReferenceModelsComponent.module.scss';

export const ReferenceModelsComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['reference-models']}>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles['greenhouse-gas']}`].join('')}
        to="/lcc/documentation/reference-models/greenhouse-gas"
      >
        <SvgComponent cssClass={styles.svg} svg="greenhouse-gas" />
        {t('common.referenceModels.greenhouseGas')}
      </ButtonComponent>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles.water}`].join('')}
        to="/lcc/documentation/reference-models/water"
      >
        <SvgComponent cssClass={styles.svg} svg="water" />
        {t('common.referenceModels.water')}
      </ButtonComponent>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles['primary-energy']}`].join('')}
        to="/lcc/documentation/reference-models/primary-energy"
      >
        <SvgComponent cssClass={styles.svg} svg="primary-energy" />
        {t('common.referenceModels.primaryEnergy')}
      </ButtonComponent>
      <ButtonComponent
        cssClass={[styles.button, ` ${styles['raw-materials']}`].join('')}
        to="/lcc/documentation/reference-models/raw-materials"
      >
        <SvgComponent cssClass={styles.svg} svg="raw-materials" />
        {t('common.referenceModels.rawMaterials')}
      </ButtonComponent>
    </div>
  );
};
