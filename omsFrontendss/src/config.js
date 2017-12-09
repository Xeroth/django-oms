/**
 * Created by Itimor on 2017/7/12.
 */

let CONFIG;
let rest_url = 'oms.tb-gaming.local';
// if (process.env.NODE_ENV === 'development') {
if (process.env.NODE_ENV === 'production') {
    CONFIG = {
        apiUrl: "",
    };
} else {
    CONFIG = {
        apiUrl: "http://"+ rest_url + ":8000"
    };
}

//接口API根地址
const url = CONFIG.apiUrl;
const ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";

module.exports = {
    apiUrl: url,
    ws_url: ws_scheme + "://" + rest_url + ":8000",

    //数据分页限制
    LIMIT: 10,

    //qiniu 上传到七牛
    qn_ack: 'Q0IAB23HxpUZfWiUxzWdT6cMXQgqKusAmTsfX_fiCWC2',
    qn_sek: 'qQ6Rjq123Kz8k05xEI9GG1T74BH23g-EThAfgwJbaw8S',

    //本地上传到服务器
    uploads: `${url}/api/upload/`

    //登录
    login: `${url}/api/api-token-auth/`  //使用token
    //login: `${url}/api/api-auth/login/`
    logout: `${url}/api/api-auth/logout/`
    changePassword: `${url}/api/changepasswd/`

    //主机
    hosts: `${url}/api/hosts/`
    hostgroups: `${url}/api/hostgroups/`

    //用户
    users: `${url}/api/users/`
    groups: `${url}/api/groups/`
    roles: `${url}/api/roles/`

    //工单
    worktickers: `${url}/api/worktickers/`
    ticketcomments: `${url}/api/ticketcomments/`
    ticketenclosures: `${url}/api/ticketenclosures/`
    tickettypes: `${url}/api/tickettypes/`
    ticketwikis: `${url}/api/ticketwikis/`

    //权限
    usermenuperms: `${url}/api/usermenuperms/`
    routers: `${url}/api/routers/`
};