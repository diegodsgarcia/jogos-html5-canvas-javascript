function Tiro(context, nave) {
  this.context = context;
  this.nave = nave;

  this.largura = 3;
  this.altura = 10;
  this.x = this.nave.x + 18;
  this.y = this.nave.y - this.altura;
  this.velocidade = 10;
  this.cor = 'yellow';
}

Tiro.prototype = {
  atualizar: function() {
    this.y -= this.velocidade * this.animacao.decorrido / 1000;

    if(this.y < - this.altura) {
      this.animacao.excluirSprite(this);
      this.colisor.excluirSprite(this);
    }
  },
  desenhar: function() {
    this.context.save();
    this.context.fillStyle = this.cor;
    this.context.fillRect(this.x, this.y, this.largura, this.altura);
    this.context.restore();
  },
  retangulosColisao: function() {
    return [{ x: this.x, y: this.y, largura: this.largura, altura: this.altura }]
  },
  colidiuCom: function() {
    
  }
}