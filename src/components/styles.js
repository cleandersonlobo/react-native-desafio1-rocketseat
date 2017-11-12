import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.BACKGROUND_WHITE,
    shadowColor: colors.SHADOW_COLOR,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    margin: 20,
  },
  titleContent: {
    paddingBottom: 10,
  },
  title: {
    color: colors.TITLE_CARD,
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    color: colors.AUTHOR,
  },
  content: {
    borderTopColor: colors.BORDER_DEFAULT,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  bodyText: {
    color: colors.TEXTO_CARD,
  },
});

export default styles;
