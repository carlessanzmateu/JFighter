let platforms;
let hero;

function preload() {
  this.load.image('sky', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/background.png')
  this.load.image('mountains', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/mountains.png')
  this.load.image('graveyard', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/graveyard.png')
  this.load.image('dirt', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/dirt.png')
  this.load.image('heroIdle1', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Sprites/hero/hero-idle/hero-idle-1.png')
}

function create() {
  this.add.image(400,300, 'sky').setScale(3)
  this.add.image(0,200, 'mountains').setOrigin(0, 0).setScale(2.3)
  this.add.image(400,200, 'mountains').setOrigin(0, 0).setScale(2.3)
  this.add.image(0,350, 'graveyard').setOrigin(0, 0).setScale(2)

  platforms = this.physics.add.staticGroup();

  platforms.create(0,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(92,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(184,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(276,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(368,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(460,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(552,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(644,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()
  platforms.create(736,525, 'dirt').setOrigin(0, 0).setScale(1.5).refreshBody()

  hero = this.physics.add.image(100, 450, 'heroIdle1').setScale(2.3)
  hero.setBounce(0.2)
  hero.setCollideWorldBounds(true)
}
function update() {}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

export {
  config
}
