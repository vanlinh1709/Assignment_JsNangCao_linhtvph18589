const reRender = async (content) => {
  document.querySelector('#content').innerHTML = await content.render();
  if (content.afterRender) {
      content.afterRender();         
    }
}
export default reRender;