import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Menu from '../Menu';
// all matchers docs: https://testing-library.com/docs/queries/about

describe('Menu Component', () => {
  it('should render correctly', async () => {
    render(<Menu />);
    // const title = await screen.findByText(/restaurante agave/i); // title = <h1>Restaurante Agave</h1>
    const title = await screen.findByTestId('page-title'); // title = <h1>Restaurante Andy and Co.</h1>
    const input = await screen.findByPlaceholderText(/entra tu nombre/i); // input = <input type="text" placeholder='entra tu nombre' />
    const items = await screen.findAllByTestId(/menu-item-/i); // items = [<div> ... </div>, <div> ... </div>, <div> ... </div>]

    console.log(items);
    console.log(items.length);

    expect(title).toBeTruthy();
    expect(input).toBeTruthy();
    // expect(items.length).toBeGreaterThanOrEqual(3); // items.length >= 3
    expect(items.length).toBe(3);
  });

  it('should set the user\'s name correctly', async() => {
    render(<Menu />);
    const input = await screen.findByPlaceholderText(/entra tu nombre/i); 
    const button = await screen.findByTestId('page-button');

    fireEvent.change(input, {target: {value: 'Jonathan'}});
    fireEvent.click(button);

    await waitFor(async () => {
      const NameElement = await screen.findByText('Hola Jonathan!');
      expect(NameElement).toBeTruthy();
    });
  });
});
