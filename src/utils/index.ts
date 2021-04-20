export function convertSecondToMinutes(seconds: number): string {
  let sec: string, min: string;

  min = Math.floor(seconds / 60).toString();
  sec = BeautifySec(Math.floor(seconds % 60));

  return `${min}:${sec}`;
}

function BeautifySec(sec: number): string {
  if (sec < 10) {
    return `0${sec}`;
  }

  return sec.toString();
}

export function convertSecondToPercentage(
  current: number,
  maximum: number
): string {
  let percentage = '0%';

  if (current === 0 && maximum === 0) {
    return '0%';
  }

  percentage = Math.floor((current * 100) / maximum).toString() + '%';

  return percentage;
}
