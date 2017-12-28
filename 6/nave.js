function Nave(context, teclado, image) {
  this.context = context;
  this.teclado = teclado;
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
}

Nave.prototype = {
  atualizar: function () {
    if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
      this.x -= this.velocidade;
    }
    if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - this.image.width) {
      this.x += this.velocidade;
    }
    if(this.teclado.pressionada(SETA_ACIMA) && this.y > 0) {
      this.y -= this.velocidade;
    }
    if(this.teclado.pressionada(SETA_ABAIXO) && this.y < this.context.canvas.height - this.image.height) {
      this.y += this.velocidade;
    }
  },
  desenhar: function() {
    this.context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height)
  },
  atirar: function() {
    var t = new Tiro(this.context, this);
    this.animacao.novoSprite(t);
  }
}