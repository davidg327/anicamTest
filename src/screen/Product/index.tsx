import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles.ts';
import {useDispatch, useSelector} from 'react-redux';
import {getBrands, getProducts} from '../../state/brand/reducer.ts';
import ProductsComponent from './components/products.tsx';

const ProductScreen = ({navigation, route}) => {
  const {brand} = route.params;
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);
  const {products, requestingProducts, paginate} = useSelector(
    state => state.brand,
  );

  useEffect(() => {
    dispatch(getBrands(token));
  }, []);

  const renderItem = ({item}) => {
    return <ProductsComponent item={item} navigation={navigation} />;
  };

  const handleMoreProducts = () => {
    let values = {
      token: token,
      paginate: paginate + 1,
      brand: brand,
    };
    dispatch(getProducts(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Angle_left_font_awesome.svg/1200px-Angle_left_font_awesome.svg.png',
            }}
          />
        </Pressable>
        <Text style={styles.titleHeader}>Productos</Text>
      </View>
      {requestingProducts && (
        <ActivityIndicator
          color={'black'}
          size={'large'}
          style={styles.indicator}
        />
      )}
      {!requestingProducts && (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          contentContainerStyle={styles.marginFlat}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.9}
          onEndReached={handleMoreProducts}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductScreen;
