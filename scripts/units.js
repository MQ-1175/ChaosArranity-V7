const CAstatus = require("content2/statusEffects");
const CAitems = require("content2/items");
const recons = require("content2/blocks/units");
const Weapons = require("content2/weapons");

// Core
const delta = extend(UnitType, "delta", {
  localizedName:  "Delta",
  description: "Defends the Intel core from enemies. Builds structures. Capable of picking up payloads.",
  speed: 4,
  accel: 0.1,
  drag: 0.05,
  flying: true,
  health: 360,
  commandLimit: 8,
  payloadCapacity: 384,
  isCounted: false,
  buildSpeed: 4,
  mineSpeed: 10,
  mineTier: 3,
  itemCapacity: 100,
  engineOffset: 9,
  engineSize: 4,
  hitSize: 18
});
delta.constructor = () => extend(PayloadUnit, {});
delta.defaultController = () => extend(BuilderAI, {});
delta.weapons.add(Weapons.deltaLauncher);

// Miner
const magine = extend(UnitType, "magine", {
  localizedName: "Magine",
  description: "Automatically mines copper and lead, depositing it into the core. Protected by a small shield. Self-repairing.",
  speed: 1.6,
  accel: 0.1,
  drag: 0.04,
  flying: true,
  health: 120,
  armor: 2,
  mineSpeed: 3,
  mineTier: 2,
  itemCapacity: 50,
  lowAltitude: true,
  commandLimit: 2,
  engineOffset: 8,
  engineSize: 3,
  hitSize: 15,
  abilities: new Seq([new ForceFieldAbility(16, 0.0555555555555555555555555, 200, 500), new RepairFieldAbility(15, 480, 16)])
});
magine.constructor = () => extend(UnitEntity, {});
magine.defaultController = () => extend(MinerAI, {});

const rivarian = extend(UnitType, "rivarian", {
  localizedName: "Rivarian",
  description: "Automatically mines copper and lead, depositing it into the core. Protected by a small shield. Self-repairing.",
  speed: 1.66,
  accel: 0.1,
  drag: 0.04,
  flying: true,
  health: 300,
  armor: 5,
  mineSpeed: 4.25,
  mineTier: 2,
  itemCapacity: 120,
  lowAltitude: true,
  commandLimit: 2,
  engineOffset: 8,
  engineSize: 5,
  hitSize: 16,
  abilities: new Seq([new ForceFieldAbility(18, 0.0833333333333333333333333, 300, 500), new RepairFieldAbility(30, 480, 18)])
});
rivarian.constructor = () => extend(UnitEntity, {});
rivarian.defaultController = () => extend(MinerAI, {});

const antari = extend(UnitType, "antari", {
  localizedName: "Antari",
  description: "Automatically mines copper, lead, and titanium, depositing it into the core. Protected by a small shield. Self-repairing.",
  speed: 2.10,
  accel: 0.1,
  drag: 0.04,
  flying: true,
  health: 600,
  armor: 8,
  mineSpeed: 7.5,
  mineTier: 3,
  itemCapacity: 240,
  lowAltitude: true,
  commandLimit: 2,
  engineOffset: 12,
  engineSize: 5,
  hitSize: 20,
  abilities: new Seq([new ForceFieldAbility(24, 0.1111111111111111111111111, 400, 500), new RepairFieldAbility(60, 360, 24)])
});
antari.constructor = () => extend(UnitEntity, {});
antari.defaultController = () => extend(MinerAI, {});

const excavation = extend(UnitType, "excavation", {
  localizedName: "Excavation",
  description: "Automatically mines copper, lead, and titanium, depositing it into the core. Protected by a small shield. Self-repairing.",
  speed: 3,
  accel: 0.1,
  drag: 0.04,
  flying: true,
  health: 10000,
  armor: 12,
  mineSpeed: 14,
  mineTier: 3,
  itemCapacity: 320,
  lowAltitude: true,
  commandLimit: 2,
  engineOffset: 15,
  engineSize: 6,
  hitSize: 21,
  abilities: new Seq([new ForceFieldAbility(24, 1.5277777777777777777777777, 5500, 500), new RepairFieldAbility(180, 240, 24), new UnitSpawnAbility(magine, 3600, 0, 0), new UnitSpawnAbility(magine, 3600, 0, 0)])
});
excavation.constructor = () => extend(UnitEntity, {});
excavation.defaultController = () => extend(MinerAI, {});

const monarch = extend(UnitType, "monarch", {
  localizedName: "Monarch",
  description: "Automatically mines copper, lead, titanium, and thorium, depositing it into the core. Protected by a small shield. Self-repairing.",
  speed: 2.4,
  accel: 0.1,
  drag: 0.04,
  flying: true,
  health: 24000,
  armor: 16,
  mineSpeed: 20,
  mineTier: 4,
  itemCapacity: 420,
  commandLimit: 0,
  lowAltitude: true,
  engineOffset: 15,
  engineSize: 6,
  hitSize: 24,
  abilities: new Seq([new ForceFieldAbility(32, 3.3333333333333333333333333, 12000, 500), new RepairFieldAbility(340, 120, 32), new UnitSpawnAbility(rivarian, 3600, 0, 0), new UnitSpawnAbility(rivarian, 3600, 0, 0)])
});
monarch.constructor = () => extend(UnitEntity, {});
monarch.defaultController = () => extend(MinerAI, {});

// Ground
const dalish = extend(UnitType, "dalish", {
  localizedName: "Dalish",
  description: "An annoying extremely fast tiny ground unit. Very weak, but extremely high rate of fire. Capable of flight.",
  speed: 3,
  accel: 1.75,
  drag: 0.4,
  flying: false,
  health: 20,
  itemCapacity: 0,
  commandLimit: 3,
  canBoost: true,
  boostMultiplier: 2,
  engineOffset: 4,
  range: 40,
  hitSize: 5
});
dalish.constructor = () => extend(UnitEntity, {});
dalish.weapons.add(Weapons.miniCannon);

const marginator = extend(UnitType, "marginator", {
  localizedName: "Marginator",
  description: "Basic ground unit that fires incendiary bullets at nearby threats.",
  speed: 0.4,
  accel: 1.75,
  drag: 0.4,
  flying: false,
  health: 450,
  armor: 1,
  engineOffset: 5.5,
  range: 80,
  hitSize: 10
});
marginator.constructor = () => extend(UnitEntity, {});
marginator.weapons.add(Weapons.marginatorWeapon);

const relametion = extend(UnitType, "relametion",{
  localizedName: "Relametion",
  description: "Fires homing missles filled with slag.",
  speed: 0.4,
  accel: 5,
  drag: 0.4,
  flying: false,
  health: 800,
  armor: 4,
  engineOffset: 5.5,
  commandLimit: 6,
  range: 120,
  hitSize: 15
});
relametion.constructor = () => extend(UnitEntity, {});
relametion.weapons.add(Weapons.relametionWeapon);

const arcaster = extend(UnitType, "arcaster",{
  localizedName: "Arcaster",
  description: "Fires arcs at nearby threats.",
  speed: 0.3,
  flying: false,
  health: 7500,
  canBoost: true,
  engineSize: 6,
  boostMultiplier: 2,
  armor: 7,
  engineOffset: 6.5,
  range: 80,
  hitSize: 15
});
arcaster.constructor = () => extend(UnitEntity, {});
arcaster.weapons.add(Weapons.arcasting);

const titan = extend(UnitType, "titan", {
  localizedName: "Titan",
  description: "A heavily enhanced reign, with two vela cannons to destroy enemy fortifications with ease. Not so great for fighting enemy units.",
  speed: 0.2,
  accel: 10,
  flying: false,
  health: 20000,
  armor: 10,
  canDrown: false,
  engineOffset: 5.5,
  legLength: 20,
  legPairOffset: 6,
  legSplashDamage: 80,
  legSplashRange: 40,
  range: 500,
  hitSize: 30,
  immunities: ObjectSet.with([
      StatusEffects.burning,
  ])
});
titan.constructor = () => extend(LegsUnit, {});
titan.weapons.add(Weapons.titanWeapon);

// Fire
  const fireburster = extend(UnitType, "fireburster", {
    localizedName: "Fireburster Fighter",
    description: "A flying mace, but weaker and cheaper.",
    speed: 1.7,
    flying: true,
    health: 220,
    armor: 2,
    commandLimit: 6,
    engineOffset: 5.5,
    hitSize: 8,
    immunities: ObjectSet.with([
        StatusEffects.burning,
        StatusEffects.melting
    ])
  });
  fireburster.constructor = () => extend(UnitEntity, {});
  fireburster.weapons.add(Weapons.firebursterWeapon);

const silocrafter = extend(UnitType, "silocrafter", {
  localizedName:  "Silocrafter",
  description: "Fires a barrage of missles.",
  speed: 1.7,
  accel: 0.08,
  drag: 0.016,
  mineTier: 1,
  flying: true,
  health: 200,
  armor: 2,
  engineOffset: 5.5,
  range: 100,
  hitSize: 14,
  immunities: ObjectSet.with([
    StatusEffects.burning,
    StatusEffects.melting
  ])
});
silocrafter.constructor = () => extend(UnitEntity, {});
silocrafter.weapons.add(Weapons.silocrafterWeapon);

  const incinerator = extend(UnitType, "incinerator", {
    localizedName: "Incinerator",
    description: "Fires homing firefrag missiles.",
    speed: 1.4,
    accel: 0.04,
    drag: 0.016,
    flying: true,
    health: 640,
    armor: 5,
    lowAltitude: true,
    engineOffset: 8,
    engineSize: 3,
    hitSize: 16,
    immunities: ObjectSet.with([
        StatusEffects.burning,
        StatusEffects.melting
    ])
  });
  incinerator.constructor = () => extend(UnitEntity, {});
  incinerator.weapons.add(Weapons.incineratorWeapon, Weapons.incineratorWeapon2);

const ignition = extend(UnitType, "ignition", {
  localizedName: "Ignition",
  description: "A large helicopter based unit, design to wreak havoc with its fire enhanced barrage of attacks. Well armored.",
  speed: 1.3,
  accel: 0.1,
  drag: 0.1,
  flying: true,
  health: 4000,
  armor: 8,
  rotateSpeed: 3,
  faceTarget: true,
  lowAltitude: true,
  commandLimit: 6,
  engineOffset: 30,
  engineSize: 4,
  hitSize: 27,
  immunities: ObjectSet.with([
    StatusEffects.burning,
    StatusEffects.melting
  ]),
  draw(unit){
  this.super$draw(unit);
  Draw.rect("chaos-arranity-ignition-rotors", unit.x, unit.y, Time.time * -6);
  }
});
ignition.constructor = () => extend(UnitEntity, {});
ignition.weapons.add(Weapons.ignitionRocket, Weapons.ignitionGun);

const inferno = extend(UnitType, "inferno", {
  localizedName: "Inferno",
  description: "Starts massive fires with its barrage of weapons. Weaker than other tier 5 units, but much faster.",
  speed: 1,
  accel: 0.08,
  drag: 0.08,
  flying: true,
  health: 13800,
  armor: 11,
  rotateSpeed: 4,
  faceTarget: true,
  lowAltitude: true,
  engineOffset: 43,
  engineSize: 2,
  hitSize: 35,
  immunities: ObjectSet.with([
    StatusEffects.burning,
    StatusEffects.melting
  ]), 
  draw(unit){
  this.super$draw(unit);
  Draw.rect("chaos-arranity-inferno-rotors", unit.x, unit.y, Time.time * 8);
  }
});
inferno.constructor = () => extend(UnitEntity, {});
inferno.weapons.add(Weapons.infernoRockets, Weapons.infernoGun, Weapons.infernoCannon);

// Commander

const officer = extend(UnitType, "officer", {
  localizedName: "Officer",
  description: "Commands large amounts of allies. Heals allies. Sprays water at nearby enemies to slow them down and knock them back.",
  speed: 1,
  accel: 0.1,
  drag: 0.1,
  flying: false,
  health: 300,
  canBoost: true,
  commandLimit: 8,
  itemCapacity: 60,
  canDrown: false,
  boostMultiplier: 1.6,
  engineOffset: 5.5,
  mineTier: 2,
  mineSpeed: 2,
  buildSpeed: 0.5,
  hitSize: 10,
  immunities: ObjectSet.with([
    StatusEffects.wet
]), 
  abilities: new Seq([new RepairFieldAbility(25, 360, 128), new ForceFieldAbility(64, 1, 140, 600)])
});
officer.constructor = () => extend(MechUnit, {});
officer.weapons.add(Weapons.waterGun);

const chief = extend(UnitType, "chief", {
  localizedName: "Chief",
  description: "Commands large amounts of allies. Heals allies. Fires low damage projectiles.",
  speed: 0.8,
  accel: 0.1,
  drag: 0.1,
  flying: false,
  health: 500,
  armor: 5,
  canBoost: true,
  commandLimit: 8,
  itemCapacity: 90,
  boostMultiplier: 1.5,
  engineOffset: 5.5,
  mineTier: 2,
  mineSpeed: 2.25,
  buildSpeed: 0.7,
  hitSize: 12,
  abilities: new Seq([new RepairFieldAbility(35, 360, 128), new ForceFieldAbility(128, 2, 225, 600), new ShieldRegenFieldAbility(60, 60, 720, 128)])
});
chief.constructor = () => extend(MechUnit, {});
chief.weapons.add(Weapons.chiefWeapon, Weapons.chiefGun);

const manager = extend(UnitType, "manager", {
  localizedName: "Manager",
  description: "Commands large amounts of allies. Heals and boosts allies. Fires low damage projectiles.",
  speed: 0.6,
  accel: 0.1,
  drag: 0.1,
  flying: false,
  health: 900,
  armor: 7,
  canBoost: true,
  commandLimit: 8,
  itemCapacity: 120,
  canDrown: false,
  boostMultiplier: 1.6,
  engineOffset: 5.5,
  mineTier: 3,
  mineSpeed: 2.75,
  buildSpeed: 1.0,
  hitSize: 17,
  abilities: new Seq([new RepairFieldAbility(45, 360, 128), new StatusFieldAbility(CAstatus.boostT3, 60, 60, 128), new ForceFieldAbility(128, 0.5, 360, 600), new ShieldRegenFieldAbility(7.666666666666, 115, 60, 128)])
});
manager.constructor = () => extend(MechUnit, {});
manager.weapons.add(Weapons.managerWeapon, Weapons.managerGun);

const director = extend(UnitType, "director", {
  localizedName: "Director",
  description: "Heals and boosts allies. Fires salvos of low damage missiles. Shielded. Builds Crawlers.",
  speed: 0.5,
  accel: 0.1,
  drag: 0.1,
  flying: false,
  health: 9000,
  armor: 11,
  canBoost: true,
  commandLimit: 8,
  itemCapacity: 150,
  canDrown: false,
  boostMultiplier: 1.6,
  engineOffset: 5.5,
  mineTier: 3,
  mineSpeed: 4,
  buildSpeed: 1.25,
  hitSize: 30,
  abilities: new Seq([new RepairFieldAbility(50, 360, 128), new StatusFieldAbility(CAstatus.boostT4, 60, 60, 128), new ForceFieldAbility(128, 0.7, 1340, 720), new UnitSpawnAbility(dalish, 1800, -10, -11), new UnitSpawnAbility(dalish, 1800, 10, -11), new ShieldRegenFieldAbility(220, 220, 900, 128)])
});
director.constructor = () => extend(MechUnit, {});
director.weapons.add(Weapons.directorArm);

const leader = extend(UnitType, "leader", {
  localizedName: "Leader",
  description: "Heals and boosts allies. Shielded. Builds Daggers.",
  speed: 0.4,
  accel: 0.1,
  drag: 0.1,
  flying: false,
  health: 24000,
  armor: 15,
  canBoost: true,
  commandLimit: 8,
  itemCapacity: 180,
  canDrown: false,
  boostMultiplier: 1.6,
  engineOffset: 5.5,
  mineTier: 3,
  mineSpeed: 5,
  buildSpeed: 1.25,
  hitSize: 35,
  abilities: new Seq([new RepairFieldAbility(60, 360, 128), new StatusFieldAbility(CAstatus.boostT5, 60, 60, 128), new ForceFieldAbility(128, 1.8, 3100, 180), new UnitSpawnAbility(UnitTypes.dagger, 1800, 17, -6), new UnitSpawnAbility(UnitTypes.dagger, 1800, -17, -6), new ShieldRegenFieldAbility(300, 300, 900, 128)])
});
leader.constructor = () => extend(MechUnit, {});
leader.weapons.add(Weapons.leaderWeapon);

// Adamantite Units

// Adamantite Air
const reliavent = extend(UnitType, "reliavent", {
  localizedName: "Reliavent",
  description: "Drops a massive payload of incendiary bombs that start massive fires.",
  speed: 1.9,
  itemCapacity: 80,
  circleTarget: true,
  rotateShooting: false,
  maxRange: 8,
  commandLimit: 10,
  flying: true,
  range: 100,
  health: 40000,
  armor: 156,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
reliavent.constructor = () => extend(UnitEntity, {});
reliavent.weapons.add(Weapons.reliaventWeapon);

const siloArray = extend(UnitType, "silo-array", {
  localizedName: "Silo Array",
  description: "Based on the silocrafter, with massive enhancements. Now fires a massive barrage of incendiary missles to obliterate enemies.",
  speed: 3,
  flying: true,
  commandLimit: 10,
  itemCapacity: 100,
  health: 72000,
  armor: 120,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
siloArray.constructor = () => extend(UnitEntity, {});
siloArray.weapons.add(Weapons.siloArrayWeapon);

const decimation = extend(UnitType, "decimation", {
  localizedName: "Decimator", // Originally Decimation
  description: "Fires extremely powerful lancer-like lasers.",
  speed: 3,
  drag: 20,
  flying: true,
  engineOffset: 12,
  engineSize: 6,
  commandLimit: 10,
  itemCapacity: 120,
  hitSize: 32,
  health: 100000,
  armor: 140,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
decimation.constructor = () => extend(UnitEntity, {});
decimation.weapons.add(Weapons.decimationCannon);

const carnage = extend(UnitType, "carnage", {
  localizedName: "Carnage",
  description: "Fires a massive barrage of rockets.",
  speed: 2,
  drag: 20,
  flying: true,
  engineOffset: 20,
  engineSize: 10,
  commandLimit: 10,
  itemCapacity: 150,
  lowAltitude: true,
  hitSize: 60,
  health: 140000,
  armor: 176,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
carnage.constructor = () => extend(UnitEntity, {});
carnage.weapons.add(Weapons.carnageRockets, Weapons.carnageRifle);

const Destruction = extend(UnitType, "destruction", {
  localizedName: "Destruction",
  description: "Has an absurd amount of weaponry to take down any type of enemy possible.",
  speed: 1.20,
  drag: 20,
  engineOffset: 30,
  engineSize: 15,
  flying: true,
  commandLimit: 10,
  itemCapacity: 250,
  hitSize: 50,
  faceTarget: true,
  range: 80,
  health: 180000,
  armor: 196,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ]),
  abilities: new Seq([new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0), new UnitSpawnAbility(UnitTypes.zenith, 1800, 0, 0)])
});
Destruction.constructor = () => extend(UnitEntity, {});
const DestructionWeapons = [
  Weapons.heavyCannon,
  Weapons.destructionCyclone,
  Weapons.vaporizer,
  Weapons.destructionRockets,
  Weapons.destructionLauncher,
  Weapons.destructionLancer1,
  Weapons.destructionLancer2,
  Weapons.destructionPeashooter1,
  Weapons.destructionPeashooter2,
  Weapons.destructionPeashooter3,
  Weapons.destructionHail,
  Weapons.destructionScatter,
  Weapons.destructionScatter2
];
DestructionWeapons.forEach(weapon => Destruction.weapons.add(weapon));

// Adamantite Ground
const melter = extend(UnitType, "melter", {
  localizedName: "Melter",
  description: "Fires orbs of superheated slag, causing massive damage. Heavily armored.",
  speed: 0.4,
  canDrown: false,
  itemCapacity: 80,
  commandLimit: 10,
  hitSize: 20,
  accel: 10,
  flying: false,
  health: 40000,
  armor: 160,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
melter.constructor = () => extend(LegsUnit, {});
melter.weapons.add(Weapons.melterWeapon);

const evasculator = extend(UnitType, "evasculator", {
  localizedName: "Evasculator",
  description: "Fires a barrage of high damaging rounds at enemies.",
  speed: 0.3,
  canDrown: false,
  itemCapacity: 100,
  commandLimit: 10,
  hitSize: 20,
  accel: 10,
  flying: false,
  health: 72000,
  armor: 134,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
evasculator.constructor = () => extend(LegsUnit, {});
evasculator.weapons.add(Weapons.evasculatorWeapon);

const blaster = extend(UnitType, "blaster", {
  localizedName: "Blaster",
  description: "Uses two heavily modified reign cannons to fire rounds that weaken and slow enemies along has two heavily enhanced hail type cannons to start massive fires to burn anything nearby.",
  speed: 0.2,
  canDrown: false,
  itemCapacity: 120,
  commandLimit: 10,
  legPairOffset: 6,
  legLength: 14,
  hitSize: 20,
  accel: 10,
  flying: false,
  health: 100000,
  armor: 156,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
blaster.constructor = () => extend(LegsUnit, {});
blaster.weapons.add(Weapons.blasterCannon, Weapons.blasterMortar);

const catastrophere = extend(UnitType, "catastrophere", {
  localizedName: "Catastrophere",
  description: "Fires a massive barrage of high damaging bullets, and has a hail mounted on for extra damage.",
  speed: 0.3,
  canDrown: false,
  itemCapacity: 150,
  commandLimit: 10,
  hitSize: 45,
  legLength: 16,
  accel: 10,
  flying: false,
  health: 140000,
  armor: 98,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
catastrophere.constructor = () => extend(LegsUnit, {});
catastrophere.weapons.add(Weapons.catastrophereCannon, Weapons.catastrophereTurret);

const Death = extend(UnitType, "death", {
  localizedName: "Death",
  description: "Charges and fires a devastating laser blast, and has other weapons to prevent flanking.",
  speed: 0.25,
  itemCapacity: 200,
  commandLimit: 10,
  canDrown: false,
  rotateSpeed: 1.8,
  hitSize: 50,
  legLength: 20,
  legSplashDamage: 20,
  accel: 10,
  flying: false,
  health: 180000,
  armor: 220,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
Death.constructor = () => extend(LegsUnit, {});
Death.weapons.add(Weapons.deathLaser, Weapons.deathCyclone, Weapons.deathFuse);

// Adamantite Naval

const paralysis = extend(UnitType, "paralysis", {
  localizedName: "Paralysis",
  description: "Fires a large barrage of missles and bullets.",
  speed: 1.3,
  itemCapacity: 80,
  commandLimit: 10,
  flying: false,
  range: 120,
  health: 40000,
  armor: 120,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
paralysis.constructor = () => extend(UnitWaterMove, {});
paralysis.weapons.add(Weapons.paralyzer, Weapons.paralysisLauncher);

const ravager = extend(UnitType, "ravager", {
  localizedName: "Ravager",
  description: "Fires eletrical bolts that damage enemies and repair allied structures. Shielded.",
  speed: 1.1,
  commandLimit: 10,
  itemCapacity: 100,
  flying: false,
  range: 120,
  health: 72000,
  armor: 140,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ]),
  abilities: new Seq([new ForceFieldAbility(101.7, 10, 3000, 600)])
});
ravager.constructor = () => extend(UnitWaterMove, {});
ravager.weapons.add(Weapons.ravagerRockets, Weapons.ravagerLaser1, Weapons.ravagerLaser2);

const abolisher = extend(UnitType, "abolisher", {
  localizedName: "Abolisher",
  description: "Has a massive fire mortar that launches a shell that causes massive fires and has small little weapons to defend itself aswell. Constructs firebursters.",
  speed: 0.9,
  commandLimit: 10,
  itemCapacity: 120,
  flying: false,
  health: 100000,
  armor: 160,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ]),
  abilities: new Seq([new UnitSpawnAbility(fireburster, 1200, 0, 14)])
});
abolisher.constructor = () => extend(UnitWaterMove, {});
abolisher.weapons.add(Weapons.abolisherMortar, Weapons.abolisherGun);

const warmonger = extend(UnitType, "warmonger", {
  localizedName: "Warmonger",
  description: "Fires high damaging peircing bullets at enemies. Has an enhanced lancer to start fires.",
  speed: 0.5,
  commandLimit: 10,
  itemCapacity: 150,
  flying: false,
  hitSize: 20,
  health: 140000,
  armor: 195,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ])
});
warmonger.constructor = () => extend(UnitWaterMove, {});
warmonger.weapons.add(Weapons.warmongerGun1, Weapons.warmongerGun2, Weapons.warmongerLaser);

const Demise = extend(UnitType, "demise", {
  localizedName: "Demise",
  description: "A naval battleship armed to the brim wth adamantite armor and weapons. Constructs Flares at an extreme rate.",
  speed: 1.15,
  commandLimit: 10,
  itemCapacity: 250,
  flying: false,
  range: 400,
  health: 180000,
  hitSize: 48,
  armor: 230,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    StatusEffects.wet,
    StatusEffects.melting,
    StatusEffects.burning,
    StatusEffects.muddy,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded
  ]),
  abilities: new Seq([new UnitSpawnAbility(UnitTypes.flare, 300, 0, -26), new UnitSpawnAbility(UnitTypes.flare, 300, 0, -26), new UnitSpawnAbility(UnitTypes.flare, 300, 0, -26), new ForceFieldAbility(101.7, 16, 10000, 600)])
});
Demise.constructor = () => extend(UnitWaterMove, {});
Demise.weapons.add(Weapons.demiseCyclone, Weapons.demiseFuse, Weapons.demiseRailgun);

// Reconstructors
Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(dalish, 240, ItemStack.with(Items.silicon, 5)));
Blocks.additiveReconstructor.upgrades.add(Seq.with(dalish, marginator).toArray(UnitType)); // Use addUpgrade in the future
Blocks.multiplicativeReconstructor.upgrades.add(Seq.with(marginator, relametion).toArray(UnitType));
Blocks.exponentialReconstructor.upgrades.add(Seq.with(relametion, arcaster).toArray(UnitType));
Blocks.tetrativeReconstructor.upgrades.add(Seq.with(arcaster, titan).toArray(UnitType));

Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(officer, 2100, ItemStack.with(Items.silicon, 20, Items.lead, 10, CAitems.odium, 5)));
Blocks.additiveReconstructor.upgrades.add(Seq.with(officer, chief).toArray(UnitType));
Blocks.multiplicativeReconstructor.upgrades.add(Seq.with(chief, manager).toArray(UnitType));
Blocks.exponentialReconstructor.upgrades.add(Seq.with(manager, director).toArray(UnitType));
Blocks.tetrativeReconstructor.upgrades.add(Seq.with(director, leader).toArray(UnitType));

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(fireburster, 720, ItemStack.with(Items.silicon, 30, Items.lead, 20)));
Blocks.additiveReconstructor.upgrades.add(Seq.with(fireburster, silocrafter).toArray(UnitType));
Blocks.multiplicativeReconstructor.upgrades.add(Seq.with(silocrafter, incinerator).toArray(UnitType));
Blocks.exponentialReconstructor.upgrades.add(Seq.with(incinerator, ignition).toArray(UnitType));
Blocks.tetrativeReconstructor.upgrades.add(Seq.with(ignition, inferno).toArray(UnitType));

Blocks.airFactory.plans.add(new UnitFactory.UnitPlan(magine, 3600, ItemStack.with(Items.silicon, 30, Items.titanium, 20, CAitems.odium, 10)));
Blocks.additiveReconstructor.upgrades.add(Seq.with(magine, rivarian).toArray(UnitType));
Blocks.multiplicativeReconstructor.upgrades.add(Seq.with(rivarian, antari).toArray(UnitType)); 
Blocks.exponentialReconstructor.upgrades.add(Seq.with(antari, excavation).toArray(UnitType)); 
Blocks.tetrativeReconstructor.upgrades.add(Seq.with(excavation, monarch).toArray(UnitType));

//Adamantite

recons.adamantiteFactory.plans.add(new UnitFactory.UnitPlan(reliavent, 7200, ItemStack.with(CAitems.adamantite, 150, Items.plastanium, 400, Items.silicon, 400)));
recons.adamantiteFactory.plans.add(new UnitFactory.UnitPlan(melter, 7200, ItemStack.with(CAitems.adamantite, 150, Items.thorium, 400, Items.silicon, 400)));
recons.adamantiteFactory.plans.add(new UnitFactory.UnitPlan(paralysis, 7200, ItemStack.with(CAitems.adamantite, 150, Items.metaglass, 400, Items.silicon, 400)));

recons.adamantiteReconstructorT2.upgrades.add(Seq.with(reliavent, siloArray).toArray(UnitType));
recons.adamantiteReconstructorT2.upgrades.add(Seq.with(melter, evasculator).toArray(UnitType));
recons.adamantiteReconstructorT2.upgrades.add(Seq.with(paralysis, ravager).toArray(UnitType));

recons.adamantiteReconstructorT3.upgrades.add(Seq.with(siloArray, decimation).toArray(UnitType));
recons.adamantiteReconstructorT3.upgrades.add(Seq.with(evasculator, blaster).toArray(UnitType));
recons.adamantiteReconstructorT3.upgrades.add(Seq.with(ravager, abolisher).toArray(UnitType));

recons.adamantiteReconstructorT4.upgrades.add(Seq.with(decimation, carnage).toArray(UnitType));
recons.adamantiteReconstructorT4.upgrades.add(Seq.with(blaster, catastrophere).toArray(UnitType));
recons.adamantiteReconstructorT4.upgrades.add(Seq.with(abolisher, warmonger).toArray(UnitType));

recons.adamantiteReconstructorT5.upgrades.add(Seq.with(carnage, Destruction).toArray(UnitType));
recons.adamantiteReconstructorT5.upgrades.add(Seq.with(catastrophere, Death).toArray(UnitType));
recons.adamantiteReconstructorT5.upgrades.add(Seq.with(warmonger, Demise).toArray(UnitType));

recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(reliavent, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(siloArray, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(decimation, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(carnage, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(Destruction, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(melter, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(evasculator, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(blaster, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(catastrophere, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(Death, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(paralysis, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(ravager, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(abolisher, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(warmonger, 180, ItemStack.with()));
recons.sandboxFactory.plans.add(new UnitFactory.UnitPlan(Demise, 180, ItemStack.with()));

// Secret
// Make these hidden
const murang = extend(UnitType, "murang", {
  localizedName: "Murang",
  speed: 1.8,
  accel: 0.1,
  drag: 0.04,
  flying: true,
  health: 140,
  itemCapacity: 10,
  lowAltitude: true,
  commandLimit: 3,
  engineOffset: 5,
  engineSize: 2,
  hitSize: 4.5
});
murang.constructor = () => extend(UnitEntity, {});
murang.defaultController = () => extend(RepairAI, {});
murang.weapons.add(Weapons.murangWeapon);

const eradicator = extend(UnitType, "eradicator", {
  localizedName: "The Eradicator",
  speed: 0.2,
  itemCapacity: 200,
  commandLimit: 10,
  canDrown: false,
  hitSize: 72,
  allowLegStep: true,
  hovering: true,
  legCount: 6,
  legLength: 100,
  legExtension: -20,
  landShake: 12,
  rippleScale: 4,
  legSplashDamage: 5000,
  legSplashRange: 32,
  flying: false,
  health: 1000000,
  armor: 5000,
  immunities: ObjectSet.with([
    CAstatus.incinerating,
    CAstatus.infected,
    CAstatus.cryogenicFreezing,
    CAstatus.scaleWet,
    CAstatus.detonating,
    CAstatus.ashen,
    CAstatus.overheating,
    CAstatus.evaporating,
    CAstatus.electrified,
    CAstatus.obliterating,
    StatusEffects.burning,
    StatusEffects.freezing,
    StatusEffects.slow,
    StatusEffects.wet,
    StatusEffects.muddy,
    StatusEffects.melting,
    StatusEffects.sapped,
    StatusEffects.sporeSlowed,
    StatusEffects.tarred,
    StatusEffects.shocked,
    StatusEffects.corroded,
    StatusEffects.disarmed
  ])
});
eradicator.constructor = () => extend(LegsUnit, {});
eradicator.weapons.add(Weapons.eradWeaponLarge, Weapons.eradWeaponMid, Weapons.eradWeaponSmall, Weapons.eradWeaponSmall2);

const vanguard = extend(UnitType, "vanguard", {
  localizedName: "Vanguard",
  health: 590,
  speed: 2.8,
  armor: 3,
  itemCapacity: 60,
  accel: 0.08,
  drag: 0.01,
  flying: true,
  lowAltitude: true,
  crashDamageMultiplier: 2,
  targetFlag: BlockFlag.factory
});
vanguard.constructor = () => extend(UnitEntity, {});
vanguard.defaultController = () => extend(SuicideAI, {});
vanguard.weapons.add(Weapons.vanguardWeapon);

module.exports = {
  delta:delta,
  magine:magine,
  rivarian:rivarian,
  antari:antari,
  excavation:excavation,
  monarch:monarch,
  dalish:dalish,
  marginator:marginator,
  relametion:relametion,
  arcaster:arcaster,
  titan:titan,
  fireburster:fireburster,
  silocrafter:silocrafter,
  incinerator:incinerator,
  ignition:ignition,
  inferno:inferno,
  officer:officer,
  chief:chief,
  manager:manager,
  director:director,
  leader:leader,
  reliavent:reliavent,
  siloArray:siloArray,
  decimation:decimation,
  carnage:carnage,
  Destruction:Destruction,
  melter:melter,
  evasculator:evasculator,
  blaster:blaster,
  catastrophere:catastrophere,
  Death:Death,
  paralysis:paralysis,
  ravager:ravager,
  abolisher:abolisher,
  warmonger:warmonger,
  Demise:Demise
}
