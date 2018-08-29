
class Spaceship {

  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = `disengaged`
    this.phasersCharge = `uncharged`
    this.assignCrew()
    crew.length !== 0 ? this.docked = false : this.docked = true
  }

  assignCrew(){
    this.crew.forEach((crew) => crew.currentShip = this)
  }

}

stellarMobile = new Spaceship("Stellar Mobile")
