<script>
  import Modal from './Modal.svelte'
  let modalStatus = $state(false)
</script>

<button onclick={()=>modalStatus =  true} class="block absolute right-2 sm:right-8 top-28 w-md md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  How to play
</button>

<Modal bind:modalStatus />