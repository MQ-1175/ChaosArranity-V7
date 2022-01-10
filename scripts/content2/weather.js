const CAitems = require("content/items");
const CAstatus = require("content/statusEffects");

const scalestorm = new RainWeather("scalestorm");
scalestorm.localizedName = "Scalestorm";
scalestorm.attrs.set(Attribute.light, -0.2);
scalestorm.attrs.set(Attribute.water, 0.2);
scalestorm.sound = Sounds.rain;
scalestorm.soundVol = 0.25;
scalestorm.liquid = CAitems.scale;
scalestorm.status = CAstatus.scaleWet;
scalestorm.stroke = 2;
scalestorm.color = Color.valueOf("B83DBA");

const ashfall = new ParticleWeather("ashfall");
ashfall.localizedName = "Ashfall";
ashfall.attrs.set(Attribute.light, -0.9);
ashfall.attrs.set(Attribute.water, -0.5);
ashfall.attrs.set(Attribute.spores, -0.1);
ashfall.particleRegion = "particle";
ashfall.noiseScale = 1000;
ashfall.noisePath = "fog";
ashfall.force = 1.8;
ashfall.xspeed = 0.25;
ashfall.xspeed = 0.25;
ashfall.baseSpeed = 0.6;
ashfall.drawParticles = true;
ashfall.drawNoise = true;
ashfall.sizeMin = 4;
ashfall.sizeMax = 16;
ashfall.density = 2600;
ashfall.opacityMultiplier = 1;
ashfall.noiseLayers = 8;
ashfall.status = CAstatus.ashen;
ashfall.color = Color.valueOf("303030");
ashfall.noiseColor = Color.valueOf("303030");

module.exports = {
    scalestorm:scalestorm
}