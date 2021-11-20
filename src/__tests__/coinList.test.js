import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import CoinList from '../components/coinList';

describe('List coin', () => {
  test('Create button component', () => {
    render(
      <Provider store={store}>
        <Router>
          <CoinList
            key="testID"
            price="$123.0000000"
            name="test Coin"
            number={1}
          />
        </Router>
      </Provider>,
    );
    return expect(screen.getByText('test Coin')).toBeInTheDocument;
  });
});

describe('Compare with snapshot', () => {
  it('render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CoinList
              key="testID"
              price="$123.0000000"
              name="test Coin"
              number={1}
            />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
