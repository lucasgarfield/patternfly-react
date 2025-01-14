/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { WizardFooterInternal } from '../../WizardFooterInternal';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('WizardFooterInternal should match snapshot (auto-generated)', () => {
  const view = render(
    <WizardFooterInternal
      onNext={'any'}
      onBack={'any'}
      onClose={'any'}
      isValid={true}
      firstStep={true}
      activeStep={{} /*unrecognizedType WizardStep undefined*/}
      nextButtonText={<div>ReactNode</div>}
      backButtonText={<div>ReactNode</div>}
      cancelButtonText={<div>ReactNode</div>}
    />
  );
  expect(view.container).toMatchSnapshot();
});
