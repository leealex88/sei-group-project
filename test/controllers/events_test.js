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
        startTime: '1200',
        endTime: '1500',
        cost: 0,
        whatToBring: 'The usual dog walking things! Maybe some money for a drink in a dog friendly pub after if you\re up for it',
        maxSize: 5,
        minSize: 2,
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
              'eventType',
              'fixed',
              'location',
              'description',
              'schedule',
              'startTime',
              'endTime',
              'tickets',
              'ticketLink',
              'eventLink',
              'preparation',
              'cost',
              'catered',
              'provided',
              'whatToBring',
              'maxSize',
              'minSize',
              'idealGroupSize',
              'privateInfo',
              'partyImage',
              'tags',
              'skillLevel',
              'comments',
              'likes',
              'user',
              'createdAt',
              'updatedAt'
            ])
          done()
        })
    })
  })
})
