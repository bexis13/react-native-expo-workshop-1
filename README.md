# Workshop: Intro to React Native with Expo - Project 1

https://exp.host/@rmotr/react-native-expo-workshop-1

<p align='center'>
  <img
      src="https://media.giphy.com/media/l0Hlzh7zu2KyN4eiY/giphy.gif"
      alt="rmotr.com React Native Expo Demo" />
</p>

## Assignments

#### 1) Toggle date format

By default, on _PhotoFooter.js_ component each photo shows the original ISO formatted timestamp ("2016-12-01T18:05:26"). Your job is to make a press handler that turns that ISO string to human-format date like "15 hours ago".

#### 2) Handle like press

When the user taps on the _heart icon_, the number of likes should increase by 1 and the icon should turn filled red on _PhotoFooter.js_ component. You should also need to write a _handleLikePhoto_ on _PhotoDetail.js_ component that changes _isLiked_ state.

#### 3) Show multiple photos in the feed

For this project, photos are being fetched from a local file `photos.json`. But the app by default is showing just the first one.
Go to _main.js_ and change it to show all the photos in a Scrollable View.

#### 4) Add comments

Comments are displayed in an Alert when the comments icon is pressed. Implement the functionality to add new comments.

#### 5) Refresh indicator

Once you have multiple photos in place, when the user scrolls down forcing an update, you should display the loading indicator.
Go to _main.js_ and try to add a Refresh Indicator

#### 6) Share function

Write a function that when you tap on the top-right share icon in each picture work open share options. That icon is placed on _PhotoHeader.js_ component.
