import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './ReferenceModelsComponent.module.scss';

export const ReferenceModelsComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['reference-models']}>
      <ButtonComponent
        cssClass={styles['raw-materials']}
        to="/lcc/documentation/reference-models/raw-materials"
      >
        <SvgComponent cssClass={styles.svg} name="raw-materials" />
        {t('page.referenceModels.navigation.rawMaterials')}
      </ButtonComponent>
      <ButtonComponent
        cssClass={styles.water}
        to="/lcc/documentation/reference-models/raw-materials"
      >
        <SvgComponent cssClass={styles.svg} name="water" />
        {t('page.referenceModels.navigation.water')}
      </ButtonComponent>
      <ButtonComponent
        cssClass={styles['primary-energy']}
        to="/lcc/documentation/reference-models/primary-energy"
      >
        <SvgComponent cssClass={styles.svg} name="primary-energy" />
        {t('page.referenceModels.navigation.primaryEnergy')}
      </ButtonComponent>
      <ButtonComponent
        cssClass={styles['greenhouse-gas']}
        to="/lcc/documentation/reference-models/greenhouse-gas"
      >
        <SvgComponent cssClass={styles.svg} name="greenhouse-gas" />
        {t('page.referenceModels.navigation.greenhouseGas')}
      </ButtonComponent>
    </div>
  );
};
