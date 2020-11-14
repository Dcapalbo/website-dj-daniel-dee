{{-- starting header --}}
<header>
    {{-- first header section --}}
    <section class="header_top">
      {{-- nav header wrapper  --}}
      <nav class="header_wrapper">
          <div class="left_info">
            <img class="header_top_logo" src="{{asset('/img/nero_1.png')}}" alt="logo daniel dee">
          </div>
          <div class="right_info">
              <li class="list_item">Music</li>
              <li class="list_item">Release</li>
              <li class="list_item modal_tour_button">Tour</li>
              <li class="list_item modal_contact_button">Contacts</li>
              <li class="list_item modal_bio_button">Bio</li>
          </div>
      </nav>
      <div class="modal_contact_bg bg_active">
        <div class="modal_contact_content">
            <li><a href="mailto:info@danield.net" target="_blank"><i class="far fa-envelope"></i></a></li>
            <li><a href={{asset("https://www.facebook.com/DanielDee06?locale=it_IT%2F")}} target="_blank"><i class="fab fa-facebook-square"></a></i></li>
            <li><a href={{asset("https://www.instagram.com/danieldeedj/?fbclid=IwAR0mETN4RKMcM0G1r8nJ5qTLtN7C22p7lJ5gL6OhG8CFboIU3IPgaqztUyI")}} target="_blank"><i class="fab fa-instagram"></a></i></li>
            <li><a href={{asset("https://twitter.com/DanielDee06")}} target="_blank"><i class="fab fa-twitter" ></a></i></li>
            <li><a href={{asset("https://www.mixcloud.com/daniel-dee/")}} target="_blank"><i class="fab fa-mixcloud"></i></a></li>
            <li><a href={{asset("https://open.spotify.com/artist/73rTSTOwixQnWG9UkOj6QE?si=bwj3OjgpRgyP2vXgLcLrXw")}} target="_blank"><i class="fab fa-spotify"></i></a></li>
            <li><i class="fas fa-times"></i></li>
        </div>
      </div>
      <div class="modal_bio_bg">
        <div class="modal_bio_content">
            <h3>Music</h3>
            <li>Progressive/Techno/Electronic Music</li>
            <h3>Nationality</h3>
            <li>Italian</li>
            <h3>Biography</h3>
            <li>Daniel Dee was born in 1982 in Rome, where he's still living. He started his career as a Dj at the age of 15 working at a famous club in Rome: the NRG (of Ciampino). At that time his kind of music was the one he had a preference for: trance-progressive. The year after he started playing, he became the resident Dj of the NRG club quickly becoming one of the most important figures of the best sunday evening in Italy. Since 1998 for about an year he has his own program “Future Zone” on Mondo Radio, at the time the best radio of the centre of Italy. It was on air every Sunday morning from 12am to 01 pm. As time went by widening his musical knowledge he played techno with trance and started to get into the job in music studios and started inventing new original tracks, wich have never come out. At the same time he was getting experience of studios and playing in clubs, untill he reached a personal kind of electronic and original music. Working with other top Dj's of Italy, Daniel Dee put together an original and innovative project: " The Club ". Unfotunately this project, given the commercial nature of the roman scene, didn't catch on,but nevertheless the club is proposed in recent years with good results.</li>
            <li><i class="fas fa-times"></i></li>
        </div>
      </div>
      <div class="modal_tour_bg">
        <div class="modal_tour_content">
            <img src="{{asset('img/tourargentina1tour.png')}}" alt="Image_Argentina_tour">
            <li><i class="fas fa-times"></i></li>
        </div>
      </div>
    </section>
    {{-- end first header section --}}
    {{-- second header section --}}
    <section>
        <div class="hero">
          <img class="hero_img" src="{{asset('/img/DSC00165.jpg')}}" alt="Cover Dj">
          <img class="logo" src="{{asset('/img/DD_bianco.png')}}" alt="logo daniel dee">
        </div>
    </section>
    {{-- end second section --}}
  </header>
  {{-- end header --}}