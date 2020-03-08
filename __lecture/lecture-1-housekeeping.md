# 4.2.1 React Ecosystem

---

### 🏠Housekeeping: Keys

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`.
in SomeComponent (at src/index.js:24)
in App (at src/index.js:31)
```

---

### 🏠Housekeeping: Modules

In the last lecture, we saw **default exports**

```js
function Button(props) {
  ✂️
}

export default Button;
```

```js
import Button from '../Button';
```

---

There are also **named exports**

```js
// authentication-utils.js
export const signUp = () => { ✂️ };
export const logIn = () => { ✂️ };
export const logOut = () => { ✂️ };
```

```js
import { logIn, logOut } from '../../authentication-utils.js';

//if we imported the whole doc => import {utils} from ../../authentication-utils.js';

we cuold then use utils.signUp
utils.logIn
```

---

### A module can have:

- 0 or 1 _default_ exports,
- any number of _named_ exports, and
- both types of exports.

---

# Exercise

Are the following code snippets correct or incorrect?

Fix them, if incorrect

---

```js
// src/data.js
const data = { hi: 5 };

export default data;
```

```js
// src/index.js
import theBestData from './data'; [GOOD]
```

---

```js
// src/data.js
export const MAGIC_NUMBER = 123;


```

```js

// src/index.js

//we are exporting specific item which generate a specific item 
import {MAGIC_NUMBER} from './data';
```

--------------------------------

```js
// src/data.js
export const users = [];
export const sessions = [];

const data = { users, sessions };

export default data;
```

```js
// src/index.js
import data from './data'; // only good if we didnt export users and sessions

//or if we just want users ==> import (users) from './data';
```

------------------------------------

```js
// src/data.js
export default const baseball = '⚾️';
//cant define it as youre expoeting it

should be => 
```

```js
// src/index.js
import baseball from './data';
```

---
