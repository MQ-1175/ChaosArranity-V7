const CAitems = require("content/items");

const adamantitePump = extend(Pump, "adamantite-pump", {
    localizedName: "Adamantite Pump",
    description: "An adamantite based pump that pumps lots of liquid very quickly.",
    liquidCapacity: 280,
    health: 1200,
    size: 3,
    researchCostMultiplier: 0.5,
    pumpAmount: 0.518518518518518518,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.liquids,
    category: Category.liquid,
    requirements: ItemStack.with(
        CAitems.adamantite, 20,
        Items.surgeAlloy, 80,
        Items.metaglass, 200,
        Items.thorium, 200
    )
});
adamantitePump.consumes.power(5.8333333333333);

const adamantiteConduit = extend(Conduit, "adamantite-conduit", {
    localizedName: "Adamantite Conduit",
    description: "A conduit made out of adamantite. Very durable and fast, but also expensive.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1000,
    liquidCapacity: 100,
    liquidPressure: 18,
    buildCostMultiplier: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.liquids,
    category: Category.liquid,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.plastanium, 1,
        Items.phaseFabric, 1,
        Items.metaglass, 1
    )
});

const adamantiteLiquidRouter = extend(LiquidRouter, "adamantite-liquid-router", {
    localizedName: "Adamantite Liquid Router",
    description: "A liquid router made out of adamantite. Very durable, but also expensive.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    liquidCapacity: 30,
    buildCostMultiplier: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.liquids,
    category: Category.liquid,
    requirements: ItemStack.with(
        CAitems.adamantite, 3,
        Items.surgeAlloy, 3,
        Items.phaseFabric, 3,
        Items.metaglass, 3
    )
});

const adamantiteTank = extend(LiquidRouter, "large-liquid-tank", {
    localizedName: "Large Liquid Tank",
    description: "A massive tank capable of storing an immense quantity of liquid.",
    size: 4,
    researchCostMultiplier: 0.5,
    health: 2500,
    hasLiquids: true,
    hasItems: false,
    hasPower: false,
    liquidCapacity: 8000,
    buildCostMultiplier: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.liquids,
    category: Category.liquid,
    requirements: ItemStack.with(
        Items.metaglass, 250,
        Items.titanium, 800,
        CAitems.adamantite, 30
    )
});

const adamantiteLiquidJuntion = extend(LiquidJunction, "adamantite-liquid-junction", {
    localizedName: "Adamantite Liquid Junction",
    description: "A liquid junction made out of adamantite. Very durable, but also expensive.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    canOverdrive: false,
    buildCostMultiplier: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.liquids,
    category: Category.liquid,
    requirements: ItemStack.with(
        CAitems.adamantite, 3,
        Items.surgeAlloy, 3,
        Items.phaseFabric, 3,
        Items.metaglass, 3
    )
});

const adamantiteBridgeConduit = extend(LiquidBridge, "adamantite-bridge-conduit", {
    localizedName: "Adamantite Bridge Conduit",
    description: "A form of bridge conduit that can transport lots of liquid over a very far distance.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 2000,
    liquidCapacity: 20,
    range: 20,
    transportTime: 1,
    canOverdrive: false,
    buildCostMultiplier: 0.5,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.liquids,
    category: Category.liquid,
    requirements: ItemStack.with(
        CAitems.adamantite, 30,
        Items.metaglass, 30,
        Items.silicon, 30,
        Items.phaseFabric, 30
    )
});

module.exports = {
    adamantitePump:adamantitePump,
    adamantiteConduit:adamantiteConduit,
    adamantiteLiquidRouter:adamantiteLiquidRouter,
    adamantiteTank:adamantiteTank,
    adamantiteLiquidJuntion:adamantiteLiquidJuntion,
    adamantiteBridgeConduit:adamantiteBridgeConduit
}