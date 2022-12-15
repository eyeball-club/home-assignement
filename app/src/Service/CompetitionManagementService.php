<?php 
namespace App\Service;

class CompetitionManagementService
{
    public function getCompetitions($filepath):array
    {
        $json_string = file_get_contents($filepath);
		$competitions = json_decode($json_string, true);
          
        return $competitions;
    }
}