<?php
use Symfony\Component\HttpFoundation\Response;

// returns the json file datas - Apr 2022 start
if (!function_exists('returnJsonFileData')) {
function returnJsonFileData($filepath)
{
    $path = __DIR__ . $filepath;
    if (file_exists($path)) {
        $content = file_get_contents($path, true);
        $json = json_decode($content, true);
    } else {
        $json = array();
    }
    return $json;
}
// returns the json file datas - Apr 2022 end
}

// returns response data starts
if (!function_exists('returnData')) {
function returnData($json)
{
    $response = new Response();
    $response->setContent(json_encode($json));
    return $response;
}
}
// returns response data ends