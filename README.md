# React Learning

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unsed code
- Different dev and prod bundles

# Namaste Food

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
  - RestaurantCard
    - Img
    - Name of Res, Star Rating, cuisine, delery tie
- Footer

  - Copyright
  - Links
  - Address
  - Contact

    Two types of Export/Import

- Default Export/Import

  export default Component;
  import Component from "path";

- Named Export/Import

  export const Component;
  import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Varibales in React
- useEffect()

# 2 Types of Routing in Web Apps

- Client Side Routing - Client-side routing is the same as server-side routing, but it's ran in the browser. Client-side routing has become more popular due to the popularity of creating single-page applications (SPAs).
- Server Side Routing - Server-side routing is the traditional way of routing. When a user navigates to a new page, the old page is discarded and the HTML of the new page is loaded. This requires the server to keep making requests to rerender the application.

# Use of super() in constructor

- In React, we use super in the constructor to call the parent class's constructor. This is necessary to initialize the properties and methods of the parent class. If we do not call super, the properties and methods of the parent class will not be initialized, and this can lead to bugs.
  Here is an example of how to use super in the constructor:
  class MyComponent extends React.Component {
  constructor(props) {
  super(props);
  // This code will be executed after the parent class's constructor has been called.
  }
  }
