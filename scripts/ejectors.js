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
          items:["chaos-arranity-fireatite/3"],
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
    multititanium:multititanium,
    multithorium:multithorium,
    multimixer:multimixer,
    alloyRefinery:alloyRefinery
}
