const skills = [
  {id: 120469, skill: 'Jay-Z', goat: true},
  {id: 091473, skill: 'Nas', goat: true},
  {id: 121283, skill: 'Soulja-Boy', goat: false}
];

module.exports = {
  getAll,
  getOne,
  create
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id)
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}