// Global Variables
var scriptElement = document.getElementById( 'autoBattleScript' ),
	baseUrl = scriptElement !== null ?
		scriptElement.getAttribute('src').replace(/\/autoBattle\.js$/, '') :
		'https://raw.githubusercontent.com/hatterson/autoBattle/master',
	autoBattle = {
		'baseUrl': baseUrl,
		'branch' : 'M',
		'version': 0.3
	};

// Load external libraries
var script_list = [
    autoBattle.baseUrl + '/autoBattle_main.js',
    autoBattle.baseUrl + '/autoBattle_UI.js'
  ]
  
autoBattle.loadInterval = setInterval(function() {
  if (game && !game.loading) {
    clearInterval(autoBattle.loadInterval);
    autoBattle.loadInterval = 0;
    abInit();
  }
}, 1000);

function loadScript(id) {
  if (id >= script_list.length) {
    autoBattleStart();
  } else { 
    var url = script_list[id];
    if (/\.js$/.exec(url)) {
      $.getScript(url, function() {loadScript(id + 1);});
    } else if (/\.css$/.exec(url)) {
      $('<link>').attr({rel: 'stylesheet', type: 'text/css', href: url}).appendTo($('head'));
      loadScript(id + 1);
    } else {
      console.log('Error loading script: ' + url);
      loadScript(id + 1);
    }
  }
}

function abInit() {
  var jquery = document.createElement('script');
  jquery.setAttribute('type', 'text/javascript');
  jquery.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
  jquery.onload = function() {loadScript(0);};
  document.head.appendChild(jquery);
}
