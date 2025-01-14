import * as React from 'react';
import { Bullseye } from '../Bullseye';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<Bullseye />);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<Bullseye className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'bullseye';
  const view = shallow(<Bullseye data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('allows passing in a string as the component', () => {
  const component = 'div';
  const view = shallow(<Bullseye component={component} />);
  expect(view.type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component: React.FunctionComponent = () => null;
  const view = shallow(<Bullseye component={Component as unknown as (keyof JSX.IntrinsicElements)} />);
  expect(view.type()).toBe(Component);
});
