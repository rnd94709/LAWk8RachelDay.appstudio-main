rdoPersonalityType.onchange=function(){
   let descriptionChoice = $("input[name=rdoPersonalityType]:checked").prop("value")
  if (rdoPersonalityType.value == 0)
    lblpersonalityType.value = (`I would agree that you are a ${descriptionChoice} person too!`)
  else if (rdoPersonalityType.value == 1)
    lblpersonalityType.value = (`I would agree that you are a ${descriptionChoice} person too!`)
  else if (rdoPersonalityType.value == 2)
    lblpersonalityType.value = (`I would agree that you are a ${descriptionChoice} person too!`)
  else (rdoPersonalityType.value == 3)
    lblpersonalityType.value = (`I would agree that you are a ${descriptionChoice} person too!`)
}

btnExercisesForm.onclick=function(){
    ChangeForm(favExercises)
}
