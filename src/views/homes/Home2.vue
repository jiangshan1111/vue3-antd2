<template>
  <a-carousel arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img :src="getImgUrl(props.i)" />
      </a>
    </template>
    <div v-for="item in 4">
      <img :src="baseUrl + 'abstract0' + item + '.jpg'" />
    </div>
  </a-carousel>
</template>
<script>
const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/';
export default {
  data() {
    return {
      baseUrl,
    };
  },
  methods: {
    getImgUrl(i) {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    },
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel ::v-deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel ::v-deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel ::v-deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel ::v-deep(.slick-thumb) {
  bottom: 0px;
}
.ant-carousel ::v-deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
.ant-carousel ::v-deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel ::v-deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
