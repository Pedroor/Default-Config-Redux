import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { addProductToCartRequest } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';
import { IState } from '../store';

// import { Container } from './styles';
interface CatalogItemProps {
  product: IProduct;
}

function CatalogItem() {
  // const dispatch = useDispatch();

  // const hasFailedStockCheck = useSelector<IState, boolean>(state => {
  //   return state.cart.failedStockCheck.includes(product.id);
  // });

  // const handleAddProductToCart = useCallback(
  //   (product: IProduct) => {
  //     dispatch(addProductToCartRequest(product));
  //   },
  //   [dispatch],
  // );

  return (
    <View style={{ marginTop: 15 }}>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ paddingRight: 50 }}>{product.title}</Text>
        <Text>{product.price}</Text>
      </View> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <TouchableOpacity
          style={{ width: '70%', height: 35, backgroundColor: 'green' }}
          // onPress={() => handleAddProductToCart(product)}
        >
          <Text style={{ textAlign: 'center' }}>Adicionar</Text>
        </TouchableOpacity>

        {/* {hasFailedStockCheck && (
          <Text style={{ color: 'red' }}>PRODUTO FORA DE ESTOQUE</Text>
        )} */}
      </View>
    </View>
  );
}

export default CatalogItem;
