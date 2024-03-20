import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginTop: '10%',
    marginBottom: '5%',
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
  },
  containerInput: {
    marginTop: '2%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    width: '80%',
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: '5%',
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  login: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginBottom: '20%',
    marginTop: '10%',
  },
});

export default styles;
