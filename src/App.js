import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './App.css';
import en from './en.json';
import fr from './fr.json';
import ja from './ja.json';
import zh from './zh.json';

const messages = {
  en: en,
  fr: fr,
  ja: ja,
  zh: zh
};

function App() {
  const [locale, setLocale] = React.useState(navigator.language);

  function handleLocaleChange(newLocale) {
    setLocale(newLocale);
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="app-container">
        <h1 className="app-title"><FormattedMessage id="app.title" /></h1>
        <p className="app-intro"><FormattedMessage id="app.intro" /></p>
        <div className="language-switcher">
          <button onClick={() => handleLocaleChange('en')}>
            English
          </button>
          <button onClick={() => handleLocaleChange('fr')}>
            Français
          </button>
          <button onClick={() => handleLocaleChange('ja')}>
            日本語
          </button>
          <button onClick={() => handleLocaleChange('zh')}>
            中文
          </button>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;

