import { StyleSheet } from "react-native";

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
  indicator: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  marginFlat: {
    paddingBottom: '20%',
  },
});

export default styles;
