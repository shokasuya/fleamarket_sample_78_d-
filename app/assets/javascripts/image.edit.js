$(document).on('turbolinks:load', function(){
  $(window).on('load', function(e){
  var fileIndex = [1,2,3,4,5,6,7,8,9,10];
  var previewCount = $('.preview').length;
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);
  // var dropZone = document.getElementById('drop-zone');
  $('.hidden-destroy').hide();

  // dropZone.addEventListener('dragover', function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   $(".image-wrapper__image-box").css({'border': '1px solid rgb(204, 204, 204)','box-shadow': '0px 0px 4px'})
  // },false);

  // dropZone.addEventListener('dragleave', function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   $(".image-wrapper__image-box").css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'})
  // },false);

  // dropZone.addEventListener('drop', function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   $(".image-wrapper__image-box").css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'});
  //   var files = e.dataTransfer.files;


  $(document).on('change', '.js-file_group input', function(e) {
    $('.preview').parent().removeClass("img_field");
    var id = $('.img_field').attr('id').replace(/[^0-9]/g, '');
    var file = e.target.files[0];
    var reader = new FileReader();
    var newImgId = `#img_field--${id}`;
    var preview = $(newImgId);

    preview.attr({id: `img_field--${id}`});
    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.append($('<img>').attr({
          src: e.target.result,
          width: "100%",
          height: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    preview.removeClass('img_field');
    reader.readAsDataURL(file);
  });

  const buildFileField = function(index){
    var html = `<div class="image-wrapper__image-box__js js-file_group" data-index="${index}">
                  <label class="image-wrapper__image-box__js__label" for="product_images_attributes_${index}_image">
                    <div class="image-wrapper__image-box__js__label__image img_field" data-image="${index}" id="img_field--${index}" onclick="$('#file').click()">
                      <img class="image-wrapper__image-box__js__label__image__url" id="default-img" src="/assets/icon_camera-24c5a3dec3f777b383180b053077a49d0416a4137a1c541d7dd3f5ce93194dee.png">
                    </div>
                    <input class="image-wrapper__image-box__js__label__file js-file" style: "display:none" id="product_images_attributes_${index}_image" type="file" name="product[images_attributes][${index}][image]">
                  </label>
                  <div class="js-remove" data-remove="${index}">
                    <span class="js-remove__text">
                      削除
                    </span> 
                  </div>
                </div>`;
    return html;
  }


  $('#image-box').on('change', '.js-file', function(e){
    if( previewCount < 9 || $('#default-img').length == 0) {
      $('#image-box').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
    }
  });

  $('#image-box').on('click', '.js-remove', function(){
    const targetIndex = $(this).parent().data('index');
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    if (hiddenCheck){ 
      hiddenCheck.prop('checked', true);
    }
    $(this).parent().remove();
    if ($('.js-file').length == 0 || $('#default-img').length == 0){
      $('#image-box').append(buildFileField(fileIndex[0]));
    };
  });
  })
});
// });

