export function animatePrice(targetPrice: number, setDisplayPrice: any) {
  let startPrice = 0;
  const duration = 500; // Общая продолжительность анимации (в миллисекундах)
  const steps = Math.ceil(duration / 30); // Количество шагов (каждые 30 мс)
  const increment = Math.ceil(targetPrice / steps); // Изменение цены за один шаг

  const interval = setInterval(() => {
    startPrice += increment;
    if (startPrice >= targetPrice) {
      startPrice = targetPrice; // Убедитесь, что мы не превышаем целевую цену
      clearInterval(interval); // Останавливаем интервал
    }
    setDisplayPrice(startPrice); // Обновляем отображаемую цену
  }, 30); // Обновляем каждые 30 мс
}
