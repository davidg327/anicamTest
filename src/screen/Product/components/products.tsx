import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles.ts';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailProduct} from '../../../state/brand/reducer.ts';

const ProductsComponent = ({item, navigation}) => {
  const dispatch = useDispatch();

  const {token, trm} = useSelector(state => state.auth);

  const handleDetailProduct = () => {
    let values = {
      token: token,
      code: item.code,
    };
    dispatch(getDetailProduct(values));
    navigation.navigate('DetailProduct');
  };

  return (
    <Pressable style={styles.container} onPress={handleDetailProduct}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.containerMoreInfo}>
        <View>
          <View style={styles.flexRow}>
            <Text style={styles.subcategory}>{`Id:`}</Text>
            <Text style={styles.simple}>{`${item.id}`}</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.subcategory}>{`Precio:`}</Text>
            <Text style={styles.simple}>{`$ ${(item.list_price * trm).toFixed(
              2,
            )}`}</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.subcategory}>{`Cantidad:`}</Text>
            <Text style={styles.simple}>{`${item.quantity}`}</Text>
          </View>
        </View>
        <Image source={{uri: item.small_image}} style={styles.image} />
      </View>
    </Pressable>
  );
};

export default ProductsComponent;
