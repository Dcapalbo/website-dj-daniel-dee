@extends('layouts.app')
@section('title')
    Daniel Dee
@endsection 
@section('main_content')
{{-- first main section  --}}
<section class="first_main_section">
    {{-- modal pictures bg  --}}
    <div id="pictures_modal" class="modal_bg">
        <div class="modal_pictures_content">
          <!-- Slider main container -->
            <div class="swiper-container pictures_swiper_container">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <img class="single_picture" src="{{asset('img/picture_dd_1.jpg')}}" alt="picture_dd_1">
                </div>
                <div class="swiper-slide">
                  <img class="single_picture" src="{{asset('img/picture_dd_2.jpg')}}" alt="picture_dd_2">
                </div>
                <div class="swiper-slide">
                  <img class="single_picture" src="{{asset('img/picture_dd_3.jpg')}}" alt="picture_dd_3">
                </div>
                <div class="swiper-slide">
                  <img class="single_picture" src="{{asset('img/picture_dd_4.jpg')}}" alt="picture_dd_4">
                </div>
                <div class="swiper-slide">
                  <img class="single_picture" src="{{asset('img/picture_dd_6.jpg')}}" alt="picture_dd_6">
                </div>
                <div class="swiper-slide">
                  <img class="single_picture" src="{{asset('img/picture_dd_5.jpg')}}" alt="picture_dd_5">
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div> 
            </div>
            <a class="uk-modal-close close_modal absolute_close_modal white">X</a>
        </div>
      </div>
    {{-- landing voice  --}}
    <h1 id="landing_channel">Channel</h1>
    {{-- main wrapper  --}}
    <div class="main_wrapper">
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info"></div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://soundcloud.com/info48")}} target="_blank"><img src="{{asset('img/cover_soundcloud.jpg')}}" alt="Soundcloud Cover"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info"></div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><img src="{{asset('img/cover_mixcloud.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info"></div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.youtube.com/channel/UCmltOkvTXEp6SaDOVnkvbUg/featured")}} target="_blank"><img src="{{asset('img/cover_youtube.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
    </div>
</section>
{{-- second main section  --}}
<section class="second_main_section">
    {{-- landing voice  --}}
    <h1 id="landing_music">Music</h1>
    {{-- main wrapper  --}}
    <div class="main_wrapper">
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12822906&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12822907&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12822908&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12822909&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12823058&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12823057&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12823056&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <iframe src="https://embed.beatport.com/?id=12823059&type=track" width="400" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </div>
    </div>
</section>
@endsection