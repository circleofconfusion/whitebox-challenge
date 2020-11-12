const ExcelJS = require('exceljs');

module.exports = {
  addDomesticWorksheet,
  addInternationalWorksheet,
  saveWorkbook
};

const workbook = new ExcelJS.Workbook();

const domesticColumns = [
  {
    header: 'Start Weight',
    key: 'start_weight',
    width: 12
  },
  {
    header: 'End Weight',
    key: 'end_weight',
    width: 12
  },
  {
    header: 'Zone 1',
    key: 'zone_1',
    width: 10
  },
  {
    header: 'Zone 2',
    key: 'zone_2',
    width: 10
  },
  {
    header: 'Zone 3',
    key: 'zone_3',
    width: 10
  },
  {
    header: 'Zone 4',
    key: 'zone_4',
    width: 10
  },
  {
    header: 'Zone 5',
    key: 'zone_5',
    width: 10
  },
  {
    header: 'Zone 6',
    key: 'zone_6',
    width: 10
  },
  {
    header: 'Zone 7',
    key: 'zone_7',
    width: 10
  },
  {
    header: 'Zone 8',
    key: 'zone_8',
    width: 10
  }
];

const internationalColumns = [
  {
    header: 'Start Weight',
    key: 'start_weight',
    width: 12
  },
  {
    header: 'End Weight',
    key: 'end_weight',
    width: 12
  },
  { header: 'Zone A', key: 'zone_A', width: 10 },
  { header: 'Zone B', key: 'zone_B', width: 10 },
  { header: 'Zone C', key: 'zone_C', width: 10 },
  { header: 'Zone D', key: 'zone_D', width: 10 },
  { header: 'Zone E', key: 'zone_E', width: 10 },
  { header: 'Zone F', key: 'zone_F', width: 10 },
  { header: 'Zone G', key: 'zone_G', width: 10 },
  { header: 'Zone H', key: 'zone_H', width: 10 },
  { header: 'Zone I', key: 'zone_I', width: 10 },
  { header: 'Zone J', key: 'zone_J', width: 10 },
  { header: 'Zone K', key: 'zone_K', width: 10 },
  { header: 'Zone L', key: 'zone_L', width: 10 },
  { header: 'Zone M', key: 'zone_M', width: 10 },
  { header: 'Zone M', key: 'zone_N', width: 10 },
  { header: 'Zone O', key: 'zone_O', width: 10 }
];

function addDomesticWorksheet(name, rowData) {
  const worksheet = workbook.addWorksheet(name);
  worksheet.columns = domesticColumns;
  rowData.forEach(row => {
    worksheet.addRow({
      start_weight: row.start_weight.toFixed(2).toString(),
      end_weight: row.end_weight.toFixed(2).toString(),
      zone_1: row.zone_1.toFixed(2).toString(),
      zone_2: row.zone_2.toFixed(2).toString(),
      zone_3: row.zone_3.toFixed(2).toString(),
      zone_4: row.zone_4.toFixed(2).toString(),
      zone_5: row.zone_5.toFixed(2).toString(),
      zone_6: row.zone_6.toFixed(2).toString(),
      zone_7: row.zone_7.toFixed(2).toString(),
      zone_8: row.zone_8.toFixed(2).toString()
    });
  });
}

function addInternationalWorksheet(name, rowData) {
  const worksheet = workbook.addWorksheet(name);
  worksheet.columns = internationalColumns;
  rowData.forEach(row => {
    worksheet.addRow({
      start_weight: row.start_weight.toFixed(2).toString(),
      end_weight: row.end_weight.toFixed(2).toString(),
      zone_A: row.zone_A.toFixed(2).toString(),
      zone_B: row.zone_B.toFixed(2).toString(),
      zone_C: row.zone_C.toFixed(2).toString(),
      zone_D: row.zone_D.toFixed(2).toString(),
      zone_E: row.zone_E.toFixed(2).toString(),
      zone_F: row.zone_F.toFixed(2).toString(),
      zone_G: row.zone_G.toFixed(2).toString(),
      zone_H: row.zone_H.toFixed(2).toString(),
      zone_I: row.zone_I.toFixed(2).toString(),
      zone_J: row.zone_J.toFixed(2).toString(),
      zone_K: row.zone_K.toFixed(2).toString(),
      zone_L: row.zone_L.toFixed(2).toString(),
      zone_M: row.zone_M.toFixed(2).toString(),
      zone_N: row.zone_N.toFixed(2).toString(),
      zone_O: row.zone_O.toFixed(2).toString()
    });
  });
}

async function saveWorkbook(filename) {
  await workbook.xlsx.writeFile(filename);
}