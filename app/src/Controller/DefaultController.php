<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="index", requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/api/competitionlist", name="competitionList")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function competitionList() // get competition list
    {
        $path = $this->getParameter('app.jsonfilepath') . 'competitions/competitions.json'; // file path
        $json = returnJsonFileData($path); // get the data from global function
        $response = returnData($json); // return the response json
        return $response;
    }

    /**
     * @Route("/api/matchlist", name="matchList")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function matchList(Request $request) // get match list
    {
        $id = $request->query->get('id');

        $path = $this->getParameter('app.jsonfilepath') . 'competitions/matches/' . $id . '.json'; // file path
        $json = returnJsonFileData($path); // get the data from global function

        // get team images
        if (isset($json['matches'])) {
            $json['matches'] = getTeamImageDetail($json['matches'], $this->getParameter('app.jsonfilepath'));
        }

        $response = returnData($json); // return the response json
        return $response;
    }

    /**
     * @Route("/api/teamlist", name="teamList")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function teamList(Request $request) // get team list
    {
        $id = $request->query->get('id');

        $path = $this->getParameter('app.jsonfilepath') . 'competitions/teams/' . $id . '.json'; // file path
        $json = returnJsonFileData($path); // get the data from global function
        $response = returnData($json); // return the response json
        return $response;
    }

    /**
     * @Route("/api/teaminfo", name="teamInfo")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function teamInfo(Request $request) // get team info list
    {
        $id = $request->query->get('id');

        $path = $this->getParameter('app.jsonfilepath') . 'teams/' . $id . '.json'; // file path
        $json = returnJsonFileData($path); // get the data from global function
        $response = returnData($json); // return the response json
        return $response;
    }
    
}
