import { ReactNode, useState } from 'react';
import { ButtonComponent } from '../Button/ButtonComponent';
import { TitleComponent } from '../Title/TitleComponent';
import { IconComponent } from '../Icon/IconComponent';
import { SnackbarComponent } from '../Snackbar/SnackbarComponent';
import styles from './QuestionComponent.module.scss';

interface QuestionComponentProps {
  title: ReactNode;
  text: ReactNode;
}

export const QuestionComponent = ({ title, text }: QuestionComponentProps) => {
  const [snackbar, setSnackbar] = useState(false);

  return (
    <>
      <div className={styles.question}>
        <TitleComponent cssClass={styles.title}>{title}</TitleComponent>
        <ButtonComponent
          cssClass={styles.button}
          onClick={() => setSnackbar(!snackbar)}
        >
          <IconComponent cssClass={styles.icon} icon="info" />
        </ButtonComponent>
      </div>
      {snackbar && (
        <SnackbarComponent text={text} onClick={() => setSnackbar(false)} />
      )}
    </>
  );
};
