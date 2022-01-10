const CAitems = require("content/items");

const scaleGenerator = extend(SingleTypeGenerator, "scale-generator", {
    localizedName: "Scale Generator",
    description: "Freezes scale, then shatters it to generate large amounts of power.",
    size: 2,
    hasPower: true,
    hasItems: false,
    hasLiquids: true,
    powerProduction: 27.333333333333333333,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.power,
    category: Category.power,
    requirements: ItemStack.with(
        Items.silicon, 150,
        Items.lead, 100,
        Items.titanium, 75
    )
});
scaleGenerator.consumes.item(CAitems.ice, 2);
scaleGenerator.consumes.liquid(CAitems.scale, 0.0333333333333);

const adamantitePowerNode = extend(PowerNode, "adamantite-power-node", {
    localizedName: "Adamantite Power Node",
    description: "A power node made out of adamantite with high range and many connections.",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 3000,
    laserRange: 40,
    maxNodes: 50,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.power,
    category: Category.power,
    requirements: ItemStack.with(
        CAitems.adamantite, 15,
        Items.silicon, 225,
        Items.titanium, 50,
        Items.lead, 50,
        Items.surgeAlloy, 120
    )
});

const adamantiteThermal = extend(ThermalGenerator, "adamantite-thermal", {
    localizedName: "Adamantite Thermal Generator",
    description: "A more efficient Thermal Generator.",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 800,
    hasPower: true,
    hasItems: false,
    hasLiquids: false,
    floating: true,
    powerProduction: 5.4,
    generateEffect: Fx.redgeneratespark,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.power,
    category: Category.power,
    requirements: ItemStack.with(
        Items.metaglass, 80,
        Items.silicon, 50,
        Items.graphite, 60,
        Items.lead, 210,
        Items.thorium, 75,
        CAitems.adamantite, 5
    )
});

const detonatiteReactor = extend(ImpactReactor, "detonatite-reactor", {
    localizedName: "Detonatite Reactor",
    description: "A highly advanced power generator. Fuses detonatite and cryogenic fluid to make a massive detonating reaction to make insane amounts of power.",
    size: 6,
    researchCostMultiplier: 0.5,
    health: 12000,
    hasPower: true,
    hasItems: true,
    hasLiquids: true,
    itemDuration: 60,
    powerProduction: 583.3333333333333,
    explosionDamage: 40000,
    ambientSound: loadSound("firePulse"),
    ambientSoundVolume: 0.8,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.power,
    category: Category.power,
    requirements: ItemStack.with(
        Items.silicon, 600,
        Items.surgeAlloy, 400,
        Items.graphite, 500,
        CAitems.adamantite, 180,
        Items.plastanium, 550
    )
});
detonatiteReactor.consumes.power(83.333333333333);
detonatiteReactor.consumes.item(CAitems.detonatite, 1);
detonatiteReactor.consumes.liquid(CAitems.cryogenicFluid, 0.2);

module.exports = {
    scaleGenerator:scaleGenerator,
    adamantitePowerNode:adamantitePowerNode,
    adamantiteThermal:adamantiteThermal,
    detonatiteReactor:detonatiteReactor
}