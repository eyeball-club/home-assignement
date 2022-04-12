<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Src\Functions;
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
}
