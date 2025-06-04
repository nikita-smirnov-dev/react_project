export function getCorrectTimeMovie(totalTime: number): string {
  const hours = Math.floor(totalTime / 60);
  const minutes = totalTime % 60;

  if (hours > 0) {
    return `${hours}  ч ${minutes} м`;
  } else {
    return `${minutes} м`;
  }
}
