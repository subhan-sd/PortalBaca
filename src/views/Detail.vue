<template>
     <div class="container mx-auto px-32 mb-4">

        <!-- New Section -->
        <div class="news-section grid grid-cols-3 gap-5">
            <!-- Point News -->
            <div class="compontent col-span-2">
                <!-- Headline Section -->
                <div class="headline mb-12">
                <div class="head font-semibold text-7xl">
                   {{judul}}
                </div>
                <div class="sub-head w-1/4h-10">
                    <div class="created italic text-xl flex ">
                        <div class="profil h-10 w-10 bg-slate-200 rounded-full"></div>
                        <div class="publish ml-3 mt-0.5">
                            <div class="name text-sm " >{{ penulis }}</div>  
                            <div class="date font-light text-xs">{{ waktu }} </div>
                        </div>
                </div> 
                </div>
                </div>
    
                <!-- Content News Section -->
                <div class="content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nam voluptas exercitationem vero rem temporibus culpa vel perferendis, assumenda ullam. Assumenda dolores cupiditate porro, ratione omnis doloremque odio deleniti beatae a repellat quaerat nesciunt eligendi consequuntur earum, eveniet eos ea quos voluptates repudiandae dolor aperiam rem ut asperiores. Vitae adipisci magnam veniam magni a aspernatur quia molestias corporis necessitatibus quibusdam eius sequi numquam quod veritatis repellendus placeat, mollitia repellat quisquam. Minus magnam sit blanditiis aperiam quod, deserunt recusandae, voluptatibus cum voluptate provident quae cupiditate, facere est aliquam! Explicabo similique inventore ratione quod architecto minima nulla libero sapiente, eligendi unde ut distinctio nostrum vero necessitatibus sit voluptas eius consequuntur, dicta voluptatibus repellat ad amet optio obcaecati? Consequatur obcaecati veritatis aliquam nesciunt commodi, accusamus esse distinctio ab recusandae asperiores odio necessitatibus ratione reprehenderit placeat dicta! Modi labore, dolorum, sunt consequatur nulla iusto ipsam, deserunt nesciunt doloribus rem possimus hic sed cupiditate dolore.
                </div>
            </div>
            <div class="news-like-same">
                <div class="div h-96 basis-1/3 bg-gray-200 rounded-md overflow-x-scroll">
                    <div class=" bg-gray-300 h-auto rounded-sm flex-1 overflow-hidden text-ellipsis p-3 m-1" v-for="i in items" :key="i.id">
                    <a href="#">
                    <div class=" h-12 w-12 bg-gray-400 rounded-sm float-left mr-2"></div>
                    <div class="headline ">
                    <p class="title text-sm ml-4 font-medium">{{i.judul}}</p>
                    <p class="text-xs">{{ i.waktu}}</p>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        
         <div class="another-news"></div>
     </div>
</template>
<script>
import axios from 'axios'

export default {

    
  name: 'detailContent',
  data(){
        return{
        items:[],
        genre:'',
        isi : '',
        judul : '',
        penulis : '',
        waktu : ''
        };
    },
    methods:{
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
        axios
        .get('http://localhost:3004/berita/' + this.$route.params.id)
        .then((response) => {
            this.genre = response.data.genre;
            this.isi = response.data.isi;
            this.judul = response.data.judul;
            this.penulis = response.data.penulis;
            this.waktu = response.data.waktu;
            console.log(this.$route.params.penulis)
        })
        .catch((err) => console.log(err.response + "Error"))
        console.log(this.$route.params.penulis);
        // console.log(result.data)
    }
    }
</script>