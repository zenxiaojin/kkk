// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/config.css';
import './js/whatwg-fetch.js';
import './js/jquery-3.2.1.min.js';
import './js/jquery.cookie.js';
import App from './App'
import router from './router'

import VueQuillEditor from 'vue-quill-editor' 
// require styles 引入样式 
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css' 
import 'quill/dist/quill.bubble.css' 
import './api/global.js'
Vue.use(VueQuillEditor)



import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)



Vue.config.productionTip = false

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

