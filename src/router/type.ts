import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Feed: undefined;
};

export type Props = NativeStackNavigationProp<RootStackParamList, 'Home'>;

