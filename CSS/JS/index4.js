
    console.log("hello");

    let num=[100,200,300,400];

    for(let i=0;i<num.length;i++){
        console.log(num[i]);
    }
    console.log("another way to display.....");
    SVGAnimatedNumberList.map(a=> console.log(a+5));
    let persons=[
        {
            name:"kumar",
            age:21
        },

        {
            name:"vaishu",
            age:20
        },
        {
            name:"varshu",
            age:19
        },
    ];
    let data="";
    persons.map(eachPerson=>{
        if(eachPerson.age>35){
            console.log(eachPerson.name);
            data="<table>"+"<tr>"
        }
    });