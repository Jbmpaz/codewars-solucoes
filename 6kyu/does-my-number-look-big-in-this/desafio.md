Um Número Narcisista (ou Número de Armstrong) é um número positivo que é a soma de seus próprios dígitos, cada um elevado à potência do número de dígitos em uma determinada base. Neste Kata, nos restringiremos ao sistema decimal (base 10).

Por exemplo, considere o número 153 (3 dígitos), que é narcisista:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
e 1652 (4 dígitos), que não é:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
O desafio:

Seu código deve retornar verdadeiro ou falso (e não 'verdadeiro' e 'falso'), dependendo se o número fornecido é um número narcisista na base 10.

Isso pode ser Verdadeiro ou Falso na sua linguagem, por exemplo, PHP.

Não é necessário verificar erros em cadeias de texto ou outras entradas inválidas; apenas números inteiros positivos e diferentes de zero válidos serão passados ​​para a função.