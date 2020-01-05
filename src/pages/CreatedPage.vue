<template>
    <q-page class="row window-height window-width justify-center items-center" style="min-height:100%; height:100%; width: 100% !important;">
      <q-scroll-area id="createdweb" class="bg-white" style="height: 100%; width: 100%;">
        <div v-for="n in 100" :key="n" class="q-py-xs">
          hej
        </div>
        <div id="div1" class="droptarget" onclick="showinfo()"></div>
        <div id="div2" class="droptarget" onclick="showinfo()"></div>
      </q-scroll-area>
    </q-page>
</template>

 <style lang="stylus" scoped>
 #div1,#div2 {
   float:left;
   width:200px;
   height:100px;
   margin:10px;
   padding:10px;
   border:none
  }
  #div1:hover,#div2:hover{
    background-color:#e6ffe6
  }

 </style>