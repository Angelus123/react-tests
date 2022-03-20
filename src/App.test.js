import { render} from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it('rendered div ', () => {
    const { getByRole } = render(<App />);
    const divElement = getByRole('appInfo');
    expect(divElement).toBeTruthy();
  });

})

