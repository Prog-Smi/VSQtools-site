function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform || 'unknown';

  if (/windows/i.test(userAgent)) return "Windows";
  if (/macintosh|mac os x/i.test(userAgent)) return "MacOS";
  if (/linux/i.test(userAgent)) return "Linux";
  if (/android/i.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";

  return "Unknown";
}



// Функция, которая запускает скачивание файла
function startDownload() {
  const link = document.createElement('a');

  if (getOS() == "Linux") {
    // Используем корневой путь (начинается со слеша /)
    link.href = '/linux___CLICK_TO_OPEN'; // Убедись, что имя файла и папки совпадает с тем, что в проводнике
    link.download = 'linux___CLICK_TO_OPEN';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }else if (getOS() == "Windows") {
    // Используем корневой путь (начинается со слеша /)
    link.href = '/Windows.exe'; // Убедись, что имя файла и папки совпадает с тем, что в проводнике
    link.download = 'Windows.exe';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }else{
    Swal.fire({
    title: "Извините, но пока мы не поддерживаем систему "  + getOS(),
    icon: "success",
    background: '#181818',
    color: '#fff'
  });
  }

  Swal.fire({
    title: "Файл успешно скачан!",
    icon: "success",
    background: '#181818',
    color: '#fff'
  });

}


document.getElementById('download-btn').addEventListener('click', function () {
  // ЗДЕСЬ ВЫЗЫВАЕТСЯ РЕКЛАМНЫЙ КОД СЕТИ
  // Пример условной функции показа рекламы с вознаграждением:

  /* 
  AdNetwork.showRewardedAd({
      onComplete: function() {
          // Пользователь досмотрел рекламу до конца — запускаем скачивание
          startDownload();
      },
      onSkip: function() {
          alert('Чтобы скачать файл, нужно досмотреть рекламу до конца.');
      }
  });
  */

  // Для теста прямо сейчас можете раскомментировать строку ниже:
  startDownload();
});
