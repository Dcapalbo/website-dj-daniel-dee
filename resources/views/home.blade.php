@extends('layouts.app')
@section('title')
    Home
@endsection 
@section('main_content')
    <section class="first_main_section">
        <h1 id="landing_music">Music</h1>
        <div class="main_wrapper">
            <div class="music_item">
                <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Almost</small>
                    <a href={{asset("https://www.beatport.com/release/almost/2778381")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Follia</small>
                    <a href={{asset("https://www.beatport.com/track/follia-original-mix/12822907")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li> 
                    <div class="music_item_soundwave"></div> 
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Maserati</small>
                    <a href={{asset("https://www.beatport.com/track/maserati-original-mix/12822908")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>the Clouds</small>
                    <a href={{asset("https://www.beatport.com/track/the-clouds-original-mix/12822909")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Strange Time</small>
                    <a href={{asset("https://www.beatport.com/release/strange-time/2778403")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Moviment</small>
                    <a href={{asset("https://www.beatport.com/track/moviment-original-mix/12823057")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Mexico</small>
                    <a href={{asset("https://www.beatport.com/track/mexico-original-mix/12823056")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
            <div class="music_item">
                <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
                <div class="music_item_info">
                    <h5>Daniel Dee</h5>
                    <small>Stricken</small>
                    <a href={{asset("https://www.beatport.com/track/stricken-original-mix/12823059")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                    <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                    <div class="music_item_soundwave"></div>
                </div>
            </div>
        </div>
    </section>
@endsection