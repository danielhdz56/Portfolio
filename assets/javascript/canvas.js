var graminInstance = new Granim( {
	element: '#canvas-basic',
	name: 'basic-gradient', 
	direction: 'left-right',
	opacity: [1, 1],
	isPausedWhenNotInView: true,
	states: {
		"default-state": {
			gradients: [
				['#b3ffab', '#12fff7'],
				['#12fff7', '#b3ffab'],
			]
		}
	}
});