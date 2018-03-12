async function asyncTask() {
    try {
        const valueA = await functionA()
        const valueB = await functionB(valueA)
        const valueC = await functionC(valueB)
        return await functionD(valueC)
    } catch (err) {
        throw Error
    }
}
// const http2 = require('http2')


function push(stream, filePath) {
    const { file, headers } = getFile(filePath)
    const pushHeaders = { [HTTP2_HEADER_PATH]: filePath }

    stream.pushStream(pushHeaders, (pushStream) => {
        pushStream.respondWithFD(file, headers)
    })
}

function onRequest(req, res) {
    // Push files with index.html
    if (reqPath === '/index.html') {
        push(res.stream, 'bundle1.js');
        push(res.stream, 'bundle2.js')
    }

    // Serve file
    res.stream.respondWithFD(file.fileDescriptor, file.headers)
}
// export { onRequest, asyncTask }