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

// returns team image list - Apr 2022 start
if (!function_exists('getTeamImageDetail')) {
function getTeamImageDetail($json, $pathurl)
{
    // get team images
    if (isset($json)) {
        foreach ($json as $key => $value) {
            $home_team_path = $pathurl . 'teams/' . $value['homeTeam']['id'] . '.json'; // file path
            $home_team_json = returnJsonFileData($home_team_path); // get the data from global function
            
            $away_team_path = $pathurl . 'teams/' . $value['awayTeam']['id'] . '.json'; // file path
            $away_team_json = returnJsonFileData($away_team_path); // get the data from global function

            $json[$key]['homeTeam']['image'] =  @$home_team_json['crestUrl'];
            $json[$key]['awayTeam']['image'] =  @$away_team_json['crestUrl'];
        }
    }
    return $json;
}
}
// returns team image list - Apr 2022 end

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