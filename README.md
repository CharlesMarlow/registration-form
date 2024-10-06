## Running this project 

The project is based on React + TypeScript + Vite, and leverages their respective tools.  


In order to run the app, in the root directory please run:
`npm run dev`

In order to run the tests, in the root directory please run: 
`npm test`

These 2 are included in the `scripts` section of the `package.json`, which also illustrates 
some of the other dependencies used to introduce correct typing, animations, form-handling 
and libraries used for testing, among others. 

## Technical decisions

# Modularisation: 
- The app is modularised where I saw it fit and in places where repetitions arose and the DRY principle was 
  to be followed. 
  For example, I decided to build a `Step` component since even though this app is small, when building a 
  multi-step form it could be advantageous to think of the future and understand where an abstraction might 
  be helpful and make the flow of the code more readable, easier to follow and understand and build 
  the consistency which the genreal always adheres to.
  Such thoughts also led me to extract some other functionalities such as the form's buttons 
  or the animations component, in order to let the app be comprised of generic elements that 
  can be re-used and also serve as deminishing of the learning curve when thinking of 
  team-work. 

# Style
- Though the components all share one CSS file throughout the app, in a real-world app that
  shouldn't be the case. 
  On another note, I tried to style the form in a way that would make sense to interact with
  and understand its different steps. The style attempts to remain consistent for both desktop
  and mobile views. 

# Testing
- Some unit-tests were added in order to test the different components, either shared or independent. 
  These tests achieve some goals and help make the code more resilient and yet- given the nature of 
  this app and the ability to transition back and forth between steps, another testing layer could be
  thought of, one that could cover what RTL can't get to. 
  One option might be Microsoft's Playwright, which allows for more intricate user interactions, traveling
  between screens and more. 

# TypeScript
- The app is built with TS and uses re-usable types where those are needed. A separate file
  serves as a re-usability tool, keeping the components neater and lets TS keep the app 
  more robust when it comes to various errors that might arise otherwise. 

# Possible Improvements
- Logging mechanism
- Error boundary
- Form field entry for re-usability (for example in the `PersonalInfo.tsx` component)
- State management as the app grows in complexity (Redux)
- Re-organising CSS in a more modularised way 
- Adding a testing layer/tool
- Monitoring
- Analytics



  
