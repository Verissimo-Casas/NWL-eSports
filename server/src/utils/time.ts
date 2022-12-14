export function convertHourStringToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const minutesAmount = (hour * 60) + minutes;

  return minutesAmount;
}

export const convertMinutesToTime = (minutesAmount: number) => {
  const hours = Math.floor(minutesAmount / 60)
  const minutes = minutesAmount % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')}`
}
