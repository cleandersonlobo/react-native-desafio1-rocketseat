import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_SCREEN,
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.BACKGROUND_WHITE,
  },
  rightHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSize: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    color: colors.TITLE_HEADER,
    fontWeight: 'bold',
  },
});
