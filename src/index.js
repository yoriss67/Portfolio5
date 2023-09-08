export { default as Bio } from './components/Bio';
export { default as Hero } from './components/Hero';
export { default as Currently } from './components/Currently';
export { default as Works } from './components/Works2';
export { default as Global } from './components/Global';
export { default as Navbar } from './components/Navbar';
export { default as Footer } from './components/Footer';


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// export { default as Home } from './components/pages/Home';
// export { default as About } from './components/pages/About';
// export { default as Contact } from './components/pages/Contact';



/**
 * ページを開いた時に最初に呼ばれるルートメソッド
 */
function doGet(e) {
    var selectedEmpId = e.parameter.empId
    if (selectedEmpId == undefined) {
      // empIdがセットされていない場合にはホーム画面を表示
      return HtmlService.createTemplateFromFile("view_home")
        .evaluate().setTitle("Home")
    }
    // 選択した従業員IDを後続の処理でも利用するためにPropertyに保存
      PropertiesService.getUserProperties().setProperty('selectedEmpId', selectedEmpId.toString())
    // 従業員の詳細画面を表示
    return HtmlService.createTemplateFromFile("view_detail")
        .evaluate().setTitle("Detail: " + selectedEmpId.toString())
  }
  
  /**
   * このアプリのURLを返す
   */
  function getAppUrl() {
    return ScriptApp.getService().getUrl();
  }
  
  /**
   * 従業員一覧
   */
  function getEmployees() {
    var empSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1]// 「従業員名簿」のシート
    var last_row = empSheet.getLastRow()
    var empRange = empSheet.getRange(2, 1, last_row, 2);// シートの中のヘッダーを除く範囲を取得
    var employees = [];
    var i = 1;
    while (true) {
      var empId =empRange.getCell(i, 1).getValue();
      var empName =empRange.getCell(i, 2).getValue();
      if (empId === ""){ //　値を取得できなくなったら終了
        break;
      }
      employees.push({
        'id': empId,
        'name': empName
      })
      i++
    }
    return employees
  }
  
  /**
   * 従業員情報の取得
   * ※ デバッグするときにはselectedEmpIdを存在するIDで書き換えてください
   */
  function getEmployeeName() {
    var selectedEmpId =PropertiesService.getUserProperties().getProperty('selectedEmpId') // ※デバッグするにはこの変数を直接書き換える必要があります
    var empSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1]// 「従業員名簿」のシート
    var last_row = empSheet.getLastRow()
    var empRange = empSheet.getRange(2, 1, last_row, 2);// シートの中のヘッダーを除く範囲を取得
    var i = 1;
    var empName = ""
    while (true) {
      var id =empRange.getCell(i, 1).getValue();
      var name =empRange.getCell(i, 2).getValue();
      if (id === ""){ 
        break;
      }
      if(id == selectedEmpId){
        empName = name
      }
      i++
    }
    Logger.log(empName)
    return empName
  }
  
  /**
   * 勤怠情報の取得
   * 今月における今日までの勤怠情報が取得される
   */
  function getTimeClocks() {
    var selectedEmpId =PropertiesService.getUserProperties().getProperty('selectedEmpId') // ※デバッグするにはこの変数を直接書き換える必要があります
    // var selectedEmpId = '1';
  
  
    var timeClocksSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[2]// 「打刻履歴」のシート
    var last_row = timeClocksSheet.getLastRow()
    var timeClocksRange = timeClocksSheet.getRange(2, 1, last_row, 3);// シートの中のヘッダーを除く範囲を取得
    var empTimeClocks = [];
    var i = 1;
    while (true) {
      var empId =timeClocksRange.getCell(i, 1).getValue();
      var type =timeClocksRange.getCell(i, 2).getValue();
      var datetime =timeClocksRange.getCell(i, 3).getValue();
        // Logger.log("95 Original datetime: " + datetime);
  
      if (empId === ""){ //　値を取得できなくなったら終了
        break;
      }
      if (empId == selectedEmpId){
        empTimeClocks.push({
          'date': Utilities.formatDate(datetime, "Asia/Tokyo", "yyyy-MM-dd HH:mm"),
          'type': type
      })
      }
      i++
    }

  
    return empTimeClocks
  }
  
  
  /**
   * 勤怠情報登録
   */
  function saveWorkRecord(form) {
    var selectedEmpId = PropertiesService.getUserProperties().getProperty('selectedEmpId') // ※デバッグするにはこの変数を直接書き換える必要があります
    // inputタグのnameで取得
    var targetDate = form.target_date
    var targetTime = form.target_time
    var targetType = ''
    switch (form.target_type) {
      case 'clock_in':
        targetType = '出勤'
        break
      case 'break_begin':
        targetType = '休憩開始'
        break
      case 'break_end':
        targetType = '休憩終了'
        break
      case 'clock_out':
        targetType = '退勤'
        break;
    }
    var timeClocksSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[2]// 「打刻履歴」のシート
    var targetRow = timeClocksSheet.getLastRow() + 1
    timeClocksSheet.getRange(targetRow, 1).setValue(selectedEmpId)
    timeClocksSheet.getRange(targetRow, 2).setValue(targetType)
    timeClocksSheet.getRange(targetRow, 3).setValue(targetDate + ' ' + targetTime)
    return '登録しました'
  }
  
  /**
   * 選択している従業員のメモカラムの値をspread sheetから取得する
   */
  function getEmpMemo() {
    var selectedEmpId = PropertiesService.getUserProperties().getProperty('selectedEmpId') // ※デバッグするにはこの変数を直接書き換える必要があります
    var checkSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]// 「チェック結果」のシート
    var last_row = checkSheet.getLastRow()
    var timeClocksRange = checkSheet.getRange(2, 1, last_row, 2);// シートの中のヘッダーを除く範囲を取得
    var checkResult = "";
    var i = 1;
    while (true) {
      var empId =timeClocksRange.getCell(i, 1).getValue();
      var result =timeClocksRange.getCell(i, 2).getValue();
      if (empId === ""){ //　値を取得できなくなったら終了
        break;
      }
      if (empId == selectedEmpId){
          checkResult = result
          break;
      }
      i++
    }
    return checkResult
  }
  

    
    /**🌸
     * メモの内容をSpreadSheetに保存する
     */
    // 行追加
    function saveMemo(form) {
      var selectedEmpId = PropertiesService.getUserProperties().getProperty('selectedEmpId') // ※デバッグするにはこの変数を直接書き換える必要があります
      
      // inputタグのnameで取得
      var memo = form.memo;
    
      // メモを保存するシートを選択
      var sheet = SpreadsheetApp.getActiveSheet();
      
      // 現在の最終行を取得
      var lastRow = sheet.getLastRow();
      
      // 新規に行を追加する (最終行の次の行)
      var newRow = lastRow + 1;
      
      // 1列目にempIdをセットして保存
      sheet.getRange(newRow, 1).setValue(selectedEmpId);
      
      // メモの内容を保存
      sheet.getRange(newRow, 2).setValue(memo);
    
      // 日時を取得
      var now = new Date();
      var formattedDate = Utilities.formatDate(now, "Asia/Tokyo", "yyyy-MM-dd HH:mm:ss");
    
      // 日時を保存
      sheet.getRange(newRow, 3).setValue(formattedDate);
    }
    
  
  /**
   * spreadSheetに保存されている指定のemployee_idの行番号を返す
   */
  function getTargetEmpRowNumber(empId) {
    // 開いているシートを取得
    var sheet = SpreadsheetApp.getActiveSheet()
    // 最終行取得
    var last_row = sheet.getLastRow()
    // 2行目から最終行までの1列目(emp_id)の範囲を取得
    var data_range = sheet.getRange(1, 1, last_row, 1);
    // 該当範囲のデータを取得
    var sheetRows = data_range.getValues();
    // ループ内で検索
    for (var i = 0; i <= sheetRows.length - 1; i++) {
      var row = sheetRows[i]
      if (row[0] == empId) {
        // spread sheetの行番号は1から始まるが配列のindexは0から始まるため + 1して行番号を返す
        return i + 1;
      }
    }
    // 見つからない場合にはnullを返す
    return null
  }
 
  
  // 🌸
  function sendMail() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheets()[1]; // Assuming the "従業員名簿" sheet is the second sheet
    var lastRow = sheet.getLastRow();
    
    var range = sheet.getRange(2, 1, lastRow - 1, 3).getValues(); // Gets values from rows 2 to lastRow and columns 1 to 3
  
    for (var i = 0; i < range.length; i++) {
      var row = range[i];
      var empId = row[0];
      var empName = row[1];
      var email = row[2];
      
      if (email) { // Make sure email is not empty
        var title = ` [${empName}さん] こんにちは`;
        var body = `
        ID: ${empId}
        ${empName}さん
  
        こんにちは,
        よろしくお願いいたします。
        `;
        
        GmailApp.sendEmail(email, title, body);
      }
    }
  }

  
  // dynamic value
  function calculateWorkHours() {
  
    // Get the time clocks data (or however you are storing this information)
    var records = getTimeClocks();
    Logger.log("records" + records);
  
    // Get the first and last date of the current month
    var currentDate = new Date();
    // Logger.log(currentDate);
    var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
     //🙋‍♀️月末日は「0」、getMonth()で取得できる月は0始まり
    var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
    var totalWorkHours = 0;
  
    // Logic to calculate total work hours from records array, excluding break time
      let workStart, breakStart, breakDuration = 0, totalWorkDuration = 0;
  
    
    for (let record of records) {
          let recordDate = new Date(record.date);  // Convert string to Date object
  

  
  
       // Check if the record is in the current month
      if (recordDate >= firstDayOfMonth && recordDate <= lastDayOfMonth) {
      // 🌸🌸
  
      if (record.type === '出勤') {
        workStart = recordDate;
      } else if (record.type === '休憩開始') {
        breakStart = recordDate;
      } else if (record.type === '休憩終了') {
        if (breakStart) {
          breakDuration += (recordDate - breakStart);
          breakStart = null;
        }
      } else if (record.type === '退勤') {
        if (workStart) {
          totalWorkDuration += (recordDate - workStart);
          workStart = null;
        }
      }
      }
    }
  
    // 休憩時間を除いた実働時間
    const actualWorkDuration = totalWorkDuration - breakDuration;
    // ミリ秒を時間に変換
    const actualWorkHours = actualWorkDuration / (1000 * 60 * 60);
  
  
    // 〇〇時間
    // Logger.log(actualWorkHours)
    // return actualWorkHours;
  
    // 時間と分に分ける
    const hours = Math.floor(actualWorkHours);
    const minutes = Math.round((actualWorkHours - hours) * 60);
  
    Logger.log(hours + " 時間 " + minutes + " 分");
  
    return { hours, minutes };
  }
  
  

  
  // 🌸
  function getEmployeeRole() {
    var selectedEmpId = PropertiesService.getUserProperties().getProperty("selectedEmpId"); // Get the selected Employee ID
    selectedEmpId = parseFloat(selectedEmpId); // Convert the ID to number if it's stored as a string
    
    var empSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1]; // Get the second sheet where Employee info is stored
    var last_row = empSheet.getLastRow(); // Get the last filled row number
    
    var empRange = empSheet.getRange(2, 1, last_row - 1, 4); // Get the range starting from 2nd row to last filled row, and from 1st column to 4th column
    var values = empRange.getValues(); // Get the values in the form of a 2D array
    
    for (var i = 0; i < values.length; i++) {
      var id = values[i][0]; // The first column in the row represents the ID
      var role = values[i][3]; // The fourth column in the row represents the Role
      
      if (id === selectedEmpId) {
        Logger.log(role);
        return role; // If the ID matches, return the Role
      }
    }
    
    return null; // Return null if no match is found
  }
  
  
  
  
  // Define hourly rates for each role
  
  const hourlyRates = {
    'マネージャー': 2000, // 2000 yen per hour for Manager
    '料理長': 1800,      // 1800 yen per hour for Chef
    'ホール長': 1600,   // 1600 yen per hour for Hall Manager
    '長期アルバイト・パート': 1200 // 1200 yen per hour for long-term part-time
  };
  
  function calculateSalary() {
    // Get the total work hours and minutes
    var { hours, minutes } = calculateWorkHours();
    
    // Get the role of the employee
    var role = getEmployeeRole();
  
    // Get the hourly rate based on the role
    var hourlyRate = hourlyRates[role] || 0;
  
    // Calculate the total salary
    var totalSalary = (hours + minutes / 60) * hourlyRate;
  
    // Log the result
    Logger.log("Total Salary for the month: " + totalSalary + " yen");
  
    return totalSalary;
  }
  
  
  
  // 「みんなの共有ノート」
  function shareNote() {
    var empSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[3]
  }
  
  
  --------------------


  「登録」ボタンの横に「共有する」ボタンを置いて、「共有する」ボタンを押したら共有ノートにsubmitしたい。shareNote()は何を書けば良い？
  
    /**🌸
     * メモの内容をSpreadSheetに保存する
     */
    // 行追加
    function saveMemo(form) {
        var selectedEmpId = PropertiesService.getUserProperties().getProperty('selectedEmpId') // ※デバッグするにはこの変数を直接書き換える必要があります
        
        // inputタグのnameで取得
        var memo = form.memo;
      
        // メモを保存するシートを選択
        var sheet = SpreadsheetApp.getActiveSheet();
        
        // 現在の最終行を取得
        var lastRow = sheet.getLastRow();
        
        // 新規に行を追加する (最終行の次の行)
        var newRow = lastRow + 1;
        
        // 1列目にempIdをセットして保存
        sheet.getRange(newRow, 1).setValue(selectedEmpId);
        
        // メモの内容を保存
        sheet.getRange(newRow, 2).setValue(memo);
      
        // 日時を取得
        var now = new Date();
        var formattedDate = Utilities.formatDate(now, "Asia/Tokyo", "yyyy-MM-dd HH:mm:ss");
      
        // 日時を保存
        sheet.getRange(newRow, 3).setValue(formattedDate);
      }
      
    
    /**
     * spreadSheetに保存されている指定のemployee_idの行番号を返す
     */
    function getTargetEmpRowNumber(empId) {
      // 開いているシートを取得
      var sheet = SpreadsheetApp.getActiveSheet()
      // 最終行取得
      var last_row = sheet.getLastRow()
      // 2行目から最終行までの1列目(emp_id)の範囲を取得
      var data_range = sheet.getRange(1, 1, last_row, 1);
      // 該当範囲のデータを取得
      var sheetRows = data_range.getValues();
      // ループ内で検索
      for (var i = 0; i <= sheetRows.length - 1; i++) {
        var row = sheetRows[i]
        if (row[0] == empId) {
          // spread sheetの行番号は1から始まるが配列のindexは0から始まるため + 1して行番号を返す
          return i + 1;
        }
      }
      // 見つからない場合にはnullを返す
      return null
    }
   
    
    // 🌸
    function sendMail() {
      var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = spreadsheet.getSheets()[1]; // Assuming the "従業員名簿" sheet is the second sheet
      var lastRow = sheet.getLastRow();
      
      var range = sheet.getRange(2, 1, lastRow - 1, 3).getValues(); // Gets values from rows 2 to lastRow and columns 1 to 3
    
      for (var i = 0; i < range.length; i++) {
        var row = range[i];
        var empId = row[0];
        var empName = row[1];
        var email = row[2];
        
        if (email) { // Make sure email is not empty
          var title = ` [${empName}さん] こんにちは`;
          var body = `
          ID: ${empId}
          ${empName}さん
    
          こんにちは,
          よろしくお願いいたします。
          `;
          
          GmailApp.sendEmail(email, title, body);
        }
      }
    }
  
    
    // dynamic value
    function calculateWorkHours() {
    
      // Get the time clocks data (or however you are storing this information)
      var records = getTimeClocks();
      Logger.log("records" + records);
    
      // Get the first and last date of the current month
      var currentDate = new Date();
      // Logger.log(currentDate);
      var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
       //🙋‍♀️月末日は「0」、getMonth()で取得できる月は0始まり
      var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
      var totalWorkHours = 0;
    
      // Logic to calculate total work hours from records array, excluding break time
        let workStart, breakStart, breakDuration = 0, totalWorkDuration = 0;
    
      
      for (let record of records) {
            let recordDate = new Date(record.date);  // Convert string to Date object
    
  
    
    
         // Check if the record is in the current month
        if (recordDate >= firstDayOfMonth && recordDate <= lastDayOfMonth) {
        // 🌸🌸
    
        if (record.type === '出勤') {
          workStart = recordDate;
        } else if (record.type === '休憩開始') {
          breakStart = recordDate;
        } else if (record.type === '休憩終了') {
          if (breakStart) {
            breakDuration += (recordDate - breakStart);
            breakStart = null;
          }
        } else if (record.type === '退勤') {
          if (workStart) {
            totalWorkDuration += (recordDate - workStart);
            workStart = null;
          }
        }
        }
      }
    
      // 休憩時間を除いた実働時間
      const actualWorkDuration = totalWorkDuration - breakDuration;
      // ミリ秒を時間に変換
      const actualWorkHours = actualWorkDuration / (1000 * 60 * 60);
    
    
      // 〇〇時間
      // Logger.log(actualWorkHours)
      // return actualWorkHours;
    
      // 時間と分に分ける
      const hours = Math.floor(actualWorkHours);
      const minutes = Math.round((actualWorkHours - hours) * 60);
    
      Logger.log(hours + " 時間 " + minutes + " 分");
    
      return { hours, minutes };
    }
    
    
  
    
    // 🌸
    function getEmployeeRole() {
      var selectedEmpId = PropertiesService.getUserProperties().getProperty("selectedEmpId"); // Get the selected Employee ID
      selectedEmpId = parseFloat(selectedEmpId); // Convert the ID to number if it's stored as a string
      
      var empSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1]; // Get the second sheet where Employee info is stored
      var last_row = empSheet.getLastRow(); // Get the last filled row number
      
      var empRange = empSheet.getRange(2, 1, last_row - 1, 4); // Get the range starting from 2nd row to last filled row, and from 1st column to 4th column
      var values = empRange.getValues(); // Get the values in the form of a 2D array
      
      for (var i = 0; i < values.length; i++) {
        var id = values[i][0]; // The first column in the row represents the ID
        var role = values[i][3]; // The fourth column in the row represents the Role
        
        if (id === selectedEmpId) {
          Logger.log(role);
          return role; // If the ID matches, return the Role
        }
      }
      
      return null; // Return null if no match is found
    }
    
    
    
    
    // Define hourly rates for each role
    
    const hourlyRates = {
      'マネージャー': 2000, // 2000 yen per hour for Manager
      '料理長': 1800,      // 1800 yen per hour for Chef
      'ホール長': 1600,   // 1600 yen per hour for Hall Manager
      '長期アルバイト・パート': 1200 // 1200 yen per hour for long-term part-time
    };
    
    function calculateSalary() {
      // Get the total work hours and minutes
      var { hours, minutes } = calculateWorkHours();
      
      // Get the role of the employee
      var role = getEmployeeRole();
    
      // Get the hourly rate based on the role
      var hourlyRate = hourlyRates[role] || 0;
    
      // Calculate the total salary
      var totalSalary = (hours + minutes / 60) * hourlyRate;
    
      // Log the result
      Logger.log("Total Salary for the month: " + totalSalary + " yen");
    
      return totalSalary;
    }
    
    
    
    // 「みんなの共有ノート」
    function shareNote() {
      var empSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[3]
    }
    
    
    