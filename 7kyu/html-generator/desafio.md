Mais um dia gratificante no dinâmico mundo do desenvolvimento web. Nossa, você adora seu trabalho! Mas, como em qualquer trabalho, às vezes as coisas podem ficar um pouco tediosas. Parte do site em que você está trabalhando tem uma estrutura muito repetitiva, e escrever todo o HTML manualmente é um saco. Hora de automatizar! Você quer escrever algumas funções que gerem o HTML para você.

Para organizar seu código, transforme todas as suas funções em métodos de uma classe chamada HTMLGen. As funções de tag devem ser nomeadas de acordo com a tag do elemento que elas criam. Cada função receberá um argumento, uma string, que representa o HTML interno do elemento a ser criado. As funções retornarão a string correspondente ao elemento HTML apropriado.

Por exemplo,

JavaScript:

var g = new HTMLGen();
var paragraph = g.p('Hello, World!');
var block = g.div(paragraph);

// The following are now true
paragraph === '<p>Hello, World!</p>'
block === '<div><p>Hello, World!</p></div>'
Sua classe HTMLGen deve conter métodos para criar os seguintes elementos:

um
b
p
corpo
div
extensão
título
comentário
Nota: O método `comment` deve envolver seu argumento com um comentário HTML. É o único método cujo nome não corresponde a uma tag HTML. Portanto, g.comment('i am a comment')deve produzir um comentário HTML <!--i am a comment-->.