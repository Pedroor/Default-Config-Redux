import React from 'react';

import { render } from '@testing-library/react-native';
import App from '../App';
import CatalogItem from '../src/components/CatalogItem';

describe('Render successfully', () => {
  it('renders App successfully', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders login button successfully', async () => {
    const { getByText } = render(
      <CatalogItem
        product={{
          id: 3,
          title: 'Tênis da moda',
          price: 500.0,
          hasProductOnStock: false,
        }}
      />,
    );

    const button = await getByText('Adicionar');

    expect(button).toBeTruthy();
  });
});
