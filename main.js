var nameOfStudentsArray=[];
function submit(){
var display_array=[];
    for(var k=1; k<=4; k++) {
        
        var nameOfStudent=document.getElementById("name_of_the_student_"+k).value;  
        console.log(nameOfStudent);
        nameOfStudentsArray.push(nameOfStudent);  
    } console.log(nameOfStudentsArray);
    
    var lengthOfArray=nameOfStudentsArray.length;
for(var i=0; i<lengthOfArray; i++){
    display_array.push("<h4>NAME-"+ nameOfStudentsArray[i]+"</h4>")
    console.log(display_array);
}
 document.getElementById("display_name_with_commas").innerHTML=display_array;   

 var remove_commas=display_array.join(" ");
 document.getElementById("display_name_without_commas").innerHTML=remove_commas;

 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";   
}
function sorting(){
    nameOfStudentsArray.sort();
var display_student_array_sorting=[];
var length_of_display_array=nameOfStudentsArray.length;
for(var j=0; j<length_of_display_array; j++){
    
    display_student_array_sorting.push("<h4>NAME-"+ nameOfStudentsArray[j]+ "</h4>");
}
var remove_sorting_array_commas=display_student_array_sorting.join(" ");
console.log(display_student_array_sorting);
document.getElementById("display_name_without_commas").innerHTML=remove_sorting_array_commas;

}

