<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <link rel="stylesheet" href="{{asset('/css/app.css')}}">
    <title>@yield('title', 'Daniel dee')</title>
  </head>
  <body>
    @include('partials.header')
    {{-- starting main --}}
    <main>
        @yield('main_content')
    </main>
    @include('partials.footer')
    {{-- ending main --}}
  </body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="{{asset('/js/app.js')}}"></script>
</html>