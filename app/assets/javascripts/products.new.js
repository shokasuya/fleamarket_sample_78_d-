document.addEventListener("turbolinks:load", function() {
  $(function(){
    $( '.name__text__field' ).on('click', function(){
      let name = $(this).val();
      if(name == 0){
        $('.name__text__field').css('border-color','red');
        $('.no-product__name').text('入力してください');
      }else{
        $('.name__text__field').css('border-color','');
        $('.no-product__name').text('');
      };
    });
    $( '.name__text__field' ).on('change',function(){
      let name = $(this).val();
      if(name == 0){
        $('.name__text__field').css('border-color','red');
        $('.no-product__name').text('入力してください');
      }else{
        $('.name__text__field').css('border-color','');
        $('.no-product__name').text('');
      };
    });
  })

  $('.content__text__area').on('click',function(){
    let description = $(this).val();
    if(description == 0){
      $('.content__text__area').css('border-color','red')
      $('.no-product__text').text('入力してください')
    }else{
      $('.content__text__area').css('border-color','')
      $('.no-product__text').text('')
    }
  });
  $('.content__text__area').on('change',function(){
    let description = $(this).val();
    if(description == 0){
      $('.content__text__area').css('border-color','red')
      $('.no-product__text').text('入力してください')
    }else{
      $('.content__text__area').css('border-color','')
      $('.no-product__text').text('')
    }
  });
  $('.select-condition').on('click',function(){
    let condition = $(this).val();
    if(condition == ''){
      $('.select-condition').css('border-color','red')
      $('.no-product__condition').text('選択してください')
    }else{
      $('.select-condition').css('border-color','')
      $('.no-product__condition').text('')
    }
  });
  $('.select-condition').on('change',function(){
    let condition = $(this).val();
    if(condition == ''){
      $('.select-condition').css('border-color','red')
      $('.no-product__condition').text('選択してください')
    }else{
      $('.select-condition').css('border-color','')
      $('.no-product__condition').text('')
    }
  });
  $('.select-send_price').on('click',function(){
    let send_price = $(this).val();
    if( send_price == ''){
      $('.select-send_price').css('border-color','red')
      $('.no-product__send_price').text('選択してください')
    }else{
      $('.select-send_price').css('border-color','')
      $('.no-product__send_price').text('')
    }
  });
  $('.select-send_price').on('change',function(){
    let send_price = $(this).val();
    if( send_price == ''){
      $('.select-send_price').css('border-color','red')
      $('.no-product__send_price').text('選択してください')
    }else{
      $('.select-send_price').css('border-color','')
      $('.no-product__send_price').text('')
    }
  });
  $( '.mix-price' ).on('click', function(){
    let price = $(this).val();
    if( price == 0){
      $('.mix-price').css('border-color','red')
      $('.no-product__price').text('300以上9999999以下で入力してください')
    }else{
      $('.mix-price').css('border-color','')
      $('.no-product__price').text('')
    }
  });
  $( '.mix-price' ).on('change',function(){
    let price = $(this).val();
    if( price == 0){
      $('.mix-price').css('border-color','red')
      $('.no-product__price').text('300以上9999999以下で入力してください')
    }else{
      $('.mix-price').css('border-color','')
      $('.no-product__price').text('')
    }
  });
  $('.select-shipping_date').on('click',function(){
    let shipping_date = $(this).val();
    if(shipping_date == ''){
      $('.select-shipping_date').css('border-color','red')
      $('.no-product__shipping_date').text('選択してください')
    }else{
      $('.select-shipping_date').css('border-color','')
      $('.no-product__shipping_date').text('')
    }
  });
  $('.select-shipping_date').on('change',function(){
    let shipping_date = $(this).val();
    if(shipping_date == ''){
      $('.select-shipping_date').css('border-color','red')
      $('.no-product__shipping_date').text('選択してください')
    }else{
      $('.select-shipping_date').css('border-color','')
      $('.no-product__shipping_date').text('')
    }
  });
  $('.select-size').on('click',function(){
    let size = $(this).val();
    if(size == ''){
      $('.select-size').css('border-color','red')
      $('.no-product__size').text('選択してください')
    }else{
      $('.select-size').css('border-color','')
      $('.no-product__size').text('')
    }
  });
  $('.select-size').on('change',function(){
    let size = $(this).val();
    if(size == ''){
      $('.select-size').css('border-color','red')
      $('.no-product__size').text('選択してください')
    }else{
      $('.select-size').css('border-color','')
      $('.no-product__size').text('')
    }
  });
  $('.select-prefecture').on('click',function(){
    let prefecture_id = $(this).val();
    if(prefecture_id == ''){
      $('.select-prefecture').css('border-color','red')
      $('.no-product__prefecture').text('選択してください')
    }else{
      $('.select-prefecture').css('border-color','')
      $('.no-product__prefecture').text('')
    }
  });
  $('.select-prefecture').on('change',function(){
    let size = $(this).val();
    if(size == ''){
      $('.select-prefecture').css('border-color','red')
      $('.no-product__prefecture').text('選択してください')
    }else{
      $('.select-prefecture').css('border-color','')
      $('.no-product__prefecture').text('')
    }
  });
});