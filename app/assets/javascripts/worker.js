self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'load': postMessage("load");
  }
}, false);