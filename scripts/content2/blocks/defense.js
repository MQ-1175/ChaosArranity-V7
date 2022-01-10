const CAitems = require("content2/items");

// Ice Blocks
// Config
var fragAmount = 3;
var fragDamage = 8;
var fragChance = 20;
var fragSpread = 10;
var meltSpeed = 1;

const iceBlock = extendContent(Wall, "ice-block", {
    localizedName: "Ice Block",
    description: "Protects structures from enemy projectiles, releasing ice shards upon being hit. Slowly melts over time.",
    size: 1,
    update: true,
    health: 180,
    canOverdrive: false,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.walls,
    category: Category.defense,
    requirements: ItemStack.with(CAitems.ice, 6)
});
const iceBlockLarge = extendContent(Wall, "ice-block-large", {
    localizedName: "Large Ice Block",
    description: "Protects structures from enemy projectiles, releasing ice shards upon being hit. Slowly melts over time.",
    size: 2,
    update: true,
    health: 720,
    canOverdrive: false,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.walls,
    category: Category.defense,
    requirements: ItemStack.with(CAitems.ice, 24)
});

const icefrag = extend(BasicBulletType, {
  speed: 3,
  damage: fragDamage,
  lifetime: 20,
  width: 10,
  height: 10,
  frontColor: Color.valueOf("b7cbf4"),
  backColor: Color.valueOf("9db5e5"),
  shrinkX: 0.6,
  hitEffect: Fx.freezing,
  despawnEffect: Fx.freezing
});

var h = 0;
iceBlock.buildType = () => extendContent(Wall.WallBuild, iceBlock, {
  collision(bullet) {
    this.super$collision(bullet);
    if(bullet.team != this.team && Math.random()*100 <= fragChance){
      while (h < fragAmount) {
          icefrag.create(this, this.team, this.x, this.y, (bullet.rotation() + 180) + ((Math.random() -0.5) * fragSpread) * 2);
          h++
      }
      h = 0;
    }
  },
  updateTile(){
    if (this.timer.get(0, 60)){
      var tileHeat = this.floor().sumAttribute(Attribute.heat, this.tile.x, this.tile.y);
      var tileWater =this.floor().sumAttribute(Attribute.water, this.tile.x, this.tile.y);
      if (Weathers.snow.isActive()) {
        meltSpeed = 0 
      } else {
        meltSpeed = 1
      };
      var meltAmount = meltSpeed + (tileHeat*1.5) - (tileWater*1.2);
      if (Fires.has(this.tile.x, this.tile.y)){meltAmount *= 3};
      this.damage(meltAmount);
      Puddles.deposit(this.tile, Liquids.water, 4 + (meltAmount));
    }
  }
});

iceBlockLarge.buildType = () => extendContent(Wall.WallBuild, iceBlockLarge, {
  collision(bullet) {
    this.super$collision(bullet);
    if(bullet.team != this.team && Math.random()*100 <= fragChance){
      while (h < fragAmount) {
          icefrag.create(this, this.team, this.x, this.y, (bullet.rotation() + 180) + ((Math.random() -0.5) * fragSpread) * 2);
          h++
      }
      h = 0;
    }
  },
  updateTile(){
    if (this.timer.get(0, 60)){
      var tileHeatL = this.floor().sumAttribute(Attribute.heat, this.tile.x, this.tile.y);
      var tileWaterL =this.floor().sumAttribute(Attribute.water, this.tile.x, this.tile.y);
      var meltAmountL = meltSpeed + (tileHeatL*1.5) - (tileWaterL*1.2);
      if (Fires.has(this.tile.x, this.tile.y)){meltAmountL *= 3};
      this.damage(meltAmountL);
      Puddles.deposit(this.tile, Liquids.water, 6 + (meltAmountL*1.2));
    }
  }
});

// Hyperwall
var healAmount = 10
var delay = 300;

const hyperWall = extendContent(Wall, "hyperwall", {
    localizedName: "Hyperwall",
    description: "Utilizes the power of odium to create a form of hyperwall that has phase, surge, and plastanium like properties. Protects structures from enemy projectiles.",
    size: 2,
    update: true,
    health: 4800,
    lightningChance: 0.15,
    lightningDamage: 25,
    lightningLength: 16,
    chanceDeflect: 20,
    absorbLasers: true,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.walls,
    category: Category.defense,
    requirements: ItemStack.with(
        Items.phaseFabric, 48,
        CAitems.odium, 48,
        CAitems.refinedOdium, 48,
        Items.surgeAlloy, 48
    )
});
hyperWall.buildType = () => extendContent(Wall.WallBuild, hyperWall, {
	updateTile() {
		if (this.damaged() & this.timer.get(0, delay)) {
            this.heal(this.maxHealth / healAmount);
            Fx.healBlockFull.at(this.x, this.y, 2, Pal.heal);
        }
	}
});

// Adamantite Walls
const adamantiteWall = extendContent(Wall, "adamantite-wall", {
    localizedName: "Adamantite Wall",
    description: "Extremely durable wall.",
    size: 1,
    researchCostMultiplier: 0.5,
    health: 6000,
    canOverdrive: false,
    absorbLasers: true,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.walls,
    category: Category.defense,
    requirements: ItemStack.with(CAitems.adamantite, 6)
});
const adamantiteWallLarge = extendContent(Wall, "adamantite-wall-large", {
    localizedName: "Large Adamantite Wall",
    description: "Extremely durable wall.",
    size: 2,
    researchCostMultiplier: 0.5,
    health: 24000,
    canOverdrive: false,
    absorbLasers: true,
    buildVisibility: BuildVisibility.shown,
    group: BlockGroup.walls,
    category: Category.defense,
    requirements: ItemStack.with(CAitems.adamantite, 24)
});

module.exports = {
  iceBlock:iceBlock,
  iceBlockLarge:iceBlockLarge,
  hyperWall:hyperWall,
  adamantiteWall:adamantiteWall,
  adamantiteWallLarge:adamantiteWallLarge
}
