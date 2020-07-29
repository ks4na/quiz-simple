const fsPromise = require('fs/promises')
const path = require('path')

/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p 路径
 * @return {void}
 */
const deleteMapFiles = (p) => {
  // 请实现……

  ;(async function (p) {
    let contents = []
    try {
      // 获取指定路径 p 下的目录和文件信息
      contents = await fsPromise.readdir(p, {
        withFileTypes: true,
      })
    } catch (err) {
      console.log(`read dir '${p}' failed`, err.message)
    }

    contents.forEach(async (item) => {
      const pathOfItem = path.resolve(p, item.name)

      if (item.isDirectory()) {
        // 如果 item 为目录， 递归调用删除方法
        deleteMapFiles(pathOfItem)
      } else if (path.extname(item.name) === '.map') {
        // 如果文件以 `.map` 结尾， 直接删除
        try {
          await fsPromise.unlink(pathOfItem)
          console.log(`delete file '${pathOfItem}' successfully.`)
        } catch (err) {
          console.log(`delete file '${pathOfItem}' failed`, err.message)
        }
      }
    })
  })(p)
}

// test
// deleteMapFiles(path.join(__dirname, './playground'))

// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
