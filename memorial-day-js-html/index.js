$(document).ready( function(){


fetchJSON()

//submitting form/////////////
$('form#new-activity').on('submit', function(event){
  event.preventDefault()
  var form = this
  var obj = {
    activities:{
    student_name: this.student_name.value,
    activity: this.activity.value,
    location: this.location.value,
    distance_from_school: this.distance_from_school.value,
    description: this.description.value}

  }

 $.ajax({
   url: "http://localhost:3000/api/v1/activities",
   type: "POST",
   data: obj,
   success: function(response){
    $("#active").append(`<div><h1><div>Student: ${response.student_name}</div></h1><br>  <div><p>Activity: ${response.activity}</p></div><br> <div><p>Location: ${response.location}</p></div><br> <div><p>Distance From School: ${response.distance_from_school} miles</p></div><br> <div><p>Description: ${response.description} and STUDYING!!!</p></div><br></div>`)
    clearForm(form)
  }
 })
/////////////////
})})

function fetchJSON(){

  $.ajax({
    url: 'http://localhost:3000/api/v1/activities/',
    success: function(data){
      addActivitiesToDOM(data)
    }
  }
  )
}

function addActivitiesToDOM(actJSON) {
$("#active").append(formatActivties(actJSON))
}

function formatActivties(actJSON){
  var activity = `<div>${actJSON.map(activity => `<h1><div>Student: ${activity.student_name}</div></h1><br>  <div><p>Activity: ${activity.activity}</p></div><br> <div><p>Location: ${activity.location}</p></div><br> <div><p>Distance From School: ${activity.distance_from_school} miles</p></div><br> <div><p>Description: ${activity.description} and STUDYING!!!</p></div><br>`)}</div>`
  return activity
}


function clearForm(form){
  form.reset();
}
