
var Will=["https://i.ytimg.com/vi/lqnbECvPH58/maxresdefault.jpg","http://www.capsulecomputers.com.au/wp-content/uploads/2012/03/gintama-yes.jpg","https://media1.giphy.com/media/ROF8OQvDmxytW/giphy.gif"];
var leo=["https://i.ytimg.com/vi/Awy_e38-oTA/maxresdefault.jpg","https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-poster.jpg","https://media3.giphy.com/media/CNUb51EbTxuRG/giphy.gif"];
var smp=["https://i.ytimg.com/vi/8269hsTedgA/maxresdefault.jpg" ,"https://media.giphy.com/media/12j5dlVYCpuCVW/giphy.gif","https://media.giphy.com/media/9SzWduWEsKqME/giphy.gif"];
var lol=["https://www.guildcraft.org/attachments/axed-png.41467/","https://66.media.tumblr.com/73e3544d9e30d25377511318a21a181d/tumblr_p9auypXd4q1togxzho1_400.gif","https://media1.giphy.com/media/RboGiiSBHeJpu/giphy.gif"];
$('button').click(function(){
    var magia = $('.magia').val();
    ///$(".mood").html("");
    console.log(magia);
    if(magia === "sad"){
        sadico();     
    } else if(magia==="happy"){
        happy1();
    }else if(magia==="hungry"){
      hungry2();
    }else if(magia==="tired"){
      tired3();
    }
 

});
function sadico(){
    Background();
    displayImage(Will);

}

function Background(){
    $('body').css("background-color", "black");
       
}
function happy1(){
    $('body').css("background-color", "blue");
    displayImage(leo);
}
function hungry2(){
    $('body').css("background-color", "black");
    displayImage(smp);   
}
function tired3(){
    $('body').css("background-color", "red");
    displayImage(lol);   
}
function displayImage(ono){
    
$('.images').html('');
    ono.forEach(function(fotos){
        $('.images').append("<img src=" + fotos + ">");
    });
}
