import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import {
  Table,
  TableHeader,
  TableBody,
  TableGridBreakpoint,
  TableVariant,
  RowSelectVariant,
  cellWidth,
  headerCol,
  sortable,
  expandable,
  compoundExpand,
  IRow,
  OnCollapse,
  OnExpand,
  OnSelect,
  OnRowEdit,
  OnSort,
  wrappable,
  nowrap,
  truncate,
  breakWord,
  fitContent,
  ICell
} from './index';
import { rows, columns, editableRows, editableColumns, actions } from '../../test-helpers/data-sets';
import { ColumnsType } from './base';

describe('Simple table', () => {
  test('caption', () => {
    const view = render(
      <Table caption="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('header', () => {
    const view = render(
      <Table header={<h4>Header title</h4>} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(view.container).toMatchSnapshot();
  });
  test('aria-label', () => {
    const view = render(
      <Table aria-label="Aria labeled" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    expect(view.container).toMatchSnapshot();
  });
});

test('Editable table', () => {
  const onRowEdit: OnRowEdit = () => undefined;
  const view = render(
    <Table caption="Editable Table" cells={editableColumns} rows={editableRows} onRowEdit={onRowEdit}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Sortable table', () => {
  const onSortCall: OnSort = () => undefined;
  columns[0] = { ...(columns[0] as object), transforms: [sortable] };
  const view = render(
    <Table aria-label="Aria labeled" onSort={onSortCall} sortBy={{}} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Row click table', () => {
  const rowClickHandler = jest.fn();
  const view = render(
    <Table aria-label="Row click table" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody onRowClick={rowClickHandler} />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

describe('Table variants', () => {
  Object.values(TableGridBreakpoint).forEach(oneBreakpoint => {
    test(`Breakpoint - ${oneBreakpoint}`, () => {
      const view = render(
        <Table aria-label="Aria labeled" gridBreakPoint={oneBreakpoint} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(view.container).toMatchSnapshot();
    });
  });
  Object.values(TableVariant).forEach(onevariant => {
    test(`Size - ${onevariant}`, () => {
      const view = render(
        <Table aria-label="Aria labeled" variant={onevariant} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      );
      expect(view.container).toMatchSnapshot();
    });
  });
});

test('Simple Actions table', () => {
  const rowsWithDisabledAction = [
    ...rows,
    {
      cells: ['one', 'two', 'three', 'four', 'five'],
      disableActions: true
    }
  ];

  const view = render(
    <Table aria-label="Aria labeled" actions={actions} cells={columns} rows={rowsWithDisabledAction}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Actions table', () => {
  const view = render(
    <Table
      aria-label="Aria labeled"
      actionResolver={() => actions}
      areActionsDisabled={() => false}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Cell header table', () => {
  columns[0] = { ...(columns[0] as object), cellTransforms: [headerCol('test-headercol-')] };
  const view = render(
    <Table aria-label="Aria labeled" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Collapsible table', () => {
  rows[0] = { ...rows[0], isOpen: true };
  rows[1] = { ...rows[1], parent: 0 };
  rows[3] = { ...rows[3], isOpen: false };
  rows[4] = { ...rows[4], parent: 3 };
  columns[0] = { ...(columns[0] as object), cellFormatters: [expandable] };
  const onCollapse: OnCollapse = () => undefined;
  const view = render(
    <Table aria-label="Aria labeled" onCollapse={onCollapse} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Compound Expandable table', () => {
  const compoundColumns: ColumnsType = [
    { title: 'col1', cellTransforms: [compoundExpand] },
    { title: 'col2', cellTransforms: [compoundExpand] }
  ];
  const compoundRows: IRow[] = [
    {
      isOpen: true,
      cells: [
        { title: '1', props: { isOpen: true } },
        { title: '2', props: { isOpen: false } }
      ]
    },
    { parent: 0, compoundParent: 0, cells: [{ title: 'expanded', props: { colSpan: 2 } }] },
    {
      isOpen: false,
      cells: [
        { title: '3', props: { isOpen: false } },
        { title: '4', props: { isOpen: false } }
      ]
    },
    { parent: 2, compoundParent: 0, cells: [{ title: 'expanded', props: { colSpan: 2 } }] }
  ];
  const onExpand: OnExpand = () => undefined;
  const view = render(
    <Table aria-label="Aria labeled" onExpand={onExpand} cells={compoundColumns} rows={compoundRows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Collapsible nested table', () => {
  rows[0] = { ...rows[0], isOpen: false };
  rows[1] = { ...rows[1], parent: 0, isOpen: true };
  rows[2] = { ...rows[2], parent: 1 };
  const onCollapse: OnCollapse = () => undefined;
  const view = render(
    <Table aria-label="Aria labeled" onCollapse={onCollapse} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Selectable table', () => {
  const onSelect: OnSelect = () => undefined;
  const view = render(
    <Table aria-label="Aria labeled" onSelect={onSelect} cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Selectable table with Radio', () => {
  const onSelect: OnSelect = () => undefined;
  const view = render(
    <Table
      aria-label="Aria labeled"
      selectVariant={RowSelectVariant.radio}
      onSelect={onSelect}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Control text table', () => {
  const controlTextColumns: ICell[] = [
    { ...(columns[0] as object), transforms: [nowrap] },
    { title: 'new object column', transforms: [wrappable] },
    { ...(columns[2] as object), transforms: [breakWord] },
    { title: 'new object column', transforms: [truncate] },
    { ...(columns[4] as object), transforms: [fitContent] }
  ];

  const view = render(
    <Table aria-label="Aria labeled" cells={controlTextColumns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Header width table', () => {
  columns[0] = { ...(columns[0] as object), transforms: [cellWidth(10)] };
  columns[2] = { ...(columns[2] as object), transforms: [cellWidth(30)] };
  columns[4] = { ...(columns[4] as object), transforms: [cellWidth(100)] };
  const view = render(
    <Table aria-label="Aria labeled" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
  expect(view.container).toMatchSnapshot();
});

test('Selectable table with selected expandable row', () => {
  const data = {
    cells: ['column'],
    rows: [
      {
        cells: ['one'],
        selected: true
      },
      {
        cells: ['one'],
        parent: 0
      }
    ],
    onSelect: (e: React.FormEvent<HTMLInputElement>) => e
  };

  const view = mount(
    <Table aria-label="Aria labeled" {...data}>
      <TableHeader />
      <TableBody />
    </Table>
  );

  expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
});

test('Empty state table', () => {
  const data = {
    cells: ['Hostname', 'IP address', 'Role', 'Team'],
    rows: [
      {
        heightAuto: true,
        cells: [
          {
            title: <div>Empty State Component</div>,
            props: { colSpan: 8 }
          }
        ]
      }
    ]
  };

  const view = mount(
    <Table aria-label="Aria labeled" {...data}>
      <TableHeader />
      <TableBody />
    </Table>
  );

  expect(
    view
      .find('tbody')
      .find('td')
      .prop('colSpan')
  ).toEqual(8);
});
