const students = [
    {id:23, name: 'shakhawat'},
    {id:26, name: 'keya'}, 
    {id:56, name: 'safwaana'}, 
    {id:68, name: 'fatiha'},
    {id:96, name: 'ayaat'},
    {id:77, name: 'bushra'}
]

const names= students.map(s=>s.name);
const ids = students.map(i=>i.id);

const bigger= students.filter(b=>b.id >50);
const bigger1 = students.find(f=>f.id>60);

console.log(ids);
console.log(names);
console.log(bigger);
console.log(bigger1);