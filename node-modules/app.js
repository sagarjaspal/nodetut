const rect = require('./rect')

function rectange(x, y){
    console.log('l = ' + x + ' b = ' + y);

    rect(x, y, (err, r) => {
        if(err){
            console.log('Error: '+ message)
        }

        else{
            console.log('Area: ' + r.area());
            console.log('Perimiter: ' + r.perimeter())
        }
    });

    console.log('This statement is after call back')
}

rectange(2,2);
rectange(4,4);
rectange(6,6);