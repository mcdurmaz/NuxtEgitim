<template>
  <div>
    <nav class="bg-slate-300 p-2 rounded-lg px-3">
      <ul class="flex gap-2">
       <li>
          <NuxtLinkLocale to="/">Home</NuxtLinkLocale>
        </li>
       <li>
          <NuxtLinkLocale to="/contents">Contents</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/about">About</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/fetch">Fetch</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/fetch-cache">Cache</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/fetch-cache-data">Cache Data</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/sample1">Sample 1</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/query-param?page=20&search=ara">QueryParam</NuxtLinkLocale>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style>

</style>