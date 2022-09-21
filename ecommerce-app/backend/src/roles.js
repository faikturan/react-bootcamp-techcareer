import { AccessControl } from "accesscontrol";
const ac = new AccessControl();


exports.ac = (function (){
    ac.grant('user').readAny('product');
    ac.grant('admin').extend('user').createAny('product');
    return ac;
})