var ws = null
var url = "ws://merchant.qless.com:8000"
self.addEventListener("connect", function(e) {
	var port = e.ports[0]
	port.addEventListener("message", function(e) {
		if (e.data === "start") {
			if (ws === null) {
				console.log('entro en el ws');
				port.postMessage('Hola mundo!');
				ws = new WebSocket(url);
				port.postMessage("started connection to " + url);
			} else {
				port.postMessage("reusing connection to " + url);
			}
		}
	}, false);
	port.start();
}, false);
