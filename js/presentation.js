var controls = require('./controls/index.js')
var SlideNodes = require('./view/index.js')
var elementClass = require('element-class')
var emitter = require('tab-emitter')('slides')

var rootElement = document.body
var getSlideNodes = SlideNodes('http://localhost/test-projects/', 'http://localhost/test-songs/')

getSlideNodes('project.txt').then(function (nodes) {
	var max = nodes.length - 1
	nodes.forEach(function (node, i) {
		elementClass(node).add('hide')
		node.id = i
		rootElement.appendChild(node)
	})

	controls(rootElement, emitter, max, function (slideId) {
		elementClass(rootElement.querySelector('.show')).remove('show')
		elementClass(document.getElementById(slideId)).add('show')
	})
}).catch(function (err) {
	throw err
})
