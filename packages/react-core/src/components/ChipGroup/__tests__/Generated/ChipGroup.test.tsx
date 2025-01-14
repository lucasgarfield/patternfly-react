/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ChipGroup } from '../../ChipGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ChipGroup should match snapshot (auto-generated)', () => {
  const view = render(
    <ChipGroup
      children={<div>ReactNode</div>}
      className={"''"}
      defaultIsOpen={false}
      expandedText={"'Show Less'"}
      collapsedText={"'${remaining} more'"}
      withToolbar={false}
      headingLevel={'h1'}
      numChips={3}
    />
  );
  expect(view.container).toMatchSnapshot();
});
