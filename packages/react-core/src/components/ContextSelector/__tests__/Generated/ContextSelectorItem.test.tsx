/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ContextSelectorItem } from '../../ContextSelectorItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ContextSelectorItem should match snapshot (auto-generated)', () => {
  const view = render(
    <ContextSelectorItem
      children={<>ReactNode</>}
      className={"''"}
      isDisabled={false}
      isHovered={false}
      onClick={(): any => undefined}
      index={42}
      sendRef={() => {}}
    />
  );
  expect(view.container).toMatchSnapshot();
});
