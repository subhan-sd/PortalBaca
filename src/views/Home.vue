<template>
  <div class="container mx-auto px-14 mb-4"> 
    <div class="jumbotron w-full mt-6 bg-slate-400 h-72 rounded-md " ></div>

    <div class="news-week flex flex-row mt-12">
      <div class="text basis-1/3 mr-4">
        <p class="text-3xl font-semibold">What Hot to news this weeks ?</p>
        <p class="font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aspernatur tempora natus dignissimos voluptate quis possimus iusto. Assumenda, tempore perferendis?</p>
      </div>
      <!-- <div class=" bg-gray-300 h-auto rounded-md flex-1 overflow-hidden p-4">
        <div class=" h-28 w-28 bg-slate-800 rounded-sm float-left mr-6"></div>
        <div class="headline ">
          <p class="title text-2xl ml-4 font-semibold">Title</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum. Sit impedit tenetur eveniet sapiente inventore nisi sint itaque corrupti, vel porro nam earum tempora non. Voluptate ab delectus quia.</p>
        </div>
      </div> -->
    </div>

    <div class="hot-news flex flex-row mt-16 ">
      <div class="div h-96 basis-1/3 bg-gray-200 rounded-md">

        <div class=" bg-gray-300 h-auto rounded-sm flex-1 overflow-hidden p-3 m-6">
        <div class=" h-16 w-16 bg-gray-400 rounded-sm float-left mr-2"></div>
        <div class="headline ">
          <p class="title text-lg ml-4 font-semibold">Title</p>
          <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum. Sit </p>
        </div>
        </div>

      </div>
      <div class="div h-autoflex-1 ml-4">
        <div class="text basis-1/3 m-16">
        <p class="text-3xl font-semibold ">The Hot to news this weeks Is 'Akapela'</p>
        <p class="font-normal text-xl">Create By.Subhan || 2012, 12 Jan </p>
        <div class="container mx-auto px-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint animi quod perspiciatis aliquam ut in, soluta deleniti enim commodi voluptatum maiores autem eveniet porro vel cumque sunt nostrum est, dolorem repellat! Vel nam molestiae architecto deleniti obcaecati quas. Quaerat aliquam autem magni nemo dolore impedit sint laudantium assumenda provident eius!
          <p class="font-light my-4 text-lg">
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore eveniet quia nesciunt aliquid unde, corrupti voluptatem illum distinctio laboriosam placeat tempore nisi ipsum iste numquam fuga optio, doloremque similique. "
          </p>
          iv class="container mx-auto px-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint animi quod perspiciatis aliquam ut in, soluta deleniti enim commodi voluptatum maiores autem eveniet porro vel cumque sunt nostrum est, dolorem repellat! Vel nam molestiae architecto deleniti obcaecati quas. Quaerat aliquam autem magni nemo dolore impedit sint laudantium assumenda provident eius!
        </div>
        </div>
      </div>
    </div>

    <p class="text-center mt-6 text-4xl font-medium mb-4">More News!!</p>
    <div class="content grid grid-cols-3 gap-5">
      <!-- Text Asli -->
      <div class="dev h-auto bg-slate-200  rounded-md"> 
        <div class="pict bg-slate-400 w-auto h-44 "></div>
        <div class="text p-4">
          <p class="title text-lg font-semibold">Makanan Hebat dalah makanan </p>
          <p class="font-light text-xs">
            12 mnt ago
          </p> 
          <p class="text-sm mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corporis ipsum voluptates aliquid provident impedit voluptas ipsa nesciunt? Quibusdam vel fuga quaerat eveniet sequi, tenetur at odit eum inventore qui. Maxime sapiente exercitationem porro esse dicta quas nam quidem suscipit? </p>
        </div>
      </div>

      <!-- Looping Vor -->

      <div class="dev h-auto bg-slate-200  rounded-md" v-for="i in items" :key="i.id"> 
        <div class="pict bg-slate-400 w-auto h-44 "></div>
        <div class="text p-4">
          <p class="title text-lg font-semibold">{{ i.judul }}</p>
          <p class="font-light text-xs">
            {{i.penulis}}
          </p> 
          <p class="text-sm mt-3">{{ i.isi}} </p>
        </div>
      </div>

    </div>

  </div >
</template>

<script>
import axios from 'axios'
// import { onMounted , ref } from 'vue'

export default {
  name: 'homeView',
  props: {
  },
  data(){
    return{
      items:[],
    };
  },methods:{
    listBerita(){
            const credentials = {
              id: this.id,
              judul: this.judul,
              penulis: this.penulis,
              waktu: this.waktu,
              isi: this.isi,
            };
            axios
                .get(`http://localhost:3004/berita`, credentials)
                // .get(`http://localhost:8084/reload`, credentials)
                .then((response) => {
                  console.log(response)
                    // for(const i in (key)=> response.data){
                    //     this.items.push(i[key])
                    // 
                  this.items= [...response.data]
                  console.log(this.items + "ini berarti sudah dapat")

                })
                // .then((response) => console.log(response.data))
                .catch((err) => console.log(err.response+" error data tidak dapet"))
        },
        
    },
    created(){
        this.listBerita();
    }
  }
</script>

