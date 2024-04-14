# My Project
This is the very basic prototype of GraphQL API for an online shop.
## Overview
API was implemented primarily as a practical exercise, aimed at refining skills and understanding of working of GrapQL.

## Installation
To start this endpoint on your local machine http://localhost:4000/graphql, follow these steps
1. Install dependencies - "yarn install"
2. Start the project - `yarn dev` (for development mode)

## Usage
You can make some queries at studio.apollographql.com. by pressing "query your server"

some examples: 
<br />
<pre>
query Currencies {
  currencies
}
</pre>
<br />
<pre>
 query {
    category {
      name
      products {
        category
        prices {
          currency
          amount
        }
      }
    }
  }
</pre>
