@extends('layouts.app')
@section('title')
    Home
@endsection 
@section('main_content')
{{-- first main section  --}}
<section class="first_main_section">
    {{-- landing voice  --}}
    <h1 id="landing_releases">Mix</h1>
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
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-closing-party-khoema-infunzione-261020/")}} target="_blank"><img src="{{asset('img/Mix_pictures/closing_party_Khoema.jpg')}}" alt="Album_image"></a>
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
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-reverb-091119/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_reverb.jpg')}}" alt="Album_image"></a>
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
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-bar-del-mar-rosario/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_rosario.jpg')}}" alt="Album_image"></a>
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
                <a href={{asset("https://www.mixcloud.com/daniel-dee/djdanieldee-progressive-djset-happyaugust2019/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_august_2019.jpg')}}" alt="Album_image"></a>
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
                <a href={{asset("https://www.mixcloud.com/daniel-dee/daniel-dee-easter-set-2019/")}} target="_blank"><img src="{{asset('img/Mix_pictures/mix_easter_2019.jpg')}}" alt="Album_image"></a>
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
            <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Almost</small>
                <a href={{asset("https://www.beatport.com/release/almost/2778381")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>
                {{-- music item info  --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
        {{-- music item --}}
        <div class="music_item">
            <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Follia</small>
                <a href={{asset("https://www.beatport.com/track/follia-original-mix/12822907")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li> 
                <div class="music_item_soundwave"></div> 
            </div>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Maserati</small>
                <a href={{asset("https://www.beatport.com/track/maserati-original-mix/12822908")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                {{-- music item soundwave  --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <img src="{{asset('img/almost_album_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>the Clouds</small>
                <a href={{asset("https://www.beatport.com/track/the-clouds-original-mix/12822909")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                {{-- music item soundwave  --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Strange Time</small>
                <a href={{asset("https://www.beatport.com/release/strange-time/2778403")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                {{-- music item soundwave  --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Moviment</small>
                <a href={{asset("https://www.beatport.com/track/moviment-original-mix/12823057")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                {{-- music item soundwave  --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Mexico</small>
                <a href={{asset("https://www.beatport.com/track/mexico-original-mix/12823056")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>  
                {{-- music item soundwave  --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
        {{-- music item  --}}
        <div class="music_item">
            <img src="{{asset('img/strange_time_daniel_dee.jpg')}}" alt="Album_image">
            {{-- music item info  --}}
            <div class="music_item_info">
                <h5>Daniel Dee</h5>
                <small>Stricken</small>
                <a href={{asset("https://www.beatport.com/track/stricken-original-mix/12823059")}} target="_blank"><i class="fas fa-shopping-cart"></i></a>
                <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li> 
                {{-- music item soundwave   --}}
                <div class="music_item_soundwave"></div>
            </div>
        </div>
    </div>
</section>
@endsection