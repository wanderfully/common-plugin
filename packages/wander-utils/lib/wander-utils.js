/*
 * @LastEditTime: 2022-09-16 16:54:03
 */
'use strict';

const admZip = require('admZip')
module.exports = wanderUtils;

function wanderUtils() {
    this.options = options
    console.log('test plugin.......')
    return "Hello from wanderUi";
}
wanderUtils.prototype.apply = function (compiler) {
    const output = compiler.options.output.path
    console.log(output)
    compiler.hooks.done.tap('wanderUtils', stats => {
        const allFilesName = states.toJson().assets.map(asset => asset.name.split('/')[0])
        const allFiles = [...new Set(allFilesName)]
        console.log('开始压缩...')
        allFiles && allFiles.length && allFiles.forEach(filename => {
            const zip = new admZip()
            zip.addLocalFolder(`${output}${filename}`)
            zip.writeZip(`${output}/${filename}.zip`)
            console.log('压缩完成....')
        })
    })
}
