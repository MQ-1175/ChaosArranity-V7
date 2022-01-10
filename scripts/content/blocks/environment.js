const CAstatus = require("content/statusEffects");
const CAitems = require("content/items");

// Add to vanilla

Blocks.ice.itemDrop = CAitems.ice;
Blocks.ice.playerUnmineable = true;

// Adamantite Plating

const adamantitePlating1 = extend(Floor, "adamantite-plating-1", {variants: 0});
const adamantitePlating1R = extend(Floor, "adamantite-plating-1-reverse", {variants: 0});
const adamantitePlating2 = extend(Floor, "adamantite-plating-2", {variants: 0});
const adamantitePlating2R = extend(Floor, "adamantite-plating-2-reverse", {variants: 0});
const adamantitePlating3 = extend(Floor, "adamantite-plating-3", {variants: 0});
const adamantitePlating3R = extend(Floor, "adamantite-plating-3-reverse", {variants: 0});
const adamantitePlating4 = extend(Floor, "adamantite-plating-4", {variants: 0});
const adamantitePlating4R = extend(Floor, "adamantite-plating-4-reverse", {variants: 0});
const adamantitePlating5 = extend(Floor, "adamantite-plating-5", {variants: 0});
const adamantitePlating5R = extend(Floor, "adamantite-plating-5-reverse", {variants: 0});
const adamantitePlating6 = extend(Floor, "adamantite-plating-6", {variants: 0});
const adamantitePlating6R = extend(Floor, "adamantite-plating-6-reverse", {variants: 0});

const adamantitePlatingWallLight = extend(StaticWall, "adamantite-plating-wall-light", {variants: 2});
const adamantitePlatingWallMedium = extend(StaticWall, "adamantite-plating-wall-middle", {variants: 2});
const adamantitePlatingWallHeavy = extend(StaticWall, "adamantite-plating-wall-heavy", {variants: 2});

// Liquids
const cryo = extend(Floor, "cryo-pool", {
    localizedName: "Cryofluid",
    solid: false,
    variants: 1,
    placeableOn: true,
    targetable: false,
    canOverdrive: false,
    cacheLayer: CacheLayer.water,
    hasShadow: false,
    destructible: false,
    speedMultiplier: 0.6,
    damageTaken: 0,
    drownTime: 180,
    status: StatusEffects.freezing,
    statusDuration: 120,
    isLiquid: true,
    liquidDrop: Liquids.cryofluid,
    liquidMultiplier: 0.75,
    playerUnmineable: true
});

const cryogenic = extend(Floor, "cryogenic-pool", {
    localizedName: "Cryogenic Fluid",
    solid: false,
    variants: 1,
    placeableOn: true,
    targetable: false,
    canOverdrive: false,
    cacheLayer: CacheLayer.water,
    hasShadow: false,
    destructible: false,
    speedMultiplier: 0.4,
    damageTaken: 0,
    drownTime: 180,
    status: CAstatus.cryogenicFreezing,
    statusDuration: 120,
    isLiquid: true,
    liquidDrop: CAitems.cryogenicFluid,
    liquidMultiplier: 0.5,
    playerUnmineable: true
});

const scale = extend(Floor, "scale-pool", {
    localizedName: "Scale",
    solid: false,
    variants: 1,
    placeableOn: true,
    targetable: false,
    canOverdrive: false,
    cacheLayer: CacheLayer.tar,
    emitLight: true,
    lightRadius: 35,
    lightColor: Color.valueOf("B83DBA50"),
    hasShadow: false,
    destructible: false,
    status: CAstatus.infected,
    statusDuration: 240,
    drownTime: 180,
    isLiquid: true,
    liquidDrop: CAitems.scale,
    liquidMultiplier: 0.5,
    playerUnmineable: true
});

const lava = extend(Floor, "lava", {
    localizedName: "Lava",
    variants: 1,
//    update: true,
    emitLight: true,
    lightRadius: 65,
    lightColor: Color.valueOf("FFA500"),
    cacheLayer: CacheLayer.mud,
    solid: false,
    hasShadow: false,
    placeableOn: false,
    isLiquid: true,
    drownTime: 300,
    speedMultiplier: 0.8,
    status: CAstatus.incinerating,
    statusDuration: 120
});

// Natural
const lavaRock = extend(Floor, "lavarock", {
    localizedName: "Lava Rock",
    variants: 3,
    emitLight: true,
    lightRadius: 45,
    lightColor: Color.valueOf("FFA500"),
    blendGroup: Blocks.basalt,
    solid: false,
    placeableOn: true,
    isLiquid: false,
    status: StatusEffects.burning,
    statusDuration: 15
});
lavaRock.attributes.set(Attribute.heat, 1);
lavaRock.attributes.set(Attribute.water, -1);

// Ores
const adamantite = extend(OreBlock, "adamantite-scraps", {
    localizedName: "Adamantite Ruins",
    variants: 5,
    playerUnmineable: true,
    itemDrop: CAitems.adamantite,
    oreDefault: false
});
const detonatite = extend(OreBlock, "detonatite-ore", {
    localizedName: "Detonatite Chunks",
    variants: 1,
    playerUnmineable: true,
    itemDrop: CAitems.detonatite,
    oreDefault: false
});