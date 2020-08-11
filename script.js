var apis = ["https://main.shafilm.workers.dev", "https://second.karwan.workers.dev", "https://third.raza.workers.dev", "https://fourth.rawezh.workers.dev", "https://fifth.halala.workers.dev"];
var server = apis[Math.floor(Math.random() * apis.length)];
window.location.href = server + window.location.pathname;
