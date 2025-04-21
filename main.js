
AFRAME.registerComponent('play-audio-on-click', {
  init: function () {
    const audio = new Audio('audio/welcome_audio.mp3');
    this.el.addEventListener('click', function () {
      audio.play();
    });
  }
});

AFRAME.registerComponent('scale-rotate', {
  schema: {
    scale: {type: 'number', default: 1},
    rotationSpeed: {type: 'number', default: 0.5}
  },
  init: function () {
    this.el.setAttribute('scale', `${this.data.scale} ${this.data.scale} ${this.data.scale}`);
    this.rotation = 0;
    this.el.sceneEl.addEventListener('touchmove', (e) => {
      this.rotation += this.data.rotationSpeed;
      this.el.setAttribute('rotation', `0 ${this.rotation} 0`);
    });
  }
});
