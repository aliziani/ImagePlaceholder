function Ctrl($scope){
  var images = [];
  for(var i = 0; i < 200; i++)
    images.push({id: i, url:'http://data.hdwallpapers.im/lamborghini_white_sports_car_car_pictures_ultra_hd.jpg'});

    config = {
      loading:{
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/e0/f5/a5/e0f5a5f8c2e378df4fddd75e26e9a5a3.gif',
        style:'height:50px;width:50px;float:left;'
      }
    }

  this.images = images;
  this.config = config;
}

angular
  .module('app',['imagePlaceholder'])
  .controller('ctrl',Ctrl);
