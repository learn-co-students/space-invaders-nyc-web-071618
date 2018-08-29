
class CrewMember {

  constructor(position){
    this.position = position
    this.currentShip = `Looking for a Rig`
  }

  chargePhasers(){
    if(this.currentShip !== `Looking for a Rig` && this.position === `Gunner`){
      return this.currentShip.phasersCharge = `charged`
    } else {
      return `had no effect`
    }
  }

  engageWarpDrive(){
    if(this.currentShip !== `Looking for a Rig` && this.position === `Pilot`){
      return this.currentShip.warpDrive = `engaged`
    } else {
      return `had no effect`
    }
  }

  setsInvisibility(){
    if(this.currentShip !== `Looking for a Rig` && this.position === `Defender`){
      return this.currentShip.cloaked = true
    } else {
      return `had no effect`
    }
  }

}

dave = new CrewMember("spaceship elf")
