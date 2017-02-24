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

# Sample Queries and Mutations

## Get A Coin by ID
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

## Get All Coins
```
{
  coins {
    id
  }
}
```

## Create a New Coin
```
mutation {
  createCoin(id: "55", mint: "1", year: "1900", mintage: 1000, variety: "1", keyDate: true) {
    id
  }
}
```

## Delete a Coin by ID
```
mutation {
  deleteCoin(id: "1") {
    id
  }
}
```