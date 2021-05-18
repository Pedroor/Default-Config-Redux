import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { addProductToCart } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';

// import { Container } from './styles';

export function Catalog() {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const store = useSelector(state => state);

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

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  return (
    <View>
      {catalog.map(product => (
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ paddingRight: 50 }}>{product.title}</Text>
            <Text>{product.price}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 20,
            }}>
            <TouchableOpacity
              style={{ width: '70%', height: 35, backgroundColor: 'green' }}
              onPress={() => handleAddProductToCart(product)}>
              <Text style={{ textAlign: 'center' }}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
