{{-- starting header --}}
<header>
    {{-- first header section --}}
    <section class="header_top">
      {{-- nav header wrapper  --}}
      <nav class="header_wrapper">
        {{-- left info  --}}
        <div class="left_info">
            {{-- logo  --}}
          <img class="header_top_logo" src="{{asset('/img/DD_bianco.png')}}" alt="logo daniel dee">
        </div>
        <div class="right_info">
          <i class="fas fa-bars hamburgher">
            <ul class="dropdown_list_item">
              <a class="list_item mix">Mix</a>
              <a class="list_item music">Music</a>
              <a class="list_item modal_tour_button">Tour</a>
              <a class="list_item modal_contact_button">Contacts</a>
              <a class="list_item modal_bio_button">Bio</a>
            </ul>
          </i>
        </div>
      </nav>
      {{-- modal contact bg  --}}
      <div class="modal_contact_bg">
        <div class="modal_contact_content">
            <li><a href="mailto:info@danield.net" target="_blank"><i class="far fa-envelope"></i></a></li>
            <li><a href={{asset("https://www.facebook.com/DanielDee06?locale=it_IT%2F")}} target="_blank"><i class="fab fa-facebook-square"></a></i></li>
            <li><a href={{asset("https://www.instagram.com/danieldeedj/?fbclid=IwAR0mETN4RKMcM0G1r8nJ5qTLtN7C22p7lJ5gL6OhG8CFboIU3IPgaqztUyI")}} target="_blank"><i class="fab fa-instagram"></a></i></li>
            <li><a href={{asset("https://twitter.com/DanielDee06")}} target="_blank"><i class="fab fa-twitter" ></a></i></li>
            <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>
            <li><a href={{asset("https://open.spotify.com/artist/73rTSTOwixQnWG9UkOj6QE?si=bwj3OjgpRgyP2vXgLcLrXw")}} target="_blank"><i class="fab fa-spotify"></i></a></li>
            <a class="close_contact">X</a>
        </div>
      </div>
      {{-- modal bio bg  --}}
      <div class="modal_bio_bg">
        <div class="modal_bio_content">
            <h3>Music</h3>
            <p>Progressive/Techno/Electronic Music</p>
            <h3>Nationality</h3>
            <p>Italian</p>
            <h3>Biography</h3>
            <p>Daniel Dee was born in 1982 in Rome, Italy. He started his career as a DJ at the age of 15 working at a famous club in Rome: the NRG (of Ciampino). At that time, the Roman club scene was dominated by the trance-progressive club genre which influenced him greatly. After his first year of performing, he was chosen as the resident DJ of the NRG club becoming one of the most important figures of the best sunday evening in Italy. In 1998 he was played regularly on “Future Zone” on Mondo Radio which was considered at the time the best progressive house radio show of the centre region of Italy. It was on air every Sunday morning from 12am to 01 pm. As time went by widening his musical knowledge he played techno/trance and started to work in music studios creating new original tracks. At the same time he continued to gain experience in studios and playing in clubs, working with other top Dj's of Italy. Most recently, Daniel Dee has put together an original and innovative project: " The Club " which is currently being proposed to the Roman club scene.</p>
            <a class="close_bio">X</a>
        </div>
      </div>
      {{-- modal tour bg  --}}
      <div class="modal_tour_bg">
        <div class="modal_tour_content">
            <img src="{{asset('img/TOUR_ARGENTINA_2019.png')}}" alt="Image_Argentina_tour_2019">
            <img src="{{asset('img/TOUR_ARGENTINA_2020.png')}}" alt="image_Argentina_tour_2020">
            <a class="close_tour">X</a>
        </div>
      </div>
    </section>
    {{-- end first header section --}}
    {{-- second header section --}}
    <section>
      {{-- hero  --}}
        <div class="hero">
          <img class="hero_img" src="{{asset('/img/daniel_dee_hero.jpg')}}" alt="Cover Dj">
          <img class="logo" src="{{asset('/img/DD_bianco.png')}}" alt="logo daniel dee">
        </div>
    </section>
    {{-- end second section --}}
  </header>
  {{-- end header --}}