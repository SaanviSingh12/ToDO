

var form=document.getElementById('form1');
form.addEventListener('submit',function(event){

    var desc=document.getElementById('description');
    var cat=document.getElementById('category');
    var date=document.getElementById('date');
    if(desc==''){
        alert("Description can not be empty, please fill up");
        event.preventDefault();
    }
    if(cat==''){
        alert("please choose category");
        event.preventDefault();
    }
    if(date==''){
        alert("Please select date ");
        event.preventDefault();
    }
});