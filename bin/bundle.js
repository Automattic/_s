#!/usr/bin/env node

const path = require( 'path' );
const fs = require( 'fs' );

const distinationDirectory = 'bundle';
const excludes = [
	'.DS_Store',
	'.stylelintrc.json',
	'.eslintrc',
	'.git',
	'.gitattributes',
	'.github',
	'.gitignore',
	'bin',
	'composer.json',
	'composer.lock',
	'node_modules',
	'package-lock.json',
	'package.json',
	'vendor',
	'.travis.yml',
	'phpcs.xml.dist',
	'sass',
];

function traverseDirectoryTree( directoryPath ) {
	const files = fs.readdirSync( directoryPath );
	for ( const i in files ) {
		const currentPath = directoryPath + '/' + files[i];
		const stats = fs.statSync( currentPath );
		if ( stats.isFile() && ! excludes.includes( files[i] ) ) {
			copyFile( currentPath );
		} else if ( stats.isDirectory() && ! excludes.includes( files[i] ) ) {
			traverseDirectoryTree( currentPath );
		}
	}
}

function copyFile( file ) {
	const distinationPath = path.join(
		__dirname,
		'/../../',
		distinationDirectory,
		file
	);

	if ( ! fs.existsSync( path.dirname( distinationPath ) ) ) {
		fs.mkdirSync( path.dirname( distinationPath ) );
	}

	fs.readFile( file, 'utf8', function( err, data ) {
		fs.writeFile( distinationPath, data, 'utf8', function( err ) {
			console.log( 'Copying' + file );
			if ( err ) {
				return console.log( err );
			}
		} );
	} );
}

traverseDirectoryTree( '.' );
