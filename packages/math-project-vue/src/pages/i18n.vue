<!-- <script lang="ts" setup>
import { useI18n } from "@/composables/useI18n";
import { $i18n } from "@/plugins/i18n";
import { computed, inject, ref } from "vue";

const i18n = inject($i18n)!;

// 现在可以查询字典了
// console.log('hello :>> ', i18n.en.hello);

// 添加语言切换
type Local = "zh" | "en";
const local = ref<Local>("zh");
const $t = computed(() => i18n[local.value]);

const setLocal = (type: Local) => {
  local.value = type;
};
</script>

<template>
  <nav mt-10 flex justify-center gap-2>
    <button h-10 btn @click="setLocal('zh')">中文</button>
    <button h-10 btn @click="setLocal('en')">English</button>
  </nav>

  <h1>{{ $t.hello }} {{ $t.MilkyWay }}</h1>
</template> -->


<!-- 2 -->

<script lang="ts" setup>
import { useI18n as useMyI18n } from '@/composables/useI18n'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { setLocal, $t: $myt } = useMyI18n()

const { locale, t } = useI18n()
const whatsyouname = computed(() => {
  return t('intro.whats-your-name')
})
</script>

<template>
  <div class="flex justify-center gap-5">
    -------使用自定义 i18n-----------
  </div>
  <nav mt-10 flex justify-center gap-2>
    <button class="flex justify-center gap-5" h-10 btn @click="setLocal('zh')">
      中文
    </button>
    <button class="flex justify-center gap-5" h-10 btn @click="setLocal('en')">
      English
    </button>
  </nav>
  <h1 class="flex justify-center gap-5">
    {{ $myt.hello }} {{ $myt.MilkyWay }}
  </h1>

  <div class="flex justify-center gap-5">
    -------使用 Vue i18n-----------
  </div>
  <h1 class="flex justify-center gap-5">
    {{ $t("intro.desc") }}
  </h1>
  <h2 class="flex justify-center gap-5">
    {{ $t("button.back") }}
  </h2>
  <h2 class="flex justify-center gap-5">
    {{ whatsyouname }} --- {{ locale }}
  </h2>
  <div class="m-auto flex justify-center gap-5">
    <select v-model="$i18n.locale" class="h-10 w-20 text-2xl">
      <option
        v-for="opt in $i18n.availableLocales"
        :key="`locale-${opt}`"
        :value="opt"
      >
        {{ opt }}
      </option>
    </select>
  </div>
</template>


