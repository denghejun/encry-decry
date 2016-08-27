const BufferCryptor = require('encry-decry');

////////////////////////// Buffer Test /////////////////////////////////////// 
console.log('////////////////////////// Buffer Test /////////////////////////////////////// ');
const bf = Buffer.from('一段绝密文本！','utf8');
const DIR_OPTION = {colors:true,depth:null};

// 1. create a buffer cihper.
const cipher =  new BufferCryptor();

// 2. encry
const encrted = cipher.encry(bf);
console.dir(encrted, DIR_OPTION);

// 3. decry
const decrted = cipher.decry(encrted.data,encrted.password);
// or : const decrted = cipher.decry(encrted);
console.dir({data:decrted.data.toString('utf8'),password:decrted.password}, DIR_OPTION);


////////////////////////// Text Test ///////////////////////////////////////
console.log('////////////////////////// Buffer Test /////////////////////////////////////// ');
const bf1 = '一段绝密文本!';

// 1. create a buffer cihper.
const cipher1 =  new BufferCryptor();

// 2. encry
const encrted1 = cipher.encry(bf1);
console.dir(encrted1, DIR_OPTION);

// 3. decry
const decrted1 = cipher.decry(encrted1.data,encrted1.password);
// or const decrted1 = cipher.decry(encrted1);
console.dir({data:decrted1.data.toString('utf8'),password:decrted1.password}, DIR_OPTION);