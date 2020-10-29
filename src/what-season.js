module.exports = function getSeason(date) {
  if (date) {
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error('THROWN');
    }
    const month = date.getMonth();
    const convertSeason = (month) => {
      const seasons = ['spring', 'summer', 'autumn', 'winter'];
      switch (month) {
        case 2:
        case 3:
        case 4:
          return seasons[0];
        case 5:
        case 6:
        case 7:
          return seasons[1];
        case 8:
        case 9:
        case 10:
          return seasons[2];
        case 11:
        case 0:
        case 1:
          return seasons[3];
      }
    }
    return convertSeason(month);
  } else {
    return 'Unable to determine the time of year!';
  }
};
