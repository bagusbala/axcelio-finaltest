<template>
  <div>
    <div>
      <div class="max-w-7xl mx-auto">
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 xl:mt-16"
        >
          <div class="text-center">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">404</span>
              <br />
              <span class="block text-indigo-600 xl:inline"
                >PAGE NOT FOUND</span
              >
            </h1>
            <div
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg"
            >
              <p class="text-sm">
                   Lorem ipsum dolor sit amet consect adipisicing elit. <br>Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
            </div>
            <div
              class="mt-5 sm:mt-8 sm:flex justify-center"
            >
              <div class="rounded-md shadow">
                <router-link
                  :to="{ name: 'Home' }"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  BACK TO HOME
                </router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <!-- <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.fetchData();
  },
  methods: {
    // fetchData() {
    //   this.axios
    //     .get(`https://axcelio.id/api/kelas`)
    //     .then((response) => {
    //       this.classData = response.data.data;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
  data() {
    return {};
  },
};
</script>
