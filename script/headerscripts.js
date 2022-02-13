function onDropDownButtonClick(){
    try{
        var dropDownMenu = document.getElementById("drop-menu");


        if(dropDownMenu.style.display == "none")
            dropDownMenu.style.display = "block";
        else
            dropDownMenu.style.display = "none";
        return;

    }catch(e){
        alert("error: " + e);
    }
}