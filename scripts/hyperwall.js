const healAmount = 10
const delay = 300;

const hyperWall = extendContent(Wall, "hyperwall", {});

hyperWall.buildType = () => extendContent(Wall.WallBuild, hyperWall, {
	updateTile() {
		if (this.damaged() & this.timer.get(0, delay)) {
            this.heal(this.maxHealth / healAmount);
            Fx.healBlockFull.at(this.x, this.y, 2, Pal.heal);
        }
	}
});