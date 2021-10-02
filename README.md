# rn-menu-management

## About
This is a proof of concept for a dynamic restuarant menu in React Native. Outside the React Native's core dependencies, the only additional packages are `@testing-library/react-native` and `typescript`.

## Running a Local Instance

To run a local instance of the app, ensure your system has one of following installed: 

### Preparing Your Environment
- XCode 13.0+
- Android Studio 2020.3.1+ (Arctic Fox)

The instance was tested using the following simulators:
- iPhone 13 Pro, iOS 15.0
- Google Pixel 4a, Android 11 (API 30)

### Open the App In a Simulator
1. run `yarn` to install dependencies
2. run `cd /ios && pod install && cd ..
3a. run `yarn ios` to run on an iPhone 13 Pro simulator, or run `react-native run-ios` to run on default iOS simulator
4a. run `yarn android` to run on default Android simulator

## Features


### Display Items
The proof of concept menu displays menu items stored in local data. It can display titles, descriptions, prices, and local images or images from https urls. press a menu item to view unabridged item descriptions.

### Create Item
Press the "+" button in the top-right to open a form for creating items. Enter a valid title, description, price, and url of an image to add the new item to the end of the menu. Invalid image urls will cause the item to display a fallback image.

### Remove Item
Press an item and select "Remove", then confirm the removal to delete the item from the menu.

### Edit Item
Press an item and select "Edit" to display a form for editing the menu item. Title, description, and price are required for a successful edit. Leaving the image url unchanged will not modify the current image.
