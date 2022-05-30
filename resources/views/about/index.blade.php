@extends('layouts.app')
@section('content')
<section class="about-me">
    <div class="container">
      <div class="section-title">
        <h2>About us.!</h2>
        <p>The Story Of I-techrity</p>
      </div>
      <div class="col-md-6 offset-md-3">
          <img src="{{asset('itechrity.png')}}" alt="I-techrity" class="img-fluid img-center">
      </div>
      <div class="row">
        <div class="col-md-12 my-name">
          <h2>we are developement company..!</h2>
        </div>
        <div class="col-md-4 offset-md-2">
          <p class="text-justify"> I-Techrity is the first ICT4D (ICT for Development) startup in Tunisia. Owned by the organisation -I WATCH, I-Techrity will develop technology tools destined to solve issues related to development, integrity and the public sphere in general. </p>
        </div>
        <div class="col-md-4">
          <p class="text-justify"> The I-Techrity team commits to innovate in solving social problems and to support civil society in finding answers to social challenges.</p>
        </div>

        {{-- <div class="col-md-8 offset-md-2">
          <div class="progress-bars">
            <div class="p-bar" style="width:100%">
              <p>Photography</p>
                <p class="text-right">100%</p>
            </div>
            <div class="p-bar" style="width:85%">
              <p>Interviews</p>
                <p class="text-right">85%</p>
            </div>
            <div class="p-bar" style="width:90%">
              <p>TV Commercials</p>
                <p class="text-right">90%</p>
            </div>
            <div class="p-bar" style="width:95%">
              <p>Documentries</p>
                <p class="text-right">95%</p>
            </div>
          </div>

        </div> --}}
      </div>

    </div>
  </section>
@endsection
