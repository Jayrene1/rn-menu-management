import { ImageSourcePropType } from 'react-native';

export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgUrl: ImageSourcePropType;
};
