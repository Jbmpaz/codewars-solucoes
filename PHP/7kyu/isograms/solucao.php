<?php

function isIsogram($string)
{
    $arr = [];
    $arrString = str_split(strtolower($string));
    foreach ($arrString as $letra) {
        if (in_array($letra, $arr)) {
            return false;
        }
        array_push($arr, $letra);
    }
    return true;
}

isIsogram("Dermatoglyphics");
isIsogram("isogram");
isIsogram("aba");
isIsogram("moOse");
isIsogram("isIsogram");
isIsogram("");