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
