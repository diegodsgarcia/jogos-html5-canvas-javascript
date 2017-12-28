function Animacao(context) {
  this.context = context;
  this.sprites = [];
  this.ligado = false;
}

Animacao.prototype = {
  novoSprite: function(sprite) {
    this.sprites.push(sprite);
    sprite.animacao = this;
  },
  ligar: function() {
    this.ligado = true;
    this.proximoFrame();
  },
  desligar: function() {
    this.ligado = false;
  },
  proximoFrame() {
    if(!this.ligado) return;

    this.limparTela();
    for(var i in this.sprites) {
      this.sprites[i].atualizar(); 
    }

    for(var i in this.sprites) {
      this.sprites[i].desenhar();
    }

    requestAnimationFrame(() => {
      this.proximoFrame();
    });
  },
  limparTela: function() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }
}