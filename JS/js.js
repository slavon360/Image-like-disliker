    function Insider(){
  var likes=0, dislikes=0;
  var all=document.getElementById('all');
  this.like=document.createElement('div');
  this.dislike=document.createElement('div');
  this.like.id='like';
  this.dislike.id='dislike';
  this.Total=document.createElement('div');
  this.totalLikes=document.createElement('div');
  this.totalDislikes=document.createElement('div');
  
  function percentLike(){
    total=likes+dislikes;
    var percentLike=(likes/total)*100;
    return percentLike;
  }
  
  function percentDislike(){
    total=likes+dislikes;
   var percentDislike=(dislikes/total)*100;
   return percentDislike;
  }
  
  function createLike(setBackground){
    for (var i=0;i<database.length;i++){
      if (!database[i].background && database[i].photoUrl()==setBackground) {
        database[i].background=setBackground;
        database[i].like=true;
        database[i].checked=true;
      }
    }
  };
  
  function createDislike(setBackground){
     for (var i=0;i<database.length;i++){
      if (!database[i].background && database[i].photoUrl()==setBackground) {
        database[i].background=setBackground;
        database[i].dislike=true;
        database[i].checked=true;
      }}
  }
  
 this.result=function(event){
      if (event.target.id=='pushLike' && !pushDislike.style.background && total==currentImg && (database[currentImg].dislike!=true || database[currentImg].like!=true)){
        pushLike.style.background='rgba(255, 255, 255, .6) '+'url("https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png")'+ ' center center / contain no-repeat';
        likes=likes+1;
        insider.like.style.width=percentLike()+"%";
        insider.dislike.style.width=percentDislike()+"%";
        insider.totalLikes.innerHTML='Likes: '+likes;
        insider.totalDislikes.innerHTML='Dislikes: '+dislikes;
        insider.Total.innerHTML="Total pushes: "+total;
        createLike(pictures.imga.style.background);
      }
      else if(event.target.id=='pushDislike' && !pushLike.style.background && total==currentImg && (database[currentImg].dislike!=true || database[currentImg].like!=true)){
         pushDislike.style.background='rgba(255, 255, 255, .6) '+'url("http://justice-everywhere.org/wp-content/uploads/2014/07/Not_facebook_dislike_thumbs_down.png")'+ ' center center / contain no-repeat';
        dislikes=dislikes+1;
        insider.dislike.style.width=percentDislike()+"%";
        insider.like.style.width=percentLike()+"%";
        insider.totalLikes.innerHTML='Likes: '+likes;
        insider.totalDislikes.innerHTML='Dislikes: '+dislikes;
        insider.Total.innerHTML="Total pushes: "+total;
        createDislike(pictures.imga.style.background);
    } 
  }  
  all.addEventListener('click', this.result);
}

function Pictures(){
var pic=document.getElementById('pictures');
var all=document.getElementById('all');
this.imga=document.createElement('div');
this.imga.className='cntr';
this.imga.style.background='url'+'('+showPic()+')'+' no-repeat'+' center center / contain';
var pic2=pic.appendChild(this.imga);
this.like=document.getElementById('pushLike');
this.dislike=document.getElementById('pushDislike');
this.imga.appendChild(this.like);
this.imga.appendChild(this.dislike);
this.pictures=document.createElement('div');
function showPic(){
 return database[0].photo;
}

this.createPic=function(param) {
  var Pic=document.createElement('div');
  Pic.style.background='rgba(255, 255, 255, .8)';
  Pic.className='progressPic';
  Pic.id='id'+param;
  return Pic;
}

for(var i=0;i<database.length;i++){
  this.pictures.appendChild(this.createPic(i));
}
  this.allTogether=all.appendChild(this.pictures);
}

function PictureManager(){
  var all=document.getElementById('all');
  var picturesArea=document.getElementById('pictures');
  
  this.nextPreviewImg=function(event){
    if (currentImg<database.length && event.target.id=='one' && database[currentImg].checked===true) {
     if (currentImg>0) {
      pushLike.style.background='';
      pushDislike.style.background='';
      currentImg=currentImg-1;
      pictures.imga.style.background='url'+'('+database[currentImg].photo+')'+' no-repeat'+' center center / contain';
     }
    }
    else if (currentImg<database.length && event.target.id=='two' && database[currentImg].checked===true) {
      if (currentImg<=database.length-1) {
        currentImg=currentImg+1;
        if (currentImg>database.length-1) {
          pictures.imga.style.background='url'+'('+database[currentImg-1].photo+')'+' no-repeat'+' center center / contain';
      pushLike.style.background='';
      pushDislike.style.background='';
      var append=document.getElementById('id'+(currentImg-1));
      append.style.background='url'+'('+database[currentImg-1].photo+')'+' no-repeat'+' center center / contain';
      append.style.width='100px';
      append.style.height='100px';
      append.style.transition='all 1s';
        checkAll();
      currentImg=currentImg-1;
        }else{
        pictures.imga.style.background='url'+'('+database[currentImg].photo+')'+' no-repeat'+' center center / contain';
        pushLike.style.background='';
        pushDislike.style.background='';
        var append=document.getElementById('id'+(currentImg-1));
        append.style.background='url'+'('+database[currentImg-1].photo+')'+' no-repeat'+' center center / contain';
        append.style.width='100px';
        append.style.height='100px';
        append.style.transition='all 1s';
        checkAll();}
      }
    }
    else if(currentImg<database.length && database[currentImg].checked===false && event.target.id=='two' && (database[currentImg].like!=true || database[currentImg].dislike!=true)){
      alert('You should like/dislike the picture first');
    }
    function checkAll(){
        if (database[database.length-1].background && allPictures===false && (database[database.length-1].like || database[database.length-1].dislike)) {
          allPictures=document.createElement('div');
          var bar=document.createElement('div');
          bar.id='bar';
          bar.appendChild(insider.like);
          bar.appendChild(insider.dislike);
          bar.appendChild(insider.Total);
          bar.appendChild(insider.totalLikes);
          bar.appendChild(insider.totalDislikes);
          all.appendChild(allPictures);
          for (var i=0;i<database.length;i++){
       allPictures.appendChild(createChild(database[i].photoUrl(), database[i].like, database[i].dislike));
          }
        allPictures.appendChild(bar);
        }
    }
    
    function createChild(params, setLike, setDislike){
            var image=document.createElement('div');
            image.style.background=params;
            image.className='grid';
            function createLike(){
              var imageLike=document.createElement('div');
              imageLike.className='imgLike';
              return imageLike;
            }
            function createDislike(){
              var imageDislike=document.createElement('div');
              imageDislike.className='imgDislike';
              return imageDislike;
            }
            if (setLike) {
              image.dataset.like=setLike;
             image.appendChild(createLike());  
            }
            else if (setDislike) {
              image.dataset.dislike=setDislike;
              image.appendChild(createDislike());
            }
            return image;
          }
  }
  all.addEventListener('click', this.nextPreviewImg);
}
var insider=new Insider();
var pictures=new Pictures();
var pictureManager=new PictureManager();