actor = {
       
    "password": "kdfnaosdfsasadsnfdspa",
    "role": [
        "EXPLORER"
    ],
    "name": "ANthonfdsay",
    "surname": "Martial",
    "email": "antonioMafrtial12121311@gmail.com",
    "phone": "623154881",
    "address": "Calle Torreblanca",
    "validated": false,
    "preferred_language": "English"
  
}
  
actor_error_email = {
         
    "password": "kdfnaosdfsasadsnfdspa",
    "role": [
        "EXPLORER"
    ],
    "name": "ANthonfdsay",
    "surname": "Martial",
    "email": "antonioMafrtia--l12121311@.com",
    "phone": "623154881",
    "address": "Calle Torreblanca",
    "validated": false,
    "preferred_language": "English"
  
}

actor_error_password = {
         
    "password": "kdf",
    "role": [
        "EXPLORER"
    ],
    "name": "Prueba Brallan",
    "surname": "Martial",
    "email": "antonioMafrtial12121311@gmail.com",
    "phone": "623154881",
    "address": "Calle Torreblanca",
    "validated": false,
    "preferred_language": "English"
  
}
  
trip = {
    "ticker": "202402-BRAU",
    "title": "viaje a caracas venezuela",
    "description": "Esto es una descripcion hecha por brallan",
    "price": 66.6,
    "requirements": ["Alcohol","Dinero"],
    "startDate": "2022-01-03T22:47:50.569Z",
    "endDate": "2024-11-02T19:16:03.854Z",
    "isCancelled": false,
}


trip_error_title_required = {
    "ticker": "202402-BRAU",
    "title": "",
    "description": "Esto es una descripcion hecha por brallan",
    "price": 66.6,
    "requirements": ["Alcohol","Dinero"],
    "startDate": "2020-01-03T22:47:50.569Z",
    "endDate": "2024-11-02T19:16:03.854Z",
    "isCancelled": false,
}

trip_error_title_min = {
    "ticker": "202402-BRAU",
    "title": "via",
    "description": "Esto es una descripcion hecha por brallan",
    "price": 66.6,
    "requirements": ["Alcohol","Dinero"],
    "startDate": "2020-01-03T22:47:50.569Z",
    "endDate": "2024-11-02T19:16:03.854Z",
    "isCancelled": false,
}

trip_error_title_max = {
    "ticker": "202402-BRAU",
    "title": "viaje para la ciudad de caracas venezuela, para conocer la ciudad y sus alrededores",
    "description": "Esto es una descripcion hecha por brallan",
    "price": 66.6,
    "requirements": ["Alcohol","Dinero"],
    "startDate": "2020-01-03T22:47:50.569Z",
    "endDate": "2024-11-02T19:16:03.854Z",
    "isCancelled": false,
}

trip_error_price = {
    "ticker": "202402-BRAU",
    "title": "viaje a caracas venezuela",
    "description": "Esto es una descripcion hecha por brallan",
    "price": -10,
    "requirements": ["Alcohol","Dinero"],
    "startDate": "2022-01-03T22:47:50.569Z",
    "endDate": "2024-11-02T19:16:03.854Z",
    "isCancelled": false,
}


module.exports = {
    actor, 
    actor_error_email, 
    trip, 
    trip_error_price, 
    trip_error_title_required, 
    trip_error_title_min, 
    trip_error_title_max}