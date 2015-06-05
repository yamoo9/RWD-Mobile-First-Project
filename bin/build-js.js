({
	name                    : "main",
	baseUrl                 : "../www/_/js/develop",
	paths                   : { requireLib: 'libs/require' },
	include                 : ["requireLib"],
	mainConfigFile          : "../www/_/js/develop/main.js",
	out                     : "../www/_/js/app.min.js",
	optimize                : "uglify2",
	generateSourceMaps      : true,
	preserveLicenseComments : false
})