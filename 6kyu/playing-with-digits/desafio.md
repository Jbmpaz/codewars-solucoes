Alguns números possuem propriedades curiosas. Por exemplo:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴ = 1390 = 695 * 2
46288 --> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Dados dois inteiros positivos ne p, queremos encontrar um inteiro positivo k, se existir, tal que a soma dos dígitos de nelevado a potências consecutivas a partir de pseja igual a k * n.

Em outras palavras, escrevendo os dígitos consecutivos de ncomo a, b, c, d ..., existe um inteiro ktal que :

( um p + b p + 1 + c p + 2 + d p + 3 + . . . ) = n ∗ k ( a p  +b p + 1  +c p + 2  +d p + 3  +... )=n∗k

Se for esse o caso, retornaremos k; caso contrário, retornaremos -1.

Nota : ne pserão sempre números inteiros estritamente positivos.

Exemplos:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51