import { initFlowbite } from "flowbite";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    initFlowbite();
    import('flowbite-datepicker');
  }
});
