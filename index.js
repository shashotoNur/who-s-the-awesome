//----------------------------[A JS program to state the obvious]----------------------------------

const readline = require( 'readline' ).createInterface(
{
    input: process.stdin,
    output: process.stdout
});

var i = 0;
const awesomeGuy    = 'Shashoto';
const theQuestion   = "So who's the awesome???";
const copyright     = '\n[   Not under any \u00A9opyright because... wHy w0u1d iT BE!   ]';

const logTxt =
        [
            '   What sort of answer would you like for that? (truthy || falsy)\n   => ',
            'Wait for it...',
            `=> ${awesomeGuy} is the awesome, obviously...`,
            `=> Anyone, who is not ${awesomeGuy}, can be the awesome... * SARCASM *`,
            '\n\t------------- JK!!! XD -------------',
            ` Truth be told, ${awesomeGuy} is the awesome, the one and only!`,
        ];


const writer = ( el1, el2 ) =>
{
    switch ((typeof el1 == 'string'))
    {
        case true:
            const recursiveFn = () =>
            {
                if (i < el1.length)
                {
                    process.stdout.write(['\x1b[36m', el1.charAt(i), '\x1b[0m'].join(''));
                    i++;
                    setTimeout(recursiveFn, 50);
                }
                else
                    setTimeout( () => { i = 0; }, 2000);
            }
            recursiveFn();
            break;
        
        case false:
            var texts = [ el1, el2 ];
            texts.forEach( ( item ) =>
            {
                if( item )
                    process.stdout.write(['\x1b[36m', logTxt[item], '\x1b[0m\n'].join(''));
            });
            break;
    }
}

const whosTheAwesome = ( props ) =>
    {
        return new Promise( ( resolve ) =>
            {
                switch ( props )
                {
                    case true:
                        writer(2);
                        resolve();
                        break;

                    case false:
                        writer(3);
                        setTimeout( () =>
                        {
                            writer(4, 5);
                            resolve();
                        }, 3000);
                        break;
                }
            });
    }

const syncUp = ( booleanValue ) =>
    {
        return new Promise( ( resolve ) =>
            {
                setTimeout(async() =>
                {
                    await whosTheAwesome( booleanValue );
                    resolve();
                }, 1000);
            });
    }

const respond = () =>
{
    return new Promise( ( resolve ) =>
        {
            readline.question( (['\x1b[36m', logTxt[0], '\x1b[0m'].join('') ),
                async ( whatYouWantToHear ) =>
                {
                    readline.close();
                    writer(1);
                    const booleanValue = (whatYouWantToHear.includes('truthy')) || (whatYouWantToHear.includes('true'));
                    await syncUp( booleanValue );
                    resolve();
                });
        });
}

const execute = async() =>
{
    process.stdout.write(['\x1b[36m', theQuestion, '\x1b[0m\n'].join(''));
    await respond();
    writer(copyright);
}

execute();

//-----------------------------[And this is where the line ends]-----------------------------------