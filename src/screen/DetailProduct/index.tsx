import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles.ts';
import {useSelector} from 'react-redux';

const DetailProductScreen = ({navigation}) => {
  const {product} = useSelector(state => state.brand);
  const {trm} = useSelector(state => state.auth);
  return (
    <SafeAreaView style={styles.container}>
      {product?.title && (
        <View>
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
            <Text style={styles.titleHeader}>
              {product.title.substring(0, 25) + '...'}
            </Text>
          </View>
          <ScrollView>
            <View style={styles.containerInfo}>
              <Text style={styles.name}>Nombre:</Text>
              <Text style={styles.simple}>{product.title}</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {product.images.length > 0 &&
                product.images.map((image, index) => (
                  <Image
                    key={index}
                    style={styles.carrousel}
                    source={{
                      uri: image.url,
                    }}
                  />
                ))}
            </ScrollView>
            <View style={styles.containerInfo}>
              <Text style={styles.name}>Cantidad:</Text>
              <Text style={styles.simple}>{product.quantity}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.name}>Precio:</Text>
              <Text style={styles.simple}>{`$ ${(
                product.list_price * trm
              ).toFixed(2)}`}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.name}>Categoria:</Text>
              <Text style={styles.simple}>{product.category}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.name}>Descripción:</Text>
              <Text style={styles.simple}>{product.description}</Text>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DetailProductScreen;
