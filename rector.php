<?php

declare(strict_types=1);

use Rector\Core\Configuration\Option;
use Rector\Set\ValueObject\SetList;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Rector\Core\ValueObject\PhpVersion;
use Rector\Doctrine\Set\DoctrineSetList;
use Rector\Php74\Rector\Property\TypedPropertyRector;
use Rector\Symfony\Set\SymfonySetList;

return static function (ContainerConfigurator $containerConfigurator): void {
	// get parameters
	$parameters = $containerConfigurator->parameters();
	$parameters->set(Option::PATHS, [__DIR__ . "/src"]);

	$parameters->set(Option::PHP_VERSION_FEATURES, PhpVersion::PHP_81);
	$parameters->set(Option::SYMFONY_CONTAINER_XML_PATH_PARAMETER, __DIR__ . "/var/cache/dev/App_KernelDevDebugContainer.xml");

	// Define what rule sets will be applied
	$containerConfigurator->import(SetList::PHP_81);
	$containerConfigurator->import(SetList::DEAD_CODE);

	#$containerConfigurator->import(DoctrineSetList::DOCTRINE_CODE_QUALITY);

	$containerConfigurator->import(SymfonySetList::SYMFONY_60);
	$containerConfigurator->import(SymfonySetList::SYMFONY_CODE_QUALITY);
	$containerConfigurator->import(SymfonySetList::SYMFONY_CONSTRUCTOR_INJECTION);

	// get services (needed for register a single rule)
	$services = $containerConfigurator->services();

	// register a single rule
	$services->set(TypedPropertyRector::class);

	$services->set(Rector\Symfony\Rector\ClassMethod\ActionSuffixRemoverRector::class);
	$services->set(Rector\Symfony\Rector\MethodCall\AddFlashRector::class);
	$services->set(Rector\Symfony\Rector\ClassMethod\ConsoleExecuteReturnIntRector::class);
	$services->set(Rector\Symfony\Rector\MethodCall\ContainerGetToConstructorInjectionRector::class);
	$services->set(Rector\Symfony\Rector\MethodCall\FormIsValidRector::class);
	$services->set(Rector\Symfony\Rector\MethodCall\GetToConstructorInjectionRector::class);
	$services->set(Rector\Symfony\Rector\MethodCall\GetToConstructorInjectionRector::class);
	$services->set(Rector\Symfony\Rector\ClassMethod\MergeMethodAnnotationToRouteAnnotationRector::class);
	$services->set(Rector\Symfony\Rector\MethodCall\RedirectToRouteRector::class);
	$services->set(Rector\Symfony\Rector\BinaryOp\ResponseStatusCodeRector::class);
};
