const backgroundDimmer = (transparency) => {
	const style = {
		position: 'absolute',
		margin: '0 auto',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		zIndex: '5',
		backgroundColor: `rgba(0,0,0,0.${transparency})` /*dim the background*/
	}
	if (transparency === '0') {
		delete style.backgroundColor
	}
	return style
}

const lightBox = (style) => {
	const lightBox = {
		zIndex: style.zIndex || '10',
		margin: style.margin || '25px auto auto auto',
		padding: style.padding || '25px',
		width: style.width || '600px',
		height: style.height || 'auto',
		backgroundColor: style.backgroundColor || 'white',
		borderRadius: style.borderRadius || '5px',
		borderColor: style.borderColor || 'black',
		borderStyle: style.borderStyle || 'solid',
		borderWidth: style.borderWidth || '3px',
		//default initial position on screen
		position: 'fixed',
		top: style.top || null,
		left: style.left || null
	}
	return lightBox
}

const close = {
	float: 'right',
	padding: '10px',
	cursor: 'pointer'
}

export { backgroundDimmer, lightBox, close }
