import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { useScore } from '../../hooks/useScore';
import { useProgress } from '../../hooks/useProgress';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { useUser } from '../../hooks/useUser';
import { useAlertDispatch } from '../../hooks/useAlert';
import { StatusType } from '../../models/StatusType';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import { TextFieldComponent } from '../../components/Forms/TextField/TextFieldComponent';
import { FormComponent } from '../../components/Forms/Form/FormComponent';
import styles from './ProfilePage.module.scss';

function ProfilePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setData } = useData();
  const { setScore } = useScore();
  const { progress } = useProgress();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { user, setUser } = useUser();
  const { addAlert } = useAlertDispatch();
  const [status, setStatus] = useState('info');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');

  useTitlePage(t('page.profile.title'));

  const testName = (value: string) => /^[A-Za-z]{4,20}$/.test(value);

  const testEmail = (value: string) =>
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value);

  const onChangeName = (value: string) => {
    if (testName(value)) setMessageName('');
    setName(value);
    setStatus('info');
  };

  const onChangeEmail = (value: string) => {
    if (testEmail(value)) setMessageEmail('');
    setEmail(value);
    setStatus('info');
  };

  const onSubmit = () => {
    const id = new Date().getTime();

    if (!testName(name)) setMessageName(t('page.profile.name.message'));
    if (!testEmail(email)) setMessageEmail(t('page.profile.email.message'));

    if (testName(name) && testEmail(email)) {
      addAlert({ label: t('common.alert.valid') });
      setUser({ id, name, email });
      setName('');
      setEmail('');
    }
  };

  const restarted = () => {
    setScore({
      plug: 0,
      meter: 0,
      coin: 0,
      glass: 0,
      house: 0,
      car: 0,
      desktop: 0,
      shower: 0,
      primaryEnergy: 0,
      greenhouseGas: 0,
      rawMaterials: 0,
      water: 0,
    });
    setData({
      websiteName: 'Website Name',
      whatPurpose: 'Read a page of content',
      visitorsPerMonth: 2500,
      averageTime: 3,
      visitorsLocated: 'fr',
      mobileVisitors: 70,
      pagesViewed: 5,
      serversUsed: 2,
      serversLocated: 'eu',
    });
    navigate('/lcc/calculator/website');
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            {user && user.name
              ? t('page.profile.welcome', {
                  name: user.name,
                })
              : t('page.profile.title')}
          </TitleComponent>
          <FrameComponent>
            <p>
              {progress.value > 0
                ? t('page.profile.text.progress', {
                    percent: (progress.value * 100) / 8,
                    value: progress.value,
                    plural: progress.value > 1 ? 's' : '',
                  })
                : t('page.profile.text.start')}
            </p>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            {!progress.page ? (
              <ButtonComponent
                cssClass={styles.button}
                to="/lcc/calculator/website"
              >
                {t('common.button.start')}
                <IconComponent cssClass={styles.icon} icon="celebration" />
              </ButtonComponent>
            ) : (
              <>
                <ButtonComponent cssClass={styles.button} to={progress.page}>
                  {t('common.button.progress')}
                  <IconComponent cssClass={styles.icon} icon="celebration" />
                </ButtonComponent>
                <ButtonComponent
                  cssClass={styles.button}
                  onClick={() => restarted()}
                >
                  {t('common.button.restarted')}
                  <IconComponent cssClass={styles.icon} icon="restart_alt" />
                </ButtonComponent>
              </>
            )}
          </NavigationComponent>
          <FrameComponent>
            <h2>{t('page.profile.myInformations')}</h2>
          </FrameComponent>
          <FormComponent>
            <TextFieldComponent
              placeholder=""
              label={t('page.profile.name.label')}
              message={messageName}
              minLength={4}
              maxLength={20}
              status={status as StatusType}
              value={name}
              onChange={(e) => onChangeName(e.target.value)}
            />
            <TextFieldComponent
              type="email"
              placeholder=""
              label={t('page.profile.email.label')}
              message={messageEmail}
              status={status as StatusType}
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
            />
            <ButtonComponent
              cssClass={styles.button}
              onClick={() => onSubmit()}
            >
              {t('common.button.save')}
              <IconComponent cssClass={styles.icon} icon="save" />
            </ButtonComponent>
          </FormComponent>
          <FrameComponent>
            <h2>{t('page.profile.myPreferences')}</h2>
          </FrameComponent>
          <div className={styles.settings}>
            <ButtonComponent
              cssClass={[
                styles.button,
                theme === 'light' ? ` ${styles.active}` : '',
              ].join('')}
              onClick={() => setTheme('light')}
            >
              {t('common.button.light')}
              <IconComponent cssClass={styles.icon} icon="light_mode" />
            </ButtonComponent>
            <ButtonComponent
              cssClass={[
                styles.button,
                theme === 'dark' ? ` ${styles.active}` : '',
              ].join('')}
              onClick={() => setTheme('dark')}
            >
              {t('common.button.dark')}
              <IconComponent cssClass={styles.icon} icon="dark_mode" />
            </ButtonComponent>
          </div>
          <div className={styles.settings}>
            <ButtonComponent
              cssClass={[
                styles.button,
                language === 'en' ? ` ${styles.active}` : '',
              ].join('')}
              onClick={() => setLanguage('en')}
            >
              {t('common.button.english')}
              <IconComponent cssClass={styles.icon} icon="flag_2" />
            </ButtonComponent>
            <ButtonComponent
              cssClass={[
                styles.button,
                language === 'fr' ? ` ${styles.active}` : '',
              ].join('')}
              onClick={() => setLanguage('fr')}
            >
              {t('common.button.french')}
              <IconComponent cssClass={styles.icon} icon="flag_2" />
            </ButtonComponent>
          </div>
        </ArticleComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default ProfilePage;
