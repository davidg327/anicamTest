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
  containerMoreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginTop: '5%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subcategory: {
    width: '40%',
    fontSize: 14,
    fontWeight: '700',
  },
  simple: {
    fontSize: 12,
    width: '40%',
    fontWeight: '400',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default styles;
