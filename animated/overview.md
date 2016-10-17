React Native - Basic Animated Course

** Init a basic project
-- Init project

** Render non-animated animated components
-- Create a simple square 100 x 100
-- Show that rendering is just a view and takes a value
-- Use `setValue` to create an update of opacity vlaue

** Animated.timing
-- Show how to animate a component over time
-- Make it a point that `setState` isn't causing a re-render?
-- Basic position
-- Timed fades, or anything with a specific duration

** Animated.spring
-- Press bounces.
-- Reset with `setValue` function passed into start
-- tension/friction
--- defaults tension to 40
--- defaults friction to 7
--- Lower friction will lead to a bouncier animation, and higher tension will lead to a looser spring causing many bounces.

-- bounciness/speed
--- Attempt to normalize the effect based upon the distance between start and end values.
--- In the end is converted to friction and tension
--- defaults speed to 12
--- defaults bounciness to 8
--- Higher bounciness will make it more springy, and a higher speed will make less tension meaning a not as stiff animation.
-- Show it on opacity, but more effective if done on `scale` properties

** interpolate introduction
-- Colors
-- Rotation

** Setting up a pan responder
-- No animation
-- Unnatural. Need to show decay
-- Need to understand dx/dy
-- setOffset
-- flattenOffset
-- Explain why. Animation should start from where the finger was touched. Need to set the offset and reset the offset each time.

** Animated.event
-- Just a way to traverse a random object and then call `setValue` on an Animated.Value
-- AnimatedXY

** Animated.decay
-- Show throwing a square
-- Drag => release animations, throwing objects, etc (tinder card throwing)


=== These next 3 aren't basic, but should be screencasted about anyway.
** Animated.add
- Ability to take 2 animated values and add them together in an animated fashion
- https://github.com/facebook/react-native/pull/4395

** Animate.multiply
- Ability to take 2 animated values and multiply them togetherin animated fashion
- https://github.com/facebook/react-native/pull/4395

** Animated.modulo
- Mostly rotational animations
- Spinning a clock hand
 - Rotational animations like building a spinnable clock - android clock - https://github.com/facebook/react-native/pull/5743

===

** Animated.delay
-- Delay animation
-- Maybe delay it so that if something happens you have time to stop it before the animation kicks off
-- Just visual effect
- Used mainly in sequence/parallel/stagger to add timing between other animations

** Animated.sequence
-- Do one thing then another

** Animated.parallel
-- Do multipe animations at the same time

** Animated.stagger

** addListener/removeListener

** createAnimatedComponent

** interpolate in depth
-- This is the major feature driving Animated and all complex animations.

=========

Future

racking Dynamic Values
-- Animating to animated values
-- WHY? Need a practical reason for this

// talk about isInteraction and why you do this
-- If you use interaction manager your animations will be considered interactions
-- This allows you to tell RN that it isn't and things like loading indicators won't deadlock
-- https://github.com/facebook/react-native/pull/3433

// useNativeDriver
-- This isn't complete for all Animated calls
-- ScrollView w/ Animated.Event operates on same tick rather than next

** Do them at the same time? -- bad since it builds on the past? Or good?
-- Use sequence?
-- Use parallel?
-- Use both?
-- Easing?