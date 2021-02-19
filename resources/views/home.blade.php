@extends('layouts.app')
@section('title')
    Daniel Dee
@endsection 
@section('main_content')
{{-- first main section  --}}
<section class="first_main_section">
    {{-- landing voice  --}}
    <h1 id="landing_mix">Mix</h1>
    {{-- main wrapper  --}}
    <div class="main_wrapper">
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info">
                <h5>Daniel Dee</h5>
                <small>Dj set, closing party Khoema</small>
            </div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-bar-del-mar-rosario/")}} target="_blank"><img src="{{asset('img/Mix_pictures/Daniel_dee_2.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info">
                <h5>Daniel Dee</h5>
                <small>Dj set Argentina</small>
            </div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-dj-set-argentina-techno/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_argentina.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info">
                <h5>Daniel Dee</h5>
                <small>Dj set Reverb</small>
            </div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-closing-party-khoema-infunzione-261020/")}} target="_blank"><img src="{{asset('img/Mix_pictures/Daniel_dee_3.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info">
                <h5>Daniel Dee</h5>
                <small>Dj set Bar del Mar Rosario (Argentina)</small>
            </div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/djdanieldee-progressive-djset-happyaugust2019/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_reverb.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info">
                <h5>Daniel Dee</h5>
                <small>Dj set August 2019</small>
            </div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-easter-set-2019/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_easter_2019.jpg')}}" alt="Album_image"></a>
            </div>
        </div>
        {{-- music item  --}}
        <div class="mix_item">
            {{-- music item info  --}}
            <div class="mix_item_info">
                <h5>Daniel Dee</h5>
                <small>Dj set Easter 2019</small>
            </div>
            {{-- overlay mix  --}}
            <div class="overlay_mix">
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-reverb-091119/")}} target="_blank"><img src="{{asset('img/Mix_pictures/Daniel_dee_1.jpg')}}" alt="Album_image"></a>
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