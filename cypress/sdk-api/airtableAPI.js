import testData from '../fixtures/example'

const baseUrl = Cypress.config('baseUrl');  // or Cypress.config().baseUrl
const dbId = Cypress.env('dbId');
const tableName = Cypress.env('tableName');
const token = Cypress.env('token');

class AirtableApi {
    listRecords () {
        return cy.request({
            method: 'GET',
            url: `${baseUrl}/${dbId}/${tableName}`,
            headers: {
              Authorization: token
            }
        }
        ).then(res => console.log(res))
    };
    addRecord (isRandom = true, data) {
      const record = isRandom ? testData.getRecord(true) : testData.getRecord(false, data)

        return cy.request({
            method: 'POST',
            url: `${baseUrl}/${dbId}/${tableName}`,
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            },
            body: {
                records: [ record ]
            }
        }
        ).then(res => console.log(res))
    };
    deleteRecord (id) {
        return cy.request({
            method: 'DELETE',
            url: `${baseUrl}/${dbId}/${tableName}`,
            qs: {
                'records[]': [ id ]
            },
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            },
            body: {
                records: [ id ]
            }
        }
        ).then(res => console.log(res))
    }
}

export default new AirtableApi();