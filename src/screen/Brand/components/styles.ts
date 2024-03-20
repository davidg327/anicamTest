import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  quantity: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
});

export default styles;
