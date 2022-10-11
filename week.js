var text = 0;

function postFunction()
{
    var post = document.getElementById("text1").value;
    console.log("text="+text);
    
    switch(text)
    {
        case 0 :
        document.getElementById("topic1").innerText = post ;
        
        text++;
        break  

        case 1 :
        document.getElementById("comment1").innerText = post ;

        text++;
        break 

        case 2 :
        document.getElementById("comment2").innerText = post ;
    
        text++;
        break 
    }

}
function clearFunction()
{
    document.getElementById("text1").innerText=("");
    document.getElementById("topic1").innerText=("");
    document.getElementById("comment1").innerText=("");
    document.getElementById("comment2").innerText=("");

    const textarea = document.getElementById("text1");
    textarea.value = ' ' ;
    text = 0;
}