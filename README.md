# Coin Collection API

Sample Query
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
          type
          value
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
