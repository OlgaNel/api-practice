import { generateRandomRecord } from "../support/supportFunctions"
class testData {
  recordDefault = {
    "record": {
      "fields": {
        "Name": "test device",
        "Device Type": "iOS",
        "Serial Number": {
          "text": "HWbuYrx2hQrp"
        },
        "Photo": [
          {
            "url": "https://v5.airtableusercontent.com/v3/u/43/43/1753200000000/PeXzsAbiTyT4EP3EA4FOkg/901IM0omPBn2j3eMQizYjiCwF3E56b5gNMN6nZVpsFuBZp1lU1HjktkzZ0yGAzWbkhaDhtiYXbL8suNJ4mTpF-d39SpFaHGy_Pv0nDPh2q4xcbdZYxr_JLAnaML9OI92/_AKxKLaglqktFMZx1gQIIM1caVhowaGKDZdCXS2jTVw"
          }
        ],
        "Notes": "Test device"
      }
    }
  }
  getRecord (isRandom = true, data = this.recordDefault) {
    if (isRandom) {
      const record = generateRandomRecord();
      Cypress.env('randomRecord', record.fields);
      return record;
    } else if(!isRandom) {
      return data;
    } else {
      throw new Error('Unknown type of data for generating Record.')
    }
  }
}

export default new testData();

