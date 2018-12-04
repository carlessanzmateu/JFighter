function preload() {
  this.load.image('sky', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/background.png')
  this.load.image('mountains', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/mountains.png')
  this.load.image('graveyard', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/graveyard.png')
}

function create() {
  this.add.image(400,300, 'sky').setScale(3)
  this.add.image(0,200, 'mountains').setOrigin(0, 0).setScale(2.3)
  this.add.image(400,200, 'mountains').setOrigin(0, 0).setScale(2.3)
  this.add.image(0,350, 'graveyard').setOrigin(0, 0).setScale(2)
}
function update() {}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

export {
  config
}
