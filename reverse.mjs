function reverse(str){
    let c = str.length
    if(c==0){
        return str;
    }else{
        return str.substr(-1) + reverse(str.substr(0,str.length-1));
    }
}
export default reverse;


