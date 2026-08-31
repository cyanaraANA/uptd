<?php
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
if (function_exists('opcache_invalidate')) {
  @opcache_invalidate(__FILE__, true);
}
readfile(__DIR__ . DIRECTORY_SEPARATOR . 'index.html');
exit;
