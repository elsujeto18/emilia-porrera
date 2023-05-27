/*Fallaba con Mocha Chai
--------------------------------------------------------
const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);
*/

//Tests de Integración con Jest y supertest
const mongoose = require("mongoose");
const {
  api,
  actores_Iniciales,
  trips_Iniciales,
  applications_Iniciales,
  stages_iniciales,
  sponsorships_iniciales,
  getTrips,
  getApplications,
  getActors,
  getSponsorships,
} = require("./helpers");

const { 
  actor,
  actor_error_email,
  trip,
  trip_error_price,
  trip_error_title_required,
  trip_error_title_min,
  trip_error_title_max,

} = require("./data");

const Actor = require("../api/models/actorModel");
const Application = require("../api/models/applicationModel");
const Sponsorship = require("../api/models/sponsorshipModel");
const Stage = require("../api/models/stageModel");
const Trip = require("../api/models/tripModel");
const Finder = require("../api/models/finderModel");

var http = require("http");
const app = require("../app");
const { exec } = require("child_process");
//const server = http.createServer(app);

jest.setTimeout(15000);


  beforeEach(async()=>{
    await Actor.deleteMany({},{ wtimeout: 30000 });
    await Trip.deleteMany({},{ wtimeout: 30000 });
    await Application.deleteMany({},{ wtimeout: 30000 });
    await Stage.deleteMany({},{ wtimeout: 30000 });
    await Sponsorship.deleteMany({},{ wtimeout: 30000 });



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



describe.each([
  {input: 'actors',expected: 200},
  {input: 'trips',expected: 200},
  {input: 'applications',expected: 200},
  {input: 'sponsorships',expected: 400}
])('Test parametrizados GET', ({input, expected}) => {
  
  
  test(`Get ${input} returns ${expected}`, async () => {
    await api
    .get(`/${input}`)
    .expect(expected)
    .expect('Content-Type', /application\/json/)
  });
    
});

  

describe.each([
  {input: 'actors', data: actor, expected: 201},
  {input: 'trips', data: trip, expected: 200},
  
])('Test parametrizados POST', ({input, data,expected}) => {


  test(`Post ${input} returns ${expected}`, async () => {
    await api
    .post(`/${input}`)
    .send(data)
    .expect(expected)
    .expect('Content-Type', /application\/json/)
  });
  
});

describe.each([
  
  {input: 'actors', data: actor_error_email, expected: 400, text: 'Email is not valid'},
  {input: 'trips', data: trip_error_price, expected: 400, text: 'Price is not valid'},
  {input: 'trips', data: trip_error_title_required, expected: 400, text: 'Title is required'},
  {input: 'trips', data: trip_error_title_min, expected: 400, text: 'Title is too short'},
  {input: 'trips', data: trip_error_title_max, expected: 400, text: 'Title is too long'},
  
])('Test parametrizados POST con Errores', ({input, data,expected, text}) => {


  test(`Post ${input} returns ${expected} reason: ${text}`, async () => {
    await api
    .post(`/${input}`)
    .send(data)
    .expect(expected)
    .expect('Content-Type', /application\/json/)
  });
  
});


test(`Ban Actor by ID`, async() => {
  jest.setTimeout(30000);
  const {response:primeraResponse} = await getActors();
  const {body:actors} = primeraResponse;
  const actorsId = actors[1];
  
  return await api
    .put(`/actors/${actorsId._id}/ban`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    
})

test(`ERROR - Ban Actor by ID`, async() => {
  jest.setTimeout(30000);
  const {response:primeraResponse} = await getActors();
  const {body:actors} = primeraResponse;
  const actorsId = actors[2];
  
  return await api
    .put(`/actors/${actorsId._id}/ban`)
    .expect(400)
    .expect('Content-Type', /application\/json/)

    
})

test(`UnBan Actor by ID`, async() => {

  const {response:primeraResponse} = await getActors();
  const {body:actors} = primeraResponse;
  const actorsId = actors[1];
  
  return await api
    .put(`/actors/${actorsId._id}/unban`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    
})



  test(`Get Actors by ID`, async() => {

    const {response:primeraResponse} = await getActors();
    const {body:actors} = primeraResponse;
    const actorsId = actors[0];
    
    return await api
      .get(`/actors/${actorsId._id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

      
 })

 test(`Get Trips by ID`, async() => {

  const {response:primeraResponse} = await getTrips();
  const {body:trips} = primeraResponse;
  const tripsId = trips[0];
  
  return await api
    .get(`/trips/${tripsId._id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    
})

test(`Get Applications by ID`, async() => {

  const {response:primeraResponse} = await getApplications();
  const {body:applications} = primeraResponse;
  const applicationId = applications[0];
  
  return await api
    .get(`/applications/${applicationId._id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    
})

  

  
