import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles.ts';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../../state/brand/reducer.ts';

const BrandsComponent = ({item, navigation}) => {
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);

  const handleProducts = () => {
    let values = {
      token: token,
      paginate: 1,
      brand: item.brand,
    };
    dispatch(getProducts(values));
    navigation.navigate('Product', {brand: item.brand});
  };

  return (
    <Pressable style={styles.container} onPress={handleProducts}>
      <Text style={styles.title}>{item.brand}</Text>
      <View style={styles.containerQuantity}>
        <Text style={styles.quantity}>Cantidad: </Text>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </Pressable>
  );
};

export default BrandsComponent;
