import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from '../components/CatalogItem';

// import { Container } from './styles';

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    console.log('OI');
    try {
      api.get('products').then(response => {
        setCatalog(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      {catalog.map(product => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </View>
  );
}
