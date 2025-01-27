export const formatTimestamp = (timestamp) => {
  const msgTime = new Date(timestamp);
  const now = new Date();

  const weekDayDictionary = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const timeSince = now - msgTime;

  if (timeSince < minute) {
    return 'now';
  }

  if (timeSince < day && now.getDay() === msgTime.getDay()) {
    const hours = msgTime.getHours();
    const minutes = msgTime.getMinutes();
    return `${hours % 12 === 0 ? 12 : hours % 12}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${hours > 12 ? 'pm' : 'am'}`;
  }

  if (timeSince < day * 2) {
    return 'yesterday';
  }

  if (timeSince < week) {
    return `${weekDayDictionary[msgTime.getDay()]}`;
  }

  if (timeSince >= week) {
    return `${
      msgTime.getMonth() + 1
    }/${msgTime.getDate()}/${msgTime.getFullYear()}`;
  }
};
