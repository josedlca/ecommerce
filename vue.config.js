module.exports ={
	pages:{
		// usarlas como partes dentro de cada page
		home:{
			entry:[
				// pasarle las partes a usar
				'./src/components/pages/header/main.js',
				'./src/components/pages/slider/main.js'
			],
			template: 'public/home.html',
			filename: 'index.html',
			title: 'Header',
			chunks: ['chunk-vendors', 'chunk-common', 'home']
		},
		descripcion:{
			entry:[
				'./src/components/pages/header/main.js'
			],
			template: 'public/descripcion.html',
			filename: 'descripcion.html',
			title: 'Header',
			chunks: ['chunk-vendors', 'chunk-common', 'descripcion']
		}
	}
}