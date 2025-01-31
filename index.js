import fetch from 'node-fetch';
import fs from 'fs/promises';

async function downloadVideo(url) {
  try {
    console.log('Iniciando la descarga del video...');
    
    // Realizar la petición HTTP
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Obtener el contenido del video
    const videoBuffer = await response.arrayBuffer();
    
    // Guardar el archivo de video
    await fs.writeFile('video.mp4', Buffer.from(videoBuffer));
    
    console.log('Descarga completada. El archivo se ha guardado como video.mp4');
  } catch (error) {
    console.error('Error durante la descarga:', error);
  }
}

// URL del video
const url = "https://rr5---sn-aigl6ns6.googlevideo.com/videoplayback?expire=1732932382&ei=vh5KZ-TQINSh0-kP3Lrk4QY&ip=171.237.236.215&id=o-AD0IAofsE4RlrLGoPTnF54TqjMFKoH7fmfbtFMZla9rt&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFTMcvtb19RSYCvBirc0NKgb2kRMEeC0PSytDD3UzGpNtoAmgnfhPBpv9iPjG5LUK-y1HgzXgN9t&vprv=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=93354056&ratebypass=yes&dur=1018.612&lmt=1729961767607843&fexp=24350590,24350655,24350675,24350705,24350737,51326932,51335594&c=ANDROID_VR&txp=5538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgAKGQh_QDhNiRdPbsn-_FLK8EZRKH_ffk-PqxGA-6_8wCIQCVo09XM2pLJCLU1DgJ4bIPbWCqVpNtxNIkgsQKO3rtCg%3D%3D&rm=sn-8pxuuxa-i5o667z,sn-8pxuuxa-i5o6d7r,sn-i3bd77s&rrc=79,79,104&req_id=1f4ef1461f4fa3ee&rms=nxu,au&redirect_counter=3&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1732910786,&mh=8_&mip=190.62.86.240&mm=30&mn=sn-aigl6ns6&ms=nxu&mt=1732910019&mv=D&mvi=5&pl=0&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgNYs8dK0mCP60AwKE4akZPzGuc7HpmfzC3BsaFQtXJ6UCIAZjKTliQKaRbPH6H1KYmGqIpU9YulC6TzUuvtDBQe1v";

// Ejecutar la función
downloadVideo(url);
