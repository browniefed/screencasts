# Setting up a basic React Native project

### SECTION 1: Getting a project created and running

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


### SECTION 2: Showing off RN features.

There are a lot of features built into React Native. As the screen indicates if you press CMD + D a development menu will open up.
Lets go ahead and press CMD + D.

We are presented with a lot of options. 
- Reload will reload the latest JavaScript and restart you at your beginning screen.
- Debug JS Remotely will open chrome and allow you to debug your JavaScript in the Chrome development tools.
- Live Reload will automatically trigger a reload when a file is saved.
- Hot Reloading will refresh the JavaScript but not restart you at the beginning screen.
- Inspector will allow you to select an element and look at its styling and layout.
- Perf Monitor will show various performance statistics like memory, and FPS

For typical projects Hot Reloading will work in many cases but can fail in some cases which then a manual reload will be necessary.

### SECTION 3: Editing files
Open up the `index.ios.js` file in your favorite JavaScript editor. 
If you are using Android then you will need to open up `index.android.js`. 

The reason there are 2 separate files is because React Native will look for a specific file entry point based upon the platform you are targeting. 
Giving you the ability to define different behaviors for each platform.

### SECTION 4: Setup square for demo
