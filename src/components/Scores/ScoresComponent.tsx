import { ScoreComponent } from '../Score/ScoreComponent';
import styles from './ScoresComponent.module.scss';

interface ScoresComponentProps {
  scores: { text: string; svg: string }[];
}

export const ScoresComponent = ({ scores }: ScoresComponentProps) => {
  return (
    <div className={styles.scores}>
      {scores.map((score, index) => (
        <ScoreComponent key={index} text={score.text} svg={score.svg} />
      ))}
    </div>
  );
};
