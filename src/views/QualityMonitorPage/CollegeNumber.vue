<template>
  <header>
    <HeaderChar></HeaderChar>
  </header>
  <section class="container">
    <CenterChar></CenterChar>
  </section>
</template>

<script>
import HeaderChar from "../../components/CollegeNumber/HeaderChar";
import CenterChar from "../../components/CollegeNumber/CenterChar";
export default {
  name: "CollegeNumber",
  components: {
    CenterChar,
    HeaderChar,
  },
};
</script>

<style scoped>
header {
  height: 5.5rem;
  /* border: 1px solid rgb(6, 6, 202); */
}
.container {
  height: 5.5rem;
  width: 100%;
}
</style>