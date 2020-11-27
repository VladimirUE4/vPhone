const homePage = {
  template: '#home',
  props: ['myProp'] };


const newsPage = {
  template: '#news' };


const settingsPage = {
  template: '#settings' };


new Vue({
  el: '#app',
  template: '#main',
  data() {
    return {
      activeIndex: 0,
      tabs: [
      {
        icon: this.md() ? null : 'ion-logo-github',
        label: 'Spotify',
        page: homePage,
        key: "homePage" },

      {
        icon: this.md() ? null : 'ion-ios-apps',
        label: 'FloppyBird',
        page: newsPage,
        badge: 1,
        key: "newsPage" },

      {
        icon: this.md() ? null : 'ion-ios-settings',
        label: 'Instagram',
        page: settingsPage,
        key: "settingsPage" }] };



  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    } },

  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    } } });