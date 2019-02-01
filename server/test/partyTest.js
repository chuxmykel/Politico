/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import chai from 'chai';
import chaiHttp from 'chai-http';
// import debug from 'debug';
import parties from '../app/model/parties';
import server from '../server';

// const log = debug('app');
chai.should();

chai.use(chaiHttp);

const versionedEndPoint = '/api/v1/parties/';

describe('Party Tests', () => {
  describe(`POST/ ${versionedEndPoint}`, () => {
    it('Should add a party', (done) => {
      const party = {
        id: parties.length + 1,
        name: 'WAP',
        hqAddress: 'Lagos Nigeria',
        logoUrl: 'http://www.andelatest.com'
      };
      chai.request(server)
        .post(versionedEndPoint)
        .send(party)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.party.should.be.a('object');
          res.body.party.should.have.property('id');
          res.body.party.should.have.property('name');
          res.body.party.should.have.property('hqAddress');
          res.body.party.should.have.property('logoUrl');
          done();
        });
    });
  });

  describe(`GET/ ${versionedEndPoint}`, () => {
    it('Should get all parties', (done) => {
      chai.request(server)
        .get(versionedEndPoint)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.parties.forEach((party) => {
            party.should.be.a('object');
            party.id.should.be.a('number');
            party.name.should.be.a('string');
            party.hqAddress.should.be.a('string');
            party.logoUrl.should.be.a('string');
          });
          done();
        });
    });
  });
  describe(`GET/ ${versionedEndPoint}id`, () => {
    it('Should get one party', (done) => {
      const id = 3;
      chai.request(server)
        .get(`${versionedEndPoint}${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.party.should.be.a('object');
          res.body.party.should.have.property('id');
          res.body.party.should.have.property('name');
          res.body.party.should.have.property('hqAddress');
          res.body.party.should.have.property('logoUrl');
          done();
        });
    });
  });
  describe(`PUT/ ${versionedEndPoint}id`, () => {
    it('Should edit a party', (done) => {
      const party = {
        id: parties.length + 1,
        name: 'WAP',
        hqAddress: 'Lagos Nigeria',
        logoUrl: 'http://www.andelatest.com'
      };
      const id = 5;
      chai.request(server)
        .put(`${versionedEndPoint}${id}`)
        .send(party)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.party.should.be.a('object');
          res.body.party.should.have.property('id');
          res.body.party.should.have.property('name');
          res.body.party.should.have.property('hqAddress');
          res.body.party.should.have.property('logoUrl');
          done();
        });
    });
  });
  describe(`DELETE/ ${versionedEndPoint}id`, () => {
    it('Should delete a party', (done) => {
      const id = 5;
      chai.request(server)
        .put(`${versionedEndPoint}${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
