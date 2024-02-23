console.log('exceljs example');

// const a = 1;
// console.log(a);

import { Workbook } from 'exceljs';

const wb = new Workbook();
wb.addWorksheet('test_sheet');

const ws =wb.getWorksheet('test_sheet');
if (ws) {
  ws.addRow({a: 1, b: 2, c: 3});
}

const excel = wb.xlsx;

