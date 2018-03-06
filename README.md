
Test application for a stateless progress bar component. The app shows the bar being animated.
Visual tests of various property settings implemented in Storybook (```npm run storybook```).

I wrote this in 5 hours, partially to re-acquaint myself with React. The reviewer had never
had someone complete this test using a canvas (the original spec called for providing for future
animating of the progress bar, so I thought using a canvas rather than just a div was worth
the effort). Also, this is my first time using Storybook, so I wanted to make this available on
github as a very simple canvas-in-React and Storybook example. No further development is planned
on this project (there are plenty of progress bars out there already).

Possible improvements:

* Add customization for more aspects of style (background color, positioning of legend, etc.)
* If updates will be infrequent, consider animating to each new value. Or, add a 'still alive'
animation (like Windows' flying pages animation when copying files) to entertain the user 
between updates.
* This might have been easier in SVG


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).



