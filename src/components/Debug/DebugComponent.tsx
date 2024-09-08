import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { useResult } from '../../hooks/useResult';
import styles from './DebugComponent.module.scss';

export const DebugComponent = () => {
  const location = useLocation();
  const { data } = useData();
  const { result } = useResult();
  const [display, setDisplay] = useState(false);

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

  return (
    <>
      {display && (
        <div className={styles.debug}>
          <div className={styles.inner}>
            {data && (
              <div>
                Data
                <div>
                  {Object.keys(data).map((key) => (
                    <span key={key}>
                      {key}: {data[key]}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {result && (
              <div>
                result
                <div>
                  {Object.keys(result).map((key) => (
                    <span key={key}>
                      {key}: {result[key as unknown as number]}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
