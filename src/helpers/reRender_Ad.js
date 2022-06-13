const reRender_Ad = async (content) => {
  document.querySelector('#content').innerHTML = await content.render();
  if (content.afterRender_Ad) {
      content.afterRender_Ad();         
    }
}
export default reRender_Ad;