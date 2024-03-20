import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { getAccessToken, getTrm } from "../../state/auth/reducer.ts";
import styles from './styles.ts';
import {TextInputComponent} from '../../components/textInput/textInput.tsx';
import {createUser} from '../../state/user/reducer.ts';

const InitViewScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);
  const {requesting, requestingLogin, successLogin} = useSelector(
    state => state.user,
  );

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    identification: '',
    email: '',
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
    dispatch(getTrm());
  }, []);

  useEffect(() => {
    if (successLogin) {
      navigation.navigate('Brand');
    }
  }, [successLogin]);

  const handleCreateUser = () => {
    let values = {
      ...form,
      document_type: 13,
      business_line_id: '65C971C2-2098-4D4D-B5A3-7CD6EE2F564A',
      token: token,
      gender: 'M',
      birth_date: '1974-09-10',
      company: 'Mi Dominio',
      position: 'CTO',
      external_id: '',
      photo: 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg',
      send_to_sap: false,
      notify: true,
      referred: 'marketplace',
      accept_sms: false,
      accept_email: false,
      accept_call_phone: false,
      accept_whatsapp: false,
      accept_data_processing: false,
      accept_data_authorization: false,
      accept_terms_conditions: false,
      billing: [
        {
          country_locale: 'CO',
          state: 'Bogota',
          city: 'Bogota',
          address: 'Calle 1 F # 2A-30 INTERIOR 4 APTO 506',
          zip_code: '',
          phone_1: '3112290000',
          phone_2: '',
        },
      ],
      shipping: [
        {
          country_locale: 'CO',
          state: 'Bogota',
          city: 'Bogota',
          address: 'Calle 1 F # 2A-30 INTERIOR 4 APTO 506',
          zip_code: '',
          phone_1: '3112290000',
          phone_2: '',
        },
      ],
    };
    // @ts-ignore
    dispatch(createUser(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registro de usuario</Text>
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={'Nombre'}
          value={form.first_name}
          onChange={(text: any) => setData('first_name', text)}
          keyboardType={'default'}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={'Apellido'}
          value={form.last_name}
          onChange={(text: any) => setData('last_name', text)}
          keyboardType={'default'}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={'Documento'}
          value={form.identification}
          onChange={(text: any) => setData('identification', text)}
          keyboardType={'numeric'}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={'Correo'}
          value={form.email}
          onChange={(text: any) => setData('email', text)}
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
        {(requesting || requestingLogin) && (
          <ActivityIndicator color={'white'} />
        )}
        {!requesting && !requestingLogin && (
          <Text style={styles.text}>Crear usuario</Text>
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.login}>Iniciar sesión</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default InitViewScreen;
