namespace SpriteKind {
    export const Cutscene = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`tileGrass3`)
let Cutoan = sprites.create(assets.image`Frying Pan`, SpriteKind.Cutscene)
Cutoan.setPosition(mySprite.x - 10, mySprite.y)
let Bloop = sprites.create(assets.image`Bloop`, SpriteKind.Cutscene)
Bloop.setPosition(250, mySprite.y)
story.spriteMoveToLocation(Bloop, Cutoan.x, Cutoan.y, 25)
sprites.destroy(Bloop, effects.blizzard, 500)
let mySprite2 = sprites.create(assets.image`Frying Pan useable`, SpriteKind.Player)
mySprite2.setPosition(mySprite.x - 10, mySprite.y)
sprites.destroy(Cutoan)
animation.runMovementAnimation(
mySprite2,
animation.animationPresets(animation.bobbing),
2000,
true
)

