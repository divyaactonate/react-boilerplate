/**
 *
 * Translate
 *
 */

import { Component, FC } from 'react';
import { Trans, useTranslation, withTranslation } from 'react-i18next';

// use hoc for class based components
class LegacyWelcomeClass extends Component<any, any> {
  render() {
    const { t } = this.props;
    return <h2>{t('title')}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey='description.part1'>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

const Translate: FC = (props) => {
  const {} = props;
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div data-testid='Translate'>
      <h1 className='text-3xl'>Using Class component </h1>

      <Welcome />
      <button className='bg-green-200 p-2' type='button' onClick={() => changeLanguage('de')}>
        de
      </button>
      <button className='bg-red-200 p-2' type='button' onClick={() => changeLanguage('en')}>
        en
      </button>
      <div className='py-8 bg-gray-200'>
        <h1 className='text-3xl'>Using Trans component </h1>
        <MyComponent />
      </div>

      <h1 className='text-3xl'>Using Hooks </h1>

      <div>{t('description.part2')}</div>

      <h1 className='text-3xl'>Using Hooks and interloation var pass </h1>

      <h1>{t('welcome.title', { framework: 'React + Webpack' })}</h1>
    </div>
  );
};

export default Translate;
