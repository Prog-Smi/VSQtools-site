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

 
function startDownload() {
  const link = document.createElement('a');
  
  // Автоматически определяем базовый путь сайта (например, "/VSQtools-site/")
  // Если сайт в корне домена, это будет просто "/"
  const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

  if (getOS() == "Linux") {
    link.href = basePath + 'linux___CLICK_TO_OPEN';
    link.download = 'linux___CLICK_TO_OPEN';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (getOS() == "Windows") {
    link.href = basePath + 'Windows.exe';
    link.download = 'Windows.exe';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    Swal.fire({
      title: "Извините, но пока мы не поддерживаем систему " + getOS(),
      icon: "success",
      background: '#181818',
      color: '#fff'
    });
    return;
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
