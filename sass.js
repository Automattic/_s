const fs = require('fs');
const path = require('path');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

const isProd = process.argv.includes('--prod');

const config = {
	name: '_s',
	entryFile: 'src/scss/style.scss',
	outputDir: '.',
	indentType: 'tab',
	indentWidth: 1,
	sourceMap: ! isProd,
	writeMinified: isProd,
};

const banner = `/*! ${config.name || pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;

function getSassOptions(outputFile, minify) {
	return {
		file: config.entryFile,
		outFile: outputFile,
		sourceMap: config.sourceMap ? `${outputFile}.map` : false,
		sourceMapContents: config.sourceMap,
		sourceMapIncludeSources: config.sourceMap,
		indentType: config.indentType,
		indentWidth: config.indentWidth,
		outputStyle: minify ? 'compressed' : 'expanded',
	};
}

function writeFile(fileName, fileData, includeBanner = true) {
	const outputPath = path.join(config.outputDir, fileName);
	const output = includeBanner ? `${banner}\n${fileData}` : fileData;

	fs.writeFileSync(outputPath, output);
	console.log(`Compiled ${outputPath}`);
}

async function buildCss(fileName, minify = false) {
	const result = sass.renderSync(getSassOptions(fileName, minify));
	const postcssResult = await postcss([autoprefixer]).process(result.css, {
		from: config.entryFile,
		to: fileName,
		map: result.map ? { prev: result.map.toString(), inline: false } : false,
	});

	writeFile(fileName, postcssResult.css);

	if (config.sourceMap && postcssResult.map) {
		writeFile(`${fileName}.map`, postcssResult.map.toString(), false);
	}
}

async function run() {
	try {
		await buildCss('style.css');

		if (config.writeMinified) {
			await buildCss('style.min.css', true);
		}
	} catch (error) {
		console.error(error.formatted || error.message || error);
		process.exit(1);
	}
}

run();
