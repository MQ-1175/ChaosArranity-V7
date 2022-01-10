const CAitems = require("content/items");
const units = require("content/units");

// Overdriver
const overdriver = extend(OverdriveProjector, "overdriver", {
    localizedName: "Overdriver",
    description: "A smaller and less powerful overdrive projector. Uses silicon to boost range and speed.",
    health: 90,
    hasItems: true,
    hasLiquids: false,
    itemCapacity: 10,
    size: 1,
    range: 40,
    speedBoost: 1.25,
    phaseRangeBoost: 32,
    speedBoostPhase: 0.25,
    useTime: 480,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        Items.lead, 100,
        Items.graphite, 50,
        Items.silicon, 45
    )
});
overdriver.consumes.power(0.666666666666);
overdriver.consumes.item(Items.silicon, 1).boost();

// Odium Mine
//Config
var bulletAmount = 7;
var bulletDamage = 110;
var bulletPierce = 3;
var baseDamage = 30;
var blockDamage = 20;

const fragSlow = extend(StatusEffect, "frag-slow", {speedMultiplier: 0.1});

const frag = extend(BasicBulletType, 3, bulletDamage, {
    pierce: true,
    pirceCap: bulletPierce,
    lifetime: 20,
    width: 6,
    height: 6,
    status: fragSlow,
    statusDuration: 15,
    frontColor: Color.valueOf("7685AA"),
    backColor: Color.valueOf("676593")
});

const odiumMine = extendContent(ShockMine, "odium-mine", {
    localizedName: "Odium Mine",
    description: "Releases fragments of odium upon enemy contact.",
    size: 1,
    health: 60,
    hasShadow: false,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        Items.silicon, 25,
        CAitems.odium, 12
    )
});
var h = 0;
odiumMine.buildType = () => extendContent(ShockMine.ShockMineBuild, odiumMine, {
	unitOn(unit) {
        if(this.enabled && unit.team != this.team){
            while (h <= bulletAmount) {
                frag.create(this, this.team, this.x, this.y, Math.random()*360);
                h++
            }
            h = 0;
            unit.damage(baseDamage);
            this.damage(blockDamage);
        }
    }
});

// Core: intel [Fix Intel sometime, it's a mess]
var teamColor = Color.valueOf("FFFFFF"); //Fix this
const coreWave = new Effect(20, e => {
    Draw.color(teamColor);
    Lines.stroke(e.fout() * 8);
    Lines.circle(e.x, e.y, e.fin() * 184);
});
const healPercent = 5;
const intel = extend(CoreBlock, "core-intel", {
    localizedName: "Core: Intel",
    description: "Core of the base. Insanely well armored. Stores more than a Nucleus.",
    size: 6,
    health: 35000,
    update: true,
    hasItems: true,
    hasLiquids: false,
    hasPower: false,
    itemCapacity: 20000,
    unitCapModifier: 50,
    unitType: units.delta,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        Items.copper, 10000,
        Items.lead, 10000,
        Items.thorium, 8000,
        Items.phaseFabric, 4000,
        Items.silicon, 12000,
        CAitems.adamantite, 2000
    )
});
const intelCryo = extend(LiquidBulletType, CAitems.cryogenicFluid, {
    knockback: 1,
    damage: 0,
    lifetime: 12,
    speed: 3,
    puddleSize: 4,
    orbSize: 8,
    status:StatusEffects.wet
});
var y = 0;
intel.buildType = () => extend(CoreBlock.CoreBuild, intel, {
    updateTile(){
        //teamColor = this.team.color;    Fix this
        if (this.timer.get(0, 300)){
            Units.nearby(this.x-184, this.y-184, 368, 368, u =>{
                if (u.team != this.team){
                    teamColor = Pal.remove;
                    coreWave.at(this.x, this.y);
                    u.damage(80);
                }else if(u.team == this.team && u.health != u.maxHealth){
                    u.heal(240);
                    teamColor = Pal.heal;
                    coreWave.at(this.x, this.y);
                }
            });
            if (this.damaged()){
                this.heal((healPercent/100)*this.maxHealth);
                Fx.healBlockFull.at(this.x, this.y, 6, Pal.heal);
            };
        }; // Help
        if(Fires.has(this.tile.x, this.tile.y) || Fires.has(this.tile.x-5, this.tile.y+5) || Fires.has(this.tile.x+5, this.tile.y+5) || Fires.has(this.tile.x-5, this.tile.y-5) || Fires.has(this.tile.x+5, this.tile.y-5)){
            intelCryo.create(this, this.team, this.x, this.y, 0);
            intelCryo.create(this, this.team, this.x, this.y, 45);
            intelCryo.create(this, this.team, this.x, this.y, 90);
            intelCryo.create(this, this.team, this.x, this.y, 135);
            intelCryo.create(this, this.team, this.x, this.y, 180);
            intelCryo.create(this, this.team, this.x, this.y, 225);
            intelCryo.create(this, this.team, this.x, this.y, 270);
            intelCryo.create(this, this.team, this.x, this.y, 315);
            intelCryo.create(this, this.team, this.x + 24, this.y + 24, 225);
            intelCryo.create(this, this.team, this.x - 24, this.y -24, 45);
            intelCryo.create(this, this.team, this.x + 24, this.y - 24, 135);
            intelCryo.create(this, this.team, this.x - 24, this.y + 24, 315);
            intelCryo.create(this, this.team, this.x, this.y + 16, 270);
            intelCryo.create(this, this.team, this.x, this.y - 16, 90);
            intelCryo.create(this, this.team, this.x + 16, this.y, 180);
            intelCryo.create(this, this.team, this.x - 16, this.y, 0);
        };
    }
});


// Mega Vault
const megaVault = extend(StorageBlock, "mega-vault", {
    localizedName: "Mega Vault",
    description: "A vault capable of storing an immense amount of items. Uses phase fabric to shrink items, making the Mega Vault extremely compact.",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 4000,
    hasLiquids: false,
    hasItems: true,
    hasPower: false,
    itemCapacity: 5000,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        Items.titanium, 500,
        Items.phaseFabric, 300,
        CAitems.adamantite, 100
    )
});

// Recon Point
const recon = extendContent(Wall, "reconsention-point", {
    LocalizedName: "Unit Reconsention Point",
    description: "Increases your max amount of allowed units at a time by 10.",
    size: 2,
    researchCostMultiplier: 5.4,
    buildCostMultiplier: 5,
    unitCapModifier: 10,
    health: 980,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        Items.silicon, 3000,
        Items.phaseFabric, 800,
        CAitems.refinedOdium, 500
    )
});
recon.flags = EnumSet.of(BlockFlag.unitModifier);

// Mender
const adamantiteMend = extend(MendProjector, "adamantite-mender", {
    localizedName: "Adamantite Mender",
    description: "A very powerful mender made with adamantite. More range and faster healing than a Mend Projector.",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 1000,
    reload: 6,
    range: 96,
    healPercent: 1,
    phaseBoost: 0,
    phaseRangeBoost: 96,
    useTime: 300,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        CAitems.adamantite, 20,
        Items.titanium, 300,
        Items.silicon, 330,
        Items.lead, 400
    )
});
adamantiteMend.consumes.power(5);
adamantiteMend.consumes.liquid(CAitems.scale, 0.2).boost();

// Overdrive
const adamantiteOverdrive = extend(OverdriveProjector, "adamantite-overdrive-projector", {
    localizedName: "Adamantite Overdrive Projector",
    description: "An upgraded overdrive projector.",
    researchCostMultiplier: 0.5,
    health: 1400,
    hasItems: false,
    hasLiquids: true,
    liquidCapacity: 10,
    size: 4,
    reload: 60,
    range: 320,
    speedBoost: 3,
    phaseRangeBoost: 0,
    speedBoostPhase: 1,
    useTime: 60,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        CAitems.adamantite, 60,
        Items.surgeAlloy, 250,
        Items.plastanium, 500,
        Items.silicon, 100
    )
});
adamantiteOverdrive.consumes.power(5);
adamantiteOverdrive.consumes.liquid(CAitems.scale, 0.2).boost();

// Adamantite Force Projector
const adamantiteForce = extend(ForceProjector, "adamantite-force-projector", {
    localizedName: "Adamantite Force Projector",
    description: "A more compact force projector made using adamantite. Handles extreme amounts of damage.",
    size: 3,
    researchCostMultiplier: 0.5,
    liquidCapacity: 12,
    health: 10000,
    outlineColor: Color.valueOf("c30d40"),
    phaseRadiusBoost: 120,
    cooldownNormal: 114,
    cooldownLiquid: 266,
    radius: 96,
    shieldHealth: 8000,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        CAitems.adamantite, 100,
        Items.lead, 200,
        Items.thorium, 200,
        Items.titanium, 200,
        Items.silicon, 300
    )
});
adamantiteForce.consumes.power(4);
adamantiteForce.consumes.item(Items.phaseFabric, 1).boost();

// Bomb
const bomb = extend(NuclearReactor, "bomb", {
    LocalizedName: "Bomb",
    description: "Uses the power of fireatite to create a violent explosion. (Do not try to cool it, it is meant to explode)",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 1200,
    hasPower: false,
    hasItems: true,
    hasLiquids: false,
    liquidCapacity: 0,
    breakSound: Sounds.explosionbig,
    baseExplosiveness: 100,
    explosionRadius: 80,
    explosionDamage: 4000,
    itemDuration: 6000,
    powerProduction: 0.1,
    heating: 1,
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    requirements: ItemStack.with(
        CAitems.adamantite, 5,
        Items.lead, 250,
        Items.copper, 250
    )
});
bomb.consumes.item(CAitems.detonatite, 1);
bomb.consumes.liquid(Liquids.water, 10);

const adamantiteLaunchPad = extend(LaunchPad, "adamantite-launchpad", {
    localizedName: "Adamantite Launchpad",
    description: "Fires large amounts of materials to sectors. A much better launch pad, improved via adamantite.",
    size: 4,
    buildVisibility: BuildVisibility.campaignOnly,
    lightColor: Color.valueOf("c30d40"),
    researchCostMultiplier: 0.5,
    health: 35000,
    hasItems: true,
    hasLiquids: false,
    hasPower: true,
    itemCapacity: 1000,
    launchTime: 1800,
    category: Category.effect,
    requirements: ItemStack.with(
        CAitems.adamantite, 250,
        Items.silicon, 1000,
        Items.titanium, 700,
        Items.metaglass, 300
    )
});
adamantiteLaunchPad.consumes.power(16.667);
adamantiteLaunchPad.podRegion = Core.atlas.find(adamantiteLaunchPad.name + "-pod");

module.exports = {
    overdriver:overdriver,
    odiumMine:odiumMine,
    intel:intel,
    megaVault:megaVault,
    recon:recon,
    adamantiteMend:adamantiteMend,
    adamantiteOverdrive:adamantiteOverdrive,
    adamantiteForce:adamantiteForce,
    bomb:bomb,
    adamantiteLaunchPad:adamantiteLaunchPad
}