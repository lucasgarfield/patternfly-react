/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { SimpleList } from '../../SimpleList';
// any missing imports can usually be resolved by adding them here
import { SimpleListItemProps } from '../..';

it('SimpleList should match snapshot (auto-generated)', () => {
  const view = render(
    <SimpleList
      children={<>ReactNode</>}
      className={"''"}
      onSelect={(
        ref: React.RefObject<HTMLButtonElement> | React.RefObject<HTMLAnchorElement>,
        props: SimpleListItemProps
      ) => undefined as void}
    />
  );
  expect(view.container).toMatchSnapshot();
});
