
class BoardMember {
  
  constructor(name, homeState, training){
    this.name = name 
    this.homeState = homeState
    this.training = training
  }

 // I do not have to define function with class methods
  veto() {
    return "No, I must disagree"
  }
  
   approve() {
    return "You can do that!"
  }
  
  
  
}