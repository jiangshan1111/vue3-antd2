<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header"  :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          江山 1
        </a-menu-item>
        <a-menu-item key="2">
          江山 2
        </a-menu-item>
        <a-menu-item key="3">
          江山 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span><user-outlined />江山嘟嘟嘟嘟</span>
              </template>
              <a-menu-item key="1">
                  <router-link to="/Home">江山</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                  <router-link to="/Home1">江山</router-link>
              </a-menu-item>
              <a-menu-item key="3">
                  <router-link to="/Home2">江山</router-link>
              </a-menu-item>
              <a-menu-item key="4">
                  <router-link to="/Home3">江山</router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <Main></Main>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import {
  computed,
  reactive,
  ref,
} from "vue";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import Main from "./main";
import { useRoute, useRouter } from "vue-router";
export default {
    setup(props, content) {
        const route = useRoute();
        const router = useRouter();
        console.log(route.path)
        const selectedKeys1 = ref(['2'])
        const selectedKeys2 = computed(() => {
            switch(route.path){
                case '/Home1':
                    return ['2']
                case '/Home':
                    return ['1']
                case '/Home2':
                    return ['3']
                case '/Home3':
                    return ['4']
            }
        });
        const openKeys = ref(['sub1'])
        return {
            selectedKeys1,
            selectedKeys2,
            openKeys,
        };
    },
    components: {
        UserOutlined,
        Main,
        LaptopOutlined,
        NotificationOutlined,
    },
};
</script>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: url(https://qn.antdv.com/kaikeba_ssr.jpeg) center no-repeat;
  background-size: cover;
  margin: 16px 28px 16px 0;
  float: left;
}

</style>