$(document).ready(function(){
  const buildFileField = (num)=> {
    const html = `<div data-index="${num}" class="js-file_group4">
                    <input class="js-file2" type="file"
                    name="product[images_attributes][${num}][src]"
                    id="product_images_attributes_${num}_src"><br>
                  </div>`;
    return html;
  }
  const buildImg = (index, url)=> {
    const html = `<li class="adsaf">
                    <img data-index="${index}" src="${url}" class="edit_img_${index}">
                    <div data-index="${index}" class="js-remove" name="[edit_remove][${index}]">削除</div>
                  </li>
                  <input data-index="${index}" value="0" class="delete_img_${index}" type="hidden"
                  name="product[images_attributes][${index}][_destroy]" id="product_images_attributes_${index}__destroy">`;
    return html;
  }

  let fileIndex2 = [1,2,3,4,5,6,7,8,9,10];
  lastIndex2 = $('.js-file_group3:last').data('index');
  fileIndex2.splice(0, lastIndex2);

  $('.hidden-destroy').hide();

  $('#image-box2').on('change', '.js-file2', function(e) {
    const targetIndex2 = $(this).parent().data('index');
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);

    if (img2 = $(`img[data-index="${targetIndex2}"]`)[0]) {
      img2.setAttribute('src', blobUrl);
    } else {
      $('#previews2').append(buildImg(targetIndex2, blobUrl));
      $('#image-box2').append(buildFileField(fileIndex2[0]));
      fileIndex2.shift();
      fileIndex2.push(fileIndex2[fileIndex2.length - 1] + 1);
    }
    var count = $('.adsaf').length;
    var abcde = $('#dropArea2')
    var bbcde = $('pre')
    if (count == 5) {
      abcde.fadeOut();
      bbcde.fadeOut();
    }
  });

  $('.js-file_group3:first').on('click', function() {
    $('.js-file2:last').trigger('click');
    return false;
  });


  $('#image-box2').on('click', '.js-remove', function() {
    var number = Number($(this).data('index'));
    const edit_img_btn = $(`.edit_img_${number}`);
    if(edit_img_btn) edit_img_btn.remove();
    $(this).parent().remove();
    const file_field_btn = $(`#product_images_attributes_${number}_src`);
    if(file_field_btn) file_field_btn.remove();
    $(`.delete_img_${number}`).val('1');

    var count = $('.adsaf').length;
    var abcde = $('#dropArea2')
    var bbcde = $('pre')
    if (count == 4) {
      abcde.show();
      bbcde.show();
    }
    if ($('.js-file2').length == 0) $('#image-box2').append(buildFileField(fileIndex[0]));
  });



  $('#image-box2').on('change', '.js-file3', (e)=>{
    let file = e.target.files[0]
    let file_url = window.URL.createObjectURL(file);

    const getImageIndex = $('.js-file3').prev().data('index');
    const buildImg = (getImageIndex, file_url)=> {
      const html = `<li class="adsaf">
      <img data-index="${getImageIndex}" src="${file_url}" class="edit_img_${getImageIndex}">
                    <div data-index="${getImageIndex}" class="js-remove" name="[edit_remove][${getImageIndex}]">削除</div>
                  </li>
                  <input data-index="${getImageIndex}" value="0" class="delete_img_${getImageIndex}" type="hidden"
                  name="product[images_attributes][${getImageIndex}][_destroy]" id="product_images_attributes_${getImageIndex}__destroy">`;
      return html;
    }
    var html = buildImg(getImageIndex, file_url)

    $("#previews2").append(html)
    $('.js-file3').prev().remove()
  });
});





$(document).ready(function() {
  var count = $('.adsaf').length;
  var abcde = $('#dropArea2')
  var bbcde = $('pre')
  if (count == 5) {
    abcde.hide();
    bbcde.hide();
  }
  if (count < 5) {
    abcde.show();
    bbcde.show();
  }
});
