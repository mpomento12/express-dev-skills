const skills = [
  {id: 120469, rapper: 'Jay-Z', goat: true},
  {id: 091473, rapper: 'Nas', goat: true},
  {id: 121283, rapper: 'Soulja-Boy', goat: false}
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id)
}