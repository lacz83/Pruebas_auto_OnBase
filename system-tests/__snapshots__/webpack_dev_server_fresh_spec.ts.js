exports['@cypress/webpack-dev-server react executes all of the tests for webpack4_wds3-react 1'] = `
ℹ ｢wds｣: Project is running at http://localhost:xxxx/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /__cypress/src
ℹ ｢wds｣: Content not from webpack is served from /foo/bar/.projects/webpack4_wds3-react

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      8 found (App.cy.jsx, AppCompilationError.cy.jsx, Errors.cy.jsx, MissingReact.cy.js │
  │             x, MissingReactInSpec.cy.jsx, Rerendering.cy.jsx, Unmount.cy.jsx, mount.cy.jsx)    │
  │ Searched:   **/*.cy.{js,jsx,ts,tsx}                                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  App.cy.jsx                                                                      (1 of 8)


  ✓ renders hello world
  ✓ renders background

  2 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     App.cy.jsx                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/App.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  AppCompilationError.cy.jsx                                                      (2 of 8)


  1) An uncaught error was detected outside of a test

  0 passing
  1 failing

  1) An uncaught error was detected outside of a test:
     Error: The following error originated from your test code, not from Cypress.

  > Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/webpack4_wds3-react/src/AppCompilationError.cy.jsx: Unexpected token, expected "," (8:0)

  6 |   cy.get('h1').contains('Hello World')
  7 | }
> 8 | })
    | ^
  9 |
      [stack trace lines]

When Cypress detects uncaught errors originating from your test code it will automatically fail the current test.

Cypress could not associate this error to any specific test.

We dynamically generated a new test to display this failure.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     AppCompilationError.cy.jsx                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/AppCompilationError.cy.jsx/An uncaught error wa     (1280x720)
     s detected outside of a test (failed).png                                                      


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/AppCompilationError.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Errors.cy.jsx                                                                   (3 of 8)


  Errors
    1) error on mount
    2) sync error
    3) async error
    4) command failure


  0 passing
  4 failing

  1) Errors
       error on mount:
     Error: The following error originated from your application code, not from Cypress.

  > mount error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  2) Errors
       sync error:
     Error: The following error originated from your application code, not from Cypress.

  > sync error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  3) Errors
       async error:
     Error: The following error originated from your application code, not from Cypress.

  > async error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  4) Errors
       command failure:
     AssertionError: Timed out retrying after 50ms: Expected to find element: \`element-that-does-not-exist\`, but never found it.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Errors.cy.jsx                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- error on mount (failed)     (1280x720)
     .png                                                                                           
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- sync error (failed).png     (1280x720)
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- async error (failed).pn     (1280x720)
     g                                                                                              
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- command failure (failed     (1280x720)
     ).png                                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Errors.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReact.cy.jsx                                                             (4 of 8)


  1) is missing React

  0 passing
  1 failing

  1) is missing React:
     ReferenceError: The following error originated from your application code, not from Cypress.

  > React is not defined

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReact.cy.jsx                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReact.cy.jsx/is missing React (failed).p     (1280x720)
     ng                                                                                             


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReact.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReactInSpec.cy.jsx                                                       (5 of 8)


  1) is missing React in this file

  0 passing
  1 failing

  1) is missing React in this file:
     ReferenceError: React is not defined
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReactInSpec.cy.jsx                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReactInSpec.cy.jsx/is missing React in t     (1280x720)
     his file (failed).png                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReactInSpec.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Rerendering.cy.jsx                                                              (6 of 8)


  re-render
    ✓ maintains component state across re-renders


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Rerendering.cy.jsx                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Rerendering.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Unmount.cy.jsx                                                                  (7 of 8)


  Comp with componentWillUnmount
    ✓ calls the prop

  mount cleanup
    ✓ mount 1
    ✓ mount 2


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Unmount.cy.jsx                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Unmount.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  mount.cy.jsx                                                                    (8 of 8)


  mount
    ✓ does not error when rendering primitives
    teardown
      ✓ should mount
      ✓ should remove previous mounted component


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     mount.cy.jsx                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/mount.cy.jsx.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  App.cy.jsx                               XX:XX        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  AppCompilationError.cy.jsx               XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  Errors.cy.jsx                            XX:XX        4        -        4        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReact.cy.jsx                      XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReactInSpec.cy.jsx                XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Rerendering.cy.jsx                       XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Unmount.cy.jsx                           XX:XX        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  mount.cy.jsx                             XX:XX        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  4 of 8 failed (50%)                      XX:XX       16        9        7        -        -  


`

exports['@cypress/webpack-dev-server react executes all of the tests for webpack4_wds4-react 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      8 found (App.cy.jsx, AppCompilationError.cy.jsx, Errors.cy.jsx, MissingReact.cy.js │
  │             x, MissingReactInSpec.cy.jsx, Rerendering.cy.jsx, Unmount.cy.jsx, mount.cy.jsx)    │
  │ Searched:   **/*.cy.{js,jsx,ts,tsx}                                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  App.cy.jsx                                                                      (1 of 8)
   50 modules

ERROR in ./src/AppCompilationError.cy.jsx
Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/webpack4_wds4-react/src/AppCompilationError.cy.jsx: Unexpected token, expected "," (8:0)

  6 |   cy.get('h1').contains('Hello World')
  7 | }
> 8 | })
    | ^
  9 |
      [stack trace lines]


  ✓ renders hello world
  ✓ renders background

  2 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     App.cy.jsx                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/App.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  AppCompilationError.cy.jsx                                                      (2 of 8)


  1) An uncaught error was detected outside of a test

  0 passing
  1 failing

  1) An uncaught error was detected outside of a test:
     Error: The following error originated from your test code, not from Cypress.

  > Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/webpack4_wds4-react/src/AppCompilationError.cy.jsx: Unexpected token, expected "," (8:0)

  6 |   cy.get('h1').contains('Hello World')
  7 | }
> 8 | })
    | ^
  9 |
      [stack trace lines]

When Cypress detects uncaught errors originating from your test code it will automatically fail the current test.

Cypress could not associate this error to any specific test.

We dynamically generated a new test to display this failure.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     AppCompilationError.cy.jsx                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/AppCompilationError.cy.jsx/An uncaught error wa     (1280x720)
     s detected outside of a test (failed).png                                                      


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/AppCompilationError.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Errors.cy.jsx                                                                   (3 of 8)


  Errors
    1) error on mount
    2) sync error
    3) async error
    4) command failure


  0 passing
  4 failing

  1) Errors
       error on mount:
     Error: The following error originated from your application code, not from Cypress.

  > mount error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  2) Errors
       sync error:
     Error: The following error originated from your application code, not from Cypress.

  > sync error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  3) Errors
       async error:
     Error: The following error originated from your application code, not from Cypress.

  > async error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  4) Errors
       command failure:
     AssertionError: Timed out retrying after 50ms: Expected to find element: \`element-that-does-not-exist\`, but never found it.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Errors.cy.jsx                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- error on mount (failed)     (1280x720)
     .png                                                                                           
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- sync error (failed).png     (1280x720)
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- async error (failed).pn     (1280x720)
     g                                                                                              
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- command failure (failed     (1280x720)
     ).png                                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Errors.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReact.cy.jsx                                                             (4 of 8)


  1) is missing React

  0 passing
  1 failing

  1) is missing React:
     ReferenceError: The following error originated from your application code, not from Cypress.

  > React is not defined

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReact.cy.jsx                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReact.cy.jsx/is missing React (failed).p     (1280x720)
     ng                                                                                             


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReact.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReactInSpec.cy.jsx                                                       (5 of 8)


  1) is missing React in this file

  0 passing
  1 failing

  1) is missing React in this file:
     ReferenceError: React is not defined
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReactInSpec.cy.jsx                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReactInSpec.cy.jsx/is missing React in t     (1280x720)
     his file (failed).png                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReactInSpec.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Rerendering.cy.jsx                                                              (6 of 8)


  re-render
    ✓ maintains component state across re-renders


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Rerendering.cy.jsx                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Rerendering.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Unmount.cy.jsx                                                                  (7 of 8)


  Comp with componentWillUnmount
    ✓ calls the prop

  mount cleanup
    ✓ mount 1
    ✓ mount 2


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Unmount.cy.jsx                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Unmount.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  mount.cy.jsx                                                                    (8 of 8)


  mount
    ✓ does not error when rendering primitives
    teardown
      ✓ should mount
      ✓ should remove previous mounted component


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     mount.cy.jsx                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/mount.cy.jsx.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  App.cy.jsx                               XX:XX        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  AppCompilationError.cy.jsx               XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  Errors.cy.jsx                            XX:XX        4        -        4        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReact.cy.jsx                      XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReactInSpec.cy.jsx                XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Rerendering.cy.jsx                       XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Unmount.cy.jsx                           XX:XX        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  mount.cy.jsx                             XX:XX        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  4 of 8 failed (50%)                      XX:XX       16        9        7        -        -  


`

exports['@cypress/webpack-dev-server react executes all of the tests for webpack5_wds3-react 1'] = `
ℹ ｢wds｣: Project is running at http://localhost:xxxx/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /__cypress/src
ℹ ｢wds｣: Content not from webpack is served from /foo/bar/.projects/webpack5_wds3-react

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      8 found (App.cy.jsx, AppCompilationError.cy.jsx, Errors.cy.jsx, MissingReact.cy.js │
  │             x, MissingReactInSpec.cy.jsx, Rerendering.cy.jsx, Unmount.cy.jsx, mount.cy.jsx)    │
  │ Searched:   **/*.cy.{js,jsx,ts,tsx}                                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  App.cy.jsx                                                                      (1 of 8)


  ✓ renders hello world
  ✓ renders background

  2 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     App.cy.jsx                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/App.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  AppCompilationError.cy.jsx                                                      (2 of 8)


  1) An uncaught error was detected outside of a test

  0 passing
  1 failing

  1) An uncaught error was detected outside of a test:
     Error: The following error originated from your test code, not from Cypress.

  > Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/webpack5_wds3-react/src/AppCompilationError.cy.jsx: Unexpected token, expected "," (8:0)

  6 |   cy.get('h1').contains('Hello World')
  7 | }
> 8 | })
    | ^
  9 |
      [stack trace lines]

When Cypress detects uncaught errors originating from your test code it will automatically fail the current test.

Cypress could not associate this error to any specific test.

We dynamically generated a new test to display this failure.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     AppCompilationError.cy.jsx                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/AppCompilationError.cy.jsx/An uncaught error wa     (1280x720)
     s detected outside of a test (failed).png                                                      


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/AppCompilationError.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Errors.cy.jsx                                                                   (3 of 8)


  Errors
    1) error on mount
    2) sync error
    3) async error
    4) command failure


  0 passing
  4 failing

  1) Errors
       error on mount:
     Error: The following error originated from your application code, not from Cypress.

  > mount error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  2) Errors
       sync error:
     Error: The following error originated from your application code, not from Cypress.

  > sync error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  3) Errors
       async error:
     Error: The following error originated from your application code, not from Cypress.

  > async error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  4) Errors
       command failure:
     AssertionError: Timed out retrying after 50ms: Expected to find element: \`element-that-does-not-exist\`, but never found it.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Errors.cy.jsx                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- error on mount (failed)     (1280x720)
     .png                                                                                           
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- sync error (failed).png     (1280x720)
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- async error (failed).pn     (1280x720)
     g                                                                                              
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- command failure (failed     (1280x720)
     ).png                                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Errors.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReact.cy.jsx                                                             (4 of 8)


  1) is missing React

  0 passing
  1 failing

  1) is missing React:
     ReferenceError: The following error originated from your application code, not from Cypress.

  > React is not defined

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReact.cy.jsx                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReact.cy.jsx/is missing React (failed).p     (1280x720)
     ng                                                                                             


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReact.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReactInSpec.cy.jsx                                                       (5 of 8)


  1) is missing React in this file

  0 passing
  1 failing

  1) is missing React in this file:
     ReferenceError: React is not defined
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReactInSpec.cy.jsx                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReactInSpec.cy.jsx/is missing React in t     (1280x720)
     his file (failed).png                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReactInSpec.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Rerendering.cy.jsx                                                              (6 of 8)


  re-render
    ✓ maintains component state across re-renders


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Rerendering.cy.jsx                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Rerendering.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Unmount.cy.jsx                                                                  (7 of 8)


  Comp with componentWillUnmount
    ✓ calls the prop

  mount cleanup
    ✓ mount 1
    ✓ mount 2


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Unmount.cy.jsx                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Unmount.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  mount.cy.jsx                                                                    (8 of 8)


  mount
    ✓ does not error when rendering primitives
    teardown
      ✓ should mount
      ✓ should remove previous mounted component


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     mount.cy.jsx                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/mount.cy.jsx.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  App.cy.jsx                               XX:XX        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  AppCompilationError.cy.jsx               XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  Errors.cy.jsx                            XX:XX        4        -        4        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReact.cy.jsx                      XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReactInSpec.cy.jsx                XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Rerendering.cy.jsx                       XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Unmount.cy.jsx                           XX:XX        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  mount.cy.jsx                             XX:XX        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  4 of 8 failed (50%)                      XX:XX       16        9        7        -        -  


`

exports['@cypress/webpack-dev-server react executes all of the tests for webpack5_wds4-react 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      8 found (App.cy.jsx, AppCompilationError.cy.jsx, Errors.cy.jsx, MissingReact.cy.js │
  │             x, MissingReactInSpec.cy.jsx, Rerendering.cy.jsx, Unmount.cy.jsx, mount.cy.jsx)    │
  │ Searched:   **/*.cy.{js,jsx,ts,tsx}                                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  App.cy.jsx                                                                      (1 of 8)
15 assets
67 modules

ERROR in ./src/AppCompilationError.cy.jsx
Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/webpack5_wds4-react/src/AppCompilationError.cy.jsx: Unexpected token, expected "," (8:0)

  6 |   cy.get('h1').contains('Hello World')
  7 | }
> 8 | })
    | ^
  9 |
      [stack trace lines]

webpack x.x.x compiled with x errors in xxx ms


  ✓ renders hello world
  ✓ renders background

  2 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     App.cy.jsx                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/App.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  AppCompilationError.cy.jsx                                                      (2 of 8)


  1) An uncaught error was detected outside of a test

  0 passing
  1 failing

  1) An uncaught error was detected outside of a test:
     Error: The following error originated from your test code, not from Cypress.

  > Module build failed (from [..]):
SyntaxError: /foo/bar/.projects/webpack5_wds4-react/src/AppCompilationError.cy.jsx: Unexpected token, expected "," (8:0)

  6 |   cy.get('h1').contains('Hello World')
  7 | }
> 8 | })
    | ^
  9 |
      [stack trace lines]

When Cypress detects uncaught errors originating from your test code it will automatically fail the current test.

Cypress could not associate this error to any specific test.

We dynamically generated a new test to display this failure.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     AppCompilationError.cy.jsx                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/AppCompilationError.cy.jsx/An uncaught error wa     (1280x720)
     s detected outside of a test (failed).png                                                      


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/AppCompilationError.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Errors.cy.jsx                                                                   (3 of 8)


  Errors
    1) error on mount
    2) sync error
    3) async error
    4) command failure


  0 passing
  4 failing

  1) Errors
       error on mount:
     Error: The following error originated from your application code, not from Cypress.

  > mount error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  2) Errors
       sync error:
     Error: The following error originated from your application code, not from Cypress.

  > sync error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  3) Errors
       async error:
     Error: The following error originated from your application code, not from Cypress.

  > async error

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]

  4) Errors
       command failure:
     AssertionError: Timed out retrying after 50ms: Expected to find element: \`element-that-does-not-exist\`, but never found it.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Errors.cy.jsx                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- error on mount (failed)     (1280x720)
     .png                                                                                           
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- sync error (failed).png     (1280x720)
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- async error (failed).pn     (1280x720)
     g                                                                                              
  -  /XXX/XXX/XXX/cypress/screenshots/Errors.cy.jsx/Errors -- command failure (failed     (1280x720)
     ).png                                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Errors.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReact.cy.jsx                                                             (4 of 8)


  1) is missing React

  0 passing
  1 failing

  1) is missing React:
     ReferenceError: The following error originated from your application code, not from Cypress.

  > React is not defined

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the \`uncaught:exception\` event.

https://on.cypress.io/uncaught-exception-from-application
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReact.cy.jsx                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReact.cy.jsx/is missing React (failed).p     (1280x720)
     ng                                                                                             


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReact.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  MissingReactInSpec.cy.jsx                                                       (5 of 8)


  1) is missing React in this file

  0 passing
  1 failing

  1) is missing React in this file:
     ReferenceError: React is not defined
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     MissingReactInSpec.cy.jsx                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/MissingReactInSpec.cy.jsx/is missing React in t     (1280x720)
     his file (failed).png                                                                          


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/MissingReactInSpec.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Rerendering.cy.jsx                                                              (6 of 8)


  re-render
    ✓ maintains component state across re-renders


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Rerendering.cy.jsx                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Rerendering.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  Unmount.cy.jsx                                                                  (7 of 8)


  Comp with componentWillUnmount
    ✓ calls the prop

  mount cleanup
    ✓ mount 1
    ✓ mount 2


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     Unmount.cy.jsx                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/Unmount.cy.jsx.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  mount.cy.jsx                                                                    (8 of 8)


  mount
    ✓ does not error when rendering primitives
    teardown
      ✓ should mount
      ✓ should remove previous mounted component


  3 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     mount.cy.jsx                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: X second(s)                                                

  -  Video output: /XXX/XXX/XXX/cypress/videos/mount.cy.jsx.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  App.cy.jsx                               XX:XX        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  AppCompilationError.cy.jsx               XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  Errors.cy.jsx                            XX:XX        4        -        4        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReact.cy.jsx                      XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  MissingReactInSpec.cy.jsx                XX:XX        1        -        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Rerendering.cy.jsx                       XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Unmount.cy.jsx                           XX:XX        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  mount.cy.jsx                             XX:XX        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  4 of 8 failed (50%)                      XX:XX       16        9        7        -        -  


`