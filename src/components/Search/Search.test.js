import { render } from '@testing-library/react';
import Search from './index.js';

describe('Search Component', () => {
  it('rendered input', () => {
    const { getByTestId } = render(<Search searchTerm={false} />);
    const input = getByTestId('searchInput');
    expect(input).toBeTruthy();
  });
});
