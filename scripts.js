$('#gomb1').on("click", function() {
    alert("Igen, most rámkattintottál")
})


$('#gomb2').on("click", function() {
    $('#gomb1').text("megváltozott")
})


$('#gomb3').on("click", function() {
    $('#gomb1').css("background-color", "blue")
    $('#gomb2').css("background-color", "purple")
    $('#gomb3').css("background-color", "red")
})

$("#gomb4").click(
    (event) => {
        $('input').val(
            "blue")
        $('#gomb4').css("background-color", "blue")    
    })