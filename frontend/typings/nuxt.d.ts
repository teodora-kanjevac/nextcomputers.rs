import { Ref } from 'vue'

declare module '#app' {
  interface NuxtApp {
    $isSearchPage: Ref<boolean>
    $isCategory: Ref<boolean>
  }
}
