@extends('layouts.app')
@section('title')
    Daniel Dee
@endsection 
@section('main_content')
{{-- first main section  --}}
<section class="first_main_section">
    {{-- landing voice  --}}
    <h1 id="landing_mix">Channel</h1>
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