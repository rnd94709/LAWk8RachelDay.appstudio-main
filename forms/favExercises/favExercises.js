let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()   
 for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
}


btncheck.onclick=function(){
  let message = ""
  for (i = 0; i < selExercises.text.length; i++)
     message = message + selExercises.text[i] + ", "
  if(message == "situps, plank, ")
    lblmessage.value = "You chose situps and planks - those are the two core exercises."
  else
    lblmessage.value = "You did not pick the two core exercises."
}


btnMobileNav.onclick=function(){
    ChangeForm(mobileNav)
}
