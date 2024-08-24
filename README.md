# Hello React

# Parcel
-Dev build
-Local Server
-HMR - Hot Module Replacement
-File Watching Algo - written in c++
-Caching - Faster Builds
-Images optimizing
-Minification
-Bundling
-Compress
-Content  Hashing
-Code Splitting
-Differential Bundling - support older browsers
-Diagnostics
-Error Handling
-HTTPs
-Tree shaking - remove unused code
-Different dev and production bundles

There are two types of exports and imports
-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import
export const Component;
import {Components} from "path";

#React Hooks => Normal JS utility functions => useState(), useEffect()

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to end testing - e2e testing

# Setting up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- install jsdom library
