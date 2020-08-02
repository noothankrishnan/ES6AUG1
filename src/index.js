var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 }
];

let result = computers.every(function(computer) {
  return computer.ram > 2;
});

document.write(result);
