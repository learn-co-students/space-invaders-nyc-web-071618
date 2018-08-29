

class Spaceship {


  constructor(name, crew) {
    this.name = name
    this.crew = crew;
    this.phasers = 5;
    this.shields = 4;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    crew.length  ? this.docked  = false :   this.docked  = true
    for (let i = 0; i < crew.length; i++) {
      crew[i].currentShip = this
    }
  }


}



  //const memberOne = new crew
  //const spaceShip = new Spaceship(name, crew)
