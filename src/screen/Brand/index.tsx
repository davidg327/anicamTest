import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles.ts';
import {useDispatch, useSelector} from 'react-redux';
import {getBrands} from '../../state/brand/reducer.ts';
import BrandsComponent from './components/brands.tsx';

const BrandScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);
  const {brands, requestingBrands} = useSelector(state => state.brand);

  useEffect(() => {
    dispatch(getBrands(token));
  }, []);

  const renderItem = ({item}) => {
    return <BrandsComponent item={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Marcas</Text>
      </View>
      {requestingBrands && (
        <ActivityIndicator
          color={'black'}
          size={'large'}
          style={styles.indicator}
        />
      )}
      {!requestingBrands && (
        <FlatList
          data={brands}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.brand}
          contentContainerStyle={styles.marginFlat}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default BrandScreen;
