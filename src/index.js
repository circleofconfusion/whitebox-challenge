const db = require('./db');
const excel = require('./excel.js');

gatherData().then(([dStd, dExp, dNext, iEcon, iExp]) => {
  db.endPool();
  excel.addDomesticWorksheet('Domestic Standard Rates', dStd);
  excel.addDomesticWorksheet('Domestic Expedited Rates', dExp);
  excel.addDomesticWorksheet('Domestic Next Day Rates', dNext);
  excel.addInternationalWorksheet('International Economy Rates', iEcon);
  excel.addInternationalWorksheet('International Expedited Rates', iExp);
  excel.saveWorkbook();
});

async function gatherData() {
  return Promise.all([
    db.domesticQuery(1240, 'standard'),
    db.domesticQuery(1240, 'expedited'),
    db.domesticQuery(1240, 'nextday'),
    db.internationalQuery(1240, 'intlEconomy'),
    db.internationalQuery(1240, 'intlExpedited')
  ]);
};
