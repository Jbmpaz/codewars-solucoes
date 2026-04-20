<?php
  
function maskify(string $cc): string {
  $lastFour = substr($cc, -4);
  $arr = explode($lastFour, $cc);
  $arr = ($arr[0] == '')? $arr[1]: $arr[0];
  for($i = 0; $i <= strlen($arr); $i++) {
    $arr = str_replace($arr[$i], '#', $arr);
  }
  return $arr . $lastFour; // write your code here
}

// echo maskify('4556364607935616'), "<br>"; //############5616
// echo maskify('1'), "<br>"; //1
echo maskify('11111'), "<br>"; //#1111