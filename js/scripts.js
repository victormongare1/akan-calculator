function checkgender() {
  var century=document.getElementById("century").value;
  var cc=parseInt(century)
  var day = document.getElementById("day").value;
  var dd = parseInt(day);
  var month = document.getElementById("month").value;
  var mm = parseInt(month);
  var year = document.getElementById("year").value;
  var yy = parseInt(year);
  var result =(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("male").checked){
    var gender = 'male';
    }
  else if(document.getElementById("female").checked){
    var gender= 'female';
    }
  if(mm < 1 || mm > 12 || mm == 2 && dd > 29) {
    alert("INVALID MONTH");
    }
  else if(dd < 1 || dd > 31) {
    alert("INVALID DAY");
    }
  else if(Math.ceil(result) === 1 && gender === 'male'){
    alert("Born on Monday ,your akan name is " + boy[1]);
    }
  else if(Math.ceil(result) === 2 && gender === 'male') {  
    alert("Born on Tuesday ,your akan name is " + boy[2]);
    }
  else if (Math.ceil(result) === 3 && gender === 'male') {
    alert("Born on Wednesday ,your akan name is " + boy[3]);
    }
  else if (Math.ceil(result) === 4 && gender === 'male') {  
    alert("Born on Thursday,your akan name is " + boy[4]);
    }
  else if (Math.ceil(result) === 5 && gender === 'male') {  
    alert("Born on Friday,your akan name is " + boy[5]);
    }
  else if (Math.ceil(result) === 6 && gender === 'male') {  
    alert("Born on Saturday,your akan name is " + boy[6]);
    }
  else if (Math.ceil(result) === 0 && gender === 'male') {
    alert("Born on Sunday,your akan name is " + boy[0]);
    }
  else if (Math.ceil(result) === 1 && gender === 'female') {  
    alert("Born on monday ,your akan name is " + girl[1]);
      }
  else if (Math.ceil(result) === 2 && gender === 'female') {  
    alert("Born on Tuesday,your akan name is " + girl[2]);
    }
  else if (Math.ceil(result) === 3 && gender === 'female') {  
    alert("Born on Wednesday,your akan name is " + girl[3]);
    }
  else if (Math.ceil(result) === 4 && gender === 'female') {  
    alert("Born on Thursday,your akan name is " + girl[4]);
    }
  else if (Math.ceil(result) === 5 && gender === 'female') {  
    alert("Born on Friday,your akan name is " + girl[5]);
    }
  else if (Math.ceil(result) === 6 && gender === 'female') {
    alert("Born on Saturday,your akan name is " + girl[6]);
    }
  else if (Math.ceil(result) === 0 && gender === 'female') {
    alert("Born on Sunday,your akan name is " + girl[0]);
    }
  }