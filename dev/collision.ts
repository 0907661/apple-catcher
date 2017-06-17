class Collision {
    public collider(c1: Apple, c2: Basket): boolean {
        // When the apple and basket collide, a boolean will be returned
        return !(c2.x > c1.x + c1.width || c2.x + c2.width < c1.x || c2.y > c1.y + c1.height || c2.y + c2.height < c1.y)
    }

    public borderCollide(c1: Apple, c2: Border): boolean {
        // When the apple and basket collide, a boolean will be returned
        return !(c2.x > c1.x + c1.width || c2.x + c2.width < c1.x || c2.y > c1.y + c1.height || c2.y + c2.height < c1.y)
    }
}