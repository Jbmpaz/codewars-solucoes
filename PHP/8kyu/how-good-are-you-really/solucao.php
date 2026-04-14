<?php
  
function betterThanAverage(array $classPoints, int $yourPoints): bool {
    $total = array_sum($classPoints);
    $media = $total / count($classPoints);
    return ($yourPoints > $media)? true: false;
}

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);