<template>
  <nav class="navbar navbar-expand-lg navbar-light ps-3 bg-primary border-0">
    <nuxt-link to="/" class="navbar-brand text-white">Blog App</nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto ">
        <li class="nav-item active">
          <nuxt-link to="/posts" class="nav-link text-white">Content</nuxt-link>
        </li>

      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item me-sm-2">
          <nuxt-link to="/admin" class="nav-link text-white">Admin</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>