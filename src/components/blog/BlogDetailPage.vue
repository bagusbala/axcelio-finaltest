<template>
  <div class="bg-white">
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
                <span class="block xl:inline">BLOG</span>
                <br />
                <span class="block text-indigo-600 xl:inline">{{
                  blogDetails.judul
                }}</span>
              </h1>
              <div
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >

                <!-- <p class="text-xs">
                  <b>{{ blogDetails.user.nama_lengkap }}</b
                  ><br /><span class="text-gray-600">{{ blogDetails.user.bio }}</span
                  ><br />{{ blogDetails.user.created_at }}
                </p> -->

                
              </div>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              ></div>
            </div>
          </main>
        </div>
      </div>
      <div class="mb-20 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          :src="blogDetails.thumbnail"
          alt=""
        />
      </div>
    </div>
    <div class="py-12 bg-white">
      <div class="max-w-7xl mt-40 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-justify">
          <div v-html="blogDetails.isi" />
        </div>
      </div>
    </div>
    <div class="py-12 bg-white">
      <div class="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            OTHER
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            BLOG POST
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="m-6 py-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6"
        >
          <div
            class="group relative bg-white rounded-xl p-8 bordered"
            v-for="(data, index) in blogDetails.related"
            :key="index"
          >
            <a :href="'/blog/' + data.slug">
              <div class="relative w-full bg-white rounded-lg overflow-hidden">
                <img
                  :src="data.thumbnail"
                  class="object-center object-cover h-60 w-full"
                />
              </div>
              <h3
                class="block font-extrabold tracking-tight mt-8 text-xl font-bold text-left"
              >
                {{ data.judul }}
              </h3>
              <hr class="mt-3 mb-3" />
              <div>
                <p class="text-base text-justify text-gray-500">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                <hr class="mt-3 mb-3" />
                <div class="grid grid-flow-col text-left auto-cols-max">
                  <p class="text-xs">
                    <b>{{ data.user.nama_lengkap }}</b
                    ><br /><span class="text-gray-600">{{ data.user.bio }}</span
                    ><br />{{ data.user.created_at }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      this.axios
        .get(`https://axcelio.id/api/blog/` + this.$route.params.slug)
        .then((response) => {
          console.log(response);
          this.blogDetails = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  data() {
    return {
      blogDetails: [],
    };
  },
};
</script>
