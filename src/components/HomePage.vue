<template>
  <div>
    <div>
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pt-3 pb-5 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 xl:mt-16"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline">WELCOME</span>
                {{ " " }}
                <span class="block text-indigo-600 xl:inline">AXCELIO.ID</span>
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Belajar coding dan design dari nol. Praktis dan berorientasi
                industri. Tanpa batasan latar belakang dan usia.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <router-link
                  :to="{ name: 'Kelas' }"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    BOOTCAMP
                  </router-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <router-link
                  :to="{ name: 'Blog' }"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    BLOG
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
    <div class="py-12 bg-white">
      <div class="max-w-7xl mt-40 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            AXCELIO.ID
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            OUR CLASS
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Mulai belajar! <br>Cek Daftar Kelas yang tersedia saat ini di Axcelio.id
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto py-10 lg:max-w-none">
          <div
            class="m-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6"
          >
            <div
              class="group relative bg-white rounded-xl p-8 bordered"
              v-for="(data, index) in classData"
              :key="index"
            >
              <router-link :to="'/kelas/' + data.slug">
                <div
                  class="relative w-full bg-white rounded-lg overflow-hidden"
                >
                  <img
                    :src="data.banner"
                    class="w-full object-center object-cover"
                  />
                </div>
                <h3 class="block font-extrabold tracking-tight mt-8 text-xl font-bold text-left">
                  {{ data.nama_kelas }}
                </h3>
                <hr class="mt-3 mb-3" />
                <p class="text-base text-justify text-gray-500">
                  {{ data.deskripsi_singkat }}
                </p>
              </router-link>
            </div>
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
