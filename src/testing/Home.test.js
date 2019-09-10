/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { home } from '../reducers';
import { Home } from '../containers';


const renderWithRedux = (
  ui,
  { initializeState, store = createStore(home, initializeState) } = {},
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

// Home 컴포넌트 Test
describe('<Home />', () => {
  it('matches snapshot', () => {
    const utils = renderWithRedux(<Home />);
    expect(utils.container).toMatchSnapshot();
  });

  it('getTextTest', () => {
    const { getByTestId, getByText, store } = renderWithRedux(<Home />);
    fireEvent.click(getByText('좋아요'));
    expect(getByTestId('getText')).toHaveTextContent(store.getState('test').text);
  });
});
