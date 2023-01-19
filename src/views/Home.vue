<template>
  <div class="container mx-auto px-16 mb-4"> 
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
        <div class=" h-16 w-16 bg-gray-800 rounded-sm float-left mr-6"></div>
        <div class="headline ">
          <p class="title text-lg ml-4 font-semibold">Title</p>
          <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum. Sit </p>
        </div>
        </div>

      </div>
      <div class="div h-auto bg-slate-300 flex-1 ml-4">
        <div class="text basis-1/3 m-16">
        <p class="text-3xl font-semibold ">What Hot to news this weeks ?</p>
        <p class="font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aspernatur tempora natus dignissimos voluptate quis possimus iusto. Assumenda, tempore perferendis?</p>
        </div>
      </div>
    </div>

  </div >
</template>

<script>
export default {
  name: 'homeView',
  props: {
  }
}
</script>

