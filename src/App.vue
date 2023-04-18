<script setup>

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div class="container-fluid">

        <img class="icon" src="./assets/icon/muhfarian.png" alt="...">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link me-2" aria-current="page"><router-link to="/"><st>ABOUT</st></router-link></a>
            <a class="nav-link me-1" ><router-link to="/contact"><st>CONTACT</st></router-link></a>
            <li class="nav-item dropdown">
              <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
                <st>WORK</st>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#"><router-link to="/workPoster"><st>POSTER</st></router-link></a></li>
                <li><a class="dropdown-item" href="#"><router-link to="/workManip"><st>MANIPULATION</st></router-link></a></li>
                <li><a class="dropdown-item" href="#"><router-link to="/workApparel"><st>APPAREL</st></router-link></a></li>
              </ul>
            </li>

          </div>
        </div>
        <a class="navbar-brand d-flex" id="brand" href="#">AETHEREAL</a>
      </div>
    </nav>
  </header>

  <RouterView/>

  <footer class="bg-dark fixed-bottom text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"><p>© 2023 Copyright:

      <a class="text-white" href="https://instagram.com/muhfarian">Muhfarian</a></p>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style scoped>
#brand{
  font-family: Verdana;
  font-size: 18px;
  font-weight: bold;
}
.icon{
  max-height: 40px;
  margin-right: 35px;
}
st{
  color: white;
  font-family: Verdana;
}
st:hover{
  color: deepskyblue;
  font-family: Verdana;
}
p{
  font-family: Verdana;
  font-size: 12px;
}

</style>
