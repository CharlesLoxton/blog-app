<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted">Copyright &copy; {{ currentYear }}, Charles Loxton</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f8f9fa;
    padding: 15px 0;
    text-align: center;
}
</style>
