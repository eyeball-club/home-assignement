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
		private readonly CompetitionManagementService $CompetitionManagementService
	) {
	}

	#[Route('/competitions', name: 'competitions')]
	public function competition(Request $request): Response
	{
		$path = $request->getPathInfo();
		$rootpath =  $this->filepath();
		$competitions = $this->CompetitionManagementService->getCompetitions($rootpath, "/competitions" . $path);

		return $this->render('Competition/competition.html.twig', ['competitions' => $competitions['competitions']]);
	}

	#[Route('/competitions/teams/{id}', name: 'team')]
	public function team(Request $request): Response
	{
		$path = $request->getPathInfo();
		$rootpath =  $this->filepath();
		$teams = $this->CompetitionManagementService->getCompetitions($rootpath, $path);

		return $this->render('Competition/team.html.twig', ['teams' => $teams['teams']]);
	}

	#[Route('/competitions/matches/{id}', name: 'match')]
	public function match(Request $request): Response
	{
		$path = $request->getPathInfo();
		$rootpath =  $this->filepath();
		$matches = $this->CompetitionManagementService->getCompetitions($rootpath, $path);

		return $this->render('Competition/match.html.twig', ['matches' => $matches['matches']]);
	}

	#[Route('/teams/{id}', name: 'player')]
	public function player(Request $request): Response
	{
		$path = $request->getPathInfo();
		$rootpath =  $this->filepath();
		$teamplayers = $this->CompetitionManagementService->getCompetitions($rootpath, $path);

		return $this->render('Competition/player.html.twig', ['players' => $teamplayers['squad']]);
	}

	public function filepath()
	{
		$filepath = $this->getParameter('kernel.project_dir');

		return $filepath;
	}
}
