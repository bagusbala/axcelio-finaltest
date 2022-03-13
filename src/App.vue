<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="font-bold text-indigo-600 text-2xl">AXCELIO</span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  to="/"
                  class="px-2 py-2 rounded-md text-sm font-bold"
                  >Home</router-link
                >
                <router-link
                  :to="{ name: 'Kelas' }"
                  class="px-2 py-2 rounded-md text-sm font-bold"
                  >Kelas</router-link
                >
                <router-link
                  :to="{ name: 'Blog' }"
                  class="px-2 py-2 rounded-md text-sm font-bold"
                  >Blog</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

    <div class="bg-gray-50">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl text-left font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          <span class="block">AXCELIO.ID</span>
          <span class="block text-sm font-bold text-indigo-600"
            >OFFLINE & ONLINE BOOTCAMP</span
          >
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md">
            <img
              class="h-20 w-auto"
              src="https://axcelio.id/assets/images/logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.axios
        .get(`https://axcelio.id/api/kelas`)
        .then((response) => {
          this.classData = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  data() {
    return {
      classData: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
