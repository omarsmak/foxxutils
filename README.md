# FoxxUtils
Handful utility functions for Foxx framework

# Installation
TBA

# Functions List
## .requireApp(foxxAppName)
This function provides an alterntive for the default `Foxx.requireApp`, whereby it loads a Foxx app using its **name** instead of the _mount point_.
```javascript
  const utils = require('foxxutils');
  const sessions = utils.requireApp('sessions');
  ...
  ...
```

## Author
Omar A. Al-Safi (omarsmak@gmail.com, omar@fedger.io)

## License
MIT
