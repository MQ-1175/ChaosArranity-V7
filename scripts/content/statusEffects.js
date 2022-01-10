const VFX = require("effects");

const incinerating = extend(StatusEffect,"incinerating", {
    damage: 75,
    effect: Fx.melting
});
incinerating.opposite(StatusEffects.wet, StatusEffects.freezing);

const cryogenicFreezing = extend(StatusEffect, "cryogenic-freezing", {
    localizedName: "Cryogenic Freezing",
    speedMultiplier: 0.3,
    healthMultiplier: 0.7,
    color: Color.valueOf("B7CBF4"),
    effect: VFX.cryogenicFreeze
});
cryogenicFreezing.opposite(StatusEffects.burning, StatusEffects.melting);

const infected = extend(StatusEffect, "infected", {
    localizedName: "Infected",
    speedMultiplier: 0.8,
    reloadMultiplier: 0.6,
    damageMultiplier: 0.8,
    transitionDamage: 120,
    color: Color.valueOf("B83DBA"),
    effect: VFX.scaleBubble
});
infected.affinity(cryogenicFreezing, ((unit, time, newTime, result) => {
    unit.damagePierce(120);
    VFX.scaleBlast.at(unit.x, unit.y)
}));

const scaleWet = extend(StatusEffect, "scale-wet", {
    localizedName: "Scale Soaked",
    speedMultiplier: 0.75,
    reloadMultiplier: 0.5,
    damageMultiplier: 0.8,
    color: Color.valueOf("B83DBA"),
    effect: VFX.scaleDrip
});

const detonating = extend(StatusEffect, "detonating", {
  localizedName: "Detonating",
  speedMultiplier: 0.8,
  healthMultiplier: 0.7,
  transitionDamage: 95,
  color: Pal.bulletYellow,
  effect: Fx.hitBulletSmall
});
detonating.affinity(cryogenicFreezing, ((unit, time, newTime, result) => {
  unit.damagePierce(95);
  Fx.blastExplosion.at(unit.x, unit.y);
  result.set(detonating, time);
}));

const boostT3 = extend(StatusEffect, "boostedt3", {
  damageMultiplier: 1.12,
  speedMultiplier: 1.28,
  effect: Fx.none
});

const boostT4 = extend(StatusEffect, "boostedt4", {
  speedMultiplier: 1.35,
  damageMultiplier: 1.25,
  effect: Fx.none
});

const boostT5 = extend(StatusEffect, "boostedt5", {
  damageMultiplier: 1.3,
  speedMultiplier: 1.3,
  reloadMultiplier: 1.3,
  effect: Fx.none
});

const ashen = extend(StatusEffect, "ashen", {
    speedMultiplier: 0.5,
    damage: 0.03,
    color: Color.valueOf("808080"),
    effect: VFX.ashEffect
});

const barraged = extend(StatusEffect, "barraged", {
  localizedName: "barraged",
  damage: 0.25,
  damageMultiplier: 0.9,
  speedMultiplier: 0.4,
  color: Color.valueOf("FF4000"),
  effect: Fx.steam
});

const overheating = extend(StatusEffect, "overheating", {
  localizedName: "Overheating",
  damage: 0.4,
  color: Color.valueOf("FF8800"),
  effect: Fx.fire
});

const heated = extend(StatusEffect, "heated", {
  localizedName: "Heated",
  damage: 0.6,
  color: Color.valueOf("FFAA5F"),
  effect: Fx.mine
});

const evaporating = extend(StatusEffect, "evaporating", {
  localizedName: "Evaporating",
  damage: 3.333333333333,
  speedMultiplier: 0.25,
  color: Color.valueOf("B0B0B0"),
  effect: Fx.redgeneratespark
});

const electrified = extend(StatusEffect, "electrified", {
  localizedName: "electrified",
  speedMultiplier: 0.25,
  healthMultiplier: 0.5,
  damageMultiplier: 0.5
});

const obliterating = extend(StatusEffect, "obliterating", {
  localizedName: "Obliterated",
  damage: 0.1666666666666666,
  damageMultiplier: 0.8,
  speedMultiplier: 0.5,
  color: Color.valueOf("FFFFFF"),
  effect: Fx.mineHuge
});

module.exports = {
    incinerating:incinerating,
    infected:infected,
    cryogenicFreezing:cryogenicFreezing,
    scaleWet:scaleWet,
    detonating:detonating,
    boostT3:boostT3,
    boostT4:boostT4,
    boostT5:boostT5,
    ashen:ashen,
    overheating:overheating,
    heated:heated,
    barraged:barraged,
    evaporating:evaporating,
    electrified:electrified,
    obliterating:obliterating
}