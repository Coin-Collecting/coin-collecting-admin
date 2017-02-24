# Coin Collection API
Simple app for organizing, viewing and collecting coins.

## Prerequisites
```
npm i -g yarn
```
## Install and Run
```
yarn
npm start
```
App should be listening on port 5000

## Sample Query
```
query ($id: ID!) {
  coin(id: $id) {
    id
    mint {
      id
      mark
      name
    }
    keyDate
    mintage
    year
    variety {
      id
      mass
      name
      diameter
      issue {
        id
        name
        denomination {
          id
          kind
          val
        }
        startYear
        description
        endYear
      }
      designer {
        id
        name
      }
      images {
        obverse
        reverse
      }
      edge {
        id
        note
        type
      }
      composition {
        id
        gold
        silver
        copper
        nickel
        brass
        tin
        zinc
        steel
      }
    }
  }
}

```
