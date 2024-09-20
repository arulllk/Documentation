const successFormat = {
    "status": "success",
    "message": "User registered successfully",
    "data": {
        "id": "12345",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "createdAt": "2024-07-22T12:34:56.789Z",
        "updatedAt": "2024-07-22T12:34:56.789Z"
    }
}


const errorFormat = {
    "status": "Error",
    "message": "Validation Failed",
    "errors": {
        "firstname": "Please provide your name",
        "lastname": "Please provide your name"
    }
}





dummyObj = {   
    "firstname":"Nefin",
    "lastname":"Arul",
    "email":"nefing_arul@gmail.com",
    "password":"123456789"
}