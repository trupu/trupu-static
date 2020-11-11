<template lang="pug">
div.layout
    slot
</template>

<style>
body {
}

.layout {
  @apply bg-primary-100 text-secondary;

  width: 100vw;
  height: 100vh;
}
</style>
