const CAitems = require("content/items");

const advancedCultivator = extend(Cultivator, "advanced-cultivator", {
    localizedName: "Advanced Cultivator",
    description: "Drills for water, then waters the spore pods to make them industry ready. Much more efficent than the regular cultivator.",
    liquidCapacity: 20,
    itemCapacity: 20,
    size: 2,
    health: 350,
    hasPower: true,
    hasLiquids: false,
    hasItems: true,
    craftTime: 240,
    buildVisibility: BuildVisibility.shown,
    category: Category.production,
    outputItem: new ItemStack(Items.sporePod, 8),
    requirements: ItemStack.with(
        Items.titanium, 100,
        Items.thorium, 100,
        Items.graphite, 20,
        Items.silicon, 20
    )
});
advancedCultivator.consumes.power(3);

const scaleCollector = extendContent(SolidPump, "scale-collector", {
    localizedName: "Scale Collector",
    description: "Collects Scale during Scalestorms",
    liquidCapacity: 60,
    result: CAitems.scale,
    pumpAmount: 0.1,
    size: 2,
    update: true,
    health: 180,
    hasPower: false,
    hasLiquids: true,
    hasItems: false,
    buildVisibility: BuildVisibility.shown,
    category: Category.production,
    requirements: ItemStack.with(
        Items.titanium, 50,
        Items.metaglass, 80,
        Items.lead, 30
    )
});    //TODO: remove "pump speed" bar
scaleCollector.buildType = () => extendContent(SolidPump.SolidPumpBuild, scaleCollector, {
    updateTile(){
        if(this.liquids.total() > 0.001){
            this.dumpLiquid(this.liquids.current());
        }
        if (CAweather.scalestorm.isActive() && this.timer.get(0, 60)) {
            this.liquids.add(CAitems.scale, 6);
        }
    }
});

const adamantiteDrill = extend(Drill, "adamantite-drill", {
    localizedName: "Adamantite Drill",
    description: "An adamantite based drill that can use scale to maximize efficiency.",
    health: 1200,
    liquidCapacity: 6,
    size: 3,
    researchCostMultiplier: 0.5,
    tier: 30,
    drillTime: 20,
    liquidBoostIntensity: 2,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.drills,
    category: Category.production,
    requirements: ItemStack.with(
        CAitems.adamantite, 40,
        Items.surgeAlloy, 160,
        Items.metaglass, 400,
        Items.plastanium, 400
    )
});
adamantiteDrill.consumes.power(6);
adamantiteDrill.consumes.liquid(CAitems.scale, 0.4).boost();

const adamantiteDrillLarge = extend(Drill, "large-adamantite-drill", {
    localizedName: "Large Adamantite Drill",
    description: "A larger version of a regular adamantite drill that can cover more tiles to drill more efficiently.",
    health: 1600,
    liquidCapacity: 12,
    size: 4,
    researchCostMultiplier: 0.5,
    tier: 30,
    rotateSpeed: 4,
    drillTime: 20,
    liquidBoostIntensity: 2,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.drills,
    category: Category.production,
    requirements: ItemStack.with(
        CAitems.adamantite, 80,
        Items.surgeAlloy, 2000,
        Items.metaglass, 500,
        Items.plastanium, 500
    )
});
adamantiteDrillLarge.consumes.power(7);
adamantiteDrillLarge.consumes.liquid(CAitems.scale, 0.8).boost();

const adamantiteOilExtractor = extend(Fracker, "adamantite-oil-extractor", {
    localizedName: "Adamantite Oil Extractor",
    description: "A significantly more efficent oil extractor, using adamantite to drill even faster and extract more oil.",
    result: Liquids.oil,
    liquidCapacity: 100,
    pumpAmount: 0.75,
    size: 3,
    researchCostMultiplier: 0.5,
    health: 800,
    attribute: Attribute.oil,
    baseEfficiency: 1.0,
    hasPower: true,
    hasLiquids: true,
    hasItems: false,
    itemUseTime: 60,
    updateEffect: Fx.pulverize,
    buildVisibility: BuildVisibility.shown,
    category: Category.production,
    requirements: ItemStack.with(
        Items.plastanium, 120,
        CAitems.adamantite, 20,
        Items.silicon, 300,
        Items.metaglass, 230,
        Items.thorium, 80
    )
});
adamantiteOilExtractor.consumes.power(5);
adamantiteOilExtractor.consumes.liquid(Liquids.water, 0.2);

module.exports = {
    advancedCultivator:advancedCultivator,
    scaleCollector:scaleCollector,
    adamantiteDrill:adamantiteDrill,
    adamantiteDrillLarge:adamantiteDrillLarge,
    adamantiteOilExtractor:adamantiteOilExtractor
}