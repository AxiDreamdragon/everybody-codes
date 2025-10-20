<?php

// check argv[1] for now - can check --name later
$args = getopt("", ["name:"]);

if (!isset($args["name"])) {
	echo "Usage: php search.php --name <query>\n";
	exit(1);
}

$query = $args["name"];

// read CSV
$file = fopen(__DIR__ . "/cameras-defb.csv", "r");
fgetcsv($file, escape: "\\"); //skip first line, this contains headers

while ($row = fgetcsv($file, escape: "\\")) {
	$camera = str_getcsv($row[0], ';', '"', '\\');
	preg_match('/UTR-CM-(\d+)(\D.+)/', $camera[0], $matches);
	if (!isset($matches[1]) || !isset($matches[2])) {
		//Invalid camera
		continue;
	}

	$cam_id = $matches[1];
	$cam_name = $matches[2];

	if (str_contains($cam_name, $query)) {
		array_unshift($camera, $matches[1]);
		echo implode(' | ', $camera) . "\n";
	}
}
