//sdfsddf
export default () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        if (!e) return;
        console.log('message from main thread', e)
        console.log('data from main thread', e.data)
        postMessage(e.data * 2);
    })
}
