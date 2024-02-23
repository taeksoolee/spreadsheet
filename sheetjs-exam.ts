console.log('sheetjs example');


// import m from './m1';
// console.log(m);
import { writeFile, utils } from 'xlsx';

document.getElementById('download-btn')?.addEventListener('click', function() {
  // const workbook = utils.table_to_book(document.getElementById('my-table'));
  const workbook = utils.book_new();
  
  const ws1 = utils.json_to_sheet([
    {
      foo: 1,
      bar: 2,
    },
    {
      foo: 3,
      bar: 4,
    },
  ], {
    
  });
  utils.book_append_sheet(workbook, ws1, 'test__sheet');
  
  // var ws = workbook.Sheets["Sheet1"];
  writeFile(workbook, "Report.xls", {

  });
});
