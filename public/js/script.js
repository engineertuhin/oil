$(document).ready(function () {
  // Toggle Dropdown
  $(document).on('click','.dropdown-trigger',function(){
    if($(this).next().css('display')!=='block'){
      $(this).closest('ul').children().children('.dropdown').slideUp(300);
      $(this).closest('ul').children().children('.dropdown-trigger').children('.dropdown-icon').removeClass('rotate-180');
    }
    $(this).children('.dropdown-icon').toggleClass('rotate-180');
    $(this).next().slideToggle(300);
  });
  // Toggle active on sidebar nave item
  $(document).on('click','.active-trigger',function(){
    $(this).closest('.sidebar-nav').find('.sidebar-nav-active').removeClass('sidebar-nav-active');
    $(this).parents('.dropdown').prev().addClass('sidebar-nav-active');
    $(this).addClass('sidebar-nav-active');
  });
  // Toggle sidebar on click
  $(document).on('click','.sidebar-trigger-btn',function(){
    if($('.sidebar').hasClass('sidebar-active')){
      $(this).closest('aside').addClass('md:w-[70px]').removeClass('md:w-[270px]');
      $(this).closest('aside').find('.hideable').addClass('hidden');
      $(this).closest('aside').find('.dropdown').addClass('!hidden');
    }
    else{
      $(this).closest('aside').addClass('md:w-[270px]').removeClass('md:w-[70px]');
      $(this).closest('aside').find('.hideable').removeClass('hidden');
      $(this).closest('aside').find('.dropdown').removeClass('!hidden');
    }
    $(this).children('i').toggleClass('rotate-180');
    $(this).closest('aside').toggleClass('sidebar-active');
    $('.main-content').toggleClass('md:pl-[94px] md:pl-[294px]');
  });
  // open sidebar on hover in
  $(document).on('mouseenter','.sidebar',function(){
    if(!$('.sidebar').hasClass('sidebar-active')){
      $(this).closest('aside').removeClass('md:w-[70px]').addClass('md:w-[270px]');
      $(this).closest('aside').find('.hideable').removeClass('hidden');
      $(this).closest('aside').find('.dropdown').removeClass('!hidden');
    }
  });
  // close sidebar on hover out
  $(document).on('mouseleave','.sidebar',function(){
    if(!$('.sidebar').hasClass('sidebar-active')){
      $(this).closest('aside').addClass('md:w-[70px]').removeClass('md:w-[270px] ');
      $(this).closest('aside').find('.hideable').addClass('hidden');
      $(this).closest('aside').find('.dropdown').addClass('!hidden');
    }
  });
  // Small Screen Sidebar Toggle
  $(document).on('click','.sm-sidebar-trigger-btn', function(event){
    if(!$('.sidebar').hasClass('sidebar-active')){
      $('.sidebar-trigger-btn').trigger('click');
    }
    $('.sidebar').toggleClass('-translate-x-[110%]');
    $('.overlay').toggleClass('w-fit w-full');
  });
  $(document).on('click','.sidebar',function(event){
    event.stopPropagation();
  });
  $(document).on('click','.overlay', function(){
    $('.sidebar').toggleClass('-translate-x-[110%]');
    $('.overlay').toggleClass('w-fit w-full');
  });
  

});