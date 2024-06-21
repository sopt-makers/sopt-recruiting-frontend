import { useContext, useEffect } from 'react';

import { ThemeContext } from '@store/theme-context';

const ResultPage = () => {
  const { handleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    handleDarkMode();
  }, [handleDarkMode]);

  return <div>ResultPage</div>;
};

export default ResultPage;
