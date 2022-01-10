const scaleBubble = new Effect(90, e => {
    Draw.color(Color.valueOf("B83DBA"));
    Fill.circle(e.x, e.y, e.fin() * 1);
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.fin() * 3);
});

const scaleDrip = new Effect(60, e => {
    Draw.color(Color.valueOf("B83DBA"));
    Fill.circle(e.x, e.y, e.fout() * 2);
});

const scaleBlast = new Effect(30, e => {
    Draw.color(Color.valueOf("B83DBA"));
    Lines.stroke(e.fout() * 4);
    Angles.randLenVectors(e.id + 1, 12, 1 + 30 * e.finpow(), (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 8);
    });
});

const cryogenicFreeze = new Effect(40, e => {
    Draw.color(Color.valueOf("B7CBF4"));
    Fill.circle(e.x, e.y, e.fout() * 1.2);
});

const ashEffect = new Effect(60, e => {
    Draw.color(Color.valueOf("606060"));
    Fill.circle(e.x, e.y, e.fout() * 2);
});

const deathChargeEffect = new Effect(166, e => {
  Draw.color(Color.valueOf("FF4444"));
  Lines.stroke(e.fin() * 6);
  Lines.circle(e.x, e.y, 4 + e.fout() * 100);
  Fill.circle(e.x, e.y, e.fin() * 30);
  Angles.randLenVectors(e.id, 30, 50 * e.fout(), (x, y) => {
      Fill.circle(e.x+x, e.y+y, e.fin() * 20);
  });
  Fill.circle(e.x, e.y, e.fin() * 20);
});

module.exports = {
    scaleBubble:scaleBubble,
    scaleDrip:scaleDrip,
    scaleBlast:scaleBlast,
    cryogenicFreeze:cryogenicFreeze,
    ashEffect:ashEffect,
    deathChargeEffect:deathChargeEffect
};