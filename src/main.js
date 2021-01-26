import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, ConfigProvider, Carousel, Comment, Avatar, Breadcrumb, Layout, Input, Steps, Menu, Form, Select,Calendar, Row, Radio, DatePicker, Col, Icon, Checkbox, Switch, Badge, Timeline } from 'ant-design-vue';
const ant = {
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
    Vue.component(Steps.name, Steps)
    Vue.component(Form.name, Form)
    Vue.component(Select.name, Select)
    Vue.component(Row.name, Row)
    Vue.component(Radio.name, Radio)
    Vue.component(DatePicker.name, DatePicker)
    Vue.component(Col.name, Col)
    Vue.component(Icon.name, Icon)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Switch.name, Switch)
    Vue.component(Calendar.name, Calendar)
    Vue.component(Badge.name, Badge)
    Vue.component(ConfigProvider.name, ConfigProvider)
    Vue.component(Comment.name, Comment)
  }
}
createApp(App)
  .use(store)
  .use(Layout)
  .use(Menu)
  .use(Breadcrumb)
  .use(Timeline)
  .use(Carousel)
  .use(Avatar)
  .use(router)
  .use(ant)
  .mount("#app");
