# API Server

>  Build a REST API using Express, by creating a proper series of endpoints that perform CRUD

## Installation

> Start with: `npm install`

> Set your PORT environment with an .env file

```text
PORT=3001
SQL_CONNECTION_STRING={SQL_database_link}
```

## Usage

Send a request:

```text
method: GET || POST || PUT || DELETE
route: /api/pet || /api/pet/:id || /api/person || /api/person/:id
query:
  name={name_of_person} //for person
  age={age_of_person} //for person
  
  name={name_of_pet} //for pet
  personId={person_id} //for pet
```

## UML Diagram
![Basic Express Server UML Diagram](./assets/401-class-03-lab.png)
![Basic Express Server UML Diagram](./assets/401-class-03-lab.png)

## Deployed link
> This is deployed on Render at:
* [Main/Production Branch](https://api-server-b4jj.onrender.com)

## PR link
[PR link](https://github.com/cleecoloma/api-server/pull/1)

## Contributors
> Chester Lee Coloma