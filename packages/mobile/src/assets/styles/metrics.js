import {Platform} from 'react-native';
export default {
  padding: 10,
  margin: 10,
  ...Platform.select({
    android: {headerHeight: 80, headerPadding: 0},
  }),
  tabBarHeight: 50,
};
