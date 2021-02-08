//----------------------------[A JS program to state the obvious]----------------------------------

const readline = require( 'readline' ).createInterface(
{
    input: process.stdin,
    output: process.stdout
});

const awesomeGuy    = 'Shashoto';
const theQuestion   = "So who's the awesome???\n";
const copyright     = '\n[   Not under any \u00A9opyright because... wHy w0u1d iT BE!   ]';

const logTxt =
        [
            '   What sort of answer would you like for that? (truthy || falsy)\n   => ',
            'Wait for it...\n',
            `=> ${awesomeGuy} is the awesome, obviously...\n`,
            `=> Anyone, who is not ${awesomeGuy}, can be the awesome... * SARCASM *\n`,
            '\n\t------------- JK!!! XD -------------\n',
            ` Truth be told, ${awesomeGuy} is the awesome, the one and only!\n`,
        ];

const logChar = (arr, i) =>
{
    return new Promise( async( resolve ) =>
    {
        setTimeout( (arr, i) =>
        {
            process.stdout.write('\x1b[36m' + arr[i] + '\x1b[0m');
            resolve();
        }, 50, arr, i);
    });
}

const logString = (txt) =>
{
    return new Promise( async( resolve ) =>
    {
        var arr = txt.split("");
        for(var i = 0; i < txt.length; i++) { await logChar(arr, i); }
        resolve();
    });
}

const writer = async( el1, el2 ) =>
{
    var txt = '';

    if( (typeof el1 != 'string') )
    {
        var texts = [ el1, el2 ];
        texts.forEach( async( item ) =>
        {
            if( item )
            {
                txt = logTxt[item];
                await logString(txt);
            }

        });
    }

    else if( (typeof el1 == 'string') )
    {
        txt = el1;
        await logString(txt);
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
                        setTimeout( async() =>
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
            readline.question( ( '\x1b[36m' + logTxt[0] + '\x1b[0m' ),
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
    writer(theQuestion);
    await respond();
    writer(copyright);
}

execute();

//-----------------------------[And this is where the line ends]-----------------------------------