const VFX = require("effects");
const CAstatus = require("content/statusEffects");
// Change names of sprites and check for missing sprites
// Delta
const deltaMissile = extend(MissileBulletType, 5, 11, "chaos-arranity-missile-small", {
  frontColor: Color.valueOf("FFd2AE,"),
  backColor: Color.valueOf("FFd2AE,"),
  trailColor: Color.valueOf("FFd2AE,"),
  buildingDamageMultiplier: 0.01,
  homingPower: 0.2,
  homingRange: 48,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 2,
  weaveMag: 2
});
const deltaLauncher = extend(Weapon, "chaos-arranity-heal-launcher", {
  y: 0,
  x: 9,
  reload: 7.5,
  inaccuracy: 0,
  shots: 2,
  rotate: false,
  alternate: true,
  shootSound: Sounds.missile,
  ejectEffect: Fx.none,
  bullet: deltaMissile
});
// Dalish
const miniBullet = extend(BasicBulletType, 3, 1, {
  lifetime: 22,
  width: 5,
  height: 5
});
const miniCannon = extend(Weapon, "chaos-arranity-mini-cannon", {
  y: 0,
  x: 3,
  reload: 4,
  shootSound: Sounds.pew,
  alternate: false,
  inaccuracy: 12,
  bullet:miniBullet
});
// Marginator
const marginatorBullet = extend(BasicBulletType, 4, 18, {
  width: 10,
  height: 12,
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  status: StatusEffects.burning,
  makeFire: true,
  inaccuracy: 3,
  lifetime: 31
});
const marginatorWeapon = extend(Weapon, "chaos-arranity-dagger-gun", {
  y: -1,
  x: 7,
  reload: 14,
  shootSound: Sounds.pew,
  alternate: true,
  bullet:marginatorBullet
});
// Relametion
const relametionSlag = extend(LiquidBulletType, Liquids.slag, {
  damage: 10,
  status: StatusEffects.burning,
  speed: 2,
  lifetime: 10
});
const relametionRocket = extend(MissileBulletType, 4, 0, {
  lifetime: 55,
  width: 8,
  height: 6,
  shrinkY: 0,
  drag: -0.01,
  splashDamageRadius: 30,
  splashDamage: 32,
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion,
  status: StatusEffects.blasted,
  fragBullets: 8,
  fragBullet: relametionSlag
});
const relametionWeapon = extend(Weapon, "chaos-arranity-rocket-gun", {
  y: 2,
  x: 8,
  reload: 28,
  shootSound: Sounds.bigshot,
  alternate: true,
  bullet:relametionRocket
});
// Arcaster
const arcast = extend(LightningBulletType, {
  damage: 35,
  lightningLength: 16,
  buildingDamageMultiplier: 0.25
});
const arcasting = extend(Weapon, "chaos-arranity-arcasting", {
  y: 3,
  x: 10,
  reload: 7,
  shootSound: Sounds.bigshot,
  alternate: true,
  bullet: arcast
});
// Titan
const titanBeam = extend(ContinuousLaserBulletType, 35, {
  lifetime: 120,
  buildingDamageMultiplier: 3,
  length: 125,
  width: 8
});
const titanWeapon = extend(Weapon, "chaos-arranity-titan-weapon", {
  y: 6,
  x: 24,
  shootY: 10,
  reload: 120,
  alternate: false,
  continuous: true,
  shootSound: Sounds.laserbig,
  bullet:titanBeam
});
// Fireburster
const firebursterBullet = extend(BasicBulletType, 4, 20, {
  hitSize: 7,
  lifetime: 12,
  width: 1,
  height: 1,
  pierce: true,
  statusDuration: 240,
  shootEffect: Fx.shootSmallFlame,
  hitEffect: Fx.hitFlameSmall,
  despawnEffect: Fx.none,
  status: StatusEffects.burning,
  keepVelocity: false,
  hittable: false
});
const firebursterWeapon = extend(Weapon, "chaos-arranity-flamethrower", {
  y: 0,
  x: 4,
  shootY: 2,
  reload: 14,
  shootSound: Sounds.flame,
  ejectEffect: Fx.none,
  bullet: firebursterBullet
});
//Silocrafter
const silocrafterMissile = extend(MissileBulletType, 2, 0, {
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion,
  splashDamage: 20,
  splashDamageRadius: 24,
  homingPower: 0.05,
  homingRange: 32,
  statusDuration: 240,
  status: StatusEffects.burning,
  fragBullets: 4,
  fragBullet: Bullets.fireball,
  shrinkY: 0,
  width: 6,
  height: 6,
  weaveScale: 0,
  weaveMag: -1
});
const silocrafterWeapon = extend(Weapon, "chaos-arranity-missile-launcher", {
  y: 1,
  reload: 60,
  inaccuracy: 3,
  rotate: false,
  alternate: true,
  shootSound: Sounds.missile,
  bullet: silocrafterMissile
});
//Incinerator
const incineratorMissile = extend(MissileBulletType, 4, 0, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  lifetime: 40,
  width: 10,
  height: 10,
  splashDamage: 20,
  splashDamageRadius: 24,
  fragBullets: 12,
  fragBullet: Bullets.fireball,
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion,
  hitSound: Sounds.boom
});
const incineratorWeapon = extend(Weapon, "chaos-arranity-incinerator-rockets", {
  y: 7,
  x: 0,
  reload: 60,
  rotate: true,
  mirror: false,
  shootSound: Sounds.missile,
  ejectEffect: Fx.none,
  bullet: incineratorMissile
});
const incineratorMissile2 = extend(MissileBulletType, 4, 10, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  lifetime: 40,
  width: 5,
  height: 5,
  fragBullets: 6,
  fragBullet: Bullets.fireball,
  hitEffect: Fx.blastExplosion,
});
const incineratorWeapon2 = extend(Weapon, "chaos-arranity-incinerator-rockets", {
  y: 7,
  x: 5,
  reload: 15,
  rotate: true,
  alternate: false,
  shootSound: Sounds.missile,
  ejectEffect: Fx.none,
  bullet: incineratorMissile2
});
//Ignition
const ignitionMissile = extend(MissileBulletType, 5, 0, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  lifetime: 43,
  width: 10,
  height: 10,
  splashDamage: 44,
  splashDamageRadius: 32,
  fragBullets: 3,
  fragBullet: Bullets.fireball,
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion,
  incendAmount: 2,
  incendChance: 0.4,
  incendSpread: 5,
  hitSound: Sounds.boom
});
const ignitionRocket = extend(Weapon, "chaos-arranity-ignition-rockets", {
  y: 4,
  x: 16,
  reload: 15,
  rotate: false,
  alternate: false,
  mirror: true,
  recoil: 0,
  shootSound: Sounds.missile,
  ejectEffect: Fx.none,
  bullet: ignitionMissile
});
const ignitionBullet = extend(BasicBulletType, 5, 13, {
  lifetime: 43,
  width: 10,
  height: 10,
  fragBullets: 4,
  fragBullet: Bullets.fireball,
  status: StatusEffects.burning,
  makeFire: true,
  incendAmount: 2,
  incendChance: 0.4,
  incendSpread: 5
});
const ignitionGun = extend(Weapon, "chaos-arranity-ignition-guns", {
  y: 12,
  x: 5,
  reload: 5,
  rotate: false,
  alternate: true,
  mirror: true,
  recoil: 0,
  shootSound: Sounds.pew,
  bullet: ignitionBullet
});
// Inferno
const infernoMissle = extend(MissileBulletType, 5, 0, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  lifetime: 42,
  width: 10,
  height: 10,
  splashDamage: 40,
  splashDamageRadius: 32,
  status: StatusEffects.burning,
  makeFire: true,
  incendAmount: 1,
  fragBullets: 4,
  fragBullet: Bullets.fireball,
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion
});
const infernoRockets = extend(Weapon, "chaos-arranity-inferno-rockets", {
  x: 12,
  y: 8,
  reload: 30,
  rotate: false,
  alternate: false,
  mirror: true,
  shootSound: Sounds.missile,
  ejectEffect: Fx.none,
  bullet: infernoMissle
});
const infernoBullet = extend(BasicBulletType, 5, 20, {
  lifetime: 42,
  width: 10,
  height: 10,
  status: StatusEffects.burning,
  makeFire: true,
  incendAmount: 1,
  fragBullet: Bullets.fireball,
  fragBullets: 3
});
const infernoGun = extend(Weapon, "chaos-arranity-inferno-gun", {
  x: 4,
  y: 22,
  reload: 3.75,
  rotate: false,
  alternate: true,
  mirror: true,
  recoil: 0,
  shootSound: Sounds.pew,
  bullet: infernoBullet
});
const infernoShot = extend(ArtilleryBulletType, 5, 0, {
  lifetime: 42,
  width: 12,
  height: 12,
  damage: 90,
  pierce: true,
  pierceCap: 2,
  status: StatusEffects.burning,
  makeFire: true,
  incendAmount: 1,
  fragBullet: Bullets.fireball,
  fragBullets: 16
});
const infernoCannon = extend(Weapon, "chaos-arranity-inferno-cannon", {
  x: 8,
  y: 17,
  reload: 30,
  rotate: false,
  alternate: true,
  mirror: true,
  shootSound: Sounds.bang,
  bullet: infernoShot
});
// Officer
const officerSpray = extend(LiquidBulletType, Liquids.water, {
  speed: 2.3,
  lifetime: 56,
  drag: 0.01,
  damage: 0.1,
  knockback: 0.5,
  status: StatusEffects.wet,
  statusDuration: 300
});
const waterGun = extend(Weapon, "chaos-arranity-water-gun", {
  y: 0,
  x: 6,
  reload: 2,
  shootSound: Sounds.spray,
  alternate: false,
  inaccuracy: 6,
  bullet: officerSpray
});
// Chief
const chiefBullet = extend(BasicBulletType, 4, 2, {
  lifetime: 24
});
const chiefArtillery = extend(ArtilleryBulletType, 4, 0, {
  lifetime: 36,
  splashDamage: 5,
  splashDamageRadius: 16
});
const chiefWeapon = extend(Weapon, "chaos-arranity-chief-weapon", {
  y: 0,
  x: 9,
  reload: 60,
  shots: 3,
  shotDelay: 4,
  shootSound: Sounds.pew,
  alternate: true,
  bullet: chiefBullet
});
const chiefGun = extend(Weapon, "chaos-arranity-chief-gun", {
  y: -4,
  x: 0,
  reload: 120,
  rotate: true,
  rotateSpeed: 4,
  shootSound: Sounds.bang,
  mirror: false,
  bullet: chiefArtillery
});
// Manager
const managerBullet1 = extend(BasicBulletType, 6, 8, {
  width: 10,
  height: 10,
  lifetime: 20,
  fragBullet: Bullets.fragGlassFrag
});
const managerBullet2 = extend(BasicBulletType, 4, 3, {
  lifetime: 24
});
const managerWeapon = extend(Weapon, "chaos-arranity-manager-weapon", {
  y: 0,
  x: 14,
  reload: 60,
  shootSound: Sounds.bang,
  alternate: false,
  bullet: managerBullet1
});
const managerGun = extend(Weapon, "chaos-arranity-manager-gun", {
  y: -6,
  x: 4,
  reload: 15,
  shootSound: Sounds.bang,
  mirror: true,
  bullet: managerBullet2
});
// Director
const directorMissile = extend(MissileBulletType, 4, 0, {
  lifetime: 36,
  width: 8,
  height: 8,
  shrinkY: 0,
  splashDamage: 4,
  splashDamageRadius: 16,
  homingPower: 0.1,
  homingRange: 50,
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion
});
const directorArm = extend(Weapon, "chaos-arranity-director-arm", {
  y: 0,
  x: 18,
  shootY: 10,
  reload: 180,
  shots: 6,
  shotDelay: 6,
  spacing: 3,
  inaccuracy: 2,
  shootSound: Sounds.missile,
  alternate: true,
  bullet: directorMissile
});
// Leader
const leaderBullet = extend(BasicBulletType, 4, 20, {
  lifetime: 40,
  width: 12,
  height: 12
});
const leaderWeapon = extend(Weapon, "chaos-arranity-leader-cannon", {
  y: 0,
  x: 28,
  shootY: 10,
  reload: 30,
  shootSound: Sounds.bang,
  alternate: true,
  bullet: leaderBullet
});
// Vanguard
const vanguardExplosion = extend(BombBulletType, 0, 0, Color.valueOf("FFFFFFFF"), {
  hitEffect: Fx.explosion,
  despawnEffect: Fx.explosion,
  lifetime: 10,
  speed: 1,
  splashDamageRadius: 46.4,
  instantDisappear: true,
  splashDamage: 178,
  killShooter: true,
  hittable: false,
  collidesAir: true
});
const vanguardWeapon = extend(Weapon, {
  reload: 24,
  shootCone: 180,
  mirror: false,
  ejectEffect: Fx.none,
  shootSound: Sounds.explosion,
  bullet: vanguardExplosion
});

// Reliavent
const reliaventBomb = extend(BombBulletType, 0, 0, {
  width: 16,
  height: 16,
  keepVelocity: false,
  lifetime: 60,
  buildingDamageMultiplier: 1.2,
  status: StatusEffects.burning,
  despawnEffect: Fx.explosion,
  splashDamage: 110,
  splashDamageRadius: 36,
  hitSound: Sounds.explosion,
  fragBullets: 20,
  fragBullet: Bullets.fireball
});
const reliaventWeapon = extend(Weapon, {
  y: 0,
  reload: 4,
  alternate: false,
  rotate: true,
  inaccuracy: 0,
  shootSound: Sounds.none,
  bullet: reliaventBomb
});
// Silo Array
const siloArrayMissile = extend(MissileBulletType, 4, 0, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  hitEffect: Fx.blastExplosion,
  lifetime: 48,
  pierce: true,
  pierceCap: 2,
  splashDamage: 250,
  splashDamageRadius: 36,
  homingPower: 0.1,
  homingRange: 64,
  status: StatusEffects.burning,
  makeFire: true,
  shrinkY: 0,
  width: 10,
  height: 10
});
const siloArrayWeapon = extend(Weapon, {
  x: 3,
  y: 4,
  reload: 5,
  rotate: false,
  alternate: true,
  shootSound: Sounds.bang,
  bullet: siloArrayMissile
});
// Decimation
const decimationLaser = extend(LaserBulletType, 2000, {
  lifetime: 10,
  length: 200
});
const decimationCannon = extend(Weapon, "decimator-cannon", {
  x: 20,
  y: 10,
  reload: 60,
  rotate: false,
  alternate: true,
  shootSound: Sounds.laser,
  bullet: decimationLaser
});
// Carnage
const carnageMissile = extend(MissileBulletType, 4, 0, "chaos-arranity-missile-adamantite-large", {
  frontColor: Color.valueOf("FFFFFF"),
  backColor: Color.valueOf("FFFFFF"),
  trailColor: Color.valueOf("FFAA5F"),
  hitEffect: Fx.blastExplosion,
  speed: 5,
  lifetime: 50,
  damage: 0,
  splashDamage: 600,
  splashDamageRadius: 32,
  homingPower: 1,
  homingRange: 64,
  status: StatusEffects.burning,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1
});
const carnageRockets = extend(Weapon, "chaos-arranity-destruction-rockets", {
  x: 0,
  y: 0,
  reload: 100,
  shots: 12,
  shotDelay: 2,
  xRand: 4,
  rotate: true,
  alternate: false,
  mirror: true,
  shootSound: Sounds.missile,
  bullet: carnageMissile
});
const carnageBullet = extend(ArtilleryBulletType, 5, 400, {
  width: 10,
  height: 10,
  lifetime: 58
});
const carnageRifle = extend(Weapon, "chaos-arranity-carnage-rifle", {
  x: 15,
  y: -15,
  recoil: 3,
  reload: 30,
  rotate: true,
  alternate: false,
  mirror: true,
  shootSound: Sounds.bang,
  bullet: carnageBullet
});
// Destruction
const heavyCannonShot = extend(BasicBulletType, 6, 660, {
  width: 11,
  height: 14,
  lifetime: 60
});
const heavyCannon = extend(Weapon, "chaos-arranity-heavy-cannon", {
  x: 30,
  y: 0,
  recoil: 3,
  reload: 15,
  rotate: true,
  rotateSpeed: 0.001,
  shootCone: 30,
  alternate: true,
  mirror: true,
  shootSound: Sounds.shootBig,
  bullet: heavyCannonShot
});
const destructionCycloneShot = extend(BasicBulletType, 5, 60, {
  width: 9,
  height: 12,
  lifetime: 30,
  fragBullets: 5,
  fragBullet: Bullets.fragGlassFrag
});
const destructionCyclone = extend(Weapon, "chaos-arranity-adamantite-cyclone", {
  x: 15,
  y: 15,
  recoil: 3,
  reload: 3,
  rotate: true,
  alternate: false,
  mirror: true,
  shootSound: Sounds.bang,
  bullet: destructionCycloneShot
});
const vaporizerLaser = extend(ContinuousLaserBulletType, 300, {
  length: 120,
  lifetime: 300
});
const vaporizer = extend(Weapon, "chaos-arranity-vaporizer", {
  x: 0,
  y: 6,
  recoil: 6,
  reload: 180,
  rotate: false,
  shootCone: 20,
  rotateSpeed: 10,
  continuous: true,
  mirror: false,
  cooldownTime: 30,
  shootSound: Sounds.laserbig,
  bullet: vaporizerLaser
});
const destructionMissile = extend(MissileBulletType, 5, 0, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  hitEffect: Fx.blastExplosion,
  lifetime: 60,
  splashDamage: 200,
  splashDamageRadius: 32,
  homingPower: 1,
  homingRange: 64,
  status: StatusEffects.burning,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1
});
const destructionRockets = extend(Weapon, "chaos-arranity-destruction-rockets", {
  x: 20,
  y: -33,
  recoil: 2,
  reload: 30,
  shots: 6,
  shotDelay: 4,
  xRand: 4,
  rotate: true,
  alternate: false,
  mirror: true,
  shootSound: Sounds.missile,
  bullet: destructionMissile
});
const destructionLauncherShotFrag = extend(BasicBulletType, 4, 150, "chaos-arranity-energy-orb", {
  frontColor: Color.valueOf("665C9F"),
  backColor: Color.valueOf("BF92F9"),
  width: 10,
  height: 10,
  lifetime: 25
});
const destructionLauncherShot = extend(BasicBulletType, 4, 225, "chaos-arranity-energy-orb", {
  frontColor: Color.valueOf("665C9F"),
  backColor: Color.valueOf("BF92F9"),
  width: 15,
  height: 15,
  lifetime: 50,
  status: StatusEffects.burning,
  splashDamage: 200,
  splashDamageRadius: 64,
  fragBullets: 14,
  fragBullet: destructionLauncherShotFrag
});
const destructionLauncher = extend(Weapon, "chaos-arranity-destruction-launcher", {
  x: 12,
  y: 26,
  recoil: 3,
  reload: 60,
  rotate: true,
  alternate: false,
  mirror: true,
  shootSound: Sounds.bang,
  bullet: destructionLauncherShot
});
const destructionLancerShot1 = extend(LaserBulletType, 100, {
  lifetime: 10,
  length: 120,
  lightColor: Color.valueOf("FF002B")
});
const destructionLancer1 = extend(Weapon, "chaos-arranity-destruction-lancer", {
  x: 20,
  y: 0,
  reload: 60,
  rotate: true,
  alternate: false,
  shootSound: Sounds.laser,
  bullet: destructionLancerShot1
});
const destructionLancerShot2 = extend(LaserBulletType, 120, {
  lifetime: 10,
  length: 100,
  lightColor: Color.valueOf("C40D30")
});
const destructionLancer2 = extend(Weapon, "chaos-arranity-destruction-lancer", {
  x: 0,
  y: 0,
  reload: 60,
  rotate: true,
  mirror: false,
  shootSound: Sounds.laser,
  bullet: destructionLancerShot2
});
const destructionPeashooterShot = extend(BasicBulletType, 5, 20, {
  width: 10,
  height: 10,
  lifetime: 60
});
const destructionPeashooter1 = extend(Weapon, "chaos-arranity-destruction-peashooter", {
  x: 0,
  y: -20,
  reload: 60,
  rotate: true,
  alternate: false,
  mirror: false,
  shootSound: Sounds.bang,
  bullet: destructionPeashooterShot
});
const destructionPeashooter2 = extend(Weapon, "chaos-arranity-destruction-peashooter", {
  x: 18,
  y: -20,
  reload: 60,
  rotate: true,
  alternate: false,
  mirror: false,
  shootSound: Sounds.bang,
  bullet: destructionPeashooterShot
});
const destructionPeashooter3 = extend(Weapon, "chaos-arranity-destruction-peashooter", {
  x: -18,
  y: -20,
  reload: 30,
  rotate: true,
  alternate: false,
  mirror: false,
  shootSound: Sounds.bang,
  bullet: destructionPeashooterShot
});
const destructionHailShot = extend(ArtilleryBulletType, 6, 2, {
  width: 10,
  height: 10,
  lifetime: 63,
  splashDamage: 100,
  splashDamageRadius: 32
});
const destructionHail = extend(Weapon, "chaos-arranity-destruction-hail", {
  x: 25,
  y: -16,
  reload: 30,
  rotate: true,
  alternate: true,
  mirror: true,
  shootSound: Sounds.bang,
  bullet: destructionHailShot
});
const destructionScatterShot = extend(BasicBulletType, 5, 30, {
  width: 8,
  height: 10,
  lifetime: 35,
  fragBullets: 3,
  fragBullet: Bullets.fragGlassFrag
});
const destructionScatter = extend(Weapon, "chaos-arranity-destruction-scatter", {
  x: 7,
  y: -36,
  reload: 10,
  rotate: true,
  alternate: true,
  mirror: true,
  inaccuracy: 7,
  shootSound: Sounds.shootSnap,
  bullet: destructionScatterShot
});
const destructionScatterShot2 = extend(BasicBulletType, 5, 50, {
  width: 8,
  height: 10,
  lifetime: 35,
  fragBullets: 3,
  fragBullet: Bullets.fragGlassFrag
});
const destructionScatter2 = extend(Weapon, "chaos-arranity-destruction-scatter", {
  x: 0,
  y: -11,
  reload: 10,
  rotate: true,
  mirror: false,
  inaccuracy: 7,
  shootSound: Sounds.shootSnap,
  bullet: destructionScatterShot2
});
// Melter
const melterSlag = extend(LiquidBulletType, Liquids.slag, {
  damage: 250,
  drag: 0.03,
  buildingDamageMultiplier: 1.2,
  status: CAstatus.overheating,
  statusDuration: 600
});
const melterWeapon = extend(Weapon, "chaos-arranity-melter-weapon", {
  y: 0,
  x: 16,
  shootY: 10,
  reload: 10,
  alternate: false,
  recoil: 4,
  ejectEffect: Fx.none,
  shootSound: Sounds.spray,
  bullet: melterSlag
});
// Evasculator
const evasculatorBullet = extend(BasicBulletType, 5, 120, {
  width: 9,
  height: 9,
  lifetime: 31
});
const evasculatorWeapon = extend(Weapon, "chaos-arranity-evasculator-weapon", {
  y: 0,
  x: 12,
  shootY: 10,
  reload: 15,
  alternate: true,
  recoil: 3,
  shots: 4,
  shotDelay: 3,
  ejectEffect: Fx.none,
  bullet: evasculatorBullet
});
// Blaster
const blasterBullet = extend(BasicBulletType, 6, 600, {
  width: 10,
  height: 12,
  lifetime: 50
});
const blasterCannon = extend(Weapon, "chaos-arranity-blaster-cannon", {
  y: 0,
  x: 20,
  reload: 20,
  alternate: true,
  recoil: 3,
  ejectEffect: Fx.casing3,
  shootSound: Sounds.bang,
  status: CAstatus.barraged,
  bullet: blasterBullet
});
const blasterShell = extend(ArtilleryBulletType, 4, 0, {
  width: 15,
  height: 15,
  lifetime: 40,
  fragBullet: Bullets.fireball,
  fragBullets: 18,
  splashDamage: 240,
  splashDamageRadius: 32,
  status: StatusEffects.burning
});
const blasterMortar = extend(Weapon, "chaos-arranity-blaster-mortar", {
  y: 0,
  x: 13,
  reload: 60,
  alternate: false,
  rotate: true,
  recoil: 4,
  ejectEffect: Fx.none,
  bullet: blasterShell
});
// Catastrophere
const catastrophereBullet = extend(BasicBulletType, 4, 400, {
  width: 20,
  height: 20,
  lifetime: 52
});
const catastrophereCannon = extend(Weapon, "chaos-arranity-catastrophere-cannon", {
  y: 5,
  x: 30,
  reload: 30,
  alternate: true,
  shots: 4,
  shotDelay: 5,
  recoil: 3,
  ejectEffect: Fx.none,
  shootSound: Sounds.bang,
  bullet: catastrophereBullet
});
const catastrophereShell = extend(ArtilleryBulletType, 5, 50, {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  width: 15,
  height: 15,
  lifetime: 30,
  statusDuration: 600,
  makeFire: true,
  homingPower: 5,
  homingRange: 36
});
const catastrophereTurret = extend(Weapon, "chaos-arranity-catastrophere-turret", {
  y: -10,
  x: 16,
  reload: 60,
  alternate: false,
  rotate: true,
  recoil: 4,
  ejectEffect: Fx.none,
  bullet: catastrophereShell
});
// Death
const deathLaserShot = extend(LaserBulletType, 10000, {
    length: 380,
    width: 100,
    lifetime: 60,
    lightningSpacing: 16,
    lightningLength: 20,
    lightningDelay: 1,
    lightningLengthRand: 10,
    lightningDamage: 1000,
    lightningAngleRand: 40,
    largeHit: true,
    lightColor: Color.valueOf("FF4444"),
    lightningColor:Color.valueOf("FF4444"),
    shootEffect: VFX.deathChargeEffect,
    status: CAstatus.obliterating,
    colors: [Color.valueOf("FF4444"), Color.valueOf("FF8888"), Color.valueOf("FFAAAA"), Color.valueOf("FFEEEE")]
});
const deathCycloneBullet = extend(BasicBulletType, 6, 60, {
  width: 9,
  lifetime: 47,
  height: 12,
  fragBullets: 2,
  fragBullet: Bullets.fragGlass
});
const deathFuseShot = extend(ShrapnelBulletType, {
  damage: 550,
  length: 20,
  width: 12,
  speed: 0.01,
  lifetime: 16,
  pierce: true,
  toColor: Color.valueOf("C40D30")
});
const deathLaser = extend(Weapon, "chaos-arranity-main-laser", {
  x: 0,
  y: 8,
  shootY: 12,
  recoil: 6,
  reload: 420,
  rotate: false,
  rotateSpeed: 1,
  firstShotDelay: 166,
  shotDelay: 166,
  continuous: false,
  mirror: false,
  shake: 8,
  cooldownTime: 40,
  bullet: deathLaserShot,
  shootStatus: StatusEffects.unmoving,
  shootStatusDuration: 226,
  chargeSound: loadSound("deathlasercharge"),
  shootSound: loadSound("deathShoot")
});
const deathCyclone = extend(Weapon, "chaos-arranity-adamantite-cyclone", {
  x: 0,
  y: -10,
  recoil: 3,
  reload: 5,
  rotate: true,
  alternate: false,
  mirror: false,
  shake: 3,
  shootSound: Sounds.bang,
  bullet: deathCycloneBullet
});
const deathFuse = extend(Weapon, "chaos-arranity-adamantite-fuse", {
  x: 20,
  y: 0,
  shootY: 8,
  shots: 3,
  recoil: 3,
  spacing: 18,
  reload: 30,
  rotate: true,
  alternate: false,
  mirror:true,
  shake: 4,
  shootSound: Sounds.shotgun,
  bullet: deathFuseShot
});
// Paralysis
const paralyzerShot = extend(BasicBulletType, 5, 50, {
  width: 10,
  height: 10,
  lifetime: 40
});
const paralyzer = extend(Weapon, "chaos-arranity-paralyzer", {
  y: 5,
  x: 4,
  reload: 15,
  shots: 4,
  alternate: false,
  rotate: true,
  inaccuracy: 2,
  bullet: paralyzerShot
});
const paralysisMissile = extend(MissileBulletType, 5, 0, {
  width: 10,
  height: 10,
  lifetime: 40,
  splashDamage: 120,
  splashDamageRadius: 24,
  homingPower: 0.1,
  homingRange: 24,
  status: StatusEffects.burning,
  makeFire: true,
  hitEffect: Fx.blastExplosion
});
const paralysisLauncher = extend(Weapon, "chaos-arranity-paralysis-launcher", {
  y: -3,
  x: 0,
  reload: 120,
  shots: 6,
  shotDelay: 5,
  alternate: false,
  rotate: true,
  mirror: false,
  spacing: 2,
  shootSound: Sounds.missile,
  bullet: paralysisMissile
});
// Ravager
const ravagerMissile = extend(MissileBulletType, 5, 0, {
  width: 10,
  height: 10,
  lifetime: 40,
  splashDamage: 350,
  splashDamageRadius: 40,
  homingPower: 0.1,
  homingRange: 24,
  hitEffect: Fx.blastExplosion
});
const ravagerRockets = extend(Weapon, "chaos-arranity-ravager-rockets", {
  y: -2,
  x: 0,
  reload: 60,
  shots: 4,
  shotDelay: 5,
  alternate: false,
  rotate: true,
  mirror: false,
  spacing: 2,
  shootSound: Sounds.missile,
  bullet: ravagerMissile
});
const ravagerBeam1 = extend(LaserBoltBulletType, 5, 100, {
  backColor: Color.valueOf("AD2351"),
  frontColor: Color.valueOf("DD5598"),
  smokeEffect: Fx.none,
  hitEffect: Fx.none,
  despawnEffect: Fx.none,
  hittable: false,
  healPercent: 5,
  collidesTeam: true,
  reflectable: false,
  shrinkY: 0,
  width: 2,
  height: 7,
  lifetime: 50
});
const ravagerLaser1 = extend(Weapon, "chaos-arranity-ravager-laser", {
  y: 0,
  x: 5,
  reload: 25,
  shots: 2,
  shotDelay: 6,
  alternate: true,
  mirror: true,
  rotate: true,
  inaccuracy: 0,
  ejectEffect: Fx.none,
  shootSound: Sounds.lasershoot,
  bullet: ravagerBeam1
});
const ravagerBeam2 = extend(LaserBoltBulletType, 5, 130, {
  backColor: Color.valueOf("AD2351"),
  frontColor: Color.valueOf("DD5598"),
  smokeEffect: Fx.none,
  hitEffect: Fx.none,
  despawnEffect: Fx.none,
  hittable: false,
  healPercent: 5,
  collidesTeam: true,
  reflectable: false,
  shrinkY: 0,
  width: 2,
  height: 7,
  lifetime: 52
});
const ravagerLaser2 = extend(Weapon, "chaos-arranity-ravager-laser", {
  y: -8,
  x: 0,
  reload: 50,
  shots: 2,
  shotDelay: 6,
  mirror: false,
  rotate: true,
  inaccuracy: 1,
  ejectEffect: Fx.none,
  shootSound: Sounds.lasershoot,
  bullet: ravagerBeam2
});
// Abolisher
const abolisherShot = extend(ArtilleryBulletType, 4, 0, {
  width: 20,
  height: 20,
  lifetime: 80,
  buildingDamageMultiplier: 2.5,
  splashDamage: 2000,
  splashDamageRadius: 64,
  fragBullet: Bullets.fireball,
  fragBullets: 128,
  hitEffect: Fx.massiveExplosion
});
const abolisherMortar = extend(Weapon, "chaos-arranity-abolisher-mortar", {
  y: -5,
  x: 0,
  reload: 420,
  alternate: false,
  rotate: true,
  mirror: false,
  shootSound: Sounds.artillery,
  shake: 6,
  bullet: abolisherShot
});
const abolisherBullet = extend(BasicBulletType, 5, 500, {
  width: 12,
  height: 12,
  lifetime: 32,
  buildingDamageMultiplier: 0.9
});
const abolisherGun = extend(Weapon, "chaos-arranity-abolisher-gun", {
  y: 0,
  x: 14,
  reload: 15,
  alternate: true,
  mirror: true,
  rotate: true,
  inaccuracy: 1,
  ejectEffect: Fx.none,
  shootSound: Sounds.pew,
  bullet: abolisherBullet
});
// Warmonger
const warmongerBullet1 = extend(BasicBulletType, 4, 600, {
  width: 10,
  height: 10,
  lifetime: 82,
  pierce: true,
  pierceCap: 5
});
const warmongerGun1 = extend(Weapon, "chaos-arranity-warmonger-guns", {
  y: 10,
  x: 14,
  reload: 30,
  alternate: true,
  rotate: true,
  mirror: true,
  shootSound: Sounds.artillery,
  shake: 2,
  bullet: warmongerBullet1
});
const warmongerBullet2 = extend(BasicBulletType, 4, 500, {
  width: 10,
  height: 10,
  lifetime: 82,
  pierce: true,
  pierceCap: 5
});
const warmongerGun2 = extend(Weapon, "chaos-arranity-warmonger-guns", {
  y: -15,
  x: 7,
  reload: 20,
  alternate: true,
  rotate: true,
  mirror: true,
  shootSound: Sounds.bang,
  shake: 2,
  bullet: warmongerBullet2
});
const warmongerBeam = extend(LaserBulletType, 300, {
  width: 24,
  length: 80,
  lifetime: 30,
  status: StatusEffects.burning,
  makeFire: true,
  buildingDamageMultiplier: 1.2,
  incendChance: 1,
  incendSpread: 5,
  incendAmount: 1,
  colors: [Color.valueOf("ED922A"), Color.valueOf("FFAF32"), Color.valueOf("FFCC3B")]
});
const warmongerLaser = extend(Weapon, "chaos-arranity-destruction-lancer", {
  y: 0,
  x: 0,
  reload: 15,
  mirror: false,
  rotate: true,
  ejectEffect: Fx.none,
  shootSound: Sounds.laser,
  bullet: warmongerBeam
});
// Demise
const demiseBullet = extend(BasicBulletType, 5, 350, {
  width: 10,
  height: 10,
  pierce: true,
  pierceCap: 5,
  fragBullets: 5,
  fragBullet: Bullets.fragPlasticFrag,
  lifetime: 40
});
const demiseCyclone = extend(Weapon, "chaos-arranity-adamantite-cyclone", {
  y: -6,
  x: 18,
  reload: 3,
  alternate: true,
  rotate: true,
  inaccuracy: 8,
  shootSound: Sounds.bang,
  bullet: demiseBullet
});
const demiseShrapnel = extend(ShrapnelBulletType, {
  length: 20,
  width: 12,
  speed: 0.01,
  lifetime: 16,
  pierce: true,
  damage: 600,
  toColor: Color.valueOf("C40D30")
});
const demiseFuse = extend(Weapon, "chaos-arranity-adamantite-cyclone", {
  x: 0,
  y: 20,
  shootY: 8,
  shots: 3,
  recoil: 3,
  spacing: 18,
  reload: 60,
  rotate: true,
  alternate: false,
  mirror: false,
  shootSound: Sounds.shotgun,
  bullet: demiseShrapnel
});
const demiseBolt = extend(RailBulletType, {
  length: 380,
  damage: 1500,
  shootEffect: Fx.railShoot,
  updateEffectSeg: 60,
  pierceEffect: Fx.railHit,
  updateEffect: Fx.railTrail,
  hitEffect: Fx.massiveExplosion,
  smokeEffect: Fx.shootBig2,
  pierceDamageFactor: 0.6
});
const demiseRailgun = extend(Weapon, "chaos-arranity-demise-rail", {
  x: 0,
  y: -8,
  shootY: 23,
  reload: 110,
  shake: 4,
  rotate: true,
  rotateSpeed: 5,
  alternate: false,
  mirror:false,
  shadow: 50,
  shootSound: loadSound("catalyst"),
  bullet: demiseBolt
});
//Secret
// Murang
const murangLaser = extend(LaserBoltBulletType, 5, 3, {
  frontColor: Color.valueOf("98FFA9"),
  backColor: Color.valueOf("98FFA9"),
  lifetime: 15,
  buildingDamageMultiplier: 0.5,
  healPercent: 5,
  collidesTeam: true
});
const murangWeapon = extend(Weapon, "chaos-arranity-murang-weapon", {
  y: 0,
  x: 2,
  reload: 30,
  rotate: true,
  alternate: true,
  shootSound: Sounds.lasershoot,
  ejectEffect: Fx.none,
  bullet: murangLaser
});
// Eradicator
const eradOrbSpike = extend(BasicBulletType, 4, 500, "chaos-arranity-spike1", {
  width: 8,
  height: 8,
  lifetime: 40
});
const eradOrb = extend(ArtilleryBulletType, 5, 0, "chaos-arranity-energy-orb", {
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
  width: 30,
  height: 30,
  shrinkX: 0,
  shrinkY: 0,
  lifetime: 72,
  splashDamage: 70000,
  splashDamageRadius: 80,
  fragBullets: 35,
  fragBullet: eradOrbSpike
});
const eradWeaponLarge = extend(Weapon, "chaos-arranity-eradicator-large-weapon", {
  x: 19,
  y: -6,
  reload: 180,
  rotate: true,
  rotateSpeed: 3,
  alternate: false,
  inaccuracy: 0,
  recoil: 8,
  shake: 12,
  bullet: eradOrb
});
const eradBullet = extend(BasicBulletType, 4, 3000, {
  width: 15,
  height: 15,
  lifetime: 40,
  pierce: true
});
const eradWeaponMid = extend(Weapon, "chaos-arranity-eradicator-medium-weapon", {
  x: 40,
  y: -4,
  reload: 6,
  rotate: true,
  rotateSpeed: 4,
  alternate: true,
  inaccuracy: 0,
  recoil: 5,
  shake: 4,
  shootSound: Sounds.bang,
  bullet: eradBullet
});
const eradMissile = extend(MissileBulletType, 4, 350, {
  width: 12,
  height: 12,
  shrinkY: 0,
  lifetime: 70,
  pierce: true,
  hitEffect: Fx.none,
  despawnEffect: Fx.blastExplosion,
  splashDamage: 1500,
  splashDamageRadius: 40,
  homingPower: 0.05,
  homingRange: 64
});
const eradWeaponSmall = extend(Weapon, "chaos-arranity-eradicator-small-weapon", {
  x: 7,
  y: 7,
  reload: 6,
  rotate: true,
  rotateSpeed: 5,
  alternate: false,
  inaccuracy: 0,
  recoil: 3,
  shake: 2,
  shootSound: Sounds.missile,
  bullet: eradMissile
});
const eradWeaponSmall2 = extend(Weapon, "chaos-arranity-eradicator-small-weapon", {
  x: 20,
  y: 17,
  reload: 6,
  rotate: true,
  rotateSpeed: 5,
  alternate: true,
  inaccuracy: 0,
  recoil: 3,
  shake: 2,
  shootSound: Sounds.missile,
  bullet: eradMissile
});

module.exports = {
  deltaLauncher:deltaLauncher,
  miniCannon:miniCannon,
  marginatorWeapon:marginatorWeapon,
  relametionWeapon:relametionWeapon,
  arcasting:arcasting,
  titanWeapon:titanWeapon,
  firebursterWeapon:firebursterWeapon,
  silocrafterWeapon:silocrafterWeapon,
  incineratorWeapon:incineratorWeapon,
  incineratorWeapon2:incineratorWeapon2,
  ignitionRocket:ignitionRocket,
  ignitionGun:ignitionGun,
  infernoRockets:infernoRockets,
  infernoGun:infernoGun,
  infernoCannon:infernoCannon,
  waterGun:waterGun,
  chiefWeapon:chiefWeapon,
  chiefGun:chiefGun,
  managerWeapon:managerWeapon,
  managerGun:managerGun,
  directorArm:directorArm,
  leaderWeapon:leaderWeapon,
  vanguardWeapon:vanguardWeapon,
  reliaventWeapon:reliaventWeapon,
  siloArrayWeapon:siloArrayWeapon,
  decimationCannon:decimationCannon,
  carnageRockets:carnageRockets,
  carnageRifle:carnageRifle,
  heavyCannon:heavyCannon,
  destructionCyclone:destructionCyclone,
  vaporizer:vaporizer,
  destructionRockets:destructionRockets,
  destructionLauncher:destructionLauncher,
  destructionLancer1:destructionLancer1,
  destructionLancer2:destructionLancer2,
  destructionPeashooter1:destructionPeashooter1,
  destructionPeashooter2:destructionPeashooter2,
  destructionPeashooter3:destructionPeashooter3,
  destructionHail:destructionHail,
  destructionScatter:destructionScatter,
  destructionScatter2:destructionScatter2,
  melterWeapon:melterWeapon,
  evasculatorWeapon:evasculatorWeapon,
  blasterCannon:blasterCannon,
  blasterMortar:blasterMortar,
  catastrophereCannon:catastrophereCannon,
  catastrophereTurret:catastrophereTurret,
  deathLaser:deathLaser,
  deathCyclone:deathCyclone,
  deathFuse:deathFuse,
  paralyzer:paralyzer,
  paralysisLauncher:paralysisLauncher,
  ravagerRockets:ravagerRockets,
  ravagerLaser1:ravagerLaser1,
  ravagerLaser2:ravagerLaser2,
  abolisherMortar:abolisherMortar,
  abolisherGun:abolisherGun,
  warmongerGun1:warmongerGun1,
  warmongerGun2:warmongerGun2,
  warmongerLaser:warmongerLaser,
  demiseCyclone:demiseCyclone,
  demiseFuse:demiseFuse,
  demiseRailgun:demiseRailgun,
  murangWeapon:murangWeapon,
  eradWeaponLarge:eradWeaponLarge,
  eradWeaponMid:eradWeaponMid,
  eradWeaponSmall:eradWeaponSmall,
  eradWeaponSmall2:eradWeaponSmall2
}