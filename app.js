function monthNames(input) {
  for (let i of input) {
    console.log(i.slice(0, 3));
  }
}

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthNames(months);
