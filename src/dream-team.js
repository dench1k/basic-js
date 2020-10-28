module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.filter(item => typeof item === 'string').map(item => item.trim().toUpperCase().split("")[0]).sort().join("");
};
