<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import { ZhiHuHot,ZhiHuHotList } from '@/types/zhihu';

const list = ref<ZhiHuHot[]>([]);

const getData = async () => {
  //const url =
//     "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
//   let response = await fetch(url, { mode: "no-cors" });
const url = "/api/v3/feed/topstory/hot-lists/total";
let response = await fetch(url, { mode: "no-cors" });
  const res: ZhiHuHotList = await response.json();
  list.value = res.data;
};

onMounted(() => {
  getData();
});

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`);
};



// const a =ref('abcd')
// const arr=ref(['a','b','c','d'])
</script>


<template>
    <div class="list"> 
    <section v-for="(item, index) in list" :key="item.id" class="hot"
    @click="toggleHot(item.target.id)">
    <span>{{ index+1 }}</span>
    <div>
        <h3 class='ellipsis 2'>
        {{ item.target.title }}
        </h3>
    <p class='ellipsis 1'>
        {{ item.target.excerpt }}
    </p>
        <div style="text-align: start;">
        {{ item.detail_text }}
    </div>
    </div>
        <img :src="item.children[0].thumbnail" alt=""></section>
    </div>
    </template>
   
<style scoped>
.list {  
  display: flex;  
  flex-wrap: wrap;  
  padding: 10px;  
  width: 1000px;
  height: 500px;
}  

.hot {  
  display: flex;
  align-items: center; 
  margin-bottom: 20px;  
  background-color: #cb90c5; 
  border-radius: 8px;  
  padding: 15px;   
  box-shadow: 0 6px 9px rgba(0,0,0,0.1);  
  width: 100%;  
  position: relative;  
}  

.hot > span {  
  margin-right: 15px;  
  font-weight: bold;  
}  

.hot > div {  
  flex-grow: 1;  
  max-width: calc(100% - 180px); /* 减去图片宽度和间隙 */
  padding-right: 20px; /* 文字内容与图片的间距 */  
}  

.ellipsis_2 {  
  font-size: 20px;
  overflow: hidden;  
  text-overflow: ellipsis; /* 文本溢出显示省略号 */  
  white-space: nowrap;  
    
}  
.ellipsis_1 {  
  font-size: 18px;
  color: #6c757d;
  overflow: hidden;  
  text-overflow: ellipsis;  
  display: -webkit-box;  
  -webkit-line-clamp: 3;
  line-height: 1.5;  
}   

.hot img {  
  border-radius: 4px;  
  object-fit: cover;     
  width: 150px; 
  height: auto;  
  margin-left: 20px;  
}  
p {
  text-align: left;  
}
div {
  text-align: left;  
}
</style>