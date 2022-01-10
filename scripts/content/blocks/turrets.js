const CAitems = require("content/items");
const CAstatus = require("content/statusEffects");
const CAbullet = require("content/bullets");

// Add to vanilla turrets
const scaleShot = extend(LiquidBulletType, CAitems.scale, {
    knockback: 0.8,
    status: CAstatus.infected
});
const heavyScaleShot = extend(LiquidBulletType, CAitems.scale, {
    knockback: 0.5,
    damage: 0.3,
    lifetime: 50,
    speed: 4,
    puddleSize: 8,
    orbSize: 4,
    status: CAstatus.infected,
    statusDuration: 240
});
Blocks.wave.ammoTypes.put(
    CAitems.scale, scaleShot
);
Blocks.tsunami.ammoTypes.put(
    CAitems.scale, heavyScaleShot
);
// Evaporator
const vaporizer = extend(ContinuousLaserBulletType, 583.333333333333, {
    width: 15,
    status: CAstatus.evaporating,
    statusDuration: 10
});
const evaporator = extend(LaserTurret, "evaporator", {
    localizedName: "The Evaporator",
    description: "Turret which uses the radioactivity of adamantite to create a powerful laser beam. Needs lots of time to charge. Requires cryogenic fluid.",
    health: 12000,
    size: 10,
    researchCostMultiplier: 0.5,
    hasItems: false,
    hasLiquids: true,
    hasPower: true,
    liquidCapacity: 80,
    buildCostMultiplier: 0.5,
    powerUse: 100,
    range: 260,
    reloadTime: 30,
    spread: 0,
    recoilAmount: 1,
    cooldown: 0.05,
    restitution: 0.05,
    rotateSpeed: 2,
    shootCone: 5,
    shootShake: 6,
    shootSound: loadSound("vaporizerShoot"),
    loopSound: loadSound("vaporizerLoop"),
    loopSoundVolume: 2,
    firingMoveFract: 0.5,
    shootDuration: 480,
    coolantMultiplier: 0.1,
    targetAir: true,
    targetGround: true,
    shootType: vaporizer,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        CAitems.adamantite, 1500,
        Items.silicon, 2000,
        Items.surgeAlloy, 2000,
        Items.graphite, 1500,
        Items.titanium, 1200
    )
});
evaporator.consumes.power(14);
evaporator.consumes.liquid(CAitems.cryogenicFluid, 1.333333333333);
// Catalyst
const catalyst = extend(ItemTurret, "catalyst", {
    localizedName: "Catalyst",
    description: "A powerful high range sniper turret designed to take down adamantite units. Can fire most items for ammo.",
    health: 4000,
    size: 4,
    researchCostMultiplier: 0.5,
    reloadTime: 300,
    range: 600,
    targetAir: true,
    targetGround: true,
    recoilAmount: 2,
    restitution: 0.1,
    ammoUseEffect: Fx.casing1,
    shootSound: loadSound("catalyst"),
    shootShake: 6,
    inaccuracy: 0,
    rotateSpeed: 5,
    coolantMultiplier: 0.90909090909,
    coolantUsage: 1,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.silicon, 1000,
        Items.graphite, 1000,
        Items.thorium, 800,
        Items.plastanium, 600,
        Items.surgeAlloy, 400,
        CAitems.adamantite, 300
    )
});
catalyst.ammo(
Items.copper, CAbullet.catalystCopper,
Items.lead, CAbullet.catalystLead,
Items.metaglass, CAbullet.catalystMetaglass,
Items.graphite, CAbullet.catalystGraphite,
Items.titanium, CAbullet.catalystTitanium,
Items.thorium, CAbullet.catalystThorium,
Items.scrap, CAbullet.catalystScrap,
Items.silicon, CAbullet.catalystSilicon,
Items.plastanium, CAbullet.catalystPlastanium,
Items.phaseFabric, CAbullet.catalystPhaseFabric,
Items.blastCompound, CAbullet.catalystBlastCompound,
Items.pyratite, CAbullet.catalystPyratite,
CAitems.adamantite, CAbullet.catalystAdamantite,
CAitems.detonatite, CAbullet.catalystDetonatite,
CAitems.ice, CAbullet.catalystIce
);
// Phoenix
const phoenix = extend(ItemTurret, "phoenix", {
    localizedName: "Phoenix",
    description: "Sprays small shells at anything within range.",
    health: 1500,
    size: 4,
    reloadTime: 1,
    range: 130,
    targetAir: false,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 6,
    spread: 0.3,
    velocityInaccuracy: 0.08,
    rotateSpeed: 8,
    coolantMultiplier: 0.0,
    canOverdrive: true,
    shots: 10,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.titanium, 800,
        Items.graphite, 500, 
        Items.thorium, 400,
        Items.plastanium, 325,
        Items.surgeAlloy, 280
    )
});
phoenix.ammo(
    Items.blastCompound, CAbullet.phoenixBlast,
    Items.titanium, CAbullet.phoenixTitanium,
    CAitems.detonatite, CAbullet.phoenixDetonatite,
    CAitems.adamantite, CAbullet.phoenixAdamantite
);
// Ridge
const ridge = extend(ItemTurret, "ridge", {
    localizedName: "Ridge",
    description: "A better, larger advanced duo.",
    health: 1600,
    size: 2,
    reloadTime: 15,
    range: 216,
    shots: 2,
    spread: 2,
    alternate: true,
    targetAir: true,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    canOverdrive: false,
    inaccuracy: 2,
    rotateSpeed: 8,
    coolantMultiplier: 1,
    coolantUsage: 0.083333333333333333333333,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 220
    )
});
ridge.ammo(
    Items.copper, CAbullet.ridgeCopper,
    Items.graphite, CAbullet.ridgeGraphite,
    Items.silicon, CAbullet.ridgeSilicon,
    CAitems.ice, CAbullet.ridgeIce
);
// Edge
const edgeShot = extend(BasicBulletType, 8, 10, {
    width: 8,
    height: 8,
    shootEffect: Fx.shootSmall,
    smokeEffect: Fx.shootSmallSmoke
});
const edge = extend(ItemTurret, "edge", {
    localizedName: "Edge",
    description: "An experimental turret, fires copper rounds at extreme speeds. Unable to be boosted with coolant.",
    health: 1500,
    size: 2,
    reloadTime: 1,
    range: 210,
    targetAir: true,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 0,
    rotateSpeed: 8,
    coolantMultiplier: 0,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.lead, 200,
        Items.graphite, 215,
        Items.thorium, 220
    )
});
edge.ammo(Items.copper, edgeShot);
// Microburst
const microburst = extend(ItemTurret, "microburst", {
    localizedName: "Microburst",
    description: "Fires a spread of 6 bullets.",
    health: 360,
    size: 2,
    reloadTime: 30,
    range: 104,
    targetAir: false,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 16,
    rotateSpeed: 6,
    coolantMultiplier: 6,
    shots: 6,
    spread: 10,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.lead, 40,
        Items.copper, 70,
        Items.graphite, 30
    )
});
microburst.ammo(
    Items.graphite, CAbullet.microburstGraphite,
    Items.pyratite, CAbullet.microburstPyra,
    Items.silicon, CAbullet.microburstSilicon,
    Items.copper, CAbullet.microburstCopper,
    Items.metaglass, CAbullet.microburstMeta
);
// Megaburst
const megaburst = extend(ItemTurret, "megaburst", {
    localizedName: "Megaburst",
    description: "Upgraded version of the Microburst with more range and faster fire-rate.",
    health: 800,
    size: 3,
    reloadTime: 30,
    range: 160,
    targetAir: false,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    rotateSpeed: 8,
    coolantMultiplier: 6,
    shots: 16,
    inaccuracy: 5,
    spread: 5,
    shootCone: 10,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.titanium, 80,
        Items.lead, 200,
        Items.graphite, 150,
        Items.surgeAlloy, 10
    )
});
megaburst.ammo(
Items.silicon, CAbullet.megaburstSilicon,
Items.graphite, CAbullet.megaburstGraphite,
Items.thorium, CAbullet.megaburstThorium,
Items.blastCompound, CAbullet.megaburstBlast,
Items.pyratite, CAbullet.megaburstPyra
);
// Arfazatan
const arfazatan = extend(ItemTurret, "arfazatan", {
    localizedName: "Arfazatan",
    description: "Shoots several types of clustered bullets. Uses unsual ammo, good when there are few resources to spare.",
    health: 1500,
    size: 2,
    reloadTime: 15,
    range: 200,
    targetAir: true,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 0,
    rotateSpeed: 6,
    coolantMultiplier: 8,
    coolantUsage: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.lead, 250,
        Items.graphite, 100,
        Items.titanium, 75,
        CAitems.odium, 300
    )
});
arfazatan.ammo(
    Items.lead, CAbullet.arfazatanLead,
    Items.scrap, CAbullet.arfazatanScrap,
    CAitems.detonatite, CAbullet.arfazatanDetonatite,
    Items.titanium, CAbullet.arfazatanTitanium,
    Items.phaseFabric, CAbullet.arfazatanPhaseFabric,
    Items.sporePod, CAbullet.arfazatanSpore,
    CAitems.ice, CAbullet.arfazatanIce,
    CAitems.odium, CAbullet.arfazatanOdium
);
// Fragment
const fragment = extend(ItemTurret, "fragment", {
    localizedName: "Fragment",
    description: "Fires frag bullets at nearby ground targets.",
    health: 1800,
    size: 2,
    reloadTime: 20,
    range: 144,
    shots: 3,
    burstSpacing:  5,
    targetAir: false,
    targetGround: true,
    ammoUseEffect: Fx.casing2,
    inaccuracy: 10,
    rotateSpeed: 12,
    coolantMultiplier: 2.5,
    coolantUsage: 1,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.metaglass, 300,
        Items.lead, 180,
        CAitems.odium, 60
    )
});
fragment.ammo(
    Items.metaglass, CAbullet.fragmentMetaglass,
    Items.scrap, CAbullet.fragmentScrap,
    CAitems.ice, CAbullet.fragmentIce,
    CAitems.odium, CAbullet.fragmentOdium
);
// Scatter MKII
const scatterMKII = extend(ItemTurret, "mk2-scatter", {
    localizedName: "Scatter MKII",
    description: "A better version of scatter that fires more ammo and has longer range.",
    health: 1000,
    size: 3,
    reloadTime: 15,
    shots: 1,
    range: 240,
    targetAir: true,
    targetGround: false,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 0,
    rotateSpeed: 10,
    coolantUsage: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 150,
        Items.lead, 100,
        Items.titanium, 50,
        Items.graphite, 50
    )
});
scatterMKII.ammo(
    Items.lead, CAbullet.scattermk2Lead,
    CAitems.ice, CAbullet.scattermk2Ice,
    Items.titanium, CAbullet.scattermk2Titanium,
    Items.graphite, CAbullet.scattermk2Graphite,
    Items.metaglass, CAbullet.scattermk2Metaglass,
    CAitems.detonatite, CAbullet.scattermk2Detonatite
);
// Shockwave
const shockwave = extend(ItemTurret, "shockwave", {
    alocalizedName: "Shockwave",
    description: "Fires rapid bursts of bullets.",
    health: 1500,
    size: 3,
    reloadTime: 180,
    shots: 12,
    burstSpacing: 3,
    xRand: 8,
    range: 90,
    recoilAmount: 1.5,
    targetAir: true,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 10,
    rotateSpeed: 15,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.titanium, 220,
        Items.lead, 100,
        Items.plastanium, 40,
        Items.graphite, 80
    )
});
shockwave.ammo(
    Items.graphite, CAbullet.shockwaveGraphite,
    Items.silicon, CAbullet.shockwaveSilicon,
    Items.plastanium, CAbullet.shockwavePlastanium
);
// Statical
const statical = extend(ItemTurret, "statical", {
    localizedName: "Statical",
    description: "Only fires ammo types with special properties.",
    health: 1500,
    size: 4,
    reloadTime: 15,
    shots: 2,
    spread: 4,
    range: 420,
    alternate: true,
    targetAir: true,
    targetGround: true,
    ammoUseEffect: Fx.casing1,
    inaccuracy: 2,
    rotateSpeed: 8,
    coolantMultiplier: 3,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.surgeAlloy, 25,
        Items.titanium, 200,
        Items.silicon, 200,
        Items.lead, 100
    )
});
statical.ammo(
    Items.pyratite, CAbullet.staticalPyratite,
    CAitems.detonatite, CAbullet.staticalDetonatite,
    Items.plastanium, CAbullet.staticalPlast,
    Items.scrap, CAbullet.staticalScrap,
    Items.metaglass, CAbullet.staticalMetaglass,
    Items.silicon, CAbullet.staticalSilicon,
    CAitems.ice, CAbullet.staticalIce,
    Items.sporePod, CAbullet.staticalSpore,
    Items.surgeAlloy, CAbullet.staticalSurge
);
// Sykkh
const sykkhShot1 = extend(ArtilleryBulletType, 4, 30, "shell", {
    frontColor: Color.valueOf("FFAA5F"),
    backColor: Color.valueOf("FFAA5F"),
    trailColor: Color.valueOf("FFAA5F"),
    trailEffect: Fx.incendTrail,
    hitEffect: Fx.blastExplosion,
    lifetime: 90,
    splashDamage: 30,
    splashDamageRadius: 32,
    knockback: 0.5,
    status: StatusEffects.burning,
    makeFire: true,
    width: 15,
    height: 15,
    ammoMultiplier: 2
});
const sykkh = extend(ItemTurret, "mk1-sykkh", {
    localizedName: "Sykkh",
    description: "Shoots a giant cluster of pyratite at enemies.",
    health: 1000,
    liquidCapacity: 60,
    size: 2,
    reloadTime: 60,
    range: 256,
    minRange: 16,
    targetAir: false,
    targetGround: true,
    shots: 6,
    ammoUseEffect: Fx.casing3Double,
    shootSound: Sounds.artillery,
    inaccuracy: 2,
    velocityInaccuracy: 0.1,
    coolantMultiplier: 4.8,
    rotateSpeed: 6,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 50,
        Items.lead, 100,
        Items.graphite, 60,
        Items.plastanium, 10
    )
});
sykkh.ammo(Items.pyratite, sykkhShot1);
// Sykkh MKII
const sykkhSpike = extend(BasicBulletType, 5, 40, "chaos-arranity-spike1", {
    frontColor: Color.valueOf("F9A3C7"),
    backColor: Color.valueOf("F9A3C7"),
    lifetime: 20,
    pierce: true,
    width: 10,
    height: 10,
    shrinkY: -0.2,
    shrinkX: 0.6
});
const sykkhShot2 = extend(ArtilleryBulletType, 4, 60, "chaos-arranity-cluster-shot", {
    frontColor: Color.valueOf("FF795E"),
    backColor: Color.valueOf("FF795E"),
    hitEffect: Fx.blastExplosion,
    lifetime: 90,
    knockback: 0.8,
    splashDamage: 60,
    splashDamageRadius: 64,
    width: 15,
    height: 15,
    shrinkY: 0,
    fragVelocityMin: 1,
    fragBullets:10,
    fragBullet: sykkhSpike,
    ammoMultiplier: 2
});
const sykkhMKII = extend(ItemTurret, "mk2-sykkh", {
    localizedName: "Sykkh MKII",
    description: "Shoots medium sized clusters of Blast Compound, can do severe damage on groups of enemies. The clusters of blast compound explode into thorium spikes.",
    health: 2000,
    liquidCapacity: 60,
    size: 2,
    reloadTime: 60,
    range: 288,
    minRange: 16,
    targetAir: true,
    targetGround: true,
    shots: 1,
    ammoUseEffect: Fx.casing3Double,
    shootSound: Sounds.artillery,
    inaccuracy: 1,
    coolantMultiplier: 4.8,
    rotateSpeed: 5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 100,
        Items.lead, 150,
        Items.graphite, 110,
        Items.plastanium, 10,
        Items.surgeAlloy, 15,
        CAitems.odium, 5
    )
});
sykkhMKII.ammo(Items.blastCompound, sykkhShot2);
// Swarmer MKII
const swarmerMKII = extend(ItemTurret, "mk2-swarmer", {
    localizedName: "Swarmer MKII",
    description: "A heavily improved swarmer, with no size increase needed. Fires more rockets, with better homing abilities. Faster fire rate and longer range.",
    health: 2000,
    size: 2,
    reloadTime: 60,
    burstSpacing: 1,
    range: 240,
    shots: 20,
    spread: 1,
    xRand: 4,
    alternate: true,
    targetAir: true,
    targetGround: true,
    shootSound: Sounds.missile,
    inaccuracy: 10,
    rotateSpeed: 5,
    coolantMultiplier: 5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        CAitems.refinedOdium, 225,
        Items.silicon, 330,
        CAitems.odium, 210
    )
});
swarmerMKII.ammo(
    Items.pyratite, CAbullet.swarmermk2Pyratite,
    Items.blastCompound, CAbullet.swarmermk2Blast,
    Items.metaglass, CAbullet.swarmermk2Meta,
    Items.plastanium, CAbullet.swarmermk2Plastanium,
    Items.surgeAlloy, CAbullet.swarmermk2Surge,
    CAitems.refinedOdium, CAbullet.swarmermk2RefinedOdium,
    CAitems.detonatite, CAbullet.swarmermk2Detonatite,
    CAitems.adamantite, CAbullet.swarmermk2Adamantite
);
// Arc MKII
const arcSpark1 = extend(LightningBulletType, {
    damage: 24,
});
const arcMKII = extend(PowerTurret, "mk2-arc", {
    localizedName: "Arc MKII",
    description: "An upgraded version of arc. Fires more deadly arcs of electricity.",
    health: 600,
    size: 2,
    powerUse: 5,
    shootSound: Sounds.spark,
    range: 144,
    reloadTime: 8,
    rotateSpeed: 5,
    shootShake: 2,
    cooldown: 0.05,
    coolantMultiplier: 9,
    coolantUsage: 0.5,
    shootType: arcSpark1,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.lead, 250,
        Items.titanium, 75,
        Items.silicon, 50,
        Items.graphite, 50
    )
});
// Arc MKIII
const arcSpark2 = extend(LightningBulletType, {
    damage: 28,
});
const arcMKIII = extend(PowerTurret, "mk3-arc", {
    localizedName: "Arc MKIII",
    description: "Fires a storm of arcs.",
    health: 3000,
    size: 4,
    powerUse: 13.333333333333,
    shootSound: Sounds.spark,
    range: 200,
    reloadTime: 1,
    cooldown: 0.05,
    rotateSpeed: 5,
    shootShake: 3,
    coolantMultiplier: 3.8,
    coolantUsage: 1,
    shootType: arcSpark2,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.surgeAlloy, 300,
        Items.silicon, 500,
        Items.graphite, 200
    )
});
// ARC
const ARClightning = extend(LightningBulletType, {
    damage: 10000,
    lightningLength: 100,
    status: CAstatus.electrified,
    statusDuration: 10
});
const theARC = extend(PowerTurret, "the-arc", {
    localizedName: "ARC",
    description: "The most powerful arc based turret to exist. Fires a deathly wave of arcs over insane distances.",
    health: 180000,
    size: 16,
    hasItems: true,
    hasLiquids: true,
    hasPower: true,
    itemCapacity: 10,
    liquidCapacity: 10,
    buildCostMultiplier: 0.5,
    powerUse: 500,
    shootSound: Sounds.spark,
    range: 800,
    reloadTime: 0.5,
    shots: 8,
    burstSpacing: 1,
    spread: 0,
    recoilAmount: 5,
    cooldown: 40,
    rotateSpeed: 5,
    shootCone: 5,
    shootShake: 5,
    coolantMultiplier: 1.17216117216,
    coolantUsage: 5,
    targetAir: true,
    targetGround: true,
    shootType: ARClightning,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.turrets,
    category: Category.turret,
    requirements: ItemStack.with(
        CAitems.adamantite, 20000,
        Items.silicon, 30000,
        Items.graphite, 25000,
        Items.surgeAlloy, 18000,
        Items.phaseFabric, 10000,
        Items.plastanium, 20000,
        Items.lead, 80000
    )
});

module.exports = {
    evaporator:evaporator,
    catalyst:catalyst,
    phoenix:phoenix,
    ridge:ridge,
    edge:edge,
    microburst:microburst,
    megaburst:megaburst,
    arfazatan:arfazatan,
    fragment:fragment,
    scatterMKII:scatterMKII,
    shockwave:shockwave,
    statical:statical,
    sykkh:sykkh,
    sykkhMKII:sykkhMKII,
    swarmerMKII:swarmerMKII,
    arcMKII:arcMKII,
    arcMKIII:arcMKIII,
    theARC:theARC
}