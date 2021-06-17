<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="addCount">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps, ref } from "@vue/runtime-core";
interface IUserList { // 最好是写在其他文件引入，这里只是示范
  id: number
  name: string
  // ....
}

const count = ref(0)
const addCount = () => {
  count.value += 1
  emit('seach', count.value)
}

// 下面是props写法
defineProps<{
  msg: string
  data?: IUserList[] // ?号是可传可不传的意思
}>()
// 如果你想获取props的值,就用下面这种写法

// const props = defineProps<{
//   msg: string
//   data?: IUserList[] // ?号是可传可不传的意思
// }>()

// props 教学结束

// 下面是组件常用的emit
const emit = defineEmit(['seach']) // 先在这里定义好需要的emit方法

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
