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
            '\n\t------------- JK!!! XD -------------',
            ` Truth be told, ${awesomeGuy} is the awesome, the one and only!`,
            '\n[  Not under any \u00A9opyright because... why would it be!  ]'
        ];


function logIt(el1, el2)
{
    var texts = [el1, el2];
    texts.forEach((item) =>
    {
        if(item)
            console.log(fontColor, logTxt[item]);
    });
}

function whosTheAwesome(props)
{
    return new Promise((resolve) =>
            {
                switch (props)
                {
                    case true:
                        logIt(2);
                        resolve();
                        break;

                    case false:
                        logIt(3);
                        setTimeout(() =>
                        {
                            logIt(4, 5);
                            resolve();
                        }, 3000);
                }
            });
}

const syncUp = async (whatYouWantToHear) =>
                {
                    return new Promise((resolve) =>
                    {
                        setTimeout(() =>
                        {
                            await whosTheAwesome( (whatYouWantToHear.includes('truthy')) || (whatYouWantToHear.includes('true')) );
                            resolve();
                        }, 1000);
                    });
                }


console.log(fontColor, theQuestion);

readline.question((logTxt[0]),
            async (whatYouWantToHear) =>
            {
                readline.close();
                logIt(1);
                await syncUp(whatYouWantToHear);
            });

logIt(6);

//-----------------------------[And this is where the line ends]-----------------------------------