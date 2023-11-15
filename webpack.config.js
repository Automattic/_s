const path                   = require("path")
const MiniCssExtractPlugin   = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// The relative folder to the build directory
const BUILD_DIR = 'dist'

const entry = {
	// Entry point to generate root stylesheet of theme
	"style": path.resolve(__dirname, "src/js/style.js"),
	// Add here your entry point to generate woocommerce stylesheet
	// "woocommerce": path.resolve(__dirname, "src/js/woocommerce.js"),
}

const output = {
	"path"    : path.resolve(__dirname),
	"filename": `${BUILD_DIR}/js/[name].js`,
}

const rules = [
	{
		// JavaScript files
		"test"   : /\.js$/,
		"include": [path.resolve(__dirname, "src/js")],
		//"exclude": /node_modules/,
		"use"    : "babel-loader"
	},
	{
		// SCSS and CSS files
		"test"   : /\.(scss|css)$/,
		"exclude": /node_modules/,
		"use"    : [
			MiniCssExtractPlugin.loader,
			{
				loader : 'css-loader',
				options: {
					importLoaders: 2,
                    url: false,
				}
			},
			"postcss-loader",
			{
				loader : "sass-loader",
				options: {
					implementation: require("sass"),
					// This options are enabled for generate a production stylesheet 
					// without minify, you can remove this options if you want to
					// minify stylesheet
					sassOptions   : {
						minimize   : false,
						outputStyle: 'expanded',
						indentType : "tab",
						indentWidth: 1,
					}
				}
			},
		],
	},
]

const plugins = (argv) => ([
	new MiniCssExtractPlugin({
		// This snippets allow to you generate style.css on root directory of theme, 
		// otherwise, is generated dist/css/
		"filename": ({ chunk: { name } }) => name === "style" ? "style.css" : `${BUILD_DIR}/css/[name].css`
	}),
	new CleanWebpackPlugin({
		cleanStaleWebpackAssets     : true,
		verbose                     : true,
		// This option allow to delete files only in the build directory,
		// otherwise, delete all files in the root directory
		// Modify if you know what you are doing
		cleanOnceBeforeBuildPatterns: [
			"*.map",				// This option allow to delete all source map files in root directory
			`${BUILD_DIR}/**/**`,   // This option allow to delete all files in your build directory
		]
	}),
])

module.exports = (env, argv) => ({
	"entry"  : entry,
	"output" : output,
	"devtool": ("production" === argv.mode) ? false: "source-map",
	"module" : {
		"rules": rules
	},
	"externals": {
		"jquery": 'jQuery',
		"bootstrap": 'bootstrap',
	},
	"plugins": plugins(argv),
	"stats"  : "verbose",
})
