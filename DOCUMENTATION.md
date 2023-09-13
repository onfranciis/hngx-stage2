## API Documentation :memo:

### A guide to consuming this project

![Project UML Diagram by Francis Onukwu](./src/utils/UML.png)

This backend project is created to serve an A.P.I using the R.E.S.T protocool. Connected to a database, this service allows clients to make C.R.U.D operations and here's how.

<br>

> ### Creating a user

- <b>Method</b>
  POST

  <br>

- <b>URL</b>
  https://hngx-stage2.onrender.com/api

<br>

- <b>Body</b>

```

 {
    name: <String>
 }
```

If the name is not already in use, you should get the name and an id as successfull response.

```
// Example response

{
    name: "John",
    id: "64fe1a06ef2f7757e645289a"
}
```

<br>
<br>

> ### Displaying all users

- <b>Method</b>
  GET

  <br>

- <b>URL</b>
  https://hngx-stage2.onrender.com/api/

```
// Example response

{
    "users": [
        {
            "user": "Nat",
            "id": "64fde2f0850aba59ada66e56"
        },
        {
            "user": "John Doee",
            "id": "64fde381f672d85f237222b9"
        },
        {
            "user": "Dammy",
            "id": "64fde438adfb59cb55b5feef"
        },
        {
            name: "John",
            id: "64fe1a06ef2f7757e645289a"
        }
        {
            "user": "Janey",
            "id": "64fe1a06ef2f7757e645289a"
        },
        {
            "user": "Jang",
            "id": "64ff060d6ef23697dbb1513a"
        }
    ]
}
```

<br>
<br>

> ### Reading a user

- <b>Method</b>
  GET

  <br>

- <b>URL</b>
  https://hngx-stage2.onrender.com/api/valid_user_id

If the id exists, you should get the name and id as successful response.

```
// Example response

{
    name: "John",
    id: "64fe1a06ef2f7757e645289a"
}
```

<br>
<br>

> ### Updating a user

- <b>Method</b>
  PATCH

  <br>

- <b>URL</b>
  https://hngx-stage2.onrender.com/api/valid_user_id

 <br>

- <b>Body</b>

```
{
  newName: <String>
}
```

If the id exists and the new name isn't taken already, you should get the name and id as successfull response.

```
 // Example response

{
    name: "Joe",
    id: "64fe1a06ef2f7757e645289a"
}
```

<br>
<br>

> ### Deleting a user

- <b>Method</b>
  DELETE

  <br>

- <b>URL</b>
  https://hngx-stage2.onrender.com/api/valid_user_id

<br>

If the id exists, you should get a successful response.

```
// Example response

{
    message: "64fe1a06ef2f7757e645289a has been deleted successfully",
}
```

<br>
<br>

### Note :bangbang:

- All values sent are trimmed.
- When there is an error, a detailed reason would be sent in the message property of the response object

```
Example error

{
    message: "No user was found with this name!"
}
```

<br>

Find out how to run this on your machine [here](./README.md)
