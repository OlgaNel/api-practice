let _ = require('lodash');
import airtableAPI from "../sdk-api/airtableAPI"

describe('template spec', () => {
  it.only('1 record can be added, retireved, updated and deleted', () => {
    // when mixing non-Cypress async code with Cypress commands and want to keep everything in the chain. - use cy.then
    cy.then(() => {
      // Add a new record
      return airtableAPI.addRecord();
    }).then((addedRecordRes) => {
      const recordId = addedRecordRes.body.records[0].id

      // List records after adding
      return airtableAPI.listRecords().then((list) => {

        expect(list.body).to.have.property('records').and.to.be.an('array');

        // find record by id
        const addedRecord = list.body.records.find(record =>
          record.id === recordId
        );
        
        // match generated record with listed record, omit Photo because airtable changes the link to store it
        expect(_.omit(addedRecord.fields, ['Photo'])).to.deep.include(_.omit(Cypress.env('randomRecord'), ['Photo']));
        
        // Delete the record
        return airtableAPI.deleteRecord(addedRecord.id).then((res) => {
          expect(res.body.records[0]).to.include({ id: addedRecord.id, deleted: true });
        });
      });
    });
    });
   
 
  it.skip('Several records can be added, updated and deleted', () => {
   // check cypress lodash ->>>>> Cypress._.times(10, () => {})
  })
})
