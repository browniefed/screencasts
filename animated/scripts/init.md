## Setting up a basic React Native project

GOTO: https://facebook.github.io/react-native/

First click on Getting Started with React Native. 
This will bring you to the instructions to get React Native up and running for iOS and Android on your current operating system.

Follow the instructions and once you are complete we can initialize a new project with the React Native CLI.
This is a global helper for creating new projects, as well as upgrading a project if the native side of your React Native project changes.

Lets head over to the command line and initialize a project.

TYPE: react-native init animatedplayground

Once this is complete we will open up the iOS project that was created.
We can do that by simply typing

TYPE: cd animatedplayground
TYPE: open ios/animatedplayground.xcodeproj/

If you are using Android this will require a few more steps to get running which can be found on the "Get Started" page we were on earlier.

Lets start by running our React Native project by pressing the Play button.

Open up the `index.ios.js` file in your favorite JavaScript editor. 
If you are using Android then you will need to open up `index.android.js`. 

The reason there are 2 separate files is because React Native will look for a specific file entry point based upon the platform you are targeting. 
Giving you the ability to define different behaviors for each platform.

