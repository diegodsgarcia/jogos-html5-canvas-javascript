function Tiro(context, nave) {
  this.context = context;
  this.nave = nave;

  this.largura = 4;
  this.altura = 20;
  this.x = this.nave.x + this.nave.image.width / 2 - this.largura / 2;
  this.y = this.nave.y - this.altura;
  this.velocidade = 10;
  this.cor = 'red';
}

Tiro.prototype = {
  atualizar: function() {
    this.y -= this.velocidade;
  },
  desenhar: function() {
    this.context.save();
    this.context.fillStyle = this.cor;
    this.context.fillRect(this.x, this.y, this.largura, this.altura);
    this.context.restore();
  }
}