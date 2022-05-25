<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    {{-- <title>JPhotography - Minimal Photography Portfolio HTML5 Template</title> --}}
    <meta name="description" content="JPhotography - Minimal Photography Portfolio HTML5 Template">

    <!-- Playfair Display - Raleway Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900|Raleway:100,300,400,600,700" rel="stylesheet">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    <!-- Custom Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

    <header class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="index.html">JPhotography</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar i1"></span>
            <span class="icon-bar i2"></span>
            <span class="icon-bar i3"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarDefault">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">HOME <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-me.html">ABOUT ME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">PORTFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT</a>
              </li>
            </ul>

          </div>
        </nav>

        <div id="hero-text">
          <div class="container">
            <h1>Hi. Hello.. I Am JohnDas...!</h1>
            <h2>I Travel Around The World To Get The Best Photos.!</h2>
            <h5>AWARD WINNING PHOTOGRAPHER  / CINEMATOGRAPHER / WRITER</h5>
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
          <div class="row">
            <!-- Mixit Up Controls -->
            <div class="controls">
              <button type="button" class="control" data-filter="all">All</button>
              <button type="button" class="control" data-filter=".landscape">Landscape</button>
              <button type="button" class="control" data-filter=".portrait">Portrait</button>
              <button type="button" class="control" data-filter=".product">Product</button>
            </div>
          </div>

          <div class="row">
            <div class="fw mix-container home-gallery">
                <div class="mix portrait">
                 <a href="project-1.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Happy Girl</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/by-magdalena-roeseler.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape portrait product">
                 <a href="project-slider.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>The Sigar Men</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/cigar.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape product">
                 <a href="project-video.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Yoga/Meditation</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/yoga.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape portrait">
                 <a href="project-1.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Shoes on Tracks</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/shoes.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape product">
                 <a href="project-slider.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Happy FaceUp</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/grimace.jpg" alt=""/>
                    </div>
                 </a>
              </div>

              <div class="mix landscape portrait">
                 <a href="project-video.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Lemon Face</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/lemon.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix portrait product">
                 <a href="project-1.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Hunger Man</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/hunger.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape portrait product">
                 <a href="project-slider.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Photo By Photographer</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/photographer-f.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape portrait">
                 <a href="project-video.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Vintage Camera</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/camera.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape portrait product">
                 <a href="project-1.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Camera Frame</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/frame.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape">
                 <a href="project-slider.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Girl In Garden</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/girl-indark.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape portrait">
                 <a href="project-video.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Girl Portrait B/W</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/woman.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix portrait product">
                 <a href="project-1.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Retro Photographer</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/photographer.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape product portrait">
                 <a href="project-slider.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Spiral View</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/nautre-view.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix landscape">
                 <a href="project-video.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Happy Clouds</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/way.jpg" alt=""/>
                    </div>
                 </a>
              </div>
              <div class="mix portrait">
                 <a href="project-1.html" class="thumb-a">
                    <div class="item-hover">
                      <div class="hover-text"><h3>Photographer Phose</h3></div>
                    </div>
                    <div class="item-img">
                      <img src="images/girl-with-camera.jpg" alt=""/>
                    </div>
                 </a>
              </div>
            </div>

          </div>
        </div>

      </section>


@yield('content')

@include('layouts.partials.footer')

<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
{{-- <script src="{{ asset('js/mixitup.min.js') }}"></script> --}}
<script src="{{ asset('js/app.js') }}"></script>
<script>
    var containerEl = document.querySelector('.mix-container');

    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
        }
    });
</script>

</body>
</html>
