import Graphics from "@/renderer/Graphics";

export default class Point {
    private graphics: Graphics;

    public x: number;
    public y: number;

    public constructor(graphics: Graphics, x: number, y: number) {
        this.graphics = graphics;
        this.x = x;
        this.y = y;
    }

    public toCoordinates(): Point {
        var unitPx = this.graphics.scale;
        return new Point(this.graphics, (this.x - this.graphics.center.x) / unitPx, -(this.y - this.graphics.center.y) / unitPx);
    }

    public toScreen(): Point {
        var unitPx = this.graphics.scale;
        return new Point(this.graphics, this.graphics.center.x + (this.x * unitPx), this.graphics.center.y - (this.y * unitPx));
    }
}
