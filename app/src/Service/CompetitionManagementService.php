<?php 
namespace App\Service;
class CompetitionManagementService
{
    public function getCompetitions(string $rootpath,string $path):array
    {
        
        try {
            $filepath = $rootpath . '/data/' .$path. '.json';
            $json_string = file_get_contents($filepath);
            $competitions = json_decode($json_string, true);
            
            return $competitions; 
        }

        //catch exception
        catch(\Exception $e) {
        echo 'Message: ' .$e->getMessage();
        }
    }
}