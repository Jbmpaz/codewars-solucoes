Você provavelmente conhece o sistema de "curtir" do Facebook e de outras páginas. As pessoas podem "curtir" posts de blogs, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado desse item.

Implemente a função que recebe um array contendo os nomes das pessoas que curtiram um item. Ela deve retornar o texto a ser exibido, conforme mostrado nos exemplos:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Observação: Para 4 ou mais nomes, o número "and 2 others"simplesmente aumenta.