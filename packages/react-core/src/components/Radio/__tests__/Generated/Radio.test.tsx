/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Radio } from '../../Radio';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Radio should match snapshot (auto-generated)', () => {
  const view = render(
    <Radio
      className={"''"}
      id={'string'}
      isLabelWrapped={true}
      isLabelBeforeButton={true}
      checked={true}
      isChecked={true}
      isDisabled={false}
      isValid={true}
      label={<div>ReactNode</div>}
      name={'string'}
      onChange={() => {}}
      aria-label={'string'}
      description={<div>ReactNode</div>}
    />
  );
  expect(view.container).toMatchSnapshot();
});
