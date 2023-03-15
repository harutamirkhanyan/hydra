function scrollTo(selector) {
  const element = document.querySelector(selector);
  element.scrollIntoView({ behavior: 'smooth' });
}

export default {
  install(app) {
    app.config.globalProperties.$scrollTo = scrollTo;
  }
};