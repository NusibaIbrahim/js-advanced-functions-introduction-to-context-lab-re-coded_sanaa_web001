// Your code here
<<<<<<< HEAD
// import { create } from "domain"

function createEmployeeRecord(ary) {
  let record;
  return (record = {
    firstName: ary[0],
    familyName: ary[1],
    title: ary[2],
    payPerHour: ary[3],
    timeInEvents: [],
    timeOutEvents: [],
  });
}

function createEmployeeRecords(arys) {
  return arys.map(createEmployeeRecord);
}

function createDSObj(getType, dateStamp) {
  return {
    type: getType,
    date: dateStamp.slice(0, 10),
    hour: parseInt(dateStamp.slice(-4)),
  };
}

function createTimeInEvent(obj, dateStamp) {
  obj.timeInEvents.push(createDSObj("TimeIn", dateStamp));
  return obj;
}

function createTimeOutEvent(obj, dateStamp) {
  obj.timeOutEvents.push(createDSObj("TimeOut", dateStamp));
  return obj;
}

function hoursWorkedOnDate(obj, dateYMD) {
  const timeIn = obj.timeInEvents.find((e) => e.date === dateYMD).hour;
  const timeOut = obj.timeOutEvents.find((e) => e.date === dateYMD).hour;
  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(obj, dateYMD) {
  const wage = obj.payPerHour;
  const hoursWorked = hoursWorkedOnDate(obj, dateYMD);
  return wage * hoursWorked;
}

function allWagesFor(obj) {
  const allWages = obj.timeInEvents.map((day) => {
    return wagesEarnedOnDate(obj, day.date);
  });
  return allWages.reduce((acc, cv) => acc + cv);
}

function calculatePayroll(records) {
  const allPay = records.map((empl) => {
    return allWagesFor(empl);
  });
  return allPay.reduce((acc, cv) => acc + cv);
}

function findEmployeeByFirstName(srcArray, first_Name) {
  return srcArray.find((record) => record.firstName === first_Name);
}

// ////////////////

let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10]);
let sRecord = createEmployeeRecord(["Simba", "", "King", 100]);

let sTimeData = [
  ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
  ["2019-01-02 1000", "2019-01-02 1300"], // 3 * 100 = 300 ===> 700 total
];

let rTimeData = [
  ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
  ["2019-01-12 1000", "2019-01-12 1300"], // 3 * 10 = 40 ===> 70 total ||=> 770
];

sTimeData.forEach(function (d) {
  let [dIn, dOut] = d;
  sRecord = createTimeInEvent(sRecord, dIn);
  sRecord = createTimeOutEvent(sRecord, dOut);
});

rTimeData.forEach(function (d, i) {
  let [dIn, dOut] = d;
  rRecord = createTimeInEvent(rRecord, dIn);
  rRecord = createTimeOutEvent(rRecord, dOut);
});

let employees = [sRecord, rRecord];

calculatePayroll(employees);
=======
function createEmployeeRecord(array) {
  let testEmployee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return testEmployee;
}

let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1]);

let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3],
];

const createEmployeeRecords = (array) => {
   return array.map (x => createEmployeeRecord(x));
};

let employeeRecords = createEmployeeRecords(twoRows);

createTimeInEvent = (empRecord, dataStamp) => {
  let spr = dataStamp.split(' ');
  empRecord.timeInEvents = [
    {
      type: "TimeIn",
      date: spr[0],
      hour: parseInt(spr[1]),
    },
  ];
  return empRecord;
};
let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400");
let newEvent = updatedBpRecord.timeInEvents[0];
console.log(newEvent);

function createTimeOutEvent(empRecord, dataStamp) {
  const TimeOut = dataStamp.split(" ");
  console.log();
  empRecord.timeOutEvents = [
    {
      type: "TimeOut",
      date: TimeOut[0],
      hour: parseInt(TimeOut[1]),
    },
  ];
  return empRecord;
}

let updatedBpRecords = createTimeOutEvent(bpRecord, "2015-02-28 1700")
let newEvents = updatedBpRecords.timeOutEvents[0]

function hoursWorkedOnDate(object, date) {
  let workHours =
    (object.timeOutEvents[0].hour - object.timeInEvents[0].hour) / 100;
  return workHours;
}
function wagesEarnedOnDate(object, date) {
  let workHours =
    (object.timeOutEvents[0].hour - object.timeInEvents[0].hour) / 100;
  return workHours * object.payPerHour;
}
>>>>>>> ee73acb9f6661d7c0b3ee751c344dec0b4ae1592
