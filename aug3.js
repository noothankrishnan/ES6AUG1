var computers = [
    {name:'Apple', ram:24},
    {name:'Compaq', ram:4},
    {name:'Acer', ram:32}
];

computers.some(function(computer){
   return computer.ram>16
})
