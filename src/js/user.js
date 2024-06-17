// функция жизненного состояния игрока
export default function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
