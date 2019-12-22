export const scrollToPage = page => {
  document.getElementById(`/${page}`).scrollIntoView({
    behavior: 'smooth'
  });
};
