function getSheetDataRows(sheetname,colName = "") {
  const ss = SpreadsheetApp.openByUrl(SHEET_URL);
  const wsData = ss.getSheetByName(sheetname);
  const sheetDataRows = wsData.getRange(1,1,wsData.getDataRange().getLastRow(),wsData.getDataRange().getLastColumn()).getValues();
  var tmpObj = genJSONfromRows(sheetDataRows);
  if(!colName && colName.length < 1) {
    return tmpObj;
  } else {
    var colList = [];
    if(colName.length>1){
      for(var iobj=0;iobj<tmpObj.length;iobj++){
        colList.push(tmpObj[colName])
      }
    }
    return colList;
  }
}

function genJSONfromRows(dataRows){
  let jsonObj = [];
  let colList = [];
  for(var irow = 0;irow<dataRows.length;irow++){
    if(irow ==0){
      for(var icol = 0;icol<dataRows[0].length;icol++){
        colList.push(dataRows[0][icol]);
      }
    } else {
      let tmpObj = {};
      for(var icol=0;icol<dataRows[irow].length;icol++){
        tmpObj[colList[icol]] = dataRows[irow][icol];
      }
      jsonObj.push(tmpObj);
    }
  }
  // Logger.log("genJSONfromRows:data:" + JSON.stringify(jsonObj,null,2));
  return jsonObj;
}
