<template>
  <div class="container">
    <div>
      <img style="width: 50%" src="@/assets/123.png" alt="Can't donwoload..." />
    </div>

    <router-link to="/tasks" class="centered">Создать задачу</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  text-decoration: none !important;
}
a {
  text-decoration: none !important;
}
</style>
