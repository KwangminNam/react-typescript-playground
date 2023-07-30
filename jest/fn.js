const fn = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  makeUser: (name, age, gender) => {
    return { name, age };
  },
  thorwErr: () => {
    throw new Error('xx');
  },
  getName: (callback) => {
    const name ='kwangmin';
    setTimeout(()=>{
      callback(name);
    },3000)
  },
  getAge: ()=>{
    return new Promise((res,rej)=>{
      const age = 30;
      setTimeout(()=>{
        res(age);
      },2000);
    })
  }
};

module.exports = fn;
