
  const characters = [
    { id: 1, first: "Tim", last: "Draper" },
    { id: 17, first: "David", last: "Boies" },
    { id: 199, first: "Tim", last: "Kemp" },
    { id: 75, first: "Henry", last: "Mosley" },
    { id: 444, first: "Elizabeth", last: "Holmes" },
    { id: 95, first: "Donald", last: "Lucas" },
    { id: 186, first: "Larry", last: "Ellison" },
    { id: 364, first: "Channing", last: "Robertson" },
    { id: 285, first: "Charles", last: "Fleischmann" },
    { id: 33, first: "John", last: "Howard" }
  ];



  const ids = characters.map(user => user.id);
  const sorted = ids.sort((a, b) => a - b);
  assert(sorted[sorted.length - 1] === 444);