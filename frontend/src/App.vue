<template>
  <div id="app">
    <!-- 使用 Bootstrap 的 navbar 类来美化导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">MockRestServer</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/p_apis">APIs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/p_api-properties">API Properties</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* 美化导航栏，确保导航栏元素之间的间距 */
nav {
  margin-bottom: 20px;
}
</style>
