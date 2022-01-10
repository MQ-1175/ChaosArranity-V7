//Config
var bulletAmount = 6;
var bulletDamage = 100;
var bulletPierce = 3;
var baseDamage = 25;
var blockDamage = 20;

//Status Effect
const fragSlow = new StatusEffect("frag-slow");
fragSlow.speedMultiplier = 0.1;

//Bullet Definition
const frag = extend(BasicBulletType, {});
frag.damage = bulletDamage;
frag.pierce = true;
frag.pirceCap = bulletPierce;
frag.speed = 3;
frag.lifetime = 20;
frag.width = 6;
frag.height = 6;
frag.status = fragSlow;
frag.statusDuration = 15
frag.frontColor = Color.valueOf("7685AA");
frag.backColor = Color.valueOf("676593");

//Mine Behavior
const mine = extendContent(ShockMine, "odium-mine", {});
var h = 0;
mine.buildType = () => extendContent(ShockMine.ShockMineBuild, mine, {
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