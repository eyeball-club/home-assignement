<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\CompetitionManagementService;

class CompetitionController extends AbstractController
{
	public function __construct(
		private readonly CompetitionManagementService $CompetitionManagementService,
	){}

	#[Route('/competitions', name: 'competition')]
	public function competition(): Response
    {
		$filepath    = $this->getParameter('kernel.project_dir') . '/data/competitions/competitions.json';
		$competitions = $this->CompetitionManagementService->getCompetitions($filepath);
	
		return $this->render('Competition/competition.html.twig', ['competitions' => $competitions['competitions']]);
    }

	#[Route('/competitions/team/{id}', name: 'team')]
	public function team(Request $request): Response
	{
		$id = $request->get('id');
		$filepath = $this->getParameter('kernel.project_dir') . '/data/competitions/teams/' . $id . '.json';
		$teams = $this->CompetitionManagementService->getCompetitions($filepath);
		
		return $this->render('Competition/team.html.twig', ['teams' => $teams['teams']]);
	}

	#[Route('/competitions/match/{id}', name: 'match')]
	public function match(Request $request): Response
	{
		$id = $request->get('id');
		$filepath = $this->getParameter('kernel.project_dir') . '/data/competitions/matches/' . $id . '.json';
		$matches = $this->CompetitionManagementService->getCompetitions($filepath);

		return $this->render('Competition/match.html.twig', ['matches' => $matches['matches']]);
	}

	#[Route('/team/players/{id}', name: 'player')]
	public function player(Request $request): Response
	{
		$id = $request->get('id');
		$filepath = $this->getParameter('kernel.project_dir') . '/data/teams/' . $id . '.json';
		$teamplayers = $this->CompetitionManagementService->getCompetitions($filepath);
		
		return $this->render('Competition/player.html.twig', ['players' => $teamplayers['squad']]);
	}
}
