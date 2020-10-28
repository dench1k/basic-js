const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string' && isNaN(Number(sampleActivity)) && sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (ln2 / HALF_LIFE_PERIOD))
  }
  return false;
};