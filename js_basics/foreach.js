const coding =['js','ruby','python']
coding.forEach(function(item){ 
    // console.log(item);
})
//arow function forEach
coding.forEach((value,index,arr)=>{
    // value.concat(value)
    // console.log(value,index,arr)
})
//for each in array of objects
const arrayobjects=[
    {
    ln :"js",
    experience: 4
},{
    ln :"c++",
    experience: 2
},
{
    ln :"python",
    experience: 1
},
]
arrayobjects.forEach((item,index)=>console.log(item.experience))