#!/usr/bin/env node

const path = require( 'path' );
const fs = require( 'fs' );
const archiver = require('archiver');

// Contains the excluded files and folders.
const excludes = [
	'.DS_Store',
	'.stylelintrc.json',
	'.eslintrc',
	'.git',
	'.gitattributes',
	'.github',
	'.gitignore',
	'README.md',
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

// The path of the zip file.
const zipPath = path.join(
	__dirname,
	'/../../',
	path.basename(path.dirname(__dirname))
) + '.zip';


// Create a file to stream archive data to.
let output = fs.createWriteStream( zipPath );
let archive = archiver('zip', {
  zlib: { level: 9 }
});

/**
 * Recursively traverse the directory tree and append the files to the archive. 
 * @param {string} directoryPath - The path of the directory being looped through.
 */
function traverseDirectoryTree( directoryPath ) {
	const files = fs.readdirSync( directoryPath );
	for ( const i in files ) {
		const currentPath = directoryPath + '/' + files[i];
		const stats = fs.statSync( currentPath );
		let relativePath = path.relative(process.cwd(), currentPath);
		if ( stats.isFile() && ! excludes.includes( files[i] ) ) {
			archive.file(currentPath, {
				name: `${relativePath}`
			});
		} else if ( stats.isDirectory() && ! excludes.includes( files[i] ) ) {
			traverseDirectoryTree( currentPath );
		}
	}
}

// Listen for all archive data to be written.
output.on('close', function () {
	console.log(`Created ${path.basename(path.dirname(__dirname))}.zip of ${archive.pointer()} bytes`);
});

// Catch warnings during archiving.
archive.on('warning', function(err) {
	if (err.code === 'ENOENT') {
		// log warning
		console.log(err);
	} else {
		// throw error
		throw err;
	}
});

// Catch errors during archiving.
archive.on('error', function(err){
	throw err;
});

// Pipe archive data to the file.
archive.pipe(output);

// Append the files to the archive.
traverseDirectoryTree( '.' );

// Finalize the archive.
archive.finalize();
