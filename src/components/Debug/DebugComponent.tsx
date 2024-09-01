import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import styles from './DebugComponent.module.scss';

export const DebugComponent = () => {
  const location = useLocation();
  const { data } = useData();
  const [display, setDisplay] = useState(false);

  const list = Object.entries(data).map(([key, value]) => (
    <span key={key}>
      {key}: {value};
    </span>
  ));

  useEffect(() => {
    const debug =
      location.search.split('=')[0] === '?debug'
        ? location.search.split('=').pop()
        : '';

    if (debug === '1') {
      window.localStorage.setItem('_lcc_1em0m_3_debug', '1');
    } else if (debug === '0') {
      window.localStorage.removeItem('_lcc_1em0m_3_debug');
    }

    setDisplay(!!window.localStorage.getItem('_lcc_1em0m_3_debug'));
  }, []);

  return <>{display && <div className={styles.debug}>{list}</div>}</>;
};
