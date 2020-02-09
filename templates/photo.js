(function(){
    var video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context=canvas.getContext('2d'),
        photo = document.getElementById('photo'),
        dl=document.getElementById('downloadlink'),

        vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia =    navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;

    navigator.getMedia({
        video:true,
        audio: false
    }, function(stream) {
        video.srcObject=stream;
        return video.play();
    }, function(error) {
        //error code
    });


    document.getElementById('capture').addEventListener('click', function() {

        context.drawImage(video, 0, 0, 400, 300);
//        dl.href = canvas.toDataURL('image/jpeg', 1.0);
//        dl.innerHTML = "Download Image!";
////        dl.click();
//        dl.download = true; // Make sure the browser downloads the image
////        document.body.appendChild(dl); // Needs to be added to the DOM to work
////      photo.setAttribute('src', canvas.toDataURL('image/png'));

          var imgURL = canvas.toDataURL();
      console.log(imgURL);
      $.ajax({
        type: "POST",
        url: "C:/Users/sushm/PycharmProjects/Web/app.py", //I have doubt about this url, not sure if something specific must come before "/take_pic"
        data: imgURL,
        success: function(data) {
          if (data.success) {
            alert('Your file was successfully uploaded!');
          } else {
            alert('There was an error uploading your file!');
          }
        },
        error: function(data) {
          alert('There was an error uploading your file!');
        }
      }).done(function() {
        console.log("Sent");
      });


    });


})();