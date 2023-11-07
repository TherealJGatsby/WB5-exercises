let academyMembers = [
    {
      memID: 101,
      name: "Bob Brown",
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
  
    {
      memID: 142,
      name: "Sallie Smith",
      films: ["A Good Day", "A Better Day"]
    },
  
    {
      memID: 187,
      name: "Fred Flanders",
      films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
  
    {
      memID: 203,
      name: "Bobbie Boots",
      films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
  ];

// finds name of academy member 187
let academyMember = academyMembers.find(a => a.memID == "187");

console.table("Academy member with ID-187 is: " + academyMember.name);
