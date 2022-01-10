const CAitems = require("content/items");

const adamantiteConveyor = extend(StackConveyor, "adamantite-conveyor", {
    localizedName: "Adamantite Conveyor",
    description: "A conveyor made out of adamantite. Very durable and fast, but also expensive. Transports items in batches like a plastanium conveyor.",
    size: 1,
    health: 1000,
    speed: 0.25,
    itemCapacity: 25,
    buildCostMultiplier: 0.5,
    researchCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 1,
        Items.silicon, 1
    )
});

const armoredAdamantiteConveyor = extend(Conveyor, "armored-adamantite-conveyor", {
    localizedName: "Armored Adamantite Conveyor",
    description: "Transports items like an armored conveyor. More durable than a standard Adamantite Conveyor, but has less throughput.",
    size: 1,
    health: 2500,
    speed: 0.26,
    displayedSpeed: 30,
    itemCapacity: 4,
    buildCostMultiplier: 0.5,
    researchCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 1,
        Items.silicon, 1
    )
});

const adamantiteJunction = extend(Junction, "adamantite-junction", {
    localizedName: "Adamantite Junction",
    description: "A junction made out of adamantite. Very durable and fast, but also expensive.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    speed: 15,
    itemCapacity: 10,
    canOverdrive: false,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 2,
        Items.silicon, 2
    )
});

const adamantiteBridge = extend(ItemBridge, "adamantite-bridge-conveyor", {
    localizedName: "Adamantite Bridge Conveyor",
    description: "A form of bridge conveyor that can transport many items over a very far distance nearly instantly.",
    size: 1,
    researchCostMultiplier: 0.5,
    hasPower: false,
    health: 3000,
    itemCapacity: 20,
    range: 20,
    transportTime: 2,
    canOverdrive: false,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 30,
        Items.surgeAlloy, 30,
        Items.phaseFabric, 30,
        Items.silicon, 30
    )
});

const adamantiteSorter = extend(Sorter, "adamantite-sorter", {
    localizedName: "Adamantite Sorter",
    description: "A Sorter made out of adamantite. Very durable, but also expensive.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    buildCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 2,
        Items.silicon, 2
    )
});

const adamantiteSorterInvert = extend(Sorter, "adamantite-sorter-invert", {
    localizedName: "Inverted Adamantite Sorter",
    description: "A Sorter made out of adamantite. Very durable, but also expensive.",
    invert: true,
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    buildCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 2,
        Items.silicon, 2
    )
});

const adamantiteRouter = extend(Router, "adamantite-router", {
    localizedName: "Adamantite Router",
    description: "A router made out of adamantite. Very durable, but also expensive.",
    details: "Router",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    buildCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 2,
        Items.silicon, 2
    )
});

const adamantiteDistributor = extend(Router, "adamantite-distributor", {
    localizedName: "Adamantite Distributor",
    description: "A distributor made out of adamantite. Very durable, but also expensive.",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 4000,
    canOverdrive: false,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 2,
        Items.surgeAlloy, 2,
        Items.phaseFabric, 2,
        Items.silicon, 4
    )
});

const adamantiteOverflow = extend(Sorter, "adamantite-overflow-gate", {
    localizedName: "Adamantite Overflow Gate",
    description: "An Overflow Gate made out of adamantite. Very durable, but also expensive.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    buildCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 2,
        Items.silicon, 2
    )
});

const adamantiteUnderflow = extend(Sorter, "adamantite-underflow-gate", {
    localizedName: "Adamantite Underflow Gate",
    description: "An Underflow Gate made out of adamantite. Very durable, but also expensive.",
    invert: true,
    size: 1,
    researchCostMultiplier: 0.5,
    health: 1500,
    buildCostMultiplier: 0.5,
    group: BlockGroup.transportation,
    buildVisibility: BuildVisibility.shown,
    category: Category.distribution,
    requirements: ItemStack.with(
        CAitems.adamantite, 1,
        Items.surgeAlloy, 1,
        Items.phaseFabric, 2,
        Items.silicon, 2
    )
});

module.exports = {
    adamantiteConveyor:adamantiteConveyor,
    armoredAdamantiteConveyor:armoredAdamantiteConveyor,
    adamantiteJunction:adamantiteJunction,
    adamantiteBridge:adamantiteBridge,
    adamantiteSorter:adamantiteSorter,
    adamantiteSorterInvert:adamantiteSorterInvert,
    adamantiteRouter:adamantiteRouter,
    adamantiteDistributor:adamantiteDistributor,
    adamantiteOverflow:adamantiteOverflow,
    adamantiteUnderflow:adamantiteUnderflow
}