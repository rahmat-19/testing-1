// INI BARU SAJA DI PUSH
// Nah ini baru saja di tambahkan di develop
// const data = [
//   {
//     id: 43,
//     client_id: "sdajkfhskad",
//     time_in: "14:30:00",
//     time_out: "14:35:00",
//     total: 5,
//     day: "thursday",
//     remark: null,
//     category: null,
//     created_At: "2023-12-28T07:29:14.397Z",
//     updated_At: "2023-12-28T07:29:14.397Z",
//   },
//   {
//     id: 29,
//     client_id: "sdajkfhskad",
//     time_in: "07:30:00",
//     time_out: "07:40:00",
//     total: 10,
//     day: "thursday",
//     remark: null,
//     category: null,
//     created_At: "2023-12-19T00:33:23.211Z",
//     updated_At: "2023-12-19T00:33:23.211Z",
//   },
//   {
//     id: 30,
//     client_id: "sdajkfhskad",
//     time_in: "09:30:00",
//     time_out: "09:40:00",
//     total: 10,
//     day: "thursday",
//     remark: null,
//     category: null,
//     created_At: "2023-12-19T00:33:23.211Z",
//     updated_At: "2023-12-19T00:33:23.211Z",
//   },
//   {
//     id: 34,
//     client_id: "sdajkfhskad",
//     time_in: "01:00:00",
//     time_out: "01:45:00",
//     total: 45,
//     day: "thursday",
//     remark: null,
//     category: null,
//     created_At: "2023-12-18T23:23:10.658Z",
//     updated_At: "2023-12-18T23:23:10.658Z",
//   },
//   {
//     id: 31,
//     client_id: "sdajkfhskad",
//     time_in: "11:50:00",
//     time_out: "12:30:00",
//     total: 40,
//     day: "thursday",
//     remark: "Dhuhr",
//     category: "isoma",
//     created_At: "2023-12-19T00:33:23.211Z",
//     updated_At: "2023-12-19T00:33:23.211Z",
//   },
//   {
//     id: 32,
//     client_id: "sdajkfhskad",
//     time_in: "15:10:00",
//     time_out: "15:20:00",
//     total: 10,
//     day: "thursday",
//     remark: "Asr",
//     category: "isoma",
//     created_At: "2023-12-19T00:33:23.211Z",
//     updated_At: "2023-12-19T00:33:23.211Z",
//   },
//   {
//     id: 33,
//     client_id: "sdajkfhskad",
//     time_in: "04:05:00",
//     time_out: "04:20:00",
//     total: 15,
//     day: "thursday",
//     remark: "Fajr",
//     category: "isoma",
//     created_At: "2023-12-18T23:25:19.786Z",
//     updated_At: "2023-12-18T23:25:19.786Z",
//   },
//   {
//     id: 40,
//     client_id: "sdajkfhskad",
//     time_in: "18:05:00",
//     time_out: "18:35:00",
//     total: 30,
//     day: "thursday",
//     remark: "Maghrib",
//     category: "isoma",
//     created_At: "2023-12-19T00:33:23.211Z",
//     updated_At: "2023-12-19T00:33:23.211Z",
//   },
// ];

// const currentHour = 4; // Jam pada saat ini

// // Mengambil objek waktu saat ini
// const currentTime = new Date();
// currentTime.setHours(currentHour, 0, 0, 0);

// // Fungsi untuk memeriksa apakah waktu saat ini berada di dalam jangka waktu shift
// const isInShift = (shift) => {
//   const shiftStartTime = new Date(shift.time_start);
//   const shiftEndTime = new Date(shift.time_end);
//   return currentTime >= shiftStartTime && currentTime <= shiftEndTime;
// };

// // Menggunakan map untuk memeriksa setiap shift
// const isInShift2 = data.map((shift) => ({
//   ...shift,
//   isInShift: isInShift(shift),
// }));

// // Menampilkan hasil
// console.log(isInShift2);

// // Jika Anda ingin mengetahui apakah saat ini berada di dalam shift 2
// const isCurrentlyInShift2 = isInShift2.some((shift) => shift.isInShift);

// if (isCurrentlyInShift2) {
//   console.log("Anda berada di dalam shift 2.");
// } else {
//   console.log("Anda tidak berada di dalam shift 2.");
// }

// const data = {
//   dnNumber: "12n3203-13n230-j",
//   part_name: [["Col #3"], ["REINFORCEMENT 5MX\ntesting"]],
//   qty_weight: [["Col #4"], ["118,2\n2039"]],
// };
// const data = {
//   dn_number: "0132/AAS/II/2024",
//   part_name: [["Col #3"], ["REINFORCEMENT 5MX"]],
//   qty_weight: [["Col #4"], ["118,2"]],
//   documentId: 786149,
// };

// const newData = data.part_name.slice(1).flatMap((part, index) => {
//   const partPairs = part[0].split("\n");
//   const qtyPairs = data.qty_weight[1][0].split("\n");

//   return partPairs.map((partName, i) => ({
//     dnNumber: data.dn_number,
//     part_name: partName,
//     qty_weight: parseFloat(qtyPairs[i].replace(",", ".")),
//   }));
// });

// console.log(newData);

const lineStopDatas = [
  {
    id: 17,
    name: "Problem Machine",
    typeId: 1,
    declerationTime: false,
    client: "sdajkfhskad",
    created: "2023-10-31T04:08:01.000Z",
    updated: "2023-10-31T15:57:02.000Z",
  },
  {
    id: 18,
    name: "Problem Material",
    typeId: 2,
    declerationTime: false,
    client: "sdajkfhskad",
    created: "2023-10-31T04:09:10.000Z",
    updated: "2023-10-31T15:57:09.000Z",
  },
  {
    id: 19,
    name: "Problem Man Power",
    typeId: 3,
    declerationTime: false,
    client: "sdajkfhskad",
    created: "2023-10-31T04:09:38.000Z",
    updated: "2023-10-31T15:57:16.000Z",
  },
  {
    id: 21,
    name: "Problem Handling, Set & Reset",
    typeId: 5,
    declerationTime: true,
    client: "sdajkfhskad",
    created: "2023-10-31T15:57:26.000Z",
    updated: "2024-01-09T02:57:14.000Z",
  },
  {
    id: 20,
    name: "Problem Jig",
    typeId: 4,
    declerationTime: false,
    client: "sdajkfhskad",
    created: "2023-10-31T04:09:58.000Z",
    updated: "2024-02-26T04:10:35.000Z",
  },
];
const data = {
  CauseLS1: [2],
  CauseLS2: [0],
  CauseLS3: [0],
  CauseLS4: [0],
  CauseLS5: [4],
  CauseLS6: [0],
  IsActive: [0],
  TotalTime: [6],
};
const getLineStopDeclerationTimeTrue =
  lineStopDatas.length != 0
    ? lineStopDatas
        .filter((item) => item.declerationTime)
        .map((item) => `CauseLS${item.typeId}`)
    : [];

const total = Object.keys(data)
  .filter(
    (key) =>
      key.includes("CauseLS") && !getLineStopDeclerationTimeTrue.includes(key)
  )
  .map((key) => data[key][0])
  .reduce((acc, val) => acc + val, 0);
console.log(total);
