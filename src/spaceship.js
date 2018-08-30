class Spaceship {
  constructor(name, crew, phasers, shields,){
    this.name = name;
    this.crew = crew;
    crew.forEach(mem => mem.currentShip = this)
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = 'uncharged';
    crew.length > 0 ? this.docked = false : this.docked = true;

  }
}
