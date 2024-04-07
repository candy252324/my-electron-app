module.exports = {
  appId: 'my-electron-app', // 包名
  productName: 'myElectronApp', // 生成 exe 的名字
  copyright: 'Copyright © year ${author}', // 版权信息
  files: ['dist', 'electron'], // 打包需要包含的文件
  directories: {
    output: 'release/${version}', // 打包输出目录
  },
  mac: {
    target: ['dmg'],
    artifactName: '${productName}-Mac-${version}-Installer.${ext}',
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
    ],
    artifactName: '${productName}-Windows-${version}-Setup.${ext}',
  },
  nsis: {
    oneClick: false, // 是否一键安装
    perMachine: false,
    allowToChangeInstallationDirectory: true, // 是否允许修改安装目录
    deleteAppDataOnUninstall: false,
  },
}
