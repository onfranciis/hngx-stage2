# CRUD User

### Everything you need to know

By Francis Onukwu

---

This is a backend project built using TypeScript for a NodeJS server and a MongoDb powered database. To get this running on your machine, you must first download and install [NodeJs](https://nodejs.org/en/download), clone this repository by running
`git clone https://github.com/onfranciis/hngx-stage2`, navigate to the `hngx-stage2` folder in your terminal and running `npm install`. Once all the dependencies have been installed you should create a `.env` file and fill it with these details

```
PORT = "1234"
DEV_DB_URL = <A valid MongoDb Url>
ENVIRONMENT = "development"
```

You can get a free MongoDb Url from [Atlas](https://www.mongodb.com/atlas/database). Now in your terminal, run `npm run serve` and if successfull, you should see `... development server has started on port 1234`. Now head over to `http://localhost:1234` on your browser and if everything is successfull, you should see this

```
{
  connected:true
}
```

---

---

---

## API Documentation :memo:

### A guide to consuming this project

This backend project is created to serve an A.P.I using the R.E.S.T protocool. Connected to a database, this service allows clients to make C.R.U.D operations and here's how.

<br>

> ### Creating a user

- Method
  POST

<br>

- Params
  - name: String

```
 https://hngx-stage2.onrender.com/api?name=John
```

If the name is not already in use, you should get the name and an id as successfull response.

```
{
    name: "John",
    id: "64fe1a06ef2f7757e645289a"
}
```

<br>
<br>

> ### Reading a user

- Method
  GET

<br>

- Params
  - name: String

```
 https://hngx-stage2.onrender.com/api?name=John
```

If the name exists, you should get the name and id as successfull response.

```
{
    name: "John",
    id: "64fe1a06ef2f7757e645289a"
}
```

<br>
<br>

> ### Updating a user

- Method
  PATCH

<br>

- Body
  ```
  {
    name: <String>,
    newName: <String>
  }
  ```

```
 https://hngx-stage2.onrender.com/api

 {
    name: "John",
    newName: "Joe"
 }
```

If the name exists and the new name isn't taken already, you should get the name and id as successfull response.

```
{
    name: "Joe",
    id: "64fe1a06ef2f7757e645289a"
}
```

<br>
<br>

> ### Deleting a user

- Method
  DELETE

<br>

- Params
  - name: String

```
 https://hngx-stage2.onrender.com/api?name=John
```

If the name exists, you should get a successfull response.

```
{
    message: "John has been deleted successfully",
}
```

<br>
<br>

### Note :bangbang:

- All values sent are trimmed, so sending "`John`" is the same as "`John`" .
- When there is an error, a detailed reason would be sent in the message property of the response object

```
{
    message: "No user was found with this name!"
}
```
