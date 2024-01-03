<script>
  import "../app.pcss";
  import { Navbar, Footer } from '$lib'
</script>

<Navbar />

<section class="bg-white dark:bg-gray-900">
  <div class="pt-8 px-4 mx-auto max-w-screen-xl text-center z-10">
    <slot />
  </div>
</section>

<<<<<<< HEAD
<Footer siteName="LexiLearn Hub"/>
=======
<Footer title="LexiLearn Hub"/>
>>>>>>> 5d42c2b (fix: Footer update)
