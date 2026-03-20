<template>
  <div class="flex gap-2 mb-3">
    <MyButton v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </MyButton>
  </div>
   <h1>{{ $t('welcome') }}</h1>
</template>

<script setup>
const { locales, setLocale } = useI18n()


</script>