var buf=new Buffer("www.runoob.com", "utf-8");
console.log(buf);
var buf2=new Buffer(10);
console.log(buf2);
var buf3 = new Buffer([10, 20, 30, 40, 50]);
console.log(buf3);
var a=buf2.write('www.bauj');
console.log(a);
var b=buf2.toString("utf8",'1');
console.log(b);