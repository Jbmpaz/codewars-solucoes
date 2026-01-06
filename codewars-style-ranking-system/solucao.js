// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method
class User {
  rank = -8;
  progress = 0;

  incProgress(rankDesafio) {
    let diferenca = this.rank - rankDesafio;
    let d = Math.abs(diferenca);
    console.log(d);

    let resultado = 10 * d * d

    if (resultado >= 100) {
        do {
            resultado -= 100
            this.rank++
        } while (resultado >= 100)
    }
    if (this.rank == 0) {this.rank = 1}
    if (this.rank > 8) {this.rank = 8}
    this.progress = resultado
    console.log(this.rank, this.progress)
  }
}

let user = new User();

// let user01 = new User();
// user01.incProgress(8);
