require('../spec_helper')
// const Event = require('../../models/event')

/* globals api, expect, describe, beforeEach, afterEach, it */
require('../spec_helper')

const Event = require('../../models/event')

describe('Event tests', () => {

  beforeEach(done => {
    Event.collection.deleteMany()
    done()
  })

  afterEach(done => {
    Event.collection.deleteMany()
    done()
  })

  describe('GET /api/events', () => {

    beforeEach(done => {
      Event.create({
        eventType: 'Dog Walking',
        eventName: '(Long) Sunday Afternoon Dog Walk',
        date: new Date('08/09/2019'),
        fixed: true ,
        location: 'Richmond',
        description: 'Join me and my beautiful Chow Chow Lola for a long dong walk in Richmond park, I love a good deep chat about anything or everything (or nothing much!) and I\'m an excellent listener. Lola is very social too but does have a bit of a problem with excitable/jumpy small dogs.',
        schedule: '',
        startTime: '1200',
        endTime: '1500',
        tickets: '',
        ticketLink: '',
        eventLink: '',
        preparation: '',
        cost: 0,
        catered: '',
        provided: '',
        whatToBring: 'The usual dog walking things! Maybe some money for a drink in a dog friendly pub after if you\re up for it',
        maxSize: 5,
        minSize: 2,
        idealGroupSize: '',
        anythingElse: '',
        image: '',
        tags: ['dogs', 'walking', 'talking', 'listening'],
        skillLevel: '',
        user: '5d249b40dd7fa1eab1ff08ad'
      })
        .then(() => done())
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('should respond with a JSON object', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return an array of Events', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })

    it('should return an array of Event objects', done => {
      api.get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'eventName',
              'date',
              'eventType'
            ])
          done()
        })
    })
  })
})



//   it('Event objects should have properities: _id, brand, color, laced, material, price, createdAt, updatedAt', done => {
//     api.get('/api/Events')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         const firstEvent = res.body[0]
//
//         expect(firstEvent)
//           .to.have.property('_id')
//           .and.to.be.a('string')
//
//         expect(firstEvent)
//           .to.have.property('brand')
//           .and.to.be.a('string')
//
//         expect(firstEvent)
//           .to.have.property('color')
//           .and.to.be.a('string')
//
//
//         expect(firstEvent)
//           .to.have.property('price')
//           .and.to.be.a('number')
//
//         expect(firstEvent)
//           .to.have.property('createdAt')
//           .and.to.be.a('string')
//
//         expect(firstEvent)
//           .to.have.property('updatedAt')
//           .and.to.be.a('string')
//
//         done()
//       })
//   })
//
//   describe('Make more than one Event', () => {
//
//     beforeEach(done => {
//       Event.create([
//         {
//           brand: 'Nike',
//           color: 'black',
//           price: 49.99
//         },
//         {
//           brand: 'Adidas',
//           color: 'white',
//           price: 149.99
//         }
//       ])
//         .then(() => done())
//         .catch(done)
//     })
//
//     it('should return three Events', done => {
//       api
//         .get('/api/Events')
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           expect(res.body.length).to.equal(3)
//           done()
//         })
//     })
//   })
// })
//
// describe('POST /api/Events', () => {
//
//   it('should return a 201 response', done => {
//     api
//       .post('/api/Events')
//       .set('Accept', 'application/json')
//       .send( {
//         brand: 'Nike',
//         color: 'black',
//         price: 49.99
//       }
//       )
//       .expect(201, done)
//   })
//
//   it('should create a Event', done => {
//     api
//       .post('/api/Events')
//       .set('Accept', 'application/json')
//       .send({
//         brand: 'Nike',
//         color: 'black',
//         price: 49.99
//       }
//       )
//       .end((err, res) => {
//         const Event = res.body
//
//         expect(Event)
//           .to.have.property('_id')
//           .and.to.be.a('string')
//
//         expect(Event)
//           .to.have.property('brand')
//           .and.to.be.a('string')
//
//         expect(Event)
//           .to.have.property('color')
//           .and.to.be.a('string')
//
//         expect(Event)
//           .to.have.property('price')
//           .and.to.be.a('number')
//
//         expect(Event)
//           .to.have.property('createdAt')
//           .and.to.be.a('string')
//
//         expect(Event)
//           .to.have.property('updatedAt')
//           .and.to.be.a('string')
//
//         done()
//       })
//   })
//
// })
