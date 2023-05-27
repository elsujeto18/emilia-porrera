await Actor.deleteMany({},{ wtimeout: 30000 });
  await Trip.deleteMany({},{ wtimeout: 30000 });
  await Application.deleteMany({},{ wtimeout: 30000 });
  await Stage.deleteMany({},{ wtimeout: 30000 });
  await Sponsorship.deleteMany({},{ wtimeout: 30000 });


  beforeEach(async()=>{
  



    const actor1= new Actor(actores_Iniciales[0]);
    await actor1.save();
    const actor2= new Actor(actores_Iniciales[1]);
    await actor2.save();
    const actor3= new Actor(actores_Iniciales[2]);
    await actor3.save();
  
    
    const trip1= new Trip(trips_Iniciales[0]);
    await trip1.save();
    const trip2= new Trip(trips_Iniciales[1]);
    await trip2.save();
    const trip3= new Trip(trips_Iniciales[2]);
    await trip3.save();
  
  
    const application1= new Application(applications_Iniciales[0]);
    await application1.save();
    const application2= new Application(applications_Iniciales[1]);
    await application2.save();
    const application3= new Application(applications_Iniciales[2]);
    await application3.save();
  
  
    const stage1= new Stage(stages_iniciales[0]);
    await stage1.save();
    const stage2= new Stage(stages_iniciales[1]);
    await stage2.save();
    const stage3= new Stage(stages_iniciales[2]);
    await stage3.save();
    
  
    const sponsorship1= new Sponsorship(sponsorships_iniciales[0]);
    await sponsorship1.save();
    const sponsorship2= new Sponsorship(sponsorships_iniciales[1]);
    await sponsorship2.save();
    const sponsorship3= new Sponsorship(sponsorships_iniciales[2]);
    await sponsorship3.save();
  
  
    
  
  });

describe('ACTORS', () => {

    test('Get Actors', async () => {
       await api
        .get('/actors')
        .expect(200)
        .expect('Content-Type', /application\/json/)
      })
  
    test('Post Actor', async() => {
       await api
        .post('/actors')
        .send({   
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
      })
        .expect(201)
        .expect('Content-Type', /application\/json/)
    });

    test('Put Actor', async() => {
      
      const {response:primeraResponse} = await getActors();
      const {body:actors} = primeraResponse;
      const actorId = actors[0];
      
      
      await api
       .put(`/actors/${actorId._id}`)
       .send({    
        "password": "123456ABCFDFDEFGH",
        "role": [
            "EXPLORER"
        ],
        "name": "Antoni32o",
        "surname": "García",
        "email": "antoniogarcia12sdfad31@gmail.com",
        "phone": "623154879",
        "address": "Calle Resolana",
        "trips": ["6219fe03d6e229826747ebc7","6219fe03d6e229826747ebc8"],
        "applications": [],
        "search_criteria": [],
        "sponsorships": [],
        "validated": false,
        "preferred_language": "Spanish"
        
      })
      .set("idToken","eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWNtZWV4cGxvcmVyYXV0aCIsImF1ZCI6ImFjbWVleHBsb3JlcmF1dGgiLCJhdXRoX3RpbWUiOjE2NDc3OTgxNDUsInVzZXJfaWQiOiJhZG1pbjFAYWRtaW4xLmNvbSIsInN1YiI6ImFkbWluMUBhZG1pbjEuY29tIiwiaWF0IjoxNjQ3Nzk4MTQ1LCJleHAiOjE2NDc4MDE3NDUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.T-cMRKCZndioTTbh_c_kSiFAjnuRgzujTF_MmbSPhNT_234X-AV08ZRW2asKL-UScU5gPIckCoXakEiVcOGREfcKDFwvG_kX1QEhloLLwonB82g8qGz6JLN-FKpdTuTykj2XzMx_-HeQEhn_Ox93SJGsdaowrzRt8FYGzHIQIX_f-Ha2xj4KhlRcKlOIyVDMG4D6Jo_S3Ppj3hRm_iZOvNXm0kjbPHdlLvH69SZTjzJLAHchGDSy3Oqy-jwnkJFLROVARfKyb15nacK21fEfc_NQMS0W-RNv1sXCUXuz6ScSRfKcLeXEXhUocU94RpKZzTRw2WJjfqhm2-ni-z1Ozw")
       .expect(403)
       .expect('Content-Type', /application\/json/)
   });

    test('Get Actor by ID', async() => {

      const {response:primeraResponse} = await getActors();
      const {body:actors} = primeraResponse;
      const actorId = actors[0];

      await api
        .get(`/actors/${actorId._id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
   })
    
});

describe('TRIPS', ()=>{
      test('Get trips', async() => {
          await api
          .get('/trips')
          .expect(200)
          .expect('Content-Type', /application\/json/)
   })

        test('Post Trip', async() => {
          
          await api
            .post('/trips')
            .send({
              "ticker": "202102-ABCH",
              "title": "viaje a córdoba",
              "description": "Esto es una descripcion hecha por manu.",
              "price": 107.38,
              "requirements": ["Alcohol","Dinero"],
              "startDate": "2023-01-03T22:47:50.569Z",
              "endDate": "2023-11-02T19:16:03.854Z",
              "isCancelled": false,


          })
          .set("idToken","eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWNtZWV4cGxvcmVyYXV0aCIsImF1ZCI6ImFjbWVleHBsb3JlcmF1dGgiLCJhdXRoX3RpbWUiOjE2NDc3OTgxNDUsInVzZXJfaWQiOiJhZG1pbjFAYWRtaW4xLmNvbSIsInN1YiI6ImFkbWluMUBhZG1pbjEuY29tIiwiaWF0IjoxNjQ3Nzk4MTQ1LCJleHAiOjE2NDc4MDE3NDUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.T-cMRKCZndioTTbh_c_kSiFAjnuRgzujTF_MmbSPhNT_234X-AV08ZRW2asKL-UScU5gPIckCoXakEiVcOGREfcKDFwvG_kX1QEhloLLwonB82g8qGz6JLN-FKpdTuTykj2XzMx_-HeQEhn_Ox93SJGsdaowrzRt8FYGzHIQIX_f-Ha2xj4KhlRcKlOIyVDMG4D6Jo_S3Ppj3hRm_iZOvNXm0kjbPHdlLvH69SZTjzJLAHchGDSy3Oqy-jwnkJFLROVARfKyb15nacK21fEfc_NQMS0W-RNv1sXCUXuz6ScSRfKcLeXEXhUocU94RpKZzTRw2WJjfqhm2-ni-z1Ozw")
            .expect(403)
            .expect('Content-Type', /application\/json/)
        });

        test('Put Trip', async() => {
          
          const {response:primeraResponse} = await getTrips();
          const {body:trips} = primeraResponse;
          const tripId = trips[0];
          
          await api
            .put(`/trips/${tripId._id}`)
            .send(    {
              "ticker": "202102-ABCM",
              "title": "viaje a matalascañas1",
              "description": "Esto es una descripcion hecha por manu.",
              "price": 107.38,
              "requirements": ["Ropa","Dinero"],
              "startDate": "2023-01-03T22:47:50.569Z",
              "endDate": "2023-11-02T19:16:03.854Z",
              "isCancelled": true,
          })
          .set("idToken","eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWNtZWV4cGxvcmVyYXV0aCIsImF1ZCI6ImFjbWVleHBsb3JlcmF1dGgiLCJhdXRoX3RpbWUiOjE2NDc3OTgxNDUsInVzZXJfaWQiOiJhZG1pbjFAYWRtaW4xLmNvbSIsInN1YiI6ImFkbWluMUBhZG1pbjEuY29tIiwiaWF0IjoxNjQ3Nzk4MTQ1LCJleHAiOjE2NDc4MDE3NDUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.T-cMRKCZndioTTbh_c_kSiFAjnuRgzujTF_MmbSPhNT_234X-AV08ZRW2asKL-UScU5gPIckCoXakEiVcOGREfcKDFwvG_kX1QEhloLLwonB82g8qGz6JLN-FKpdTuTykj2XzMx_-HeQEhn_Ox93SJGsdaowrzRt8FYGzHIQIX_f-Ha2xj4KhlRcKlOIyVDMG4D6Jo_S3Ppj3hRm_iZOvNXm0kjbPHdlLvH69SZTjzJLAHchGDSy3Oqy-jwnkJFLROVARfKyb15nacK21fEfc_NQMS0W-RNv1sXCUXuz6ScSRfKcLeXEXhUocU94RpKZzTRw2WJjfqhm2-ni-z1Ozw")
            .expect(403)
            .expect('Content-Type', /application\/json/)
        });

          test('Get Trip by ID', async() => {
         
            const {response:primeraResponse} = await getTrips();
            const {body:trips} = primeraResponse;
            const tripId = trips[0];
         
            await api
            .get(`/trips/${tripId._id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
        });

        test('Delete Trip by ID', async() => {
          const {response:primeraResponse} = await getTrips();
          const {body:trips} = primeraResponse;
          const tripId = trips[1];
          
          await api
           .delete(`/trips/${tripId._id}`)
           .set("idToken","eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWNtZWV4cGxvcmVyYXV0aCIsImF1ZCI6ImFjbWVleHBsb3JlcmF1dGgiLCJhdXRoX3RpbWUiOjE2NDc3OTgxNDUsInVzZXJfaWQiOiJhZG1pbjFAYWRtaW4xLmNvbSIsInN1YiI6ImFkbWluMUBhZG1pbjEuY29tIiwiaWF0IjoxNjQ3Nzk4MTQ1LCJleHAiOjE2NDc4MDE3NDUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.T-cMRKCZndioTTbh_c_kSiFAjnuRgzujTF_MmbSPhNT_234X-AV08ZRW2asKL-UScU5gPIckCoXakEiVcOGREfcKDFwvG_kX1QEhloLLwonB82g8qGz6JLN-FKpdTuTykj2XzMx_-HeQEhn_Ox93SJGsdaowrzRt8FYGzHIQIX_f-Ha2xj4KhlRcKlOIyVDMG4D6Jo_S3Ppj3hRm_iZOvNXm0kjbPHdlLvH69SZTjzJLAHchGDSy3Oqy-jwnkJFLROVARfKyb15nacK21fEfc_NQMS0W-RNv1sXCUXuz6ScSRfKcLeXEXhUocU94RpKZzTRw2WJjfqhm2-ni-z1Ozw")
 
           .expect(403)
        });

        test('Get Actor Trips ', async() => {
          
          const {response:primeraResponse} = await getActors();
          const {body:actors} = primeraResponse;
          const actorId = actors[0];
          
          await api
            .get(`/trips/${actorId._id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
        });        

});


describe('APPLICATIONS', ()=>{
  test('Get applications', async() => {
      await api
      .get('/applications')
      .expect(200)
      .expect('Content-Type', /application\/json/)
})

});


//-------------------------------------------------------------------------------
//---------------------------------------------------------------------------------/-




const actor1= new Actor(actores_Iniciales[0]);
actor1.save();

const trip1= new Trip(trips_Iniciales[0]);
trip1.save();

const application1= new Application(applications_Iniciales[0]);
application1.save();




describe.each([
  {input: 'actors',expected: 200},
  {input: 'trips',expected: 200},
  {input: 'applications',expected: 200},
])('Test parametrizados', ({input,expected}) => {
  test(`Get ${input} returns ${expected}`, async () => {
    await api
      .get(`/${input}`)
      .expect(expected)
      .expect('Content-Type', /application\/json/)
  });

  test(`Read ${input}/id returns ${expected}`, async () => {

    let data;
    let actorResponse;
    let tripResponse;
    let applicationResponse;
    actorResponse = await getActors();
    tripResponse = await getTrips();
    applicationResponse = await getApplications();
    if (input === 'actors') {
      let data_body = actorResponse?.body;
      console.log(data_body);
      data = data_body[0];
    } else if (input === 'trips') {
      let data_body = tripResponse?.body;
      console.log(data_body); 
      //data = data_body[0];
    } else {
      let data_body = applicationResponse?.body;
      console.log(data_body);
      //data = data_body[0];
    }


    await api
      .get(`${input}/${data._id}`)
      //.get(`/${input}`)
      .expect(expected)
      .expect('Content-Type', /application\/json/)
  }
  );

});


afterAll(()=>{
  mongoose.connection.close();
})



//-------------------------------------------------------------
//-------------------------------------------------------------

{input: 'trips',expected: 200},
  {input: 'applications',expected: 200},

  function createData(){  

    Actor.deleteMany({},{ wtimeout: 30000 });
    Trip.deleteMany({},{ wtimeout: 30000 });
    Application.deleteMany({},{ wtimeout: 30000 });
    Stage.deleteMany({},{ wtimeout: 30000 });
    Sponsorship.deleteMany({},{ wtimeout: 30000 });
  
  
    const actor1= new Actor(actores_Iniciales[0]);
    actor1.save();
    const actor2= new Actor(actores_Iniciales[1]);
    actor2.save();
    const actor3= new Actor(actores_Iniciales[2]);
    actor3.save();
  
  
    const trip1= new Trip(trips_Iniciales[0]);
    trip1.save();
    const trip2= new Trip(trips_Iniciales[1]);
    trip2.save();
    const trip3= new Trip(trips_Iniciales[2]);
    trip3.save();
  
  
    const application1= new Application(applications_Iniciales[0]);
    application1.save();
    const application2= new Application(applications_Iniciales[1]);
    application2.save();
    const application3= new Application(applications_Iniciales[2]);
    application3.save();
  
  
    const stage1= new Stage(stages_iniciales[0]);
    stage1.save();
    const stage2= new Stage(stages_iniciales[1]);
    stage2.save();
    const stage3= new Stage(stages_iniciales[2]);
    stage3.save();
  
    const sponsorship1= new Sponsorship(sponsorships_iniciales[0]);
    sponsorship1.save();
    const sponsorship2= new Sponsorship(sponsorships_iniciales[1]);
    sponsorship2.save();
    const sponsorship3= new Sponsorship(sponsorships_iniciales[2]);
    sponsorship3.save();
  }
  
  createData();

  //---------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------


  describe.each([
    {input: 'actors',expected: 200}
  ])('Test parametrizados', ({input,expected}) => {
    
  
  
    
    test('Get Actors', async () => {
       await api
        .get(`/${input}`)
        .expect(expected)
        .expect('Content-Type', /application\/json/)
      })
  
    test(`POST ${input}`, async() => {
       await api
        .post(`/${input}`)
        .send({   
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
      })
        .expect(201)
        .expect('Content-Type', /application\/json/)
    });
  
  
    test(`Get ${input} by ID`, async() => {
  
      const {response:primeraResponse} = await input === 'actors' ? getActors() : input === 'trips' ? getTrips() : getApplications();
      const {body:actors} = primeraResponse;
      const actorsId = actors[0];
  
      await api
        .get(`/${input}/${data._id}`)
        .expect(expected)
        .expect('Content-Type', /application\/json/)
   })
  
    
  
    
  });