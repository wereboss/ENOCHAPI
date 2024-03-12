const SCRIPT_PROP = PropertiesService.getScriptProperties();
const USER_PROP = PropertiesService.getUserProperties();
const DOC_PROP = PropertiesService.getDocumentProperties();

const SHEET_URL = SCRIPT_PROP.getProperty('SHEET_URL');
const FILE_ID = SCRIPT_PROP.getProperty('FILE_ID');


function hello() {
  Logger.log("Hello, " + mondo);
}

function doGet(e) {
  //var params = JSON.stringify(e);
 // const taskObj = getSheetDataRows("Tasks");
 // Logger.log("taskObj:" + JSON.stringify(taskObj,null,2));
  //return ContentService.createTextOutput(JSON.stringify(taskObj)).setMimeType(ContentService.MimeType.JSON);
  const enoObj = extractReqObj(e);
  if(enoObj && enoObj.isValid) {
    let enoResp = processGetReq(enoObj);
    return ContentService.createTextOutput(JSON.stringify(enoResp)).setMimeType(ContentService.MimeType.JSON);
  } else {
    return ContentService.createTextOutput({}).setMimeType(ContentService.MimeType.JSON);
  }

}

function doPost(e) {
  var params = JSON.stringify(e);
  //const taskObj = getSheetDataRows("Tasks");
  //Logger.log("taskObj:" + JSON.stringify(taskObj,null,2));
  //return ContentService.createTextOutput(JSON.stringify(taskObj)).setMimeType(ContentService.MimeType.JSON);
  return ContentService.createTextOutput(params).setMimeType(ContentService.MimeType.JSON);
}
