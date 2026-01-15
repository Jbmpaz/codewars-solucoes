Dado um array de dígitos como entrada, retorne o array com cada dígito incrementado pela sua posição no array: o primeiro dígito será incrementado em 1, o segundo dígito em 2, etc. Certifique-se de começar a contar as posições a partir de 1 (e não de 0).

O resultado só pode conter números de um único dígito; portanto, se a soma de um dígito com sua posição resultar em um número com vários dígitos, somente o último dígito do número deverá ser retornado.

Notas:
Retorna um array vazio se o seu array estiver vazio.
Os arrays conterão apenas números, então não se preocupe em verificar isso.
Exemplos:
[1, 2, 3] --> [2, 4, 6] # [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3] --> [5, 8, 2, 5, 8] # [4+1, 6+2, 9+3, 1+4, 3+5] # 9+3 = 12 --> 2
