/*
能量派送 幻新出发
https://lzdz1-isv.isvjcloud.com/dingzhi/senior/opencard/activity/657324?activityId=dz73eb30a238804603b949661e2f2b
cron "7 19 * * *" jd_opencard_ps.js
*/
const $ = new Env('能量派送 幻新出发')
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxe8c66 = ["", "\x32\x30\u4EAC\u8C46", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x65\x6E\x76", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x64\x7A\x37\x33\x65\x62\x33\x30\x61\x32\x33\x38\x38\x30\x34\x36\x30\x33\x62\x39\x34\x39\x36\x36\x31\x65\x32\x66\x32\x62", "\x63\x35\x34\x34\x31\x38\x34\x32\x37\x66\x35\x37\x34\x39\x35\x65\x39\x63\x62\x39\x61\x33\x39\x66\x66\x37\x65\x65\x30\x32\x31\x30", "\x73\x68\x61\x72\x65\x55\x75\x69\x64", "\x6C\x65\x6E\x67\x74\x68", "\u5165\u53E3\x3A\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x31\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x69\x73\x4C\x6F\x67\x69\x6E", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548", "\u4EAC\u4E1C\u8D26\u53F7", "\x20", "\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x68\x61\x73\x45\x6E\x64", "\x65\x6E\x64\x54\x69\x6D\x65", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\u6D3B\u52A8\u7ED3\u675F", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\u83B7\u53D6\x5B\x50\x69\x6E\x5D\u5931\u8D25\uFF01", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74", "\x61\x63\x74\x6F\x72\x55\x75\x69\x64", "\u83B7\u53D6\u4E0D\u5230\x5B\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x5D\u9000\u51FA\u6267\u884C\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C", "\x6E\x6F\x77", "\x74\x61\x73\x6B\x54\x79\x70\x65", "\x73\x61\x76\x65\x54\x61\x73\x6B", "\x72\x61\x6E\x64\x6F\x6D", "\x77\x61\x69\x74", "\x61\x6C\x6C\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x6F\x70\x65\x6E\x4C\x69\x73\x74", "\x69\x6E\x69\x74\x4F\x70\x65\x6E\x43\x61\x72\x64", "\u5F00\u5361\u4EFB\u52A1", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6F\x70\x65\x6E\x53\x74\x61\x74\x75\x73", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\x76\x65\x6E\x64\x65\x72\x49\x64", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x69\x6E\x64\x65\x78\x4F\x66", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u5DF2\u5168\u90E8\u5F00\u5361", "\u5173\u6CE8\u5E97\u94FA\x3A\x20", "\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\u52A0\u8D2D\x3A", "\x61\x64\x64\x53\x6B\x75", "\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64", "\u5F53\u524D\u52A9\u529B\x3A", "\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A", "\u7B49\u5F85", "\u79D2", "\u4F11\u606F\x35\u79D2\uFF0C\u522B\u88AB\u9ED1\x69\x70\u4E86\x0A\u53EF\u6301\u7EED\u53D1\u5C55", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x31\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\x2F\x64\x7A\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x75\x73\x65\x72\x49\x64\x3D", "\x73\x68\x6F\x70\x49\x64", "\x26\x74\x6F\x6B\x65\x6E\x3D", "\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x26\x63\x6F\x64\x65\x3D\x39\x39\x26\x70\x69\x6E\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x70\x61\x67\x65\x55\x72\x6C\x3D", "\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x70\x69\x6E\x3D", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74", "\x26\x70\x69\x6E\x3D", "\x26\x70\x69\x6E\x49\x6D\x67\x3D", "\x61\x74\x74\x72\x54\x6F\x75\x58\x69\x61\x6E\x67", "\x26\x6E\x69\x63\x6B\x3D", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x69\x6E\x69\x74\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x67\x65\x74\x47\x6F\x6F\x64\x73\x49\x6E\x66\x6F", "\x67\x65\x74\x47\x6F\x6F\x64\x73\x49\x6E\x66\x6F", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64", "\x26\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x3D", "\x26\x6E\x75\x6D\x3D\x35\x30", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6F\x72\x64\x48\x61\x73\x43\x6F\x75\x70\x6F\x6E", "\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6F\x72\x64\x48\x61\x73\x43\x6F\x75\x70\x6F\x6E", "\x2F\x6A\x6F\x69\x6E\x74\x2F\x6F\x72\x64\x65\x72\x2F\x64\x72\x61\x77", "\x26\x64\x72\x61\x77\x54\x79\x70\x65\x3D\x31", "\x73\x74\x61\x72\x74\x44\x72\x61\x77", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x73\x61\x76\x65\x54\x61\x73\x6B", "\x26\x74\x61\x73\x6B\x54\x79\x70\x65\x3D\x32\x33\x26\x74\x61\x73\x6B\x56\x61\x6C\x75\x65\x3D\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x26\x74\x61\x73\x6B\x54\x79\x70\x65\x3D", "\x26\x74\x61\x73\x6B\x56\x61\x6C\x75\x65\x3D\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x73\x69\x67\x6E", "\x26\x74\x61\x73\x6B\x54\x79\x70\x65\x3D\x32\x31\x26\x74\x61\x73\x6B\x56\x61\x6C\x75\x65\x3D\x31\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x61\x64\x64\x43\x61\x72\x74", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F", "\x62\x72\x6F\x77\x73\x65\x47\x6F\x6F\x64\x73", "\x26\x76\x61\x6C\x75\x65\x3D", "\x76\x69\x73\x69\x74\x53\x6B\x75\x56\x61\x6C\x75\x65", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x62\x72\x6F\x77\x73\x65\x53\x68\x6F\x70\x73", "\x62\x72\x6F\x77\x73\x65\x53\x68\x6F\x70\x73", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x6C\x69\x6E\x6B\x67\x61\x6D\x65\x2F\x61\x73\x73\x69\x73\x74", "\u52A9\u529B", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x6C\x69\x6E\x6B\x67\x61\x6D\x65\x2F\x61\x73\x73\x69\x73\x74\x2F\x73\x74\x61\x74\x75\x73", "\u52A9\u529B\u72B6\u6001", "\x76\x69\x65\x77\x56\x69\x64\x65\x6F", "\x76\x69\x73\x69\x74\x53\x6B\x75", "\x74\x6F\x53\x68\x6F\x70", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x64\x72\x61\x77", "\x64\x72\x61\x77", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x20", "\x72\x65\x73\x75\x6C\x74", "\x64\x61\x74\x61", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\x73\x65\x63\x72\x65\x74\x50\x69\x6E", "\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x67\x31\x30\x2E\x33\x36\x30\x62\x75\x79\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x69\x6D\x67\x7A\x6F\x6E\x65\x2F\x6A\x66\x73\x2F\x74\x31\x2F\x37\x30\x32\x30\x2F\x32\x37\x2F\x31\x33\x35\x31\x31\x2F\x36\x31\x34\x32\x2F\x35\x63\x35\x31\x33\x38\x64\x38\x45\x34\x64\x66\x32\x65\x37\x36\x34\x2F\x35\x61\x31\x32\x31\x36\x61\x33\x61\x35\x30\x34\x33\x63\x35\x64\x2E\x70\x6E\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x56\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79", "\x73\x63\x6F\x72\x65", "\x73\x63\x6F\x72\x65\x32", "\x73\x6B\x75\x41\x64\x64\x43\x61\x72\x74", "\x74\x61\x6B\x65\x43\x6F\x75\x70\x6F\x6E", "\x6A\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x63\x61\x72\x64\x4C\x69\x73\x74\x31", "\x63\x61\x72\x64\x4C\x69\x73\x74\x32", "\x63\x61\x72\x64\x4C\x69\x73\x74", "\x6F\x70\x65\x6E\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x69\x73\x74", "\x62\x65\x61\x6E\x73", "\x61\x64\x64\x42\x65\x61\x6E\x4E\x75\x6D", "\u5F00\u5361\u83B7\u5F97\x3A", "\u8C46", "\x73\x74\x61\x72\x74\x44\x72\x61\x77\x3A", "\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70\x3A", "\x76\x69\x65\x77\x56\x69\x64\x65\x6F\x3A", "\x76\x69\x73\x69\x74\x53\x6B\x75\x3A", "\x74\x6F\x53\x68\x6F\x70\x3A", "\x73\x69\x67\x6E\x3A", "\x61\x64\x64\x43\x61\x72\x74\x3A", "\x62\x72\x6F\x77\x73\x65\x47\x6F\x6F\x64\x73\x3A", "\x64\x72\x61\x77\x3A", "\x53\x68\x61\x72\x65\x43\x6F\x75\x6E\x74", "\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20\u4F60\u9080\u8BF7\u4E86\x3A", "\u4E2A", "\u6211\u7684\u5956\u54C1\uFF1A", "\x69\x6E\x66\x6F\x4E\x61\x6D\x65", "\x64\x72\x61\x77\x53\x74\x61\x74\x75\x73", "\u4EAC\u8C46", "\x72\x65\x70\x6C\x61\x63\x65", "\x69\x6E\x66\x6F\x54\x79\x70\x65", "\x76\x61\x6C\x75\x65", "\x3A", "\u9080\u8BF7\u597D\u53CB\x28", "\x29\x3A", "\u9080\u8BF7\x3A", "\u9080\u8BF7", "\u52A9\u529B\x3A", "\u52A9\u529B\u72B6\u6001\x3A", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44\x3A", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74\x3A", "\x2D\x3E\x20", "\u706B\u7206", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x52\x65\x66\x65\x72\x65\x72", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x31\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x73\x65\x6E\x69\x6F\x72\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x43\x6F\x6F\x6B\x69\x65", "\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D", "\x3B", "\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\u6D3B\u52A8\u5DF2\u7ED3\u675F", "\x75\x73\x65\x72\x49\x64", "\x67\x65\x74", "\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65", "\x68\x65\x61\x64\x65\x72\x73", "\x3D", "\x73\x70\x6C\x69\x74", "\x73\x75\x62\x73\x74\x72", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30", "\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x2A\x2F\x2A", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x74\x6F\x4F\x62\x6A", "\x73\x75\x63\x63\x65\x73\x73", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x2C\x22\x70\x61\x79\x55\x70\x53\x68\x6F\x70\x22\x3A\x74\x72\x75\x65\x2C\x22\x71\x75\x65\x72\x79\x56\x65\x72\x73\x69\x6F\x6E\x22\x3A\x22\x31\x30\x2E\x35\x2E\x32\x22\x7D", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x37\x31\x34\x31\x31\x61\x39\x65\x31\x38\x6E\x38\x6A\x6D\x6D\x44\x4B\x48\x4D\x35\x71\x59\x32\x47\x51\x45\x48\x4E\x38\x4D\x45\x44\x6E\x78\x6E\x4D\x4E\x42\x56\x55\x47\x56\x49\x74\x52\x65\x65\x54\x33\x30\x46\x78\x41\x33\x4E\x49\x6F\x49\x6A\x71\x70\x57\x54\x37\x54\x65\x38\x62\x46\x33\x37\x46\x4A\x32\x57\x2B\x57\x7A\x69\x69\x78\x4C\x48\x68\x46\x30\x31\x3B\x33\x39\x32\x63\x66\x39\x62\x61\x64\x65\x34\x65\x31\x62\x30\x32\x65\x36\x66\x61\x38\x33\x63\x31\x64\x34\x37\x64\x37\x66\x31\x32\x34\x35\x65\x35\x61\x37\x61\x65\x39\x65\x62\x39\x32\x36\x34\x35\x31\x34\x32\x32\x37\x61\x64\x36\x66\x39\x33\x35\x64\x66\x39\x65\x3B\x33\x2E\x30\x3B", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x29", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E\x3F\x74\x79\x70\x65\x3D\x6C\x7A\x64\x7A\x31", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x63\x6F\x64\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x5F\x6E\x65\x77\x2F\x69\x6E\x66\x6F\x2F\x47\x65\x74\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x55\x6E\x69\x6F\x6E", "\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x34\x2E\x30\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x75\x66\x63\x3D\x26", "\x72\x65\x74\x63\x6F\x64\x65", "\x31\x30\x30\x31", "\x30", "\x75\x73\x65\x72\x49\x6E\x66\x6F", "\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79", "\x62\x61\x73\x65\x49\x6E\x66\x6F", "\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxe8c66[0x0];
let openwait = 3;
let helpBeanInfo = __Oxe8c66[0x1];
if ($[__Oxe8c66[0x2]]()) {
    Object[__Oxe8c66[0x5]](jdCookieNode)[__Oxe8c66[0x4]]((_0x64c1x5) => {
        cookiesArr[__Oxe8c66[0x3]](jdCookieNode[_0x64c1x5])
    });
    if (process[__Oxe8c66[0x7]][__Oxe8c66[0x6]] && process[__Oxe8c66[0x7]][__Oxe8c66[0x6]] === __Oxe8c66[0x8]) {
        console[__Oxe8c66[0x9]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxe8c66[0xc]](__Oxe8c66[0xb]), $[__Oxe8c66[0xc]](__Oxe8c66[0xd]), ...jsonParse($[__Oxe8c66[0xc]](__Oxe8c66[0x10]) || __Oxe8c66[0x11])[__Oxe8c66[0xf]]((_0x64c1x5) => {
        return _0x64c1x5[__Oxe8c66[0xe]]
    })][__Oxe8c66[0xa]]((_0x64c1x5) => {
        return !!_0x64c1x5
    })
}
;allMessage = __Oxe8c66[0x0], message = __Oxe8c66[0x0];
$[__Oxe8c66[0x12]] = false;
$[__Oxe8c66[0x13]] = false;
$[__Oxe8c66[0x14]] = false;
let lz_jdpin_token_cookie = __Oxe8c66[0x0];
let activityCookie = __Oxe8c66[0x0];
let lz_cookie = {};
!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxe8c66[0x1c]]($[__Oxe8c66[0x19]], __Oxe8c66[0x1a], __Oxe8c66[0x1b], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxe8c66[0x1b]});
        return
    }
    ;$[__Oxe8c66[0x1d]] = __Oxe8c66[0x1e];
    let _0x64c1xa = [__Oxe8c66[0x1f]];
    $[__Oxe8c66[0x20]] = _0x64c1xa[random(0, _0x64c1xa[__Oxe8c66[0x21]])];
    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x22]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`);
    for (let _0x64c1xb = 0; _0x64c1xb < cookiesArr[__Oxe8c66[0x21]]; _0x64c1xb++) {
        cookie = cookiesArr[_0x64c1xb];
        originCookie = cookie;
        if (cookie) {
            $[__Oxe8c66[0x24]] = decodeURIComponent(cookie[__Oxe8c66[0x25]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxe8c66[0x25]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxe8c66[0x26]] = _0x64c1xb + 1;
            message = __Oxe8c66[0x0];
            $[__Oxe8c66[0x27]] = 0;
            $[__Oxe8c66[0x12]] = false;
            $[__Oxe8c66[0x28]] = __Oxe8c66[0x0];
            $[__Oxe8c66[0x29]] = true;
            await checkCookie();
            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x2a]}${$[__Oxe8c66[0x26]]}${__Oxe8c66[0x2b]}${$[__Oxe8c66[0x28]] || $[__Oxe8c66[0x24]]}${__Oxe8c66[0x2c]}`);
            if (!$[__Oxe8c66[0x29]]) {
                $[__Oxe8c66[0x1c]]($[__Oxe8c66[0x19]], `${__Oxe8c66[0x2d]}`, `${__Oxe8c66[0x2e]}${$[__Oxe8c66[0x26]]}${__Oxe8c66[0x2f]}${$[__Oxe8c66[0x28]] || $[__Oxe8c66[0x24]]}${__Oxe8c66[0x30]}`, {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxe8c66[0x31]});
                if ($[__Oxe8c66[0x2]]()) {
                }
                ;
                continue
            }
            ;await getUA();
            await run();
            if ($[__Oxe8c66[0x13]] || $[__Oxe8c66[0x14]]) {
                break
            }
        }
    }
    ;
    if ($[__Oxe8c66[0x13]]) {
        let _0x64c1xc = __Oxe8c66[0x32];
        $[__Oxe8c66[0x1c]]($[__Oxe8c66[0x19]], `${__Oxe8c66[0x0]}`, `${__Oxe8c66[0x0]}${_0x64c1xc}${__Oxe8c66[0x0]}`);
        if ($[__Oxe8c66[0x2]]()) {
            await notify[__Oxe8c66[0x33]](`${__Oxe8c66[0x0]}${$[__Oxe8c66[0x19]]}${__Oxe8c66[0x0]}`, `${__Oxe8c66[0x0]}${_0x64c1xc}${__Oxe8c66[0x0]}`)
        }
    }
    ;
    if (allMessage) {
        $[__Oxe8c66[0x1c]]($[__Oxe8c66[0x19]], `${__Oxe8c66[0x0]}`, `${__Oxe8c66[0x0]}${allMessage}${__Oxe8c66[0x0]}`)
    }
})()[__Oxe8c66[0x18]]((_0x64c1x9) => {
    return $[__Oxe8c66[0x17]](_0x64c1x9)
})[__Oxe8c66[0x16]](() => {
    return $[__Oxe8c66[0x15]]()
});

async function run() {
    try {
        $[__Oxe8c66[0x34]] = true;
        $[__Oxe8c66[0x35]] = 0;
        lz_jdpin_token_cookie = __Oxe8c66[0x0];
        $[__Oxe8c66[0x36]] = __Oxe8c66[0x0];
        $[__Oxe8c66[0x37]] = __Oxe8c66[0x0];
        let _0x64c1xe = false;
        await takePostRequest(__Oxe8c66[0x38]);
        if ($[__Oxe8c66[0x36]] == __Oxe8c66[0x0]) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x39]);
            return
        }
        ;await getCk();
        if (activityCookie == __Oxe8c66[0x0]) {
            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x3a]}`);
            return
        }
        ;
        if ($[__Oxe8c66[0x14]] === true) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x3b]);
            return
        }
        ;
        if ($[__Oxe8c66[0x13]]) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x3c]);
            return
        }
        ;await takePostRequest(__Oxe8c66[0x3d]);
        await takePostRequest(__Oxe8c66[0x3e]);
        if (!$[__Oxe8c66[0x37]]) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x3f]);
            return
        }
        ;await takePostRequest(__Oxe8c66[0x40]);
        await takePostRequest(__Oxe8c66[0x41]);
        await takePostRequest(__Oxe8c66[0x42]);
        if ($[__Oxe8c66[0x12]]) {
            return
        }
        ;
        if (!$[__Oxe8c66[0x43]]) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x44]);
            return
        }
        ;
        if ($[__Oxe8c66[0x34]] === true || Date[__Oxe8c66[0x45]]() > $[__Oxe8c66[0x35]]) {
            $[__Oxe8c66[0x14]] = true;
            console[__Oxe8c66[0x9]](__Oxe8c66[0x3b]);
            return
        }
        ;$[__Oxe8c66[0x46]] = 23;
        await takePostRequest(__Oxe8c66[0x47]);
        await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10));
        $[__Oxe8c66[0x4a]] = false;
        $[__Oxe8c66[0x4b]] = [];
        await takePostRequest(__Oxe8c66[0x4c]);
        if ($[__Oxe8c66[0x4a]] == false) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x4d]);
            for (o of $[__Oxe8c66[0x4b]]) {
                $[__Oxe8c66[0x4e]] = false;
                if (o[__Oxe8c66[0x4f]] == false) {
                    _0x64c1xe = true;
                    $[__Oxe8c66[0x50]] = __Oxe8c66[0x0];
                    $[__Oxe8c66[0x51]] = o[__Oxe8c66[0x52]];
                    await joinShop();
                    if ($[__Oxe8c66[0x55]][__Oxe8c66[0x54]](__Oxe8c66[0x53]) > -1 || $[__Oxe8c66[0x55]][__Oxe8c66[0x54]](__Oxe8c66[0x56]) > -1) {
                        console[__Oxe8c66[0x9]](__Oxe8c66[0x57]);
                        await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 700 + 700, 10));
                        await joinShop()
                    }
                    ;
                    if ($[__Oxe8c66[0x55]][__Oxe8c66[0x54]](__Oxe8c66[0x53]) > -1 || $[__Oxe8c66[0x55]][__Oxe8c66[0x54]](__Oxe8c66[0x56]) > -1) {
                        console[__Oxe8c66[0x9]](__Oxe8c66[0x58]);
                        await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 700 + 700, 10));
                        await joinShop()
                    }
                    ;await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10))
                }
            }
            ;await takePostRequest(__Oxe8c66[0x42]);
            await takePostRequest(__Oxe8c66[0x4c])
        } else {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x59])
        }
        ;$[__Oxe8c66[0x9]](__Oxe8c66[0x5a] + $[__Oxe8c66[0x5b]]);
        if (!$[__Oxe8c66[0x5b]] && !$[__Oxe8c66[0x13]]) {
            _0x64c1xe = true;
            $[__Oxe8c66[0x46]] = 23;
            await takePostRequest(__Oxe8c66[0x47]);
            await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10))
        }
        ;$[__Oxe8c66[0x9]](__Oxe8c66[0x5c] + $[__Oxe8c66[0x5d]]);
        if (!$[__Oxe8c66[0x5d]] && !$[__Oxe8c66[0x13]]) {
            _0x64c1xe = true;
            $[__Oxe8c66[0x46]] = 21;
            await takePostRequest(__Oxe8c66[0x47]);
            await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10))
        }
        ;await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10));
        if (_0x64c1xe) {
            await takePostRequest(__Oxe8c66[0x42])
        }
        ;await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10));
        if ($[__Oxe8c66[0x13]]) {
            console[__Oxe8c66[0x9]](__Oxe8c66[0x3c]);
            return
        }
        ;await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 1000, 10));
        await takePostRequest(__Oxe8c66[0x5e]);
        if (_0x64c1xe) {
            await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 1000 + 2000, 10))
        }
        ;console[__Oxe8c66[0x9]]($[__Oxe8c66[0x43]]);
        console[__Oxe8c66[0x9]](`${__Oxe8c66[0x5f]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`);
        if ($[__Oxe8c66[0x26]] == 1) {
            $[__Oxe8c66[0x20]] = $[__Oxe8c66[0x43]];
            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x60]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`)
        }
        ;
        if (openwait) {
            if ($[__Oxe8c66[0x26]] != cookiesArr[__Oxe8c66[0x21]]) {
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0x61]}${openwait}${__Oxe8c66[0x62]}`);
                await $[__Oxe8c66[0x49]](parseInt(openwait, 10) * 1000)
            }
        } else {
            if ($[__Oxe8c66[0x26]] % 3 == 0) {
                console[__Oxe8c66[0x9]](__Oxe8c66[0x63])
            }
            ;
            if ($[__Oxe8c66[0x26]] % 3 == 0) {
                await $[__Oxe8c66[0x49]](parseInt(Math[__Oxe8c66[0x48]]() * 2000 + 2500, 10))
            }
        }
    } catch (e) {
        console[__Oxe8c66[0x9]](e)
    }
}

async function takePostRequest(_0x64c1x10) {
    if ($[__Oxe8c66[0x13]]) {
        return
    }
    ;let _0x64c1x11 = __Oxe8c66[0x64];
    let _0x64c1x12 = `${__Oxe8c66[0x0]}`;
    let _0x64c1x13 = __Oxe8c66[0x65];
    let _0x64c1x14 = __Oxe8c66[0x0];
    switch (_0x64c1x10) {
        case __Oxe8c66[0x38]:
            url = `${__Oxe8c66[0x66]}`;
            _0x64c1x12 = await getToken();
            break;
        case __Oxe8c66[0x3d]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x67]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x3e]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x69]}`;
            _0x64c1x12 = `${__Oxe8c66[0x6a]}${$[__Oxe8c66[0x6b]] || $[__Oxe8c66[0x52]] || __Oxe8c66[0x0]}${__Oxe8c66[0x6c]}${$[__Oxe8c66[0x36]]}${__Oxe8c66[0x6d]}`;
            break;
        case __Oxe8c66[0x40]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x6e]}`;
            let _0x64c1x15 = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x6f]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            _0x64c1x12 = `${__Oxe8c66[0x70]}${$[__Oxe8c66[0x6b]] || $[__Oxe8c66[0x52]] || __Oxe8c66[0x0]}${__Oxe8c66[0x71]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x72]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x73]}${encodeURIComponent(_0x64c1x15)}${__Oxe8c66[0x74]}`;
            break;
        case __Oxe8c66[0x41]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x75]}`;
            _0x64c1x12 = `${__Oxe8c66[0x76]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x42]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x77]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x79]}${encodeURIComponent($[__Oxe8c66[0x7a]])}${__Oxe8c66[0x7b]}${encodeURIComponent($[__Oxe8c66[0x7c]])}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x7e]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x7d]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x4c]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x7f]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x81]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x80]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x5e]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x82]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x43]]}${__Oxe8c66[0x84]}`;
            break;
        case __Oxe8c66[0x86]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x85]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x89]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x87]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x43]]}${__Oxe8c66[0x88]}`;
            break;
        case __Oxe8c66[0x5b]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x8a]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x43]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x8b]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x47]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x8a]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x43]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x8c]}${$[__Oxe8c66[0x46]]}${__Oxe8c66[0x8d]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            break;
            break;
        case __Oxe8c66[0x8e]:
            break;
        case __Oxe8c66[0x90]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x8a]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x43]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x8f]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            break;
        case __Oxe8c66[0x92]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x91]}${_0x64c1x10}${__Oxe8c66[0x0]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x0]}`;
            if (_0x64c1x10 == __Oxe8c66[0x92]) {
                _0x64c1x12 += `${__Oxe8c66[0x93]}${$[__Oxe8c66[0x94]]}${__Oxe8c66[0x0]}`
            }
            ;
            break;
        case __Oxe8c66[0x96]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x95]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x93]}`;
            break;
        case __Oxe8c66[0x98]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x97]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            await $[__Oxe8c66[0x49]](800);
            break;
        case __Oxe8c66[0x9a]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x99]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
            await $[__Oxe8c66[0x49]](700);
            break;
        case __Oxe8c66[0x9b]:
            break;
        case __Oxe8c66[0x9c]:
            break;
        case __Oxe8c66[0x9d]:
            break;
        case __Oxe8c66[0x9f]:
            url = `${__Oxe8c66[0x0]}${_0x64c1x11}${__Oxe8c66[0x9e]}`;
            _0x64c1x12 = `${__Oxe8c66[0x68]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x83]}${$[__Oxe8c66[0x43]]}${__Oxe8c66[0x78]}${encodeURIComponent($.Pin)}${__Oxe8c66[0x0]}`;
            break;
        default:
            console[__Oxe8c66[0x9]](`${__Oxe8c66[0xa0]}${_0x64c1x10}${__Oxe8c66[0x0]}`)
    }
    ;let _0x64c1x16 = getPostRequest(url, _0x64c1x12, _0x64c1x13);
    await $[__Oxe8c66[0x49]](500);
    return new Promise(async (_0x64c1x17) => {
        $[__Oxe8c66[0xa5]](_0x64c1x16, (_0x64c1x18, _0x64c1x19, _0x64c1x1a) => {
            try {
                setActivityCookie(_0x64c1x19);
                if (_0x64c1x18) {
                    if (_0x64c1x19 && typeof _0x64c1x19[__Oxe8c66[0xa1]] != __Oxe8c66[0xa2]) {
                        if (_0x64c1x19[__Oxe8c66[0xa1]] == 493) {
                            console[__Oxe8c66[0x9]](__Oxe8c66[0x3c]);
                            $[__Oxe8c66[0x13]] = true
                        }
                    }
                    ;console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${$[__Oxe8c66[0xa3]](_0x64c1x18, _0x64c1x18)}${__Oxe8c66[0x0]}`);
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0xa4]}`)
                } else {
                    dealReturn(_0x64c1x10, _0x64c1x1a)
                }
            } catch (e) {
                console[__Oxe8c66[0x9]](e, _0x64c1x19)
            } finally {
                _0x64c1x17()
            }
        })
    })
}

async function dealReturn(_0x64c1x10, _0x64c1x1a) {
    let _0x64c1x1c = __Oxe8c66[0x0];
    try {
        if (_0x64c1x10 != __Oxe8c66[0x40] || _0x64c1x10 != __Oxe8c66[0x7e]) {
            if (_0x64c1x1a) {
                _0x64c1x1c = JSON[__Oxe8c66[0xa6]](_0x64c1x1a)
            }
        }
    } catch (e) {
        console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0xa7]}`);
        console[__Oxe8c66[0x9]](_0x64c1x1a);
        $[__Oxe8c66[0xa8]] = false
    }
    ;
    try {
        switch (_0x64c1x10) {
            case __Oxe8c66[0x38]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xaa]] == 0) {
                        if (typeof _0x64c1x1c[__Oxe8c66[0xab]] != __Oxe8c66[0xa2]) {
                            $[__Oxe8c66[0x36]] = _0x64c1x1c[__Oxe8c66[0xab]]
                        }
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xac]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0xad]}${_0x64c1x1c[__Oxe8c66[0xac]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](_0x64c1x1a)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](_0x64c1x1a)
                }
                ;
                break;
            case __Oxe8c66[0x3d]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true) {
                        if (typeof _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x6b]] != __Oxe8c66[0xa2]) {
                            $[__Oxe8c66[0x6b]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x6b]]
                        }
                        ;
                        if (typeof _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x52]] != __Oxe8c66[0xa2]) {
                            $[__Oxe8c66[0x52]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x52]]
                        }
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
            case __Oxe8c66[0x3e]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true) {
                        if (_0x64c1x1c[__Oxe8c66[0xaf]] && typeof _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb1]] != __Oxe8c66[0xa2]) {
                            $[__Oxe8c66[0x37]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb1]]
                        }
                        ;
                        if (_0x64c1x1c[__Oxe8c66[0xaf]] && typeof _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x7c]] != __Oxe8c66[0xa2]) {
                            $[__Oxe8c66[0x7c]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x7c]]
                        }
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
            case __Oxe8c66[0x41]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true) {
                        if (_0x64c1x1c[__Oxe8c66[0xaf]] && typeof _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb2]] != __Oxe8c66[0xa2]) {
                            $[__Oxe8c66[0x7a]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb2]] || __Oxe8c66[0xb3]
                        }
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
            case __Oxe8c66[0x42]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true) {
                        $[__Oxe8c66[0x35]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x35]] || (_0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb4]] && _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb4]][__Oxe8c66[0x35]]) || _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb5]][__Oxe8c66[0x35]] || 0;
                        $[__Oxe8c66[0x34]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x34]] || false;
                        $[__Oxe8c66[0xb6]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb6]] || 0;
                        $[__Oxe8c66[0xb7]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb7]] || 0;
                        $[__Oxe8c66[0x43]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x43]] || __Oxe8c66[0x0];
                        $[__Oxe8c66[0x5b]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x5b]] || false;
                        $[__Oxe8c66[0x5d]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x5d]];
                        $[__Oxe8c66[0xb8]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb8]] || false;
                        $[__Oxe8c66[0xb9]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xb9]] || false;
                        $[__Oxe8c66[0x9c]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x9c]] || false;
                        $[__Oxe8c66[0x6b]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x6b]] || 0;
                        $[__Oxe8c66[0xba]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xba]] || 0
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
            case __Oxe8c66[0x4c]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true) {
                        $[__Oxe8c66[0x4b]] = [];
                        let _0x64c1x1d = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbb]] ? _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbb]] : [];
                        let _0x64c1x1e = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbc]] ? _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbc]] : [];
                        let _0x64c1x1f = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbd]] ? _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbd]] : [];
                        let _0x64c1x20 = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbe]] ? _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbe]] : [];
                        let _0x64c1x21 = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xbf]] || [];
                        $[__Oxe8c66[0x4b]] = [..._0x64c1x1f, ..._0x64c1x1d, ..._0x64c1x1e, ..._0x64c1x21, ..._0x64c1x20];
                        $[__Oxe8c66[0x4a]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x4a]] ? _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x4a]] : false;
                        if (_0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xc0]] || _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xc1]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc2]}${_0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xc0]] || _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0xc1]]}${__Oxe8c66[0xc3]}`)
                        }
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
            case __Oxe8c66[0x89]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc4]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x5b]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc5]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x47]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x9b]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc6]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x9c]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc7]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x9d]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc8]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x8e]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xc9]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x90]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xca]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x92]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xcb]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x9f]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xcc]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x5e]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true && _0x64c1x1c[__Oxe8c66[0xaf]]) {
                        $[__Oxe8c66[0xcd]] = _0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x21]];
                        $[__Oxe8c66[0x9]](`${__Oxe8c66[0xce]}${_0x64c1x1c[__Oxe8c66[0xaf]][__Oxe8c66[0x21]]}${__Oxe8c66[0xcf]}`)
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
                break;
            case __Oxe8c66[0x86]:
                if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]] === true) {
                        console[__Oxe8c66[0x9]](`${__Oxe8c66[0xd0]}`);
                        let _0x64c1x22 = 0;
                        let _0x64c1x23 = 0;
                        for (let _0x64c1xb in _0x64c1x1c[__Oxe8c66[0xaf]]) {
                            let _0x64c1x5 = _0x64c1x1c[__Oxe8c66[0xaf]][_0x64c1xb];
                            if (_0x64c1x5[__Oxe8c66[0xd1]] == helpBeanInfo && _0x64c1x5[__Oxe8c66[0xd2]] == true) {
                                _0x64c1x22++;
                                _0x64c1x23 = _0x64c1x5[__Oxe8c66[0xd1]][__Oxe8c66[0xd4]](__Oxe8c66[0xd3], __Oxe8c66[0x0])
                            } else {
                                console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x5[__Oxe8c66[0xd5]] != 10 && _0x64c1x5[__Oxe8c66[0xd6]] && _0x64c1x5[__Oxe8c66[0xd6]] + __Oxe8c66[0xd7] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}${_0x64c1x5[__Oxe8c66[0xd1]]}${__Oxe8c66[0x0]}`)
                            }
                        }
                        ;
                        if (_0x64c1x22 > 0) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0xd8]}${_0x64c1x22}${__Oxe8c66[0xd9]}${_0x64c1x22 * parseInt(_0x64c1x23, 10) || 0}${__Oxe8c66[0xd3]}`)
                        }
                    } else {
                        if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1c[__Oxe8c66[0xb0]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0x2f]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
                }
                ;
                break;
            case __Oxe8c66[0x81]:
                break;
            case __Oxe8c66[0xdb]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xda]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x98]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xdc]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x9a]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xdd]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x40]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xde]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            case __Oxe8c66[0x7e]:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0xdf]}${_0x64c1x1a}${__Oxe8c66[0x0]}`);
                break;
            default:
                console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x10}${__Oxe8c66[0xe0]}${_0x64c1x1a}${__Oxe8c66[0x0]}`)
        }
        ;
        if (typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
            if (_0x64c1x1c[__Oxe8c66[0xb0]]) {
                if (_0x64c1x1c[__Oxe8c66[0xb0]][__Oxe8c66[0x54]](__Oxe8c66[0xe1]) > -1) {
                    $[__Oxe8c66[0x12]] = true
                }
            }
        }
    } catch (e) {
        console[__Oxe8c66[0x9]](e)
    }
}

function getPostRequest(_0x64c1x25, _0x64c1x12, _0x64c1x13 = __Oxe8c66[0x65]) {
    let _0x64c1x26 = {
        "\x41\x63\x63\x65\x70\x74": __Oxe8c66[0xe2],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxe8c66[0xe3],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxe8c66[0xe4],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxe8c66[0xe5],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxe8c66[0xe6],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe8c66[0xe7]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxe8c66[0xe8]
    };
    if (_0x64c1x25[__Oxe8c66[0x54]](__Oxe8c66[0x64]) > -1) {
        _0x64c1x26[__Oxe8c66[0xe9]] = `${__Oxe8c66[0xea]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`;
        _0x64c1x26[__Oxe8c66[0xeb]] = `${__Oxe8c66[0x0]}${lz_jdpin_token_cookie && lz_jdpin_token_cookie || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}${$[__Oxe8c66[0x37]] && __Oxe8c66[0xec] + $[__Oxe8c66[0x37]] + __Oxe8c66[0xed] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}${activityCookie}${__Oxe8c66[0x0]}`
    }
    ;
    return {url: _0x64c1x25, method: _0x64c1x13, headers: _0x64c1x26, body: _0x64c1x12, timeout: 30000}
}

function getCk() {
    return new Promise((_0x64c1x17) => {
        let _0x64c1x28 = {
            url: `${__Oxe8c66[0xea]}${$[__Oxe8c66[0x1d]]}${__Oxe8c66[0x23]}${$[__Oxe8c66[0x20]]}${__Oxe8c66[0x0]}`,
            followRedirect: false,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe8c66[0xe7]]},
            timeout: 30000
        };
        $[__Oxe8c66[0xf1]](_0x64c1x28, async (_0x64c1x18, _0x64c1x19, _0x64c1x1a) => {
            try {
                if (_0x64c1x18) {
                    if (_0x64c1x19 && typeof _0x64c1x19[__Oxe8c66[0xa1]] != __Oxe8c66[0xa2]) {
                        if (_0x64c1x19[__Oxe8c66[0xa1]] == 493) {
                            console[__Oxe8c66[0x9]](__Oxe8c66[0x3c]);
                            $[__Oxe8c66[0x13]] = true
                        }
                    }
                    ;console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${$[__Oxe8c66[0xa3]](_0x64c1x18)}${__Oxe8c66[0x0]}`);
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${$[__Oxe8c66[0x19]]}${__Oxe8c66[0xee]}`)
                } else {
                    let _0x64c1x29 = _0x64c1x1a[__Oxe8c66[0x25]](/(活动已经结束)/) && _0x64c1x1a[__Oxe8c66[0x25]](/(活动已经结束)/)[0x1] || __Oxe8c66[0x0];
                    if (_0x64c1x29) {
                        $[__Oxe8c66[0x14]] = true;
                        console[__Oxe8c66[0x9]](__Oxe8c66[0xef])
                    }
                    ;$[__Oxe8c66[0xf0]] = _0x64c1x1a[__Oxe8c66[0x25]](/<input type="hidden" id="userId" value="(.\w+)">/)[0x1] || __Oxe8c66[0x0];
                    $[__Oxe8c66[0x6b]] = _0x64c1x1a[__Oxe8c66[0x25]](/<input type="hidden" id="shopId" value="(.\w+)">/)[0x1] || __Oxe8c66[0x0];
                    setActivityCookie(_0x64c1x19)
                }
            } catch (e) {
                $[__Oxe8c66[0x17]](e, _0x64c1x19)
            } finally {
                _0x64c1x17()
            }
        })
    })
}

function setActivityCookie(_0x64c1x19) {
    if (_0x64c1x19[__Oxe8c66[0xf3]][__Oxe8c66[0xf2]]) {
        cookie = originCookie + __Oxe8c66[0xed];
        for (let _0x64c1x2b of _0x64c1x19[__Oxe8c66[0xf3]][__Oxe8c66[0xf2]]) {
            lz_cookie[_0x64c1x2b[__Oxe8c66[0xf5]](__Oxe8c66[0xed])[0x0][__Oxe8c66[0xf6]](0, _0x64c1x2b[__Oxe8c66[0xf5]](__Oxe8c66[0xed])[0x0][__Oxe8c66[0x54]](__Oxe8c66[0xf4]))] = _0x64c1x2b[__Oxe8c66[0xf5]](__Oxe8c66[0xed])[0x0][__Oxe8c66[0xf6]](_0x64c1x2b[__Oxe8c66[0xf5]](__Oxe8c66[0xed])[0x0][__Oxe8c66[0x54]](__Oxe8c66[0xf4]) + 1)
        }
        ;
        for (const _0x64c1x2c of Object[__Oxe8c66[0x5]](lz_cookie)) {
            cookie += (_0x64c1x2c + __Oxe8c66[0xf4] + lz_cookie[_0x64c1x2c] + __Oxe8c66[0xed])
        }
        ;activityCookie = cookie
    }
}

async function getUA() {
    $[__Oxe8c66[0xe7]] = `${__Oxe8c66[0xf7]}${randomString(40)}${__Oxe8c66[0xf8]}`
}

function randomString(_0x64c1x9) {
    _0x64c1x9 = _0x64c1x9 || 32;
    let _0x64c1x2f = __Oxe8c66[0xf9], _0x64c1x30 = _0x64c1x2f[__Oxe8c66[0x21]], _0x64c1x31 = __Oxe8c66[0x0];
    for (i = 0; i < _0x64c1x9; i++) {
        _0x64c1x31 += _0x64c1x2f[__Oxe8c66[0xfb]](Math[__Oxe8c66[0xfa]](Math[__Oxe8c66[0x48]]() * _0x64c1x30))
    }
    ;
    return _0x64c1x31
}

function jsonParse(_0x64c1x33) {
    if (typeof _0x64c1x33 == __Oxe8c66[0xfc]) {
        try {
            return JSON[__Oxe8c66[0xa6]](_0x64c1x33)
        } catch (e) {
            console[__Oxe8c66[0x9]](e);
            $[__Oxe8c66[0x1c]]($[__Oxe8c66[0x19]], __Oxe8c66[0x0], __Oxe8c66[0xfd]);
            return []
        }
    }
}

async function joinShop() {
    if (!$[__Oxe8c66[0x51]]) {
        return
    }
    ;
    return new Promise(async (_0x64c1x17) => {
        $[__Oxe8c66[0x55]] = __Oxe8c66[0x53];
        let _0x64c1x35 = `${__Oxe8c66[0x0]}`;
        await getshopactivityId();
        if ($[__Oxe8c66[0x50]]) {
            _0x64c1x35 = `${__Oxe8c66[0xfe]}${$[__Oxe8c66[0x50]]}${__Oxe8c66[0x0]}`
        }
        ;let _0x64c1x12 = `${__Oxe8c66[0xff]}${$[__Oxe8c66[0x51]]}${__Oxe8c66[0x100]}${_0x64c1x35}${__Oxe8c66[0x101]}`;
        let _0x64c1x36 = __Oxe8c66[0x0];
        _0x64c1x36 = await geth5st();
        const _0x64c1x37 = {
            url: `${__Oxe8c66[0x102]}${_0x64c1x12}${__Oxe8c66[0x103]}${_0x64c1x36}${__Oxe8c66[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxe8c66[0x104],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxe8c66[0xe3],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxe8c66[0x105],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxe8c66[0x106],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxe8c66[0xe7]]
            }
        };
        await $[__Oxe8c66[0x49]](500);
        $[__Oxe8c66[0xf1]](_0x64c1x37, async (_0x64c1x18, _0x64c1x19, _0x64c1x1a) => {
            try {
                _0x64c1x1a = _0x64c1x1a && _0x64c1x1a[__Oxe8c66[0x25]](/jsonp_.*?\((.*?)\);/) && _0x64c1x1a[__Oxe8c66[0x25]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x64c1x1a;
                let _0x64c1x1c = $[__Oxe8c66[0x107]](_0x64c1x1a, _0x64c1x1a);
                if (_0x64c1x1c && typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c && _0x64c1x1c[__Oxe8c66[0x108]] === true) {
                        console[__Oxe8c66[0x9]](_0x64c1x1c[__Oxe8c66[0xac]]);
                        $[__Oxe8c66[0x55]] = _0x64c1x1c[__Oxe8c66[0xac]];
                        if (_0x64c1x1c[__Oxe8c66[0xae]] && _0x64c1x1c[__Oxe8c66[0xae]][__Oxe8c66[0x109]]) {
                            for (let _0x64c1xb of _0x64c1x1c[__Oxe8c66[0xae]][__Oxe8c66[0x109]][__Oxe8c66[0x10a]]) {
                                console[__Oxe8c66[0x9]](`${__Oxe8c66[0x10b]}${_0x64c1xb[__Oxe8c66[0x10c]]}${__Oxe8c66[0x0]}${_0x64c1xb[__Oxe8c66[0x10d]]}${__Oxe8c66[0x0]}${_0x64c1xb[__Oxe8c66[0x10e]]}${__Oxe8c66[0x0]}`)
                            }
                        }
                    } else {
                        if (_0x64c1x1c && typeof _0x64c1x1c == __Oxe8c66[0xa9] && _0x64c1x1c[__Oxe8c66[0xac]]) {
                            $[__Oxe8c66[0x55]] = _0x64c1x1c[__Oxe8c66[0xac]];
                            console[__Oxe8c66[0x9]](`${__Oxe8c66[0x0]}${_0x64c1x1c[__Oxe8c66[0xac]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`)
                        } else {
                            console[__Oxe8c66[0x9]](_0x64c1x1a)
                        }
                    }
                } else {
                    console[__Oxe8c66[0x9]](_0x64c1x1a)
                }
            } catch (e) {
                $[__Oxe8c66[0x17]](e, _0x64c1x19)
            } finally {
                _0x64c1x17()
            }
        })
    })
}

async function getshopactivityId() {
    return new Promise(async (_0x64c1x17) => {
        let _0x64c1x12 = `${__Oxe8c66[0xff]}${$[__Oxe8c66[0x51]]}${__Oxe8c66[0x10f]}`;
        let _0x64c1x36 = `${__Oxe8c66[0x0]}${new Date(Date[__Oxe8c66[0x45]]()).Format(__Oxe8c66[0x110])}${__Oxe8c66[0xed]}${generateFp()}${__Oxe8c66[0x111]}${Date[__Oxe8c66[0x45]]()}${__Oxe8c66[0x0]}`;
        _0x64c1x36 = encodeURIComponent(_0x64c1x36);
        const _0x64c1x37 = {
            url: `${__Oxe8c66[0x112]}${_0x64c1x12}${__Oxe8c66[0x103]}${_0x64c1x36}${__Oxe8c66[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxe8c66[0x104],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxe8c66[0xe3],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxe8c66[0x105],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxe8c66[0x106],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxe8c66[0xe7]]
            }
        };
        await $[__Oxe8c66[0x49]](500);
        $[__Oxe8c66[0xf1]](_0x64c1x37, async (_0x64c1x18, _0x64c1x19, _0x64c1x1a) => {
            try {
                _0x64c1x1a = _0x64c1x1a && _0x64c1x1a[__Oxe8c66[0x25]](/jsonp_.*?\((.*?)\);/) && _0x64c1x1a[__Oxe8c66[0x25]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x64c1x1a;
                let _0x64c1x1c = $[__Oxe8c66[0x107]](_0x64c1x1a, _0x64c1x1a);
                if (_0x64c1x1c && typeof _0x64c1x1c == __Oxe8c66[0xa9]) {
                    if (_0x64c1x1c && _0x64c1x1c[__Oxe8c66[0x108]] == true) {
                        console[__Oxe8c66[0x9]](`${__Oxe8c66[0x113]}${_0x64c1x1c[__Oxe8c66[0xae]][0x0][__Oxe8c66[0x115]][__Oxe8c66[0x114]] || __Oxe8c66[0x0]}${__Oxe8c66[0x0]}`);
                        $[__Oxe8c66[0x50]] = _0x64c1x1c[__Oxe8c66[0xae]][0x0][__Oxe8c66[0x116]] && _0x64c1x1c[__Oxe8c66[0xae]][0x0][__Oxe8c66[0x116]][0x0] && _0x64c1x1c[__Oxe8c66[0xae]][0x0][__Oxe8c66[0x116]][0x0][__Oxe8c66[0x117]] && _0x64c1x1c[__Oxe8c66[0xae]][0x0][__Oxe8c66[0x116]][0x0][__Oxe8c66[0x117]][__Oxe8c66[0x1d]] || __Oxe8c66[0x0]
                    }
                } else {
                    console[__Oxe8c66[0x9]](_0x64c1x1a)
                }
            } catch (e) {
                $[__Oxe8c66[0x17]](e, _0x64c1x19)
            } finally {
                _0x64c1x17()
            }
        })
    })
}

function generateFp() {
    let _0x64c1x9 = __Oxe8c66[0x118];
    let _0x64c1x30 = 13;
    let _0x64c1xb = __Oxe8c66[0x0];
    for (; _0x64c1x30--;) {
        _0x64c1xb += _0x64c1x9[Math[__Oxe8c66[0x48]]() * _0x64c1x9[__Oxe8c66[0x21]] | 0]
    }
    ;
    return (_0x64c1xb + Date[__Oxe8c66[0x45]]())[__Oxe8c66[0x119]](0, 16)
}

function geth5st() {
    let _0x64c1x3b = Date[__Oxe8c66[0x45]]();
    let _0x64c1x3c = generateFp();
    let _0x64c1x3d = new Date(_0x64c1x3b).Format(__Oxe8c66[0x110]);
    let _0x64c1x3e = __Oxe8c66[0x0];
    let _0x64c1x3f = __Oxe8c66[0x0];
    let _0x64c1x40 = [__Oxe8c66[0x11a], __Oxe8c66[0x11b], __Oxe8c66[0x11c]];
    let _0x64c1x41 = _0x64c1x40[random(0, _0x64c1x40[__Oxe8c66[0x21]])];
    return encodeURIComponent(_0x64c1x3d + __Oxe8c66[0xed] + _0x64c1x41 + _0x64c1x3c + __Oxe8c66[0x0] + Date[__Oxe8c66[0x45]]())
}

function getH5st() {
    let _0x64c1x3b = Date[__Oxe8c66[0x45]]();
    let _0x64c1x3c = generateFp();
    let _0x64c1x3d = new Date(_0x64c1x3b).Format(__Oxe8c66[0x110]);
    return encodeURIComponent(_0x64c1x3d + __Oxe8c66[0xed] + __Oxe8c66[0x0] + _0x64c1x3c + __Oxe8c66[0x11b] + Date[__Oxe8c66[0x45]]())
}

Date[__Oxe8c66[0x11e]][__Oxe8c66[0x11d]] = function (_0x64c1x43) {
    var _0x64c1x9, _0x64c1x31 = this, _0x64c1x44 = _0x64c1x43, _0x64c1x45 = {
        "\x4D\x2B": _0x64c1x31[__Oxe8c66[0x11f]]() + 1,
        "\x64\x2B": _0x64c1x31[__Oxe8c66[0x120]](),
        "\x44\x2B": _0x64c1x31[__Oxe8c66[0x120]](),
        "\x68\x2B": _0x64c1x31[__Oxe8c66[0x121]](),
        "\x48\x2B": _0x64c1x31[__Oxe8c66[0x121]](),
        "\x6D\x2B": _0x64c1x31[__Oxe8c66[0x122]](),
        "\x73\x2B": _0x64c1x31[__Oxe8c66[0x123]](),
        "\x77\x2B": _0x64c1x31[__Oxe8c66[0x124]](),
        "\x71\x2B": Math[__Oxe8c66[0xfa]]((_0x64c1x31[__Oxe8c66[0x11f]]() + 3) / 3),
        "\x53\x2B": _0x64c1x31[__Oxe8c66[0x125]]()
    };
    /(y+)/i[__Oxe8c66[0x126]](_0x64c1x44) && (_0x64c1x44 = _0x64c1x44[__Oxe8c66[0xd4]](RegExp.$1, __Oxe8c66[0x0][__Oxe8c66[0x129]](_0x64c1x31[__Oxe8c66[0x128]]())[__Oxe8c66[0xf6]](4 - RegExp[__Oxe8c66[0x127]][__Oxe8c66[0x21]])));
    for (var _0x64c1x46 in _0x64c1x45) {
        if (new RegExp(__Oxe8c66[0x12b][__Oxe8c66[0x129]](_0x64c1x46, __Oxe8c66[0x12a]))[__Oxe8c66[0x126]](_0x64c1x44)) {
            var _0x64c1x2f, _0x64c1x30 = __Oxe8c66[0x12c] === _0x64c1x46 ? __Oxe8c66[0x12d] : __Oxe8c66[0x12e];
            _0x64c1x44 = _0x64c1x44[__Oxe8c66[0xd4]](RegExp.$1, 1 == RegExp[__Oxe8c66[0x127]][__Oxe8c66[0x21]] ? _0x64c1x45[_0x64c1x46] : (__Oxe8c66[0x0][__Oxe8c66[0x129]](_0x64c1x30) + _0x64c1x45[_0x64c1x46])[__Oxe8c66[0xf6]](__Oxe8c66[0x0][__Oxe8c66[0x129]](_0x64c1x45[_0x64c1x46])[__Oxe8c66[0x21]]))
        }
    }
    ;
    return _0x64c1x44
};

function random(_0x64c1x48, _0x64c1x49) {
    return Math[__Oxe8c66[0xfa]](Math[__Oxe8c66[0x48]]() * (_0x64c1x49 - _0x64c1x48)) + _0x64c1x48
}

function getToken() {
    return new Promise((_0x64c1x17) => {
        $[__Oxe8c66[0xf1]]({
            url: `${__Oxe8c66[0x12f]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxe8c66[0x130]},
            timeout: 30000
        }, (_0x64c1x18, _0x64c1x19, _0x64c1x1a) => {
            try {
                if (_0x64c1x18) {
                    console[__Oxe8c66[0x9]](`${__Oxe8c66[0x131]}`)
                } else {
                    _0x64c1x1a = JSON[__Oxe8c66[0xa6]](_0x64c1x1a);
                    if (_0x64c1x1a[__Oxe8c66[0x132]] == 0) {
                        _0x64c1x1a = _0x64c1x1a[__Oxe8c66[0xaf]]
                    } else {
                        _0x64c1x1a = __Oxe8c66[0x0]
                    }
                }
            } catch (e) {
                $[__Oxe8c66[0x17]](e, _0x64c1x19)
            } finally {
                _0x64c1x17(_0x64c1x1a || __Oxe8c66[0x0])
            }
        })
    })
}

function checkCookie() {
    const _0x64c1x37 = {
        url: __Oxe8c66[0x133],
        headers: {
            "\x48\x6F\x73\x74": __Oxe8c66[0x134],
            "\x41\x63\x63\x65\x70\x74": __Oxe8c66[0x104],
            "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxe8c66[0xe5],
            "\x43\x6F\x6F\x6B\x69\x65": cookie,
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxe8c66[0x135],
            "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxe8c66[0xe4],
            "\x52\x65\x66\x65\x72\x65\x72": __Oxe8c66[0x136],
            "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxe8c66[0xe3]
        }
    };
    return new Promise((_0x64c1x17) => {
        $[__Oxe8c66[0xf1]](_0x64c1x37, (_0x64c1x18, _0x64c1x19, _0x64c1x1a) => {
            try {
                if (_0x64c1x18) {
                    $[__Oxe8c66[0x17]](_0x64c1x18)
                } else {
                    if (_0x64c1x1a) {
                        _0x64c1x1a = JSON[__Oxe8c66[0xa6]](_0x64c1x1a);
                        if (_0x64c1x1a[__Oxe8c66[0x137]] == __Oxe8c66[0x138]) {
                            $[__Oxe8c66[0x29]] = false;
                            return
                        } else {
                            $[__Oxe8c66[0x29]] = true;
                            return
                        }
                        ;
                        if (_0x64c1x1a[__Oxe8c66[0x137]] === __Oxe8c66[0x139] && _0x64c1x1a[__Oxe8c66[0xaf]][__Oxe8c66[0x13b]](__Oxe8c66[0x13a])) {
                            $[__Oxe8c66[0x28]] = _0x64c1x1a[__Oxe8c66[0xaf]][__Oxe8c66[0x13a]][__Oxe8c66[0x13c]][__Oxe8c66[0x7c]]
                        }
                    } else {
                        $[__Oxe8c66[0x9]](__Oxe8c66[0x13d])
                    }
                }
            } catch (e) {
                $[__Oxe8c66[0x17]](e)
            } finally {
                _0x64c1x17()
            }
        })
    })
}

(function (_0x64c1x4c, _0x64c1x4d, _0x64c1x4e, _0x64c1x4f, _0x64c1x50, _0x64c1x46) {
    _0x64c1x46 = __Oxe8c66[0xa2];
    _0x64c1x4f = function (_0x64c1x51) {
        if (typeof alert !== _0x64c1x46) {
            alert(_0x64c1x51)
        }
        ;
        if (typeof console !== _0x64c1x46) {
            console[__Oxe8c66[0x9]](_0x64c1x51)
        }
    };
    _0x64c1x4e = function (_0x64c1x30, _0x64c1x4c) {
        return _0x64c1x30 + _0x64c1x4c
    };
    _0x64c1x50 = _0x64c1x4e(__Oxe8c66[0x13e], _0x64c1x4e(_0x64c1x4e(__Oxe8c66[0x13f], __Oxe8c66[0x140]), __Oxe8c66[0x141]));
    try {
        _0x64c1x4c = __encode;
        if (!(typeof _0x64c1x4c !== _0x64c1x46 && _0x64c1x4c === _0x64c1x4e(__Oxe8c66[0x142], __Oxe8c66[0x143]))) {
            _0x64c1x4f(_0x64c1x50)
        }
    } catch (e) {
        _0x64c1x4f(_0x64c1x50)
    }
})({})


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
