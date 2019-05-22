

$(document).ready(function() {

    $("#lookup").click(function() {
        //alert("hello hello");
        var word=$("#word").val();
        $.ajax({
            url: "DictServlet",
            data: {word:word},
            type: "GET",
        })
            .done(functionName)
            .fail(ajaxFailure);

    });
});
function functionName(data)
{
    //alert(data);

    //console.debug(data);
    $("#lookup").empty();
    $("#showWord").empty();
    $("#notfound").empty();
    $('#content').empty();
    if(data.length<=0)
        $("#notfound").append("<p id='error'>\""+$("#word").val()+"\" not found</p>");
    else
    {
        var ol="<div><ol><strong>"+$("#word").val()+"</strong>";

        var ol="<div><strong>"+$("#word").val()+"</strong></div>";
        $("#showWord").append(ol);
        $('#content').html(data);

    }

}
function ajaxFailure()
{
    $("#notfound").empty();
    $("#notfound").append("<p id='error'>\""+$("#word").val()+"\" not found</p>");
}