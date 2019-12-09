<template>
  <div class="hello">
    <h1>{{ sContent }}</h1>
    <ul>
      <li>
        <router-link to="/hello">to hello page</router-link>
      </li>
    </ul>
    <h2>{{ sContent }}</h2>
    <ul>
      <li>
        <router-link to="/index">to index page</router-link>
      </li>
    </ul>
    <h2>首页</h2>
    <ul>
      <li>
        <router-link to="/">to home(/) page</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      sContent: '这里是hello components'
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