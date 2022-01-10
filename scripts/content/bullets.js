const CAstatus = require("content/statusEffects");

const scrapFrag = extend(BasicBulletType, 2.5, 10, "bullet", {
  width: 10,
  height: 12,
  shrinkY: 1,
  lifetime: 15,
  despawnEffect: Fx.none
});
// Catalyst
const catalystCopper = extend(BasicBulletType, 6, 290, {
  lifetime: 120,
  width: 10,
  height: 10,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystLead = extend(BasicBulletType, 6, 310, {
  lifetime: 120,
  width: 10,
  height: 10,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystMetaglass = extend(BasicBulletType, 6, 240, {
  lifetime: 120,
  width: 10,
  height: 10,
  fragBullets: 12,
  fragBullet: Bullets.fragGlassFrag,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystGraphite = extend(BasicBulletType, 6, 370, {
  lifetime: 120,
  width: 10,
  height: 10,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystTitanium = extend(BasicBulletType, 6, 490, {
  lifetime: 120,
  width: 10,
  height: 10,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystThorium = extend(BasicBulletType, 6, 640, {
  lifetime: 120,
  width: 10,
  height: 10,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystScrap = extend(BasicBulletType, 6, 310, {
  lifetime: 120,
  width: 10,
  height: 10,
  fragBullets: 10,
  fragBullet: scrapFrag,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystSilicon = extend(BasicBulletType, 6, 340, {
  lifetime: 120,
  width: 10,
  height: 10,
  homingPower: 1,
  homingRange: 80,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystPlastanium = extend(BasicBulletType, 6, 370, {
  lifetime: 120,
  width: 10,
  height: 10,
  fragBullets: 12,
  fragBullet: Bullets.fragPlasticFrag,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystPhaseFabric = extend(BasicBulletType, 6, 430, {
  lifetime: 120,
  width: 10,
  height: 10,
  collidesTeam: true,
  healPercent: 25,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystBlastCompound = extend(BasicBulletType, 6, 390, {
  lifetime: 120,
  width: 10,
  height: 10,
  status: StatusEffects.burning,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke,
  despawnEffect: Fx.explosion,
  hitEffect: Fx.explosion,
  hitSound: Sounds.boom
});
const catalystPyratite = extend(BasicBulletType, 6, 370, {
  lifetime: 120,
  width: 10,
  height: 10,
  status: StatusEffects.burning,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke,
  hitEffect: Fx.fire
});
const catalystAdamantite = extend(BasicBulletType, 6, 3000, {
  lifetime: 120,
  width: 10,
  height: 10,
  pierce: true,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
const catalystDetonatite = extend(BasicBulletType, 6, 550, {
  lifetime: 120,
  width: 10,
  height: 10,
  status: CAstatus.detonating,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke,
  despawnEffect: Fx.massiveExplosion,
  hitEffect: Fx.massiveExplosion,
  hitSound: Sounds.boom
});
const catalystIceFrag = extend(BasicBulletType, 6, 10, {
  lifetime: 20,
  width: 5,
  height: 5,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5")
});
const catalystIce = extend(BasicBulletType, 6, 200, {
  lifetime: 120,
  width: 10,
  height: 10,
  fragBullets: 8,
  fragBullet: catalystIceFrag,
  shootEffect: Fx.shootBig,
  smokeEffect: Fx.shootBigSmoke
});
// Phoenix
const phoenixBlast = extend(BasicBulletType, 6, 27, {
  lifetime: 30,
  width: 10,
  height: 10,
  hitEffect: Fx.blastExplosion,
  shootEffect: Fx.shootSmall,
  smokeEffect: Fx.shootSmallSmoke
});
const phoenixTitanium = extend(BasicBulletType, 6, 16, {
  lifetime: 26,
  width: 10,
  height: 10,
  shootEffect: Fx.shootSmall,
  smokeEffect: Fx.shootSmallSmoke
});
const phoenixDetonatite = extend(BasicBulletType, 6, 32, {
  lifetime: 30,
  width: 10,
  height: 10,
  status: CAstatus.detonating,
  hitEffect: Fx.explosion,
  hitSound: Sounds.boom
});
const phoenixAdamantite = extend(BasicBulletType, 6, 62, {
  lifetime: 30,
  width: 10,
  height: 10,
  shootEffect: Fx.shootSmall,
  smokeEffect: Fx.shootSmallSmoke
});
// Ridge
const ridgeCopper = extend(BasicBulletType, 6, 12, {
  ammoMultiplier: 2,
  width: 7,
  height: 9,
  shootEffect: Fx.shootSmall,
  smokeEffect: Fx.shootSmallSmoke
});
const ridgeGraphite = extend(BasicBulletType, 8, 24, {
  reloadMultiplier: 0.6,
  width: 9,
  height: 12,
  ammoMultiplier: 3
});
const ridgeSilicon = extend(BasicBulletType, 4, 16, {
  reloadMultiplier: 1.6,
  width: 7,
  height: 9,
  homingPower: 0.1,
  homingRange: 80,
  ammoMultiplier: 2
});
const ridgeIceFrag = extend(BasicBulletType, 5, 6, {
  lifetime: 12,
  width: 5,
  height: 5,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5")
});
const ridgeIce = extend(BasicBulletType, 5, 10, {
  width: 6,
  height: 8,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5"),
  fragBullets: 4,
  fragBullet: ridgeIceFrag
});
// Microburst
const microburstGraphite = extend(BasicBulletType, 6, 22, {
  lifetime: 20,
  width: 8,
  height: 8,
  reloadMultiplier: 0.8,
  ammoMultiplier: 4
});
const microburstPyra = extend(BasicBulletType, 6, 19, {
  lifetime: 20,
  width: 10,
  height: 10,
  status: StatusEffects.burning,
  ammoMultiplier: 2
});
const microburstSilicon = extend(BasicBulletType, 5, 15, {
  lifetime: 25,
  reloadMultiplier: 1.6,
  width: 5,
  height: 5,
  homingPower: 0.12,
  homingRange: 48,
  ammoMultiplier: 4
});
const microburstCopper = extend(BasicBulletType, 6, 17, {
  lifetime: 20,
  width: 6,
  height: 6,
  ammoMultiplier: 2
});
const microburstMeta = extend(BasicBulletType, 6, 15, {
  lifetime: 20,
  reloadMultiplier: 1.2,
  width: 6,
  height: 6,
  fragBullets: 3,
  fragBullet: Bullets.fragGlassFrag,
  ammoMultiplier: 3
});
// Megaburst
const megaburstSilicon = extend(BasicBulletType, 6, 20, {
  lifetime: 30,
  reloadMultiplier: 1.4,
  width: 8,
  height: 8,
  homingPower: 0.3,
  homingRange: 64,
  ammoMultiplier: 3
});
const megaburstGraphite = extend(BasicBulletType, 6, 25, {
  lifetime: 30,
  width: 8,
  height: 8,
  reloadMultiplier: 0.8,
  ammoMultiplier: 2
});
const megaburstThorium = extend(BasicBulletType, 6, 35, {
  lifetime: 30,
  width: 10,
  height: 10,
  ammoMultiplier: 2
});
const megaburstBlast = extend(BasicBulletType, 6, 30, {
  lifetime: 30,
  width: 12,
  height: 12,
  splashDamage: 25,
  splashDamageRadius: 32,
  hitEffect: Fx.explosion,
  hitSound: Sounds.boom,
  ammoMultiplier: 4
});
const megaburstPyra = extend(BasicBulletType, 6, 25, {
  lifetime: 30,
  width: 8,
  height: 8,
  status: StatusEffects.burning,
  hitEffect: Fx.fire,
  ammoMultiplier: 2
});
// Arfazatan
const arfazatanLead = extend(BasicBulletType, 7, 14, {
  width: 10,
  height: 10,
  ammoMultiplier: 2
});
const arfazatanScrap = extend(BasicBulletType, 6, 15, {
  fragBullets: 8,
  fragBullet: scrapFrag,
  width: 9,
  height: 9,
  ammoMultiplier: 2
});
const arfazatanDetonatite = extend(BasicBulletType, 6, 34, {
  width: 12,
  height: 12,
  status: CAstatus.detonating,
  hitEffect: Fx.explosion,
  despawnEffect: Fx.explosion,
  hitSound: Sounds.boom,
  ammoMultiplier: 2
});
const arfazatanTitanium = extend(BasicBulletType, 8, 22, {
  width: 12,
  height: 12,
  ammoMultiplier: 2
});
const arfazatanPhaseFabric = extend(BasicBulletType, 5, 25, {
  collidesTeam: true,
  healPercent: 15,
  width: 12,
  height: 12,
  ammoMultiplier: 2
});
const arfazatanCoal = extend(BasicBulletType, 5, 16, {
  width: 10,
  height: 10,
  status: StatusEffects.burning,
  ammoMultiplier: 2
});
const arfazatanSpore = extend(BasicBulletType, 5, 15, {
  width: 10,
  height: 10,
  status: StatusEffects.sporeSlowed,
  ammoMultiplier: 2
});
const arfazatanIceFrag = extend(BasicBulletType, 6, 10, {
  lifetime: 20,
  width: 5,
  height: 5,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5")
});
const arfazatanIce = extend(BasicBulletType, 5, 13, {
  width: 10,
  height: 10,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5"),
  ammoMultiplier: 2,
  fragBullets: 6,
  fragBullet: arfazatanIceFrag
});
const arfazatanOdiumFrag = extend(BasicBulletType, 4, 15, {
  lifetime: 10,
  width: 8,
  height: 8,
});
const arfazatanOdium = extend(BasicBulletType, 6, 17, {
  width: 10,
  height: 10,
  ammoMultiplier: 2,
  fragBullets: 6,
  fragBullet: arfazatanOdiumFrag
});
// Fragment
const fragmentMetaglass = extend(BasicBulletType, 5, 7, {
  lifetime: 30,
  reloadMultiplier: 0.9,
  fragBullets: 5,
  fragBullet: Bullets.fragGlassFrag,
  width: 6,
  height: 8
});
const fragmentScrap = extend(BasicBulletType, 4, 5, {
  lifetime: 34,
  reloadMultiplier: 0.5,
  fragBullets: 8,
  fragBullet: scrapFrag,
  width: 8,
  height: 10
});
const fragmentIceFrag = extend(BasicBulletType, 3, 6, {
  lifetime: 12,
  despawnEffect: Fx.freezing,
  width: 5,
  height: 6,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5")
});
const fragmentIce = extend(BasicBulletType, 5, 4, {
  lifetime: 30,
  fragBullets: 6,
  fragBullet: fragmentIceFrag,
  width: 6,
  height: 8,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5")
});
const fragmentOdiumFrag = extend(BasicBulletType, {
  width: 5,
  height: 6,
  lifetime: 20,
  frontColor: Color.valueOf("676593"),
  backColor: Color.valueOf("5C567A")
});
const fragmentOdium = extend(BasicBulletType, 6, 13, {
  lifetime: 25,
  fragBullets: 5,
  fragBullet: fragmentOdiumFrag,
  width: 6,
  height: 8,
});
// Scatter MKII
const scattermk2Lead = extend(BasicBulletType, 6, 9, {
  reloadMultiplier:2,
  width: 5,
  height: 5,
  collidesTiles: false,
  collidesGround: false,
  splashDamage: 20,
  splashDamageRadius: 24,
  ammoMultiplier: 2
});
const scattermk2IceFrag = extend(BasicBulletType, 5, 6, {
  lifetime: 12,
  width: 5,
  height: 5,
  collidesTiles: false,
  collidesGround: false,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5")
});
const scattermk2Ice = extend(BasicBulletType, 5, 9, {
  width: 5,
  height: 5,
  collidesTiles: false,
  collidesGround: false,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5"),
  splashDamage: 10,
  splashDamageRadius: 24,
  fragBullets: 4,
  fragBullet: scattermk2IceFrag
});
const scattermk2Titanium = extend(BasicBulletType, 9, 15, {
  width: 10,
  height: 10,
  collidesTiles: false,
  collidesGround: false,
  splashDamage: 15,
  splashDamageRadius: 24,
  ammoMultiplier: 2
});
const scattermk2Graphite = extend(BasicBulletType, 6, 12, {
  reloadMultiplier: 2,
  width: 5,
  height: 5,
  collidesTiles: false,
  collidesGround: false,
  ammoMultiplier: 2
});
const scattermk2Metaglass = extend(BasicBulletType, 7, 12, {
  width: 6,
  height: 6,
  collidesTiles: false,
  collidesGround: false,
  splashDamage: 15,
  splashDamageRadius: 24,
  fragBullets: 5,
  fragBullet: Bullets.flakGlassFrag,
  ammoMultiplier: 2
});
const scattermk2Detonatite = extend(BasicBulletType, 8, 30, {
  width: 10,
  height: 10,
  collidesTiles: false,
  collidesGround: false,
  status: CAstatus.detonating,
  splashDamage: 40,
  splashDamageRadius: 24,
  hitEffect: Fx.explosion,
  hitSound: Sounds.boom,
  ammoMultiplier: 2
});
//Shockwave
const shockwaveGraphite = extend(BasicBulletType, 6, 30, {
  width: 8,
  height: 10,
  lifetime: 60,
  ammoMultiplier: 2
});
const shockwaveSilicon = extend(BasicBulletType, 6, 30, {
  width: 8,
  height: 10,
  lifetime: 70,
  homingPower: 0.2,
  homingRange: 64,
  ammoMultiplier: 2
});
const shockwavePlastanium = extend(BasicBulletType, 6, 35, {
  width: 8,
  height: 10,
  fragBullets: 3,
  fragBullet: Bullets.fragPlasticFrag,
  ammoMultiplier: 2
});
// Statical
const staticalPyratite = extend(BasicBulletType, 6, 15, {
  lifetime: 60,
  width: 12,
  height: 12,
  status: StatusEffects.burning,
  hitEffect: Fx.fire,
  ammoMultiplier: 3
});
const staticalDetonatite = extend(BasicBulletType, 6, 25, {
  lifetime: 60,
  width: 12,
  height: 12,
  status: CAstatus.detonating,
  hitEffect: Fx.explosion,
  hitSound: Sounds.boom,
  ammoMultiplier: 3
});
const staticalPlast = extend(BasicBulletType, 6, 20, {
  lifetime: 60,
  fragBullets: 8,
  fragBullet: Bullets.fragPlasticFrag,
  width: 12,
  height: 12,
  ammoMultiplier: 3
});
const staticalScrap = extend(BasicBulletType, 6, 10, {
  lifetime: 60,
  fragBullets: 4,
  fragBullet: scrapFrag,
  width: 10,
  height: 10,
  ammoMultiplier: 3
});
const staticalMetaglass = extend(BasicBulletType, 6, 15, {
  lifetime: 60,
  fragBullets: 8,
  fragBullet: Bullets.fragGlassFrag,
  width: 10,
  height: 10,
  ammoMultiplier: 3
});
const staticalSilicon = extend(BasicBulletType, 4, 15, {
  lifetime: 70,
  width: 12,
  height:12,
  homingPower: 0.1,
  homingRange: 80,
  ammoMultiplier: 3
});
const staticalIce = extend(BasicBulletType, 6, 10, {
  lifetime: 60,
  width: 12,
  height: 12,
  status: StatusEffects.freezing,
  ammoMultiplier: 3,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5"),
  shrinkX: 0.5,
  hitEffect: Fx.freezing,
  despawnEffect: Fx.freezing
});
const staticalSpore = extend(BasicBulletType, 6, 10, {
  lifetime: 60,
  width: 12,
  height: 12,
  status: StatusEffects.sporeSlowed,
  ammoMultiplier: 3
});
const staticalSurge = extend(BasicBulletType, 6, 25, {
  lifetime: 30,
  lightning: 4,
  lightningLength: 12,
  status: StatusEffects.shocked,
  width: 12,
  height: 12,
  ammoMultiplier: 3
});
// Swarmer MKII
const swarmermk2Pyratite = extend(MissileBulletType, 4.5, 15, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FFAA5F"),
  backColor: Color.valueOf("FFAA5F"),
  trailColor: Color.valueOf("FFAA5F"),
  hitEffect: Fx.blastExplosion,
  splashDamage: 9,
  splashDamageRadius: 24,
  homingPower: 0.1,
  homingRange: 64,
  status: StatusEffects.burning,
  makeFire: true,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});
const swarmermk2Blast = extend(MissileBulletType, 4.5, 20, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FF795E"),
  backColor: Color.valueOf("FF795E"),
  trailColor: Color.valueOf("FF795E"),
  hitEffect: Fx.blastExplosion,
  despawnEffect: Fx.blastExplosion,
  splashDamage: 11,
  splashDamageRadius: 48,
  homingPower: 0.1,
  homingRange: 64,
  status: StatusEffects.blasted,
  statusDuration: 60,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});
const swarmermk2Meta = extend(MissileBulletType, 4.5, 12, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("EBEEF5"),
  backColor: Color.valueOf("EBEEF5"),
  trailColor: Color.valueOf("EBEEF5"),
  hitEffect: Fx.blastExplosion,
  splashDamage: 8,
  splashDamageRadius: 24,
  homingPower: 0.1,
  homingRange: 64,
  fragBullets: 8,
  fragBullet: Bullets.fragGlassFrag,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});
const swarmermk2Plastanium = extend(MissileBulletType, 4.5, 20, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("CBD97F"),
  backColor: Color.valueOf("CBD97F"),
  trailColor: Color.valueOf("CBD97F"),
  hitEffect: Fx.blastExplosion,
  splashDamage: 9,
  splashDamageRadius: 24,
  homingPower: 0.1,
  homingRange: 64,
  fragBullets: 8,
  fragBullet: Bullets.fragPlasticFrag,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});
const swarmermk2Surge = extend(MissileBulletType, 5, 25, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("F0F050"),
  backColor: Color.valueOf("F0F050"),
  trailColor: Color.valueOf("F0F050"),
  hitEffect: Fx.blastExplosion,
  splashDamage: 11,
  splashDamageRadius: 24,
  homingPower: 0.1,
  homingRange: 64,
  lightning: 4,
  lightningDamage: 20,
  lightningLength: 10,
  status: StatusEffects.shocked,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});
const swarmermk2RefinedOdium = extend(MissileBulletType, 5, 25, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("8280BF"),
  backColor: Color.valueOf("8280BF"),
  trailColor: Color.valueOf("8280BF"),
  hitEffect: Fx.blastExplosion,
  splashDamage: 11,
  splashDamageRadius: 24,
  homingPower: 0.1,
  homingRange: 64,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4,
  lightRadius: 24,
});
const swarmermk2Detonatite = extend(MissileBulletType, 4.5, 30, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("FF795E"),
  backColor: Color.valueOf("FF795E"),
  trailColor: Color.valueOf("FF795E"),
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.massiveExplosion,
  splashDamage: 13,
  splashDamageRadius: 64,
  homingPower: 0.1,
  homingRange: 64,
  status: CAstatus.detonating,
  makeFire: true,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});
const swarmermk2Adamantite = extend(MissileBulletType, 6, 80, "chaos-arranity-mk2-missile", {
  frontColor: Color.valueOf("7A001E"),
  backColor: Color.valueOf("7A001E"),
  trailColor: Color.valueOf("7A001E"),
  hitEffect: Fx.massiveExplosion,
  despawnEffect: Fx.blastExplosion,
  splashDamage: 12,
  splashDamageRadius: 64,
  homingPower: 0.2,
  homingRange: 80,
  shrinkY: 0,
  width: 10,
  height: 10,
  weaveScale: 0,
  weaveMag: -1,
  ammoMultiplier: 4
});

module.exports = {
//Catalyst
  catalystCopper:catalystCopper,
  catalystLead:catalystLead,
  catalystMetaglass:catalystMetaglass,
  catalystGraphite:catalystGraphite,
  catalystTitanium:catalystTitanium,
  catalystThorium:catalystThorium,
  catalystScrap:catalystScrap,
  catalystSilicon:catalystSilicon,
  catalystPlastanium:catalystPlastanium,
  catalystPhaseFabric:catalystPhaseFabric,
  catalystBlastCompound:catalystBlastCompound,
  catalystPyratite:catalystPyratite,
  catalystAdamantite:catalystAdamantite,
  catalystDetonatite:catalystDetonatite,
  catalystIce:catalystIce,
//Phoenix
  phoenixBlast:phoenixBlast,
  phoenixTitanium:phoenixTitanium,
  phoenixDetonatite:phoenixDetonatite,
  phoenixAdamantite: phoenixAdamantite,
//Ridge
  ridgeCopper:ridgeCopper,
  ridgeGraphite:ridgeGraphite,
  ridgeSilicon:ridgeSilicon,
  ridgeIce:ridgeIce,
//Microburst
  microburstGraphite:microburstGraphite,
  microburstPyra:microburstPyra,
  microburstSilicon:microburstSilicon,
  microburstCopper:microburstCopper,
  microburstMeta:microburstMeta,
//Megaburst
  megaburstSilicon:megaburstSilicon,
  megaburstGraphite:megaburstGraphite,
  megaburstThorium:megaburstThorium,
  megaburstBlast:megaburstBlast,
  megaburstPyra:megaburstPyra,
//Arfazatan
  arfazatanLead:arfazatanLead,
  arfazatanScrap:arfazatanScrap,
  arfazatanDetonatite:arfazatanDetonatite,
  arfazatanTitanium:arfazatanTitanium,
  arfazatanPhaseFabric:arfazatanPhaseFabric,
  arfazatanCoal:arfazatanCoal,
  arfazatanSpore:arfazatanSpore,
  arfazatanIce:arfazatanIce,
  arfazatanOdium:arfazatanOdium,
//Fragment
  fragmentMetaglass:fragmentMetaglass,
  fragmentScrap:fragmentScrap,
  fragmentIce:fragmentIce,
  fragmentOdium:fragmentOdium,
//ScatterMKII
  scattermk2Lead:scattermk2Lead,
  scattermk2Ice:scattermk2Ice,
  scattermk2Titanium:scattermk2Titanium,
  scattermk2Graphite:scattermk2Graphite,
  scattermk2Metaglass:scattermk2Metaglass,
  scattermk2Detonatite:scattermk2Detonatite,
//Shockwave
  shockwaveGraphite:shockwaveGraphite,
  shockwaveSilicon:shockwaveSilicon,
  shockwavePlastanium:shockwavePlastanium,
//Statical
  staticalPyratite:staticalPyratite,
  staticalDetonatite:staticalDetonatite,
  staticalPlast:staticalPlast,
  staticalScrap:staticalScrap,
  staticalMetaglass:staticalMetaglass,
  staticalSilicon:staticalSilicon,
  staticalIce:staticalIce,
  staticalSpore:staticalSpore,
  staticalSurge:staticalSurge,
//SwamerMKII
  swarmermk2Pyratite:swarmermk2Pyratite,
  swarmermk2Blast:swarmermk2Blast,
  swarmermk2Meta:swarmermk2Meta,
  swarmermk2Plastanium:swarmermk2Plastanium,
  swarmermk2Surge:swarmermk2Surge,
  swarmermk2RefinedOdium:swarmermk2RefinedOdium,
  swarmermk2Detonatite:swarmermk2Detonatite,
  swarmermk2Adamantite: swarmermk2Adamantite
};