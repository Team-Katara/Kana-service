
# Application Name

> Katar-a-Center

## Application Summary
Front end implementation of an e-commerce website for musical instruments consisting of 4 microservices

## Related Microservices
 - Product Browser: https://github.com/Team-Katara/john-service
 - Recently Viewed Items: https://github.com/Team-Katara/Shraya-Service
 - Reviews: https://github.com/Team-Katara/Katar-a_Center_Review

## Table of Contents


1. [Requirements](#requirements)
1. [Development](#development)
1. [Server Endpoints](#endpoints)

## Requirements
- Node 6.13.0
- nodemon

## Development
### Installing Dependencies

From within the root directory:
```
npm install
```

### Set-Up
From within the root directory:
```
npm run build (runs webpack)
npm run start (runs nodemon and starts server)
npm run seed-db (seeds database)
```

## Endpoints
Getting similar item data for an id :

```
/api/reviews?id={}
```

Expected Queries: id (number)

Responses with randomly generated item details
(number of similar items are random, between 1 - 5 items)