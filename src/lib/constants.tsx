import { MenuItem } from './models';

export const COLOR = {
  gray: {
    0: '#FFFFFF',
    50: '#F6F6F6',
    100: '#EBEBEB',
    200: '#D4D5D6',
    300: '#B1B2B3',
    400: '#8B8D8F',
    500: '#696A6B',
    600: '#494B4D',
    700: '#3A3B3C',
    800: '#222324',
    850: '#1F2021',
    900: '#18191A',
    1000: '#000000',
  },
  yellow: {
    300: '#FCD34D',
    500: '#F59E0B',
    600: '#D97706',
  },
  red: {
    500: '#EF4444',
  },
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: 'Salmon Salad',
    description:
      'Grilled slices of salmon over edamame, red cabbage, green pepper, corn, tomatoes, and a boiled egg',
    price: 11.5,
    imgUrl: require('../images/salmon-salad.jpg'),
  },
  {
    id: 2,
    title: 'Carne Asada tacos',
    description:
      'Three beef tacos topped with pickled red onions, jalapeños and cilantro',
    price: 8,
    imgUrl: require('../images/carne-asada-taco.jpg'),
  },
  {
    id: 3,
    title: 'Bacon Burger',
    description:
      'Bacon, beef, cheddar, lettuce and tomato on a sesame-topped brioche bun',
    price: 10,
    imgUrl: require('../images/bacon-burger.jpg'),
  },
  {
    id: 4,
    title: 'French Fries',
    description: 'Hand-cut fries with some shaved pecorino and sea salt',
    price: 4.5,
    imgUrl: require('../images/french-fries.jpg'),
  },
  {
    id: 5,
    title: 'Tonkotsu Ramen',
    description:
      'Noodles in savory Tonkotsu broth with three thick slices of pork belly, bean sprouts, seawood, and a soft-boiled egg',
    price: 13,
    imgUrl: require('../images/tonkotsu-ramen.jpg'),
  },
  {
    id: 6,
    title: 'Wings, Buffalo-Style',
    description:
      'Original roasted wings tossed in a house-made red pepper hot sauce',
    price: 13,
    imgUrl: require('../images/buffalo-wings.jpg'),
  },
];
