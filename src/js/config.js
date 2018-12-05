let platforms;
let hero;
let cursors;

function preload() {
  this.load.image('sky', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/background.png')
  this.load.image('mountains', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/mountains.png')
  this.load.image('graveyard', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/graveyard.png')
  this.load.image('dirt', '/src/assets/gothicvania-cemetery-files/gothicvania-cemetery-files/PNG/Environment/dirt.png')
  this.load.spritesheet('hero',
    '/src/assets/Adventurer-1.5/adventurer-v1.5-Sheet.png',
    {
      frameWidth: 50,
      frameHeight: 45
  })
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
  
  hero = this.physics.add.sprite(100, 450, 'hero')

  hero.setBounce(0.2)
  hero.setCollideWorldBounds(true)

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    // frames: [ { key: 'hero', frame: 1 } ],
    frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
    frameRate: 20
});

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('hero', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  hero.body.setGravityY(300)

  this.physics.add.collider(hero, platforms)

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    hero.setVelocityX(-160);
    hero.anims.play('left', true);
  } else if (cursors.right.isDown) {
    hero.setVelocityX(160);
    hero.anims.play('right', true);
  } else {
    hero.setVelocityX(0);
    hero.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}

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
