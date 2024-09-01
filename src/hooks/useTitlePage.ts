import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useTitlePage = (title: string) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${title} - ${t('common.title')}`;
  }, [title]);
};
