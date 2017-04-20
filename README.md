# snake-game-react-native-redux
The classic snake game built on React Native + Redux, for learning purposes. It uses redux-saga for controlling side-effects.

# Install
Make sure you install react native as per described in the docs. First install dependencies running `npm install`. Then run the app in the simulators as normal using either `react native run-ios` or `react native run-android`.

If the RN packager complains about an error when importing modules, you might try running `react-native start --reset-cache` before the "run" comand (there is an issue with babel-plugin-module-resolver, see [#29](https://github.com/tleunen/babel-plugin-module-resolver/issues/29)).

## Things that can be improved
A list of things that I might add in not-so-near feature:

* Improve game loop to be more fluid
* Improve look & feel
* Improve controls to feel more responsive
* Randomize board setup on new game
* Implement logic to pause/resume the game while on background
