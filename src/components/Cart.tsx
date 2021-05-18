import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { IState } from '../store';
import { addProductToCart } from '../store/modules/cart/action';
import { ICartItem, IProduct } from '../store/modules/cart/types';

// import { Container } from './styles';

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

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
