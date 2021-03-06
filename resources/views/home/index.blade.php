@extends('layouts.app')
@section('content')
    {{-- <div id="hero-text">
    <div class="container"> --}}
    {{-- <h1>Hi. Hello.. I Am JohnDas...!</h1> --}}
    {{-- <h2>I Travel Around The World To Get The Best Photos.!</h2> --}}
    {{-- <h5>AWARD WINNING PHOTOGRAPHER  / CINEMATOGRAPHER / WRITER</h5> --}}
    {{-- </div>
  </div> --}}
    {{-- </header> --}}

    <!-- Corner Borders -->
    {{-- <section class="borders">
  <div class="brTR">
  </div>
  <div class="brTL">
  </div>
  <div class="brBL">
  </div>
  <div class="brBR">
  </div>
</section> --}}

    <section class="gallery">
        <div class="container-fluid">

            <div class="container cont-img ">
                <a href="https://ma3louma.tn" class="thumb-a" target="\_blank">
                    <div class="item-hover">
                        <div class="hover-text">
                            <h3>
                                MA3LOUMA
                            </h3>
                        </div>
                    </div>
                    <div class="item-img">
                        <img class="img-fluid rounded mx-auto d-block" src="{{ asset('ma3louma.png') }}" />
                    </div>
                </a>
            </div>
        </div>

        {{-- <div class="container"> --}}

        <div class="container height d-flex justify-content-center ">

            <div class="col-md-6">

                <form class="form row align-items-center" action="{{ route('home.index') }}" method="get">
                    <i class="fa fa-search"></i>
                    <input type="text" class="input-search form-control form-input form-group col" placeholder="Search anything..."
                        value="{{ request('search_query') }}" name='search_query' id='search'>
                    <div class=" col align-self-end ">

                        <input type="submit" value="search" class="btn  form-group col align-self-end ">
                    </div>
                    {{-- <span class="left-pan"><i class="fa fa-search"></i></span> --}}
                </form>

            </div>

        </div>

        {{-- </div> --}}

        <div class="row">

            <div class="fw mix-container home-gallery">
                @foreach ($websites as $website)
                    <div class="mix portrait">
                        <a href="{{ $website->link }}" class="thumb-a" target="\_blank">
                            <div class="item-hover">
                                <div class="hover-text">
                                    <h3>
                                        {{ $website->title }}
                                    </h3>
                                </div>
                            </div>
                            <div class="item-img">
                                <img src="{{ asset($website->images) }}" />
                            </div>
                        </a>
                    </div>
                @endforeach

            </div>
        </div>



    </section>
@endsection
