<?php

$compress_css = defined('COMPRESS_CSS') ? COMPRESS_CSS : true;
$zip = $compress_css ? 1 : 0;
if ( $zip && defined('ENFORCE_GZIP') && ENFORCE_GZIP )
    $zip = 'gzip';

$compress = ( isset($zip) && $zip );
$force_gzip = ( $compress && 'gzip' == $zip );
$expires_offset = 31536000; // 1 year
$out = '';

$bootstrap_js_path = '../bootstrap/js';
$bootstrap_js_files = array(
    'bootstrap-transition.js',
    'bootstrap-alert.js',
    'bootstrap-button.js',
    'bootstrap-carousel.js',
    'bootstrap-collapse.js',
    'bootstrap-dropdown.js',
    'bootstrap-modal.js',
    'bootstrap-tooltip.js',
    'bootstrap-popover.js',
    'bootstrap-scrollspy.js',
    'bootstrap-tab.js',
    'bootstrap-typeahead.js',
    'bootstrap-affix.js',
);
// $bootstrap_js_files = scandir($bootstrap_js_path);
// won't work because the files must be included in a particular order
foreach( $bootstrap_js_files as $file) {
    $path = $bootstrap_js_path . '/' . $file;
    if(is_file($path) && pathinfo($path, PATHINFO_EXTENSION) == 'js')  //  print_r(file_get_contents($path));
        $out .= file_get_contents($path) . "\n";
}
header('Content-Type: application/x-javascript; charset=UTF-8');
header('Expires: ' . gmdate( "D, d M Y H:i:s", time() + $expires_offset ) . ' GMT');
header("Cache-Control: public, max-age=$expires_offset");

if ( $compress && ! ini_get('zlib.output_compression') && 'ob_gzhandler' != ini_get('output_handler') && isset($_SERVER['HTTP_ACCEPT_ENCODING']) ) {
    header('Vary: Accept-Encoding'); // Handle proxies
    if ( false !== stripos($_SERVER['HTTP_ACCEPT_ENCODING'], 'deflate') && function_exists('gzdeflate') && ! $force_gzip ) {
        header('Content-Encoding: deflate');
        $out = gzdeflate( $out, 3 );
    } elseif ( false !== stripos($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip') && function_exists('gzencode') ) {
        header('Content-Encoding: gzip');
        $out = gzencode( $out, 3 );
    }
}

echo $out;
exit;
