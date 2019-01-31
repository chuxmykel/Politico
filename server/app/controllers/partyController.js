/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
import parties from '../model/parties';

class PartyController {
  addOneParty(req, res) {
    if (!req.body.name) {
      res.status(400).send({
        status: 400,
        error: 'Party name is required'
      });
    } else if (!req.body.hqAddress) {
      res.status(400).send({
        status: 400,
        error: 'HQ address is required'
      });
    } else if (!req.body.logoUrl) {
      res.status(400).send({
        status: 400,
        error: 'Logo Url is required'
      });
    } else {
      const party = {
        id: parties.length + 1,
        name: req.body.name,
        hqAddress: req.body.hqAddress,
        logoUrl: req.body.logoUrl
      };
      parties.push(party);

      res.status(201).send({
        status: 201,
        party
      });
    }
  }

  getAllParties(req, res) {
    res.status(200).send({
      status: 200,
      parties
    });
  }
}

const partyController = new PartyController();

export default partyController;
