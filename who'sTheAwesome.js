//----------------------------[A JS program to state the obvious]----------------------------------

const readline = require('readline').createInterface(
{
    input: process.stdin,
    output: process.stdout
});

const awesomeGuy = 'Shashoto';
const fontColor = '\x1b[36m%s\x1b[0m';
const theQuestion = "So who's the awesome???";

const logTxt =
        [
            '   What sort of answer would you like for that? (truthy || falsy)\n   => ',
            'Wait for it...',
            `=> ${awesomeGuy} is the awesome, obviously...`,
            `=> Anyone, who is not ${awesomeGuy}, can be the awesome... * SARCASM *`,
            '\t------------- JK!!! XD -------------',
            `\n Truth be told, ${awesomeGuy} is the awesome, the one and only!`,
            '\n[  Not under any \u00A9opyright because... why would it be!  ]'
        ];

function logIt(el1, el2)
{
    var texts = [el1, el2];
    texts.forEach((item) =>
    {
        if(item)
            console.log(fontColor, item);
    });
}

function whosTheAwesome(props)
{
    switch (props)
    {
        case true:
            logIt(2);
            break;

        case false:
            logIt(3);
            return new Promise((resolve) =>
            {
                setTimeout(() => { logTxt[4]; }, 3000);
                resolve();
            });
    }
}

console.log(fontColor, theQuestion);

const execute = async () =>
    {
        readline.question((logTxt[0]),
            await function(whatYouWantToHear)
            {
                return new Promise((resolve) =>
                {
                    readline.close();
                    logIt(1);
                    setTimeout(() =>
                    {
                        var txt = await whosTheAwesome( (whatYouWantToHear.includes('truthy')) || (whatYouWantToHear.includes('true')) );
                        logIt(txt);
                    }, 1000);
                    resolve();
                });
            });
    }

execute();
execute.then(logIt(6));

//-----------------------------[And this is where the line ends]-----------------------------------

function resolveAfter2Seconds()
{
    return new Promise(resolve =>
    {
        setTimeout(() =>
        {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall()
{
    const result = await resolveAfter2Seconds();
    console.log(result);
}
  
asyncCall();
asyncCall.then(() => {
    console.log('all done');
})