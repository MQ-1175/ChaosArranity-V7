const CAstatus = require("content/statusEffects")

//Items
const ice = extend(Item, "ice", {
  localizedName: "Ice",
  description: "Water that has been cooled below freezing. Used for storage or ammo.",
  alwaysUnlocked: true,
  cost: 0.5,
  lowPriority: true,
  color: Color.valueOf("9db5e5")
});
const odium = extend(Item, "odium", {
  localizedName: "Odium",
  description: "A highly brittle, light and durable material, can easily be smelted with spores, ice, and metaglass.",
  radioactivity: 0.6,
  cost: 1,
  color: Color.valueOf("676593")
});
const refinedOdium = extend(Item, "odium-refined", {
  localizedName: "Refined Odium",
  description: "Odium that has been overclocked with phase fabric. Useful for better accurate missles and advanced tech construction.",
  radioactivity: 0.5,
  charge: 0.4,
  cost: 1.2,
  color: Color.valueOf("8987c4")
});
const detonatite = extend(Item, "detonatite", {
  localizedName: "Detonatite",
  description: "An extremely flammable and explosive substance. Handle with extreme care.",
  flammability: 3.8,
  explosiveness: 7.3,
  color: Color.valueOf("FF3232,"),
  hardness: 4
});
const adamantite = extend(Item, "adamantite", {
  localizedName: "Adamantite",
  description: "A rare, super strong, highly radioactive, valuable metal.",
  details: "Despite being extremely dense in resources to forge, adamantite is extremely light.",
  radioactivity: 3.5,
  charge: 0.35,
  hardness: 30,
  cost: 0.25,
  color: Color.valueOf("aa2222")
});
//Liquids
const cryogenicFluid = extend(Liquid, "cryogenic-fluid", {
  localizedName: "Cryogenic Fluid",
  description: "Used to forge adamantite based units, and cool off turrets. Extremely cold.",
  temperature: 0.1,
  viscosity: 0.3,
  heatCapacity: 1.2,
  effect: CAstatus.cryogenicFreezing,
  color: Color.valueOf("b7cbf4"),
  lightColor: Color.valueOf("0080ff26")
});
const scale = extend(Liquid, "scale", {
  localizedName: "Scale",
  description: "A thick purple sludge, made from combining thorium and oil. Extensively used for adamantite based machines. Can be used as an inefficient coolant for non-adamantite based machines if desperate.",
  details: "This strange purple liquid emits a dim purple glow. Its unusual properties allow for immense boosting for adamantite based machines. Can have catastrophic consequences if mixed with cryogenic fluid.",
  temperature: 0.5,
  viscosity: 0.9,
  heatCapacity: 0.2,
  effect: CAstatus.infected,
  color: Color.valueOf("B83DBA"),
  lightColor: Color.valueOf("B83DBA50")
});

module.exports = {
  ice:ice,
  odium:odium,
  refinedOdium:refinedOdium,
  detonatite:detonatite,
  adamantite:adamantite,
  cryogenicFluid:cryogenicFluid,
  scale:scale
}