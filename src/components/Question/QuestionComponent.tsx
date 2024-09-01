import { ReactNode, useState } from 'react';
import { ButtonComponent } from '../Button/ButtonComponent';
import { TitleComponent } from '../Title/TitleComponent';
import { IconComponent } from '../Icon/IconComponent';
import { InfoComponent } from '../Info/InfoComponent';
import styles from './QuestionComponent.module.scss';

interface QuestionComponentProps {
  title: ReactNode;
  text: ReactNode;
}

export const QuestionComponent = ({ title, text }: QuestionComponentProps) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div className={styles.question}>
        <TitleComponent cssClass={styles.title}>{title}</TitleComponent>
        <ButtonComponent
          cssClass={styles.button}
          onClick={() => setInfo(!info)}
        >
          <IconComponent name="info" cssClass={styles.icon} />
        </ButtonComponent>
      </div>
      {info && <InfoComponent text={text} onClick={() => setInfo(false)} />}
    </>
  );
};
