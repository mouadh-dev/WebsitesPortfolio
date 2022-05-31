@extends('layouts.app')
@section('content')

<div id="hero-text">
    <div class="container">
      {{-- <h1>Hi. Hello.. I Am JohnDas...!</h1> --}}
      {{-- <h2>I Travel Around The World To Get The Best Photos.!</h2> --}}
      {{-- <h5>AWARD WINNING PHOTOGRAPHER  / CINEMATOGRAPHER / WRITER</h5> --}}
    </div>
  </div>
</header>

<!-- Corner Borders -->
<section class="borders">
  <div class="brTR">
  </div>
  <div class="brTL">
  </div>
  <div class="brBL">
  </div>
  <div class="brBR">
  </div>
</section>

<section class="gallery">
  <div class="container-fluid">
    {{-- <div class="row">
      <!-- Mixit Up Controls -->
      <div class="controls">
        <button type="button" class="control" data-filter="all">All</button>
        <button type="button" class="control" data-filter=".landscape">Landscape</button>
        <button type="button" class="control" data-filter=".portrait">Portrait</button>
        <button type="button" class="control" data-filter=".product">Product</button>
      </div>
    </div> --}}
<div class="container cont-img ">
    <a href="https://ma3louma.tn" class="thumb-a" target="\_blank">
        <div class="item-hover">
          <div class="hover-text"><h3>
              MA3LOUMA
            </h3></div>
        </div>
        <div class="item-img">
            <img class="img-fluid rounded mx-auto d-block" src="{{ asset('ma3louma.png') }}"/>
        </div>
    </a>

    {{-- <div class="mix portrait"> --}}
        {{-- <a href="" class="thumb-a" target="\_blank">
           <div class="item-hover hover-size">
             <div class="hover-text"><h3>
                test
               </h3></div>
           </div>
           <div class="item-img">
             <img src="{{ asset('by-magdalena-roeseler.jpg') }}"/>
           </div>
       </a> --}}
       {{-- </div> --}}
      </div>
</div>
 <div class="row">

     <div class="fw mix-container home-gallery">
         @foreach ($websites as $website)
         <div class="mix portrait">
         <a href="{{ $website->link}}" class="thumb-a" target="\_blank">
            <div class="item-hover">
              <div class="hover-text"><h3>
                  {{ $website->title}}
                </h3></div>
            </div>
            <div class="item-img">
                <img src="{{ asset( $website->images)}}"/>
            </div>
        </a>
        </div>
        @endforeach

    </div>
 </div>

    {{-- <div class="row">
      <div class="fw mix-container home-gallery">
          <div class="mix portrait">
           <a href="project-1.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Happy Girl</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape portrait product">
           <a href="project-slider.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>The Sigar Men</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape product">
           <a href="project-video.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Yoga/Meditation</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape portrait">
           <a href="project-1.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Shoes on Tracks</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape product">
           <a href="project-slider.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Happy FaceUp</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>

        <div class="mix landscape portrait">
           <a href="project-video.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Lemon Face</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix portrait product">
           <a href="project-1.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Hunger Man</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape portrait product">
           <a href="project-slider.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Photo By Photographer</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape portrait">
           <a href="project-video.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Vintage Camera</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape portrait product">
           <a href="project-1.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Camera Frame</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape">
           <a href="project-slider.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Girl In Garden</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape portrait">
           <a href="project-video.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Girl Portrait B/W</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix portrait product">
           <a href="project-1.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Retro Photographer</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape product portrait">
           <a href="project-slider.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Spiral View</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix landscape">
           <a href="project-video.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Happy Clouds</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div>
        <div class="mix portrait">
           <a href="project-1.html" class="thumb-a">
              <div class="item-hover">
                <div class="hover-text"><h3>Photographer Phose</h3></div>
              </div>
              <div class="item-img">
                <img src="{{ asset('by-magdalena-roeseler.jpg') }}" alt=""/>
              </div>
           </a>
        </div> --}}
      {{-- </div>

    </div>
  </div> --}}

</section>

@endsection

