class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    for( let i = 0; i < crew.length; i++){
      crew[i].currentShip = this
    }
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = crew.length === 0;
    this.phasersCharge = 'uncharged';
  }

}
