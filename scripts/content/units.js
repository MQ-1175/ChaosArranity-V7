const CAitems = require("content/items");

const adamantiteFactory = extend(UnitFactory, "adamantite-unit-factory", {
    localizedName: "Adamantite Unit Constructor",
    description: "Produces adamantite units.",
    health: 500,
    size: 3,
    researchCostMultiplier: 0.5,
    buildVisibility: BuildVisibility.shown,
    category: Category.units,
    requirements: ItemStack.with(
        CAitems.adamantite, 220,
        Items.surgeAlloy, 780,
        Items.thorium, 1000,
        Items.silicon, 1000
    )
});
adamantiteFactory.consumes.power(33.3333333333333333);

const adamantiteReconstructorT2 = extend(Reconstructor, "additive-adamantite-reconstructor", {
    localizedName: "Additive Adamantite Reconstructor",
    description: "Upgrades adamantite units to the second tier",
    health: 4000,
    size: 3,
    researchCostMultiplier: 0.5,
    itemCapacity: 800,
    constructTime: 21600,
    buildVisibility: BuildVisibility.shown,
    category: Category.units,
    requirements: ItemStack.with(
        Items.lead, 1000,
        Items.silicon, 800,
        Items.thorium, 500,
        CAitems.adamantite,180
    )
});
adamantiteReconstructorT2.consumes.power(66.666666666666);
adamantiteReconstructorT2.consumes.items(ItemStack.with(CAitems.adamantite, 285, Items.surgeAlloy, 440, Items.silicon, 560, Items.graphite, 400));
adamantiteReconstructorT2.consumes.liquid(CAitems.cryogenicFluid, 0.1666666666666);

const adamantiteReconstructorT3 = extend(Reconstructor, "multiplicative-adamantite-reconstructor", {
    localizedName: "Multiplicative Adamantite Reconstructor",
    description: "Upgrades adamantite units to the third tier",
    health: 6000,
    size: 5,
    researchCostMultiplier: 0.5,
    itemCapacity: 1000,
    constructTime: 23400,
    buildVisibility: BuildVisibility.shown,
    category: Category.units,
    requirements: ItemStack.with(
        Items.plastanium, 600,
        Items.graphite, 800,
        Items.surgeAlloy, 800,
        Items.silicon, 500,
        CAitems.adamantite, 270
    )
});
adamantiteReconstructorT3.consumes.power(100);
adamantiteReconstructorT3.consumes.items(ItemStack.with(CAitems.adamantite, 400, Items.surgeAlloy, 600, Items.graphite, 600, Items.silicon, 700));
adamantiteReconstructorT3.consumes.liquid(CAitems.cryogenicFluid, 0.3);

const adamantiteReconstructorT4 = extend(Reconstructor, "exponential-adamantite-reconstructor", {
    localizedName: "Exponential Adamantite Reconstructor",
    description: "Upgrades adamantite units to the fourth tier",
    health: 8000,
    size: 7,
    researchCostMultiplier: 0.5,
    itemCapacity: 1250,
    constructTime: 39600,
    buildVisibility: BuildVisibility.shown,
    category: Category.units,
    requirements: ItemStack.with(
        Items.graphite, 1200,
        Items.thorium, 800,
        Items.surgeAlloy, 600,
        Items.plastanium, 500,
        Items.silicon, 1800,
        CAitems.adamantite, 320
    )
});
adamantiteReconstructorT4.consumes.power(133.333333333333);
adamantiteReconstructorT4.consumes.items(ItemStack.with(CAitems.adamantite, 800, Items.silicon, 1500, Items.graphite, 1200, Items.surgeAlloy, 1200, CAitems.odium, 1500));
adamantiteReconstructorT4.consumes.liquid(CAitems.cryogenicFluid, 0.5);

const adamantiteReconstructorT5 = extend(Reconstructor, "tetrative-adamantite-reconstructor", {
    localizedName: "Tetrative Adamantite Reconstructor",
    description: "Upgrades adamantite units to the fifth and final tier",
    health: 9000,
    size: 9,
    researchCostMultiplier: 0.5,
    itemCapacity: 2000,
    constructTime: 50400,
    buildVisibility: BuildVisibility.shown,
    category: Category.units,
    requirements: ItemStack.with(
        Items.graphite, 2000,
        Items.silicon, 2000,
        Items.plastanium, 1000,
        Items.surgeAlloy, 1000,
        CAitems.adamantite, 600,
        CAitems.refinedOdium, 1000,
        CAitems.odium, 250
    )
});
adamantiteReconstructorT5.consumes.power(166.666666666666);
adamantiteReconstructorT5.consumes.items(ItemStack.with(CAitems.adamantite, 1500, CAitems.refinedOdium, 1500, Items.silicon, 2000, Items.graphite, 2000, Items.surgeAlloy, 1800));
adamantiteReconstructorT5.consumes.liquid(CAitems.cryogenicFluid, 1);

const sandboxFactory = extend(UnitFactory, "sandbox-unit-constructor", {
    localizedName: "Sandbox Unit Constructor",
    description: "Produces adamantite units for free.",
    health: 10000,
    size: 3,
    buildVisibility: BuildVisibility.sandboxOnly,
    category: Category.units
});
sandboxFactory.consumes.power(1);

module.exports = {
    adamantiteFactory:adamantiteFactory,
    adamantiteReconstructorT2:adamantiteReconstructorT2,
    adamantiteReconstructorT3:adamantiteReconstructorT3,
    adamantiteReconstructorT4:adamantiteReconstructorT4,
    adamantiteReconstructorT5:adamantiteReconstructorT5,
    sandboxFactory:sandboxFactory
};