function start() {
    var root = document.getElementById('root');

    if (!!window.EventSource) {
        var app = Elm.Main.embed(root);

        var source = new EventSource("events");

        source.addEventListener('message', function (e) {
            app.ports.event_source_data.send(e.data);
        }, false);

        source.addEventListener('open', function (e) {
            app.ports.event_source_connected.send(true);
        }, false);

        source.addEventListener('close', function (e) {
            app.ports.event_source_connected.send(false);
        }, false);

    } else {
        root.innerHTML = ('<div>'+
            '<h4>EventSource not supported in this browser</h4>'+
            'Read about EventSource (also known as Server-sent events) at <a '+
            'href="https://html.spec.whatwg.org/multipage/'+
            'server-sent-events.html#server-sent-events">whatwg.org</a>.'+
            'See <a href="http://caniuse.com/#feat=eventsource">caniuse.com</a> for '+
            'information about which browsers are supported.'+
            '</div>');
    }
}

start();
