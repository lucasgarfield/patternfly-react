/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { EmptyState } from '../../EmptyState';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('EmptyState should match snapshot (auto-generated)', () => {
  const view = render(<EmptyState className={"''"} children={<div>ReactNode</div>} variant={'sm'} />);
  expect(view.container).toMatchSnapshot();
});
