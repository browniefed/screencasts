# How to create and use an Animated.Value

### SECTION 1: Explain Animated.Value -- **Needs Work**

`Animated.Value` is a special wrapper around a number.
In it's basic form it's just a number, however it has a lot of methods that can be used to make many complex animations.

Rendering an `Animated.View` with an `Animated.Value` will always result in the `Animated.Value` resolving to its basic number form and being applied to the style.


### SECTION 2: Explain Animated.View

Because we are using Animated.Values we need to use a special helper view that React Native provides us called Animated.View.
This will intercept Animated.Values and modify the View correctly when an animation is started.

If you accidentally use a View and provide it with an `Animated.Value` your code will not work.
The basics principle is inside of `Animated.View` it will turn your `Animated.Value` into normal styling.
When an animation is started it will directly make calls to the native code and give it the new layout styles.

### SECTION 3: Merge Animated.Value and Animated.View together

Typically you would define static styles in your `StyleSheet.create` call.
However when animating a View we need to provide the style as an object.

This is because the animation will be for the specific instance of the React component that gets created.

React Native is flexible and you can combine styles from your `StyleSheet` and custom animations by using an array.
Pass in your `StyleSheet` and then your animated style object into the `style` prop.

### SECTION 4: Show what we mean by basic number

