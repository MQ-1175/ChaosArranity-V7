const incinerating = new StatusEffect("incinerating");
incinerating.damage = 75;
incinerating.effect = Fx.melting;

const lava = extend(Floor, "lava", {});
lava.status = incinerating;

const boost = new StatusEffect("boosted");
boost.damageMultiplier = 1.10;
boost.speedMultiplier = 1.3;
boost.effect = Fx.none;

const mboost = new StatusEffect("mboost");
mboost.speedMultiplier = 1.2;

const sboost = new StatusEffect("sboost");
sboost.damageMultiplier = 1.25;
sboost.speedMultiplier = 1.25;
sboost.reloadMultiplier = 1.25;
sboost.effect = Fx.none;

// Core
const delta = extend(UnitType, "delta", {
    abilities: new Seq([new ForceFieldAbility(80, 5, 1000, 300), new RepairFieldAbility(25, 60, 80)])
  });
  delta.constructor = () => extend(PayloadUnit, {});
  delta.defaultController = () => extend(BuilderAI, {});

// Ground
  const titan = extend(UnitType, "t5-titan", {
    immunities: ObjectSet.with([
        StatusEffects.burning,
    ]),
  });
  titan.constructor = () => extend(LegsUnit, {});

  // Fire

  const fireburst = extend(UnitType, "t1-fireburster", {
    immunities: ObjectSet.with([
        StatusEffects.burning
    ]),
  });
  fireburst.constructor = () => extend(UnitEntity, {});

  const silocraft = extend(UnitType, "t2-silocrafter", {
    immunities: ObjectSet.with([
        StatusEffects.burning
    ]),
  });
  silocraft.constructor = () => extend(UnitEntity, {});

  const incinerator = extend(UnitType, "t3-incinerator", {
    immunities: ObjectSet.with([
        StatusEffects.burning
    ]),
  });
  incinerator.constructor = () => extend(UnitEntity, {});

  const ffa = extend(UnitType, "t4-ffa", {
    immunities: ObjectSet.with([
        StatusEffects.burning
    ]), 
      draw(unit){
      this.super$draw(unit);
      Draw.rect("chaos-arranity-t4-ffa-rotors", unit.x, unit.y, Time.time * -6);
  }
});
  ffa.constructor = () => extend(UnitEntity, {});

  const ignition = extend(UnitType, "t5-ignition", {
    immunities: ObjectSet.with([
        StatusEffects.burning
    ]), 
      draw(unit){
      this.super$draw(unit);
      Draw.rect("chaos-arranity-t5-ignition-rotors", unit.x, unit.y, Time.time * 8);
  }
});
  ignition.constructor = () => extend(UnitEntity, {});

// Commander

const officer = extend(UnitType, "t1-officer", {
  abilities: new Seq([new RepairFieldAbility(25, 360, 120)])
});
officer.constructor = () => extend(MechUnit, {});

const chief = extend(UnitType, "t2-chief", {
  abilities: new Seq([new RepairFieldAbility(30, 360, 120)])
});
chief.constructor = () => extend(MechUnit, {});

const manager = extend(UnitType, "t3-manager", {
  abilities: new Seq([new RepairFieldAbility(35, 360, 120), new StatusFieldAbility(boost, 60, 60, 120)])
});
manager.constructor = () => extend(MechUnit, {});

const director = extend(UnitType, "t4-director", {
  abilities: new Seq([new RepairFieldAbility(40, 360, 120), new StatusFieldAbility(mboost, 240, 240, 120), new ForceFieldAbility(120, 5, 1000, 600), new UnitSpawnAbility(UnitTypes.crawler, 2400, -10, -11), new UnitSpawnAbility(UnitTypes.crawler, 2400, 10, -11)])
});
director.constructor = () => extend(MechUnit, {});

const leader = extend(UnitType, "t5-leader", {
  abilities: new Seq([new RepairFieldAbility(50, 360, 120), new StatusFieldAbility(sboost, 360, 360, 120), new ForceFieldAbility(120, 5, 1000, 600), new UnitSpawnAbility(UnitTypes.dagger, 1680, 17, -6), new UnitSpawnAbility(UnitTypes.dagger, 1680, -17, -6)])
});
leader.constructor = () => extend(MechUnit, {});

// Adamantite Air
  const reliavent = extend(UnitType, "t1-reliavent", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  reliavent.constructor = () => extend(UnitEntity, {});

  const siloArray = extend(UnitType, "t2-silo-array", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  siloArray.constructor = () => extend(UnitEntity, {});
  
  const decimation = extend(UnitType, "t3-decimation", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  decimation.constructor = () => extend(UnitEntity, {});

  const carnage = extend(UnitType, "t4-carnage", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  carnage.constructor = () => extend(UnitEntity, {});

  const destruction = extend(UnitType, "t5-destruction", {
    immunities: ObjectSet.with([
        incinerating,
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
  destruction.constructor = () => extend(UnitEntity, {});

// Adamantite Ground

const melter = extend(UnitType, "t1-melter", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  melter.constructor = () => extend(LegsUnit, {});

const evasculator = extend(UnitType, "t2-evasculator", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  evasculator.constructor = () => extend(LegsUnit, {});

  const blaster = extend(UnitType, "t3-blaster", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  blaster.constructor = () => extend(LegsUnit, {});

  const catastrophere = extend(UnitType, "t4-catastrophere", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  catastrophere.constructor = () => extend(LegsUnit, {});

  const death = extend(UnitType, "t5-death", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  death.constructor = () => extend(LegsUnit, {});

// Adamantite Naval

const paralysis = extend(UnitType, "t1-paralysis", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  paralysis.constructor = () => extend(UnitWaterMove, {});

  const ravager = extend(UnitType, "t2-ravager", {
    immunities: ObjectSet.with([
        incinerating,
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

  const abolisher = extend(UnitType, "t3-abolisher", {
    immunities: ObjectSet.with([
        incinerating,
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
    abilities: new Seq([new UnitSpawnAbility(fireburst, 1200, 0, 14)])
  });
  abolisher.constructor = () => extend(UnitWaterMove, {});

  const warmonger = extend(UnitType, "t4-warmonger", {
    immunities: ObjectSet.with([
        incinerating,
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
  });
  warmonger.constructor = () => extend(UnitWaterMove, {});

  const demise = extend(UnitType, "t5-demise", {
    immunities: ObjectSet.with([
        incinerating,
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
  demise.constructor = () => extend(UnitWaterMove, {});

