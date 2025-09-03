// cam.js
async function getDevices() {
    const video = document.getElementById('meu-video');
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });

    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
        video.play();
    };

    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    for (let device of devices) {
        console.log(device.kind, device.label, device.deviceId);
    }
}

getDevices();