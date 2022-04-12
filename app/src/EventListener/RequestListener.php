<?php

// src/EventListener/RequestListener.php
namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\ResponseEvent;

class RequestListener
{
    public function onKernelResponse(ResponseEvent $event)
    {
        if (!$event->isMainRequest()) {
            // don't do anything if it's not the master request
            return;
        }

        $response = $event->getResponse();
        $response->headers->set('Access-Control-Allow-Origin', '*');
    }
}
