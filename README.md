# react-native-system-file-browser

## 目录
- [安装](#install)
- [使用](#usage)

## Install
### 1: yarn add 或者npm install
`yarn add react-native-system-file-browser  `
### 2: yarn install 或 npm install
### 3: cd ios && pod install

## Usage
### NOTE: 可以参考demo的App.js中的

```javascript
// res 可能会为空，没选择 res.url

RNSystemFileBrower.openFileBrower().then(res => {
   console.log(res)
})
// 参数types 可以为空 安卓和iOS不一样   iOS添加data
RNSystemFileBrower.openFileBrower({ types: Platform.OS === 'ios' ? ["com.adobe.pdf"] : ["application/pdf"] }).then(res => {
    console.log(res)
})
// iOS默认 types
const types = [
    "public.data",
    "com.microsoft.powerpoint.ppt",
    "com.microsoft.word.doc",
    "com.microsoft.excel.xls",
    "com.microsoft.powerpoint.pptx",
    "com.microsoft.word.docx",
    "com.microsoft.excel.xlsx",
    "public.avi",
    "public.3gpp",
    "public.mpeg-4",
    "com.compuserve.gif",
    "public.jpeg",
    "public.png",
    "public.plain-text",
    "com.adobe.pdf"
    ]
// android 默认 types
// video/*  image/*
const types = ["*/*"]
/*
image/jpeg
audio/mpeg4-generic
text/html
audio/mpeg
audio/aac
audio/wav
audio/ogg
audio/midi
audio/x-ms-wma
video/mp4
video/x-msvideo
video/x-ms-wmv
image/png
image/jpeg
image/gif
以下是常用文件 如要选择xml 给与types为["text/xml"]
.xml -> text/xml
.txt -> text/plain
.cfg -> text/plain
.csv -> text/plain
.conf -> text/plain
.rc -> text/plain
.htm -> text/html
.html -> text/html
.pdf -> application/pdf
.apk -> application/vnd.android.package-archive
DOC = “application/msword”
DOCX = “application/vnd.openxmlformats-officedocument.wordprocessingml.document”
XLS = “application/vnd.ms-excel application/x-excel”;
XLSX = “application/vnd.openxmlformats-officedocument.spreadsheetml.sheet”;
PPT = “application/vnd.ms-powerpoint”;
PPTX = “application/vnd.openxmlformats-officedocument.presentationml.presentation”;

.doc application/msword
.dot application/msword

.docx application/vnd.openxmlformats-officedocument.wordprocessingml.document
.dotx application/vnd.openxmlformats-officedocument.wordprocessingml.template
.docm application/vnd.ms-word.document.macroEnabled.12
.dotm application/vnd.ms-word.template.macroEnabled.12

.xls application/vnd.ms-excel
.xlt application/vnd.ms-excel
.xla application/vnd.ms-excel

.xlsx application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
.xltx application/vnd.openxmlformats-officedocument.spreadsheetml.template
.xlsm application/vnd.ms-excel.sheet.macroEnabled.12
.xltm application/vnd.ms-excel.template.macroEnabled.12
.xlam application/vnd.ms-excel.addin.macroEnabled.12
.xlsb application/vnd.ms-excel.sheet.binary.macroEnabled.12

.ppt application/vnd.ms-powerpoint
.pot application/vnd.ms-powerpoint
.pps application/vnd.ms-powerpoint
.ppa application/vnd.ms-powerpoint

.pptx application/vnd.openxmlformats-officedocument.presentationml.presentation
.potx application/vnd.openxmlformats-officedocument.presentationml.template
.ppsx application/vnd.openxmlformats-officedocument.presentationml.slideshow
.ppam application/vnd.ms-powerpoint.addin.macroEnabled.12
.pptm application/vnd.ms-powerpoint.presentation.macroEnabled.12
.potm application/vnd.ms-powerpoint.template.macroEnabled.12
.ppsm application/vnd.ms-powerpoint.slideshow.macroEnabled.12

.mdb application/vnd.ms-access

*/
```

## 如下图
![image](https://github.com/LewinJun/react-native-system-file-browser/blob/master/ios.png)

![image](https://github.com/LewinJun/react-native-system-file-browser/blob/master/android.jpeg)
