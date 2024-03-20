import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAccessToken} from '../../state/auth/reducer.ts';
import styles from './styles.ts';
import {TextInputComponent} from '../../components/textInput/textInput.tsx';
import {loginUser} from '../../state/user/reducer.ts';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);
  const {requestingLogin, successLogin} = useSelector(state => state.user);

  const [form, setForm] = useState({
    user_name: '',
    password: '',
  });

  const setData = (key: any, value: any) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(getAccessToken());
  }, []);

  useEffect(() => {
    if (successLogin) {
      navigation.navigate('Brand');
    }
  }, [successLogin]);

  const handleCreateUser = () => {
    let values = {
      ...form,
      token: token,
    };
    // @ts-ignore
    dispatch(loginUser(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={'Usuario'}
          value={form.user_name}
          onChange={(text: any) => setData('user_name', text)}
          keyboardType={'default'}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={'Contraseña'}
          value={form.password}
          onChange={(text: any) => setData('password', text)}
          keyboardType={'default'}
          security={true}
        />
      </View>
      <Pressable style={styles.button} onPress={handleCreateUser}>
        {requestingLogin && (
          <ActivityIndicator color={'white'} />
        )}
        {!requestingLogin && (
          <Text style={styles.text}>Ingresar</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.login}>Volver</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;
