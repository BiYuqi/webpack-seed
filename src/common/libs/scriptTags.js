export const googleAnalyzer = () => {
  const state = {
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-138873126-2',
    context: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-138873126-2');`
  }

  return `
    <script async src="${state.src}"></script>
    <script>${state.context}</script>
  `
}
