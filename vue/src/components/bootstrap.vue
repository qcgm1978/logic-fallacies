<template>
 <!-- div containing the toggable navigation -->
<div class="collapse navbar-collapse" id="navbarSupportedContent">

<!-- navigation menu -->
   <ul class="navbar-nav mr-auto">
    <!-- active link corresponding to the current page -->
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Trip Description</a>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Book Travels</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Reservations</a>
    </li>
  </ul>
  <!-- inline form inside the navbar -->
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</template>

<script>
require('bootstrap/dist/css/bootstrap.min.css');
export default {
  name: "Bootstrap",
  data() {
    return {
      msg: "Welcome to Bootstrap"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
