import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Coin from '../components/coin';

describe('List all coins', () => {
  test('should container the list container', () => {
    render(
      <Provider store={store}>
        <Router>
          <Coin />
        </Router>
      </Provider>,
    );
    return expect(screen.getByTestId('list-container')).toBeInTheDocument;
  });
});

describe('Compare with snapshot', () => {
  it('render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Coin />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
