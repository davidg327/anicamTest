import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'green',
    height: '7%',
    justifyContent: 'center',
  },
  containerImage: {
    position: 'absolute',
    top: '15%',
    left: 10,
    zIndex: 1,
  },
  image: {
    width: 40,
    height: 40,
  },
  titleHeader: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  name: {
    color: 'black',
    fontWeight: '700',
    fontSize: 12,
  },
  containerInfo: {
    marginTop: '10%',
    paddingHorizontal: '10%',
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    paddingHorizontal: '10%',
  },
  carrousel: {
    width: 250,
    height: 250,
    marginRight: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  simple: {
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'justify',
    marginTop: '3%',
  },
});

export default styles;
