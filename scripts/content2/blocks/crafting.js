const CAitems = require("content2/items");


// Multicrafters

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

    alloyRefinery:alloyRefinery
}
