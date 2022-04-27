import { render, screen, waitFor } from "@testing-library/react";
import Storefront from "../Storefront";
import request from '../../../helpers/request';

// --- global initial state ---
jest.mock('../../../helpers/request');

const exampleItem = {
  name: 'foo',
  price: 100,
  description: 'lorem ipsum'
}

beforeEach(() => {
  // something we want to do before each test
  request.resetAllMocks();
});

beforeAll(() => {
  // something we want to do before all tests
});

afterEach(() => {
  // something we want to do after each test
});

afterAll(() => {
  // something we want to do after all tests
});
// --- end global initial state ---

describe('Storefront Component', () => {
  it('should render the empty items message', async () => {
    // --- initial state ---
    request.mockResolvedValue({data: []});
    render(<Storefront category={'jewelery'} /*location={{pathname: '/login/12345'}}*/ />)
    let emptyLabel
    // --- end initial state ---
    // --- events --- in this example we're waiting for the fetch to resolve
    await waitFor(async () => {
      emptyLabel = await screen.findByTestId('no-items-label')
    })
    // --- end events ---
    // --- assertions ---
    expect(emptyLabel).toBeTruthy();
    expect(request).toBeCalledTimes(1);
    // --- end assertions ---
  });

  it('should render the items', async () => {
    request.mockResolvedValue({data: [exampleItem, exampleItem, exampleItem]});
    render(<Storefront category={'jewelery'} /*location={{pathname: '/login/12345'}}*/ />)
    let items
    await waitFor(async () => {
      items = await screen.findAllByTestId(/items-container-/i)
    })
    expect(items.length).toBe(3);
    expect(request).toBeCalledTimes(1);
  });

  it('should render', async () => {
    render(<Storefront category={'jewelery'} /*location={{pathname: '/login/12345'}}*/ />)
  });
});
