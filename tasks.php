<?php

$years = 20;
$yearOfBirth = date('Y') - $years;
echo $yearOfBirth;

?> <br> 

<?php

$string = 'The quick brown fox jumps over the lazy dog'; 

function lowerCaseString($str){
    $words = explode(" ", $str);
    shuffle($words);
    $words = array_map('strtolower', $words);
    echo implode("",$words);
}

lowerCaseString($string);
?> <br> 

<?php

function insertWord($str){
    $words = explode(" ", $str);
    shuffle($words);
    $word = 'Obuka';
    $temp = $words[8];
    $words[8] = $word;
    $words[9] = $temp;
    $words = array_map('ucwords', $words);
    echo implode(" ",$words);
}

insertWord($string)

?> <br> 

<?php

function replaceCharacter($str){
    $words = explode(" ", $str);
    shuffle($words);
    $words = array_map(function($value) { return str_replace('o', '*', $value); }, $words);
    echo implode(" ",$words);
}

replaceCharacter($string);

?>



