/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Level } from '../../Level';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Level should match snapshot (auto-generated)', () => {
  const view = render(<Level hasGutter className={"''"} children={<>ReactNode</>} />);
  expect(view.container).toMatchSnapshot();
});
