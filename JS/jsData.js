var database=[
      {photo:'"http://forums.crackberry.com/attachments/blackberry-q10-f272/171886d1371181552t-bbm-display-picture-limitations-423341110329_qy737vid_l.jpg"',
      id:0,
      photoUrl: function(){return 'url'+'('+this.photo+')'+' center center / contain no-repeat'},
      checked:false},
      {photo:'"https://farm9.staticflickr.com/8644/16517781789_6ed90c5678.jpg"',
      id:1,
      photoUrl: function(){return 'url'+'('+this.photo+')'+' center center / contain no-repeat'},
      checked:false},
      {photo:'"http://img.ffffound.com/static-data/assets/6/51cc46900bf5fe574293d49c4d9939e0ebfc8ee3_m.jpg"',
      id:2,
      photoUrl: function(){return 'url'+'('+this.photo+')'+' center center / contain no-repeat'},
      checked:false},
      {photo:'"http://23.media.tumblr.com/tumblr_ktrkq7Jqqz1qznd83o1_500.jpg"',
      id:3,
      photoUrl: function(){return 'url'+'('+this.photo+')'+' center center / contain no-repeat'},
      checked:false},
      {photo:'"http://27.media.tumblr.com/tumblr_lp4owtacEu1ql2xn1o1_500.jpg"',
      id:4,
      photoUrl: function(){return 'url'+'('+this.photo+')'+' center center / contain no-repeat'},
      checked:false},
      {photo:'"http://tv-atribut.ru/image/cache/data/comics/guardian/sgpic8-500x500.jpg"',
      id:5,
      photoUrl: function(){return 'url'+'('+this.photo+')'+' center center / contain no-repeat'},
      checked:false},
];

  var currentImg=0;
  var allPictures=false;
  var pushLike=document.getElementById('pushLike');
  var pushDislike=document.getElementById('pushDislike');
  var total=0;