module.exports = {
  wait: function(duration) {
    return new Promise((resolve, reject) => {
      if (duration >= 5000) {
        reject('too much duration, consider making it smaller or fewer');
      /* eslint-disable-next-line */
      } else {
        setTimeout(resolve, duration);
      }
    });
  },
  getCurrentPeriod: function() {
    const date = new Date();
    const hour = date.getHours();

    switch (true) {
      case (hour >= 0 && hour < 12):
        return 'Pagi';
      case (hour >= 12 && hour < 15):
        return 'Siang';
      case (hour >= 15 && hour < 18):
        return 'Sore';
      case (hour >= 18 && hour <= 23):
        return 'Malam';
    }
  },
};