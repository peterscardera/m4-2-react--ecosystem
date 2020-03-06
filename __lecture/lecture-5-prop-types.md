# 4.2.5 PropTypes, Odds & Ends

---

# Fragments

---

In React, components can't return multiple elements:

```jsx
import React from 'react';

const App = ({ user, data }) => {
  // Error:
  return (
    <Header user={user} />
    <Content data={data} />
  )
}
```

---

Historically, we'd wrap adjacent children in a `<div>`:

```jsx
import React from 'react';

const App = ({ user, data }) => {
  return (
    <div>
      <Header user={user} />
      <Content data={data} />
    </div>
  )
}
```

---

We can also use a `Fragment`:

```jsx
import React from 'react';

const App = ({ user, data }) => {
  return (
    <React.Fragment>
      <Header user={user} />
      <Content data={data} />
    </React.Fragment>
  )
}
```

---

Shorthand:

```jsx
import React from 'react';

const App = ({ user, data }) => {
  return (
    <>
      <Header user={user} />
      <Content data={data} />
    </>
  )
}
```

---

Works the same way, but it does not produce a DOM node.

`React.Fragment` has no effect on the HTML, it's invisible.

---

# Quiz

### Why is this better?

---

# React PropTypes

---

Javascript is a _loosely-typed_ language.

It's very forgiving.

---

```js
const add5ToNum = (n) => {
  return n + 5;
}

add5ToNum(100); // -> 105
add5ToNum("5"); // -> ??
```

---

```js
console.log(5 + true); // -> ??
```

---

https://www.destroyallsoftware.com/talks/wat

---

React PropTypes is a tool to help prevent some of this uncertainty and wackyness.

---

It's a separate package, so we need to install it

```bash
yarn add prop-types
```

---

We use PropTypes to _annotate props_ in your components

```jsx
import PropTypes from 'prop-types';

const UserProfile = ({ username, age, address }) => {
  return (
    <React.Fragment>
      <h1>{username} is {age} years old</h1>
      <p>They live at {address.line1} in {address.city}</p>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    city: PropTypes.string.isRequired,
  }).isRequired,
}

```

---


```jsx live=true
const UserProfile = ({ username, age, address }) => {
  return (
    <React.Fragment>
      <p>{username} is {age} years old</p>
      <p>They live at {address.line1} in {address.city}</p>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    city: PropTypes.string.isRequired,
  }).isRequired,
}

render(
  <UserProfile
    username="superman"
    age={200}
    address={{
      line1: '123 Krypton st.',
      city: 'N/A',
    }}
  />
)

```

---

# Quiz

PropTypes help you catch potential type-related bugs.

Are there any other benefits?

---