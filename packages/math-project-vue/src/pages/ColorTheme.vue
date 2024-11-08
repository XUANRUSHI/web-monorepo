<!-- <script lang="ts" setup>

 </script>


<template>


</template>


<style>

</style> -->

<script lang="ts" setup>
const onThemeChange = (e: string) => {
  document.body.className = e
}
</script>

<template>
  <header flex items-center justify-center gap-2>
    <h2>主题切换</h2>
    <button @click="onThemeChange('default')">
      default
    </button>
    <button @click="onThemeChange('peaple')">
      peaple
    </button>
    <button @click="onThemeChange('spring')">
      spring
    </button>
    <button @click="onThemeChange('autumn')">
      autumn
    </button>
    <button @click="onThemeChange('winter')">
      winter
    </button>
  </header>

  <div mb-3 flex justify-center gap-2>
    <button bg-primary text-white>
      primary
    </button>
    <button bg-warning text-white>
      warning
    </button>
    <button bg-danger text-white>
      danger
    </button>
    <button bg-info text-white>
      info
    </button>
  </div>
</template>
