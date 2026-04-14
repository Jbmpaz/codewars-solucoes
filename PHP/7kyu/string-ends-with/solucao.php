<?php
function solution($str, $ending) {
  // TODO: complete
  $result = str_ends_with($str, $ending);
  return ($result)? true: false;
}


echo solution("sumo", "omo");
echo solution("ninja", "ja");
echo solution("sensei", "i");
echo solution("samurai", "ra");
echo solution("abc", "abcd");
echo solution("abc", "abc");
echo solution("abcabc", "bc");
echo solution('ails', 'fails');
echo solution('fails', 'ails');
echo solution('this', 'fails');
echo solution('yes this will pass', '');
echo solution('this will not pass', '`^$<>()[]*|');
echo solution("abc\n", 'abc');