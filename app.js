

function checkWidth(){
    let windowWidth = $(window).width()
    return windowWidth
}
function quote(arr){
    arr.push(arr[0])
    arr.shift(arr[0])
    return arr[0]
}
function reverseQuote(arr){
    arr.unshift(arr[2])
    arr.pop(arr[2])
    return arr[0]
}


// nav
$(document).ready(function(){    
    if(checkWidth() <= 1000){
        $(".navbox").show()
        $(".nav-item").hide()
        $("#navButton").show()
       $(".nav-item").appendTo($(".navbox"))
    }else{
        $("#navButton").hide()
        $(".navbox").hide()
        $(".nav-item").show()
        $(".nav-item").appendTo($(".nav"))
        
    }
})

$(window).resize(function(){
    let navbox = $(".navbox")
    if(checkWidth() <= 1000){
        $("#navButton").show()
        $(".navbox").show()
        $(".nav-item").hide()
        $(".nav-item").appendTo($(".navbox"))
    }else{
        $("#navButton").hide()
        $(".navbox").hide()
        $(".nav-item").show()
        $(".nav-item").appendTo($(".nav"))        
    }
})

$("#navButton").on("click",function(){
    let navItem = $(".nav-item") 
    navItem.is(":visible")? navItem.hide():navItem.show()

})

// header picture
let arr =["pink","aqua","aquamarine"]
$("#leftButton").on("click", function(){
    $("#picture").css("background-color", quote(arr));
})
$("#rightButton").on("click", function(){
    $("#picture").css("background-color", reverseQuote(arr));
    console.log(notebook)
})
var timer = setInterval(function() {
    $("#picture").css("background-color", reverseQuote(arr));    
}, 3000);

// main 
let item = [laptops,gamingLaptops,computerAccessories]


$(document).ready(function(){
    item.forEach(element =>{
        $(`<button id=${element.id} class="sessionChange">${element.title}</button>`).appendTo(".mainB")
    })
    let sessionNow = 0;
    $("#title").text(item[sessionNow].title)
    $(".big").text(item[sessionNow].bigItem)
    $(".mediumItem").text(item[sessionNow].mediumItem)
    item[sessionNow].item.forEach(element =>{
        $(`<div class='saleItem'><p>${element[sessionNow]}</p><p>${element[1]}</p></div>`).appendTo($(".sale"))
    })

    $("#laptops").on("click", function(){
        sessionNow = 0;
    })
    $("#gamingLaptops").on("click", function(){
        sessionNow = 1;
    })
    $("#computerAccessories").on("click", function(){
        sessionNow = 2;
    })
    $(".sessionChange").on("click",function(){
     $(".sale").empty();
    $("#title").text(item[sessionNow].title)
    $(".big").text(item[sessionNow].bigItem)
    $(".mediumItem").text(item[sessionNow].mediumItem)
    item[sessionNow].item.forEach(element =>{
        $(`<div class='saleItem'><p>${element[0]}</p><p>${element[1]}</p></div>`).appendTo($(".sale"))
    })
    })
    
})


// TEST
$("#test").on("click",function(){
    laptops.item.forEach(element => {
        console.log(element)
    });
})