class CrewMember {

  constructor(position) {
    this.position = position;
    this.currentShip = "looking for a Rig"
  }
   engageWarpDrive(){
  if(this.currentShip !== "looking for a Rig" &&  this.position === "Pilot") {
    return this.warpDrive = "engaged";
  } else {
     return "had no effect"
   }
   }

   chargePhasers(){
  if(this.currentShip !== "looking for a Rig" &&  this.position === "Gunner") {
    return this.currentShip.phasersCharge = "charged";
  } else {
     return "had no effect"
   }
   }

   setsInvisibility(){
  if(this.currentShip !== "looking for a Rig" &&  this.position === "Defender") {
    return this.currentShip.cloaked = true;

  } else {
      return "had no effect"
   }
   }

 }



 // should return 'had no effect' when the crew member tries to use their special ability when not assigned to a ship ‣
 // TypeError: tristan.engageWarpDrive is not a function
 //     at Context.it (test/crewMemberTest.js:22:20)

 // charge phasers
 // it should set phasers to 'charged' when the gunner chargePhasers() ‣
 // TypeError: pilot.chargePhasers is not a function
 //     at Context.it (test/crewMemberSpaceshipTest.js:35:13)
 // engage warp drive
 // should set the spaceship's warp drive to 'engaged' when the pilot uses engageWarpDrive() ‣
 // TypeError: defender.engageWarpDrive is not a function
 //     at Context.it (test/crewMemberSpaceshipTest.js:45:16)
 // cloak
 // should cloak the ship when a defender uses setsInvisibility() ‣
 // TypeError: gunner.setsInvisibility is not a function
 //     at Context.it (test/crewMemberSpaceshipTest.js:55:14)
