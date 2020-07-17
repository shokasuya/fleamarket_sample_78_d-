$(function(){
  var dataBox = new DataTransfer();
  var file_field = document.querySelector('input[type=file]')

  var dropArea = document.getElementById("image-box-1");
    window.onload = function(e){
    dropArea.addEventListener("dragover", function(e){
      e.preventDefault();
      $(this).children('#image-box__container').css({'border': '1px solid rgb(204, 204, 204)','box-shadow': '0px 0px 4px'})
    },false);
    dropArea.addEventListener("dragleave", function(e){
      e.preventDefault();
      $(this).children('#image-box__container').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'})
    },false);
    dropArea.addEventListener("drop", function(e) {
      e.preventDefault();
      $(this).children('#image-box__container').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'});
      var files = e.dataTransfer.files;


  $('#img-file').change(function(){
    var files = $('input[type="file"]').prop('files')[0];
    $.each(this.files, function(i, file){
      var fileReader = new FileReader();

      dataBox.items.add(file)
      file_field.files = dataBox.files

      var num = $('.product-image').length + 1 + i
      fileReader.readAsDataURL(file);
      if (num == 10){
        $('#image-box__container').css('display', 'none')   
      }
      fileReader.onloadend = function() {
        var src = fileReader.result
        var html= `<div class='product-image' data-image="${file.name}">
                    <div class=' product-image__content'>
                      <div class='product-image__content--icon'>
                        <img src=${src} width="114" height="80" >
                      </div>
                    </div>
                    <div class='product-image__operetion'>
                      <div class='product-image__operetion--delete'>削除</div>
                      <div class='product-image__operetion--edit'>編集</div>
                    </div>
                  </div>`
        $('#image-box__container').before(html);
      };
      $('#image-box__container').attr('class', `product-num-${num}`)
    });
  });
  $(document).on("click", '.product-image__operetion--delete', function(){
    var target_image = $(this).parent().parent()
    var target_name = $(target_image).data('image')
    if(file_field.files.length==1){
      $('input[type=file]').val(null)
      dataBox.clearData();
      console.log(dataBox)
    }else{
      $.each(file_field.files, function(i,input){
        if(input.name==target_name){
          dataBox.items.remove(i) 
        }
      })
      file_field.files = dataBox.files
    }
    target_image.remove()
    var num = $('.product-image').length
    $('#image-box__container').show()
    $('#image-box__container').attr('class', `product-num-${num}`)
  })

    $.each(files, function(i,file){
      var fileReader = new FileReader();
      dataBox.items.add(file)
      file_field.files = dataBox.files
      var num = $('.product-image').length + i + 1
      fileReader.readAsDataURL(file);
      if (num==10){
        $('#image-box__container').css('display', 'none')
      }
      fileReader.onload = function() {
        var src = fileReader.result
        var html =`<div class='product-image' data-image="${file.name}">
                    <div class=' product-image__content'>
                      <div class='product-image__content--icon'>
                        <img src=${src} width="114" height="80" >
                      </div>
                    </div>
                    <div class='product-image__operetion'>
                      <div class='product-image__operetion--delete'>削除</div>
                      <div class='product-image__operetion--edit'>編集</div>
                    </div>
                  </div>`
      $('#image-box__container').before(html);
      };
      $('#image-box__container').attr('class', `product-num-${num}`)
    })
  })
  }
});