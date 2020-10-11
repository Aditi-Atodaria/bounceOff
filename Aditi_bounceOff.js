function bounceOff(target1,target2){
  if (target1.x - target2.x < target2.width/2 + target1.width/2
      && target2.x - target1.x < target2.width/2 + target1.width/2) {
    target1.velocityX = target1.velocityX * (-1);
    target2.velocityX = target2.velocityX * (-1);
  }
  if (target1.y - target2.y < target2.height/2 + target1.height/2
    && target2.y - target1.y < target2.height/2 +target1.height/2){
    target1.velocityY = target1.velocityY * (-1);
    target2.velocityY = target2.velocityY * (-1);
    }
}