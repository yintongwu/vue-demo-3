<template>
  <div class="hello">
    <h2>{{ sContent }}</h2>
    <ul>
      <li>
        <router-link to="/registry/login">登陆</router-link>
      </li>
      <li>
        <router-link to="/registry/reg">注册</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      sContent: '这里是登录页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>