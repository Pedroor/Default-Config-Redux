import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../store';

import { ICartItem } from '../store/modules/cart/types';

// import { Container } from './styles';

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  console.log('CART', cart);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 40,
        }}>
        <Text style={{ paddingLeft: 15 }}>PRODUTO</Text>

        <Text style={{ paddingLeft: 15 }}>PREÇO</Text>

        <Text style={{ paddingLeft: 15 }}>QUANTIDADE</Text>

        <Text style={{ paddingLeft: 15 }}>SUBTOTAL</Text>
      </View>
      {cart.map(item => (
        <View
          key={item.product.id}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>{item.product.title}</Text>
          <Text>{item.product.price}</Text>
          <Text>{item.quantity}</Text>
          <Text>{(item.product.price * item.quantity).toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}
