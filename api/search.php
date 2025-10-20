<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// read CSV
$file = fopen(__DIR__ . "/cameras-defb.csv", "r");
fgetcsv($file, escape: "\\"); //skip first line, this contains headers

$data = [];
while ($row = fgetcsv($file, escape: "\\")) {
	$camera = str_getcsv($row[0], ';', '"', '\\');
	preg_match('/UTR-CM-(\d+)(\D.+)/', $camera[0], $matches);
	if (!isset($matches[1]) || !isset($matches[2])) {
		//Invalid camera
		continue;
	}

	$cam_id = $matches[1];
	$cam_name = $matches[2];

	array_unshift($camera, trim($matches[2]));
	array_unshift($camera, $matches[1]);
	$data[] = $camera;
}

echo json_encode($data);