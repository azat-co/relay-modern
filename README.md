footer: © NodeProgram.com, Node.University and Azat Mardan 2018
slidenumbers: true
theme: Simple, 1
build-lists: true
autoscale:true

[.slidenumbers: false] 
[.hide-footer]

![](images/graphql-relay-cover.png)

---

# Node Advanced
## Overview
### Azat Mardan @azat_co


![left](images/azat node interacitev no pipe.jpeg)

![inline right](images/nu.png)

---

# Node Advanced


* Videos: <http://node.university/p/relay-modern>
* Slides: in `*.md` in <https://github.com/azat-co/relay-modern>
* Code: in `code` in <https://github.com/azat-co/relay-modern>

---

# Course Overview

1. Introduction
2. Relay Modern Configuration and Setup
3. Connecting Relay Modern to GraphQL
4. Extending the Component Tree with Fragments
5. Working with a Collection of Data
6. Performing Mutations with Relay Modern
7. Advanced Relay Modern Features

---

## Prerequisites

* Node v8, npm v5 or higher
* Chrome
* Git

---

## Skill Prerequisites

* React, i.e., class, state, props
* JavaScript, i.e., ES6-8
* Node basics, i.e., npm/yarn, package.json

---

# 1. Introduction 

---

## Benefits of GraphQL

---

## Benefits of Relay Modern

---

## What is Relay Modern?

* New version of Relay client
* Client for GraphQL backends and front ends - abstraction for queries and mutations
* Supported by Facebook
* Need a pre-runtime compiler (to optimize queries)

---

## Relay Modern vs Flux/Redux

---

## Relay vs Apollo

---

# 2. Relay Modern Configuration and Setup

---

## CRA: Easy Way

1. create-react-app
1. add react-relay
1. add relay-compiler and babel-plugin-relay with -D
1. eject
1. configure babel

---

## CRA

```
npm i -g create-react-app
create-react-app NAME
cd NAME
npm i 
npm start
```

Open <http://localhost:3000> and see React logo spinning

---

## Relay Modern Dependencies

```
npm i react-relay -E
npm i relay-compiler babel-plugin-relay -DE
npm run eject
```

---

## Babel Configurations

Add `plugins` field to package.json under babel (create babel if there's none):

```json
  "babel": {
    "plugins": [
      "relay"
    ]
  },
```

---

## Relay Compiler

```
relay-compiler —src ./src —schema ./schema.graphql
```

Add to package.json as npm script with --watch (recommended):

```
  "scripts": {
    "relay": "relay-compiler --src ./src --schema ./schema.graphql --watch"
  }
```    

---

## GraphQL Schema Example

`schema.graphql`:

```
type InstakilogramPost {
  id: ID!
  name: String!
  url: String!
}
```

```
npm run relay
```

---

## Relay Environment

`createRelayEnvironment.js` <sup>source</sup>

```js
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const __RELAY_API_ENDPOINT__ = 'https://api.graph.cool/relay/v1/cjcyfbdyx01bm01582zl2xjnn'

function fetchQuery(
  operation,
  variables,
) {
  return fetch(__RELAY_API_ENDPOINT__, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store,
})
```

# 3. Connecting Relay Modern to GraphQL

---

# 4. Extending the Component Tree with Fragments

---

# 5. Working with a Collection of Data

---

# 6. Performing Mutations with Relay Modern

---

# 7. Advanced Relay Modern Features

---

