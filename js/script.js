function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//main js here->

var arrayMap = {
  0 : linksArray,
  1 : linksEntertainment,
  2 : linksMusic,
  3 : linksFilms,
  4 : linksGames,
  5 : linksTech
}

function renderVideos(obj){
  var el = 
  `
  <div class="col-md-6">
  <div class="card">
   
    <div class="card-body">
      <h5 class="card-title">`
        +obj.title+
      `</h5>
      <p class="card-text">
        <iframe class="responsive-iframe-fix" src= "`
        +obj.link+ 
        `" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
      
      </div>
    </div>
  </div>
  `;
  return el;
}


//This function renders categories specific links!
function goToCategories(index){  
    $(".main-content").show();
    $("#about-us").hide();
    renderMainLinks(index);
    //hightilight menu
    $('#top-nav-main a').removeClass("active")
    var el = $('#top-nav-main').children().eq(index);
    $(el).addClass("active");
}

function renderMainLinks(arg) {
  var ar = arrayMap[arg];
  $("#main-wrapper-content").html("");
  for(var i=0; i< ar.length; i++){
    var el = renderVideos(ar[i]);
    $("#main-wrapper-content").append(el);
  }
}

function goToAboutUS(){
  $(".main-content").hide();
  $("#about-us").show();
}
window.onload = (event) => {
  $("#about-us").hide();
  renderMainLinks(0);
};