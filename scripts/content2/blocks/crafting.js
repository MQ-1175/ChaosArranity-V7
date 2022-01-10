const CAitems = require("content2/items");

const graphiteFactory = extend(GenericCrafter, "graphite-factory", {
    localizedName: "Graphite Factory",
    description: "A large graphite press design, uses surge alloy to press coal into graphite in mass. Requires cryofluid as coolant.",
    liquidCapacity: 30,
    itemCapacity: 50,
    size: 5,
    health: 1000,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 30,
    updateEffect: Fx.pulverizeMedium,
    outputItem: new ItemStack(Items.graphite, 8),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.silicon, 300,
        Items.plastanium, 250,
        Items.graphite, 225,
        Items.surgeAlloy, 200,
        Items.lead, 180
    )
});
graphiteFactory.consumes.power(10);
graphiteFactory.consumes.item(Items.graphite, 10);
graphiteFactory.consumes.liquid(Liquids.cryofluid, 0.1333333333333);

const coalPress = extend(GenericCrafter, "coal-press", {
    localizedName: "Coal Press",
    description: "Compresses scrap into coal. Useful when coal is scarce.",
    size: 2,
    health: 220,
    hasPower: true,
    hasLiquids: false,
    hasItems: true,
    craftTime: 10,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(Items.coal, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.copper, 200,
        Items.lead, 200,
        Items.silicon, 50,
        Items.graphite, 50
    )
});
coalPress.consumes.power(5);
coalPress.consumes.item(Items.scrap, 2);


const freezer = extend(GenericCrafter, "freezer", {
    localizedName: "Freezer",
    description: "Freezes water into ice.",
    liquidCapacity: 10,
    size: 2,
    health: 80,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 30,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(CAitems.ice, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.copper, 50,
        Items.lead, 70,
        Items.graphite, 50,
        Items.metaglass, 10,
    )
});
freezer.consumes.power(0.25);
freezer.consumes.liquid(Liquids.water, 1);

const iceMelter = extend(GenericSmelter, "ice-melter", {
    localizedName: "Ice Melter",
    description: "Melts ice back into water.",
    liquidCapacity: 10,
    size: 2,
    health: 80,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 15,
    updateEffect: Fx.smeltsmoke,
    outputLiquid: new LiquidStack(Liquids.water, 1.5),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.copper, 70,
        Items.lead, 70,
        Items.graphite, 30,
        Items.metaglass, 10,
    )
});
iceMelter.consumes.power(0.25);
iceMelter.consumes.item(CAitems.ice, 1);

const advancedPhaseWeaver = extend(GenericCrafter, "advanced-phase-weaver", {
    localizedName: "Advanced Phase Weaver",
    description: "Uses a complicated process to create phase fabric without the need for sand, substituting it with a bit of water.",
    liquidCapacity: 30,
    itemCapacity: 30,
    size: 2,
    health: 440,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 60,
    outputItem: new ItemStack(Items.phaseFabric, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.lead, 300,
        Items.titanium, 200,
        Items.graphite, 200,
        Items.thorium, 300,
        Items.silicon, 180
    )
});
advancedPhaseWeaver.consumes.power(10);
advancedPhaseWeaver.consumes.item(Items.thorium, 3);
advancedPhaseWeaver.consumes.liquid(Liquids.water, 0.108333333333333);

const advancedCryofluidMixer = extend(GenericSmelter, "advanced-cryofluid-mixer", {
    localizedName: "Advanced Cryofluid Mixer",
    description: "Mixes water and titanium to make lots of cryofluid.",
    liquidCapacity: 50,
    itemCapacity: 20,
    size: 2,
    health: 340,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 30,
    outputLiquid: new LiquidStack(Liquids.cryofluid, 48),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.thorium, 200,
        Items.titanium, 100,
        Items.graphite, 100,
        Items.silicon, 75,
    )
});
advancedCryofluidMixer.consumes.power(3);
advancedCryofluidMixer.consumes.item(Items.titanium, 5);
advancedCryofluidMixer.consumes.liquid(Liquids.water, 0.8);

const surgePress = extend(GenericSmelter, "surge-press", {
    localizedName: "Surge Press",
    description: "Mixes scrap with slag to make surge at low efficency.",
    liquidCapacity: 200,
    itemCapacity: 20,
    size: 3,
    health: 500,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 180,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(Items.surgeAlloy, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.silicon, 300,
        Items.plastanium, 250,
        Items.graphite, 225,
        Items.surgeAlloy, 200,
        Items.lead, 180
    )
});
surgePress.consumes.power(13.333333333333333333333);
surgePress.consumes.item(Items.scrap, 10);
surgePress.consumes.liquid(Liquids.slag, 0.19166666666666666);

const adamantiteForge = extend(GenericSmelter, "adamantite-forge", {
    localizedName: "Adamantite Forge",
    description: "Forges adamantite by melting down metaglass, plastanium, surge, then fuses it together with phase and silicon. Requires cryogenic fluid as coolant.",
    itemCapacity: 500,
    size: 5,
    health: 3000,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 600,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(CAitems.adamantite, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.plastanium, 600,
        Items.surgeAlloy, 800,
        Items.silicon, 2000,
        Items.graphite, 2000,
        Items.thorium, 2000
    )
});
adamantiteForge.consumes.power(50);
adamantiteForge.consumes.items(ItemStack.with(Items.plastanium, 600, Items.surgeAlloy, 800, Items.silicon, 2000, Items.graphite, 2000, Items.thorium, 2000));
adamantiteForge.consumes.liquid(CAitems.cryogenicFluid, 0.3);

const compactPlastaniumCompressor = extend(GenericSmelter, "compact-plastanium-compressor", {
    localizedName: "Compact Plastanium Compressor",
    description: "Uses pressure to convert scale into plastanium. More compact than a regular plastanium compresser, but it costs an immense amount of power to operate",
    liquidCapacity: 100,
    size: 1,
    health: 600,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 6,
    updateEffect: Fx.none,
    outputItem: new ItemStack(Items.plastanium, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.titanium, 300,
        Items.silicon, 100,
        Items.graphite, 200,
        Items.thorium, 300
    )
});
compactPlastaniumCompressor.consumes.power(8);
compactPlastaniumCompressor.consumes.items(ItemStack.with(Items.plastanium, 600, Items.surgeAlloy, 800, Items.silicon, 2000, Items.graphite, 2000, Items.thorium, 2000));
compactPlastaniumCompressor.consumes.liquid(CAitems.scale, 0.25);

const scaleMelter = extend(GenericSmelter, "scale-melter", {
    localizedName: "Scale Melter",
    description: "Mixes oil and thorium to produce scale.",
    liquidCapacity: 50,
    size: 2,
    health: 440,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 120,
    updateEffect: Fx.smeltsmoke,
    outputLiquid: new LiquidStack(CAitems.scale, 20),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.thorium, 75,
        Items.titanium, 75,
        Items.metaglass, 30
    )
});
scaleMelter.consumes.power(4);
scaleMelter.consumes.item(Items.thorium, 4);
scaleMelter.consumes.liquid(Liquids.oil, 0.333333333333);

const scaleSeparator = extend(Separator, "scale-separator", {
    localizedName: "Scale Separator",
    description: "Splits scale into several materials, however this process requires immense amounts of power.",
    liquidCapacity: 50,
    size: 3,
    health: 330,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 6,
    results: ItemStack.with(Items.thorium, 1, Items.lead, 1, Items.coal, 1, Items.sand, 1, Items.titanium, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.lead, 200,
        Items.copper, 200,
        Items.graphite, 200,
        Items.titanium, 200,
        Items.silicon, 200
    )
});
scaleSeparator.consumes.power(10);
scaleSeparator.consumes.liquid(CAitems.scale, 0.1);

const odiumSmelter = extend(GenericSmelter, "odium-smelter", {
    localizedName: "Odium Smelter",
    description: "Smelts Metaglass, Ice, and Spores into Odium.",
    size: 2,
    health: 165,
    hasPower: true,
    hasItems: true,
    craftTime: 90,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(CAitems.odium, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.copper, 80,
        Items.metaglass, 40,
        Items.silicon, 120
    )
});
odiumSmelter.consumes.power(2);
odiumSmelter.consumes.items(ItemStack.with(Items.metaglass, 1, CAitems.ice, 1, Items.sporePod, 1));

const odiumRefinery = extend(GenericSmelter, "odium-refinery", {
    localizedName: "Odium Refinery",
    description: "Refines Odium with phase fabric to maximize usage and utility.",
    size: 2,
    health: 185,
    hasPower: true,
    hasItems: true,
    craftTime: 180,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(CAitems.refinedOdium, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.thorium, 190,
        Items.phaseFabric, 90,
        Items.lead, 60,
        Items.silicon, 220
    )
});
odiumRefinery.consumes.power(5);
odiumRefinery.consumes.items(ItemStack.with(Items.phaseFabric, 2, CAitems.odium, 1));

const cryogenicCompoundFuser = extend(GenericSmelter, "cryogenic-compound-fuser", {
    localizedName: "Cryogenic Compound Fuser",
    description: "Fuses cryofluid and ice together to make an extremely cold liquid.",
    liquidCapacity: 180,
    itemCapacity: 30,
    size: 3,
    health: 310,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 60,
    outputLiquid: new LiquidStack(CAitems.cryogenicFluid, 12),
    updateEffect: Fx.smeltsmoke,
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.plastanium, 220,
        Items.silicon, 270,
        Items.graphite, 175,
        Items.thorium, 200
    )
});
cryogenicCompoundFuser.consumes.power(5);
cryogenicCompoundFuser.consumes.liquid(Liquids.cryofluid, 2);
cryogenicCompoundFuser.consumes.item(CAitems.ice, 3);

const advancedCoalCentrifuge = extend(GenericCrafter, "advanced-coal-centrifuge", {
    localizedName: "Advanced Coal Centrifuge",
    description: "Compacts oil into coal. Much more efficient than the original design.",
    outputItem: new ItemStack(Items.coal, 2),
    size: 2,
    health: 440,
    craftTime: 30,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    updateEffect: Fx.smeltsmoke,
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.lead, 200,
        Items.titanium, 200,
        Items.graphite, 75,
        Items.silicon, 75
    )
});
advancedCoalCentrifuge.consumes.power(1);
advancedCoalCentrifuge.consumes.liquid(Liquids.oil, 0.15);

const scrapMixer = extend(GenericSmelter, "scrap-mixer", {
    localizedName: "Scrap Mixer",
    description: "Mixes water and titanium to make scrap.",
    liquidCapacity: 50,
    size: 2,
    health: 220,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 10,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(Items.scrap, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.lead, 200,
        Items.copper, 200,
        Items.titanium, 100,
        Items.graphite, 100
    )
});
scrapMixer.consumes.power(0.5);
scrapMixer.consumes.liquid(Liquids.water, 0.05);
scrapMixer.consumes.item(Items.titanium, 2);

const siliconRefinery = extend(GenericSmelter, "silicon-refinery", {
    localizedName: "Silicon Refinery",
    description: "Refines sand using raw power. Requires water as coolant.",
    liquidCapacity: 100,
    itemCapacity: 80,
    size: 4,
    health: 680,
    hasPower: true,
    hasLiquids: false,
    hasItems: true,
    craftTime: 30,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(Items.silicon, 10),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.metaglass, 200,
        Items.silicon, 400,
        Items.copper, 600,
        Items.surgeAlloy, 600
    )
});
siliconRefinery.consumes.power(13.333333333333);
siliconRefinery.consumes.item(Items.sand, 10);
siliconRefinery.consumes.liquid(Liquids.water, 0.2);

const metaglassCrucible = extend(AttributeSmelter, "metaglass-crucible", {
    localizedName: "Metaglass Crucible",
    description: "Smelts metaglass from sand and lead. More efficient in hot locations.",
    liquidCapacity: 0,
    itemCapacity: 30,
    size: 3,
    health: 360,
    buildCostMultiplier: 1.04384133612,
    attribute: Attribute.heat,
    maxHeatBoost: 2.23,
    boostScale: 0.223,
    hasPower: true,
    hasLiquids: false,
    hasItems: true,
    craftTime: 90,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(Items.metaglass, 8),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.titanium, 130,
        Items.plastanium, 30,
        Items.silicon, 80,
        Items.copper, 90
    )
});
metaglassCrucible.consumes.power(4);
metaglassCrucible.consumes.items(ItemStack.with(Items.sand, 7, Items.lead, 6));

const advancedSporePress = extend(GenericSmelter, "advanced-spore-press", {
    localizedName: "Advanced Spore Press",
    description: "Compresses spore pods into oil. Much more efficent than the original design.",
    liquidCapacity: 64,
    size: 2,
    health: 225,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 20,
    outputLiquid: new LiquidStack(Liquids.oil, 7.333333333333),
    updateEffect: Fx.smeltsmoke,
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.lead, 200,
        Items.titanium, 80,
        Items.silicon, 60,
        Items.graphite, 60
    )
});
advancedSporePress.consumes.power(1.5);
advancedSporePress.consumes.item(Items.sporePod, 1);

const advancedPlastaniumCompressor = extend(GenericSmelter, "advanced-plastanium-compressor", {
    localizedName: "Advanced Plastanium Compressor",
    description: "A much more efficient Plastanium Compressor.",
    liquidCapacity: 300,
    itemCapacity: 1000,
    size: 3,
    health: 480,
    hasPower: true,
    hasLiquids: true,
    hasItems: true,
    craftTime: 120,
    outputItem: new ItemStack(Items.plastanium, 30),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.graphite, 220,
        Items.titanium, 190,
        Items.silicon, 190,
        Items.metaglass, 120,
        Items.lead, 80
    )
});
advancedPlastaniumCompressor.consumes.power(5.333333333333);
advancedPlastaniumCompressor.consumes.item(Items.titanium, 40);
advancedPlastaniumCompressor.consumes.liquid(Liquids.oil, 1.333333333333);

const detonatiteMixer = extend(GenericSmelter, "detonatite-mixer", {
    localizedName: "Detonatite Mixer",
    description: "Mixes flammable materials to make the most flammable thing in existance. Handle with extreme care.",
    liquidCapacity: 0,
    size: 2,
    health: 300,
    hasPower: true,
    hasLiquids: false,
    hasItems: true,
    craftTime: 30,
    updateEffect: Fx.smeltsmoke,
    outputItem: new ItemStack(CAitems.detonatite, 1),
    buildVisibility: BuildVisibility.shown,
    category: Category.crafting,
    requirements: ItemStack.with(
        Items.surgeAlloy, 75,
        Items.plastanium, 100,
        Items.silicon,200,
        Items.graphite, 200
    )
});
detonatiteMixer.consumes.power(5);
detonatiteMixer.consumes.items(ItemStack.with(Items.blastCompound, 3, Items.coal, 2, Items.sporePod, 4));

// Multicrafters
const multiLib = require("multilib");

const multititanium = multiLib.MultiCrafter(GenericSmelter, GenericSmelter.SmelterBuild, "titanium-ejector",[
  {
    input:{
        items:["titanium/6"],
        power:5,
    },
    output:{
        items:["silicon/4"],
    },
    craftTime:60,
},
{
  input:{
      items:["titanium/6"],
      power:5,
  },
  output:{
      items:["metaglass/4"],
  },
  craftTime:60,
},
]);

const multithorium = multiLib.MultiCrafter(GenericSmelter, GenericSmelter.SmelterBuild, "thorium-ejector",[
    {
      input:{
          items:["thorium/6"],
          power:10,
      },
      output:{
          items:["silicon/8"],
      },
      craftTime:60,
  },
  {
    input:{
        items:["thorium/6"],
        power:10,
    },
    output:{
        items:["metaglass/8"],
    },
    craftTime:60,
  },
  ]);

  const multimixer = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "multimixer",[
    {
      input:{
          items:["coal/3","sand/6","lead/5"],
          power:1.46666666666666666666,
      },
      output:{
          items:["pyratite/3"],
      },
      craftTime:75,
  },
  {
      input:{
          items:["coal/3","sand/6","lead/5","spore-pod/2"],
          power:1.6,
      },
      output:{
          items:["blast-compound/3"],
      },
      craftTime:75,
  },
  {
      input:{
          items:["coal/6","sand/7","lead/5","spore-pod/9"],
          power:18,
      },
      output:{
          items:["chaos-arranity-detonatite/3"],
      },
      craftTime:75,
  },
]);

const alloyRefinery = multiLib.MultiCrafter(GenericSmelter, GenericSmelter.SmelterBuild, "alloy-refinery",[
    {
      input:{
          items:["copper/28","lead/35","titanium/14","silicon/30"],
          liquids:["water/60"],
          power:24.3333333333333333,
      },
      output:{
          items:["surge-alloy/12"],
      },
      craftTime:600,
  },
  {
    input:{
        items:["copper/30","lead/37","titanium/15","silicon/33"],
        liquids:["cryofluid/22"],
        power:24.3333333333333333,
    },
    output:{
        items:["surge-alloy/16"],
    },
    craftTime:480,
  },
  {
    input:{
        items:["copper/35","lead/40","titanium/19","silicon/38"],
        liquids:["chaos-arranity-cryogenic-fluid/10"],
        power:24.3333333333333333,
    },
    output:{
        items:["surge-alloy/20"],
    },
    craftTime:300,
  },
]);

multititanium.localizedName = "Titanium Ejector";
multititanium.description = "Ejects either metaglass or silicon from titanium. Requires moderate amounts of power to function. Useful when there is no sand in the region.";
multititanium.liquidCapacity = 0;
multititanium.itemCapacity = 30;
multititanium.size = 2;
multititanium.health = 260;
multititanium.updateEffect = Fx.smeltsmoke;
multititanium.setupRequirements(Category.crafting, ItemStack.with(
    Items.silicon, 280,
    Items.titanium, 200,
    Items.metaglass, 100,
    Items.lead, 180,
    Items.copper, 200
));

multithorium.localizedName = "Thorium Ejector";
multithorium.description = "Ejects either metaglass or silicon from thorium. Requires large amounts of power to function. Useful when there is no sand in the region";
multithorium.liquidCapacity = 0;
multithorium.itemCapacity = 30;
multithorium.size = 2;
multithorium.health = 320;
multithorium.updateEffect = Fx.smeltsmoke;
multithorium.setupRequirements(Category.crafting, ItemStack.with(
    Items.silicon, 300,
    Items.thorium, 200,
    Items.metaglass, 120,
    Items.lead, 200,
    Items.copper, 220
));

multimixer.localizedName = "Multi Mixer";
multimixer.description = "An upgraded form of all 3 mixers. Can be set to produce either pyratite, blast compound, or detonatite. More efficient than the original designs.";
multimixer.liquidCapacity = 0;
multimixer.itemCapacity = 50;
multimixer.size = 4;
multimixer.health = 280;
multimixer.updateEffect = Fx.smeltsmoke;
multimixer.setupRequirements(Category.crafting, ItemStack.with(
    Items.titanium, 230,
    Items.silicon, 280,
    Items.copper, 320,
    Items.metaglass, 225
));

alloyRefinery.localizedName = "Alloy Refinery";
alloyRefinery.description = "Fuses titanium, lead, silicon and copper into surge alloy at maxium effiency. Require coolant to operate. Can be set to cool with water, cryofluid, or cryogenic fluid for varying effiencies.";
alloyRefinery.liquidCapacity = 200;
alloyRefinery.itemCapacity = 125;
alloyRefinery.size = 6;
alloyRefinery.health = 1980;
alloyRefinery.updateEffect = Fx.smeltsmoke;
alloyRefinery.setupRequirements(Category.crafting, ItemStack.with(
    Items.silicon, 5000,
    Items.thorium, 3000,
    Items.plastanium, 1000,
    Items.copper, 1500,
    Items.lead, 800,
    Items.surgeAlloy, 500,
    Items.phaseFabric, 300
));

module.exports = {
    graphiteFactory:graphiteFactory,
    coalPress:coalPress,
    freezer:freezer,
    iceMelter:iceMelter,
    advancedPhaseWeaver:advancedPhaseWeaver,
    advancedCryofluidMixer:advancedCryofluidMixer,
    surgePress:surgePress,
    adamantiteForge:adamantiteForge,
    compactPlastaniumCompressor:compactPlastaniumCompressor,
    scaleMelter:scaleMelter,
    scaleSeparator:scaleSeparator,
    odiumSmelter:odiumSmelter,
    odiumRefinery:odiumRefinery,
    cryogenicCompoundFuser:cryogenicCompoundFuser,
    advancedCoalCentrifuge:advancedCoalCentrifuge,
    scrapMixer:scrapMixer,
    siliconRefinery:siliconRefinery,
    metaglassCrucible:metaglassCrucible,
    advancedSporePress:advancedSporePress,
    advancedPlastaniumCompressor:advancedPlastaniumCompressor,
    detonatiteMixer:detonatiteMixer,
    multititanium:multititanium,
    multithorium:multithorium,
    multimixer:multimixer,
    alloyRefinery:alloyRefinery
}
