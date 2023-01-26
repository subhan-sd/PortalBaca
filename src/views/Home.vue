<template>
  <div class="container mx-auto px-32 max-md:px-4 mb-4"> 

    <div class="slider grid grid-cols-2 max-md:grid-cols-1">
    <!-- Slider News Text -->
      <div class="news-week mt-12">
      <div class="text mr-4">
        <p class="text-7xl font-semibold">What Hot to news this weeks ?</p>
        <p class="mt-2 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aspernatur tempora natus dignissimos voluptate quis possimus iusto. Assumenda, tempore perferendis?</p>
      </div>
    </div>
    <!-- Slider image -->
    <div class="jumbotron w-full mt-6 bg-slate-400 h-80 rounded-md " ></div>
    </div>
    

    <!-- Content Hot News -->
    <div class="hot-news flex flex-row mt-16 ">
      <div class="div h-96 basis-1/3 bg-gray-200 rounded-md overflow-x-scroll max-lg:hidden">

        
        <div class=" bg-gray-300 h-auto rounded-sm flex-1 overflow-hidden text-ellipsis p-3 m-6 " v-for="i in items" :key="i.id">
          <a href="#">
        <div class=" h-12 w-12 bg-gray-400 rounded-sm float-left mr-2"></div>
        <div class="headline ">
          <p class="title text-sm ml-4 font-semibold">{{i.judul}}</p>
          <p class="text-xs">{{ i.waktu}}</p>
        </div>
      </a>
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

    <!-- Another News Paper -->
    <p class="text-center mt-6 text-4xl font-medium mb-4">More News!!</p>
    <div class="content grid grid-cols-3 max-lg:grid-cols-2 gap-5"> 
      <!-- Looping Vor -->

      <RouterLink :to="'/detail/' + i.id" class="dev h-auto bg-slate-200 rounded-md max-sm:overflow-hidden max-sm:h-64" v-for="i in items" :key="i.id" v-on:click="updateUser(i.id)"> 
        <div class="pict bg-slate-400 w-auto h-44 max-sm:h-24 "></div>
        <div class="text p-4">
          <p class="title text-lg font-semibold">{{ i.judul }}</p>
          <p class="font-light text-xs">
            {{i.penulis}}
          </p> 
          <p class="text-sm mt-3">{{ i.isi}} </p>
        </div>
      </RouterLink>

    </div>
  </div >

  <!-- Footer -->

    <footer class="w-full h-auto bg-slate-800 mt-12 p-14 text-gray-300">
      <div class="container mx-auto px-14 mb-2">
      <div class="footer-head mb-6">
        <p class="text-7xl font-semibold">What Hot to news this weeks ?</p>
        <p class="mt-2 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quae recusandae modi itaque officia aspernatur eos laborum expedita, provident veniam, sint unde laudantium! Sapiente ad sed delectus voluptatibus praesentium, itaque quod architecto sint, repellendus unde debitis nisi tenetur adipisci error tempore fugiat molestias expedita enim fuga recusandae assumenda accusamus cum perferendis. Aspernatur non itaque officiis! Ratione, officia consequuntur ut est porro quam minus, eligendi id accusamus nemo eveniet eos iste vitae saepe. Neque vero dolore totam est, nam distinctio sit qui harum explicabo cum?</p>
      </div>
      <div class="footer-add grid grid-cols-4 max-md:grid-cols-2 gap-5">
        <div class="div grid grid-cols-1 gap-1">
          <div class="head text-2xl font-semibold">
            Pengembang
          </div>
          <p>Subhan Fadz Kamil S.</p>
          <p>Az-Zahra Mutiara Dev</p>
          <p>Tech Annoa</p>
        </div>
        <div class="div grid grid-cols-1">
          <div class="head text-2xl font-semibold">
            Tools
          </div>
          <p>VScode</p>
          <p>Emmet</p>
          <p>Laptop</p>
          <p>Wifi Tetangga</p>
        </div>
        <div class="div grid grid-cols-1">
          <div class="head text-2xl font-semibold">
            Tecnology
          </div>
          <p>Vue 3</p>
          <p>Tailwind CSS</p>
          <p>Json Server</p>
          <p>Axios</p>
        </div>
        <div class="div grid grid-cols-1">
          <div class="head text-2xl font-semibold">
            Support
          </div>
          <p>Doa Ibu</p>
          <p>Doa Ayah</p>
          <p>Doa Nenek</p>
          <p>Doa Istri dan anak</p>
        </div>
      </div>
      </div>
    </footer>
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
    updateUser(id){
            axios.get("http://localhost:3004/berita/"+ id)
            // axios.get("http://localhost:8084/"+ id)
            .then((response) => console.log(response.data))
            // this.$router.push({username: username});
        },
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

