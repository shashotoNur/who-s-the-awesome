//----------------------------[A JS program to state the obvious]----------------------------------

const { writer } = require("./writer");
const readline = require( 'readline' ).createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });
    
const awesomeGuy    = 'Shashoto';
const theQuestion   = "So who's the awesome???\n";
const copyright     = '\n[   Not under any \u00A9opyright because... wHy w0u1d iT BE!   ]';
    
const writeTxt =
    [
        /*[0]*/ '   What sort of answer would you like for that? (truthy || falsy)\n   => ',
        /*[1]*/ 'Wait for it...\n',
        /*[2]*/ `=> ${awesomeGuy} is the awesome, obviously...\n`,
        /*[3]*/ `=> Anyone, who is not ${awesomeGuy}, can be the awesome... * SARCASM *\n`,
        /*[4]*/ '\n\t---------- Just Kidding!!! XD ----------\n',
        /*[5]*/ ` Truth be told, ${awesomeGuy} is the awesome, the one and only!\n`,
    ];


const whosTheAwesome = async ( props ) =>
    {
        return new Promise(async ( resolve ) =>
            {
                switch ( props )
                {
                    case true:
                        await writer(writeTxt[2]);
                        resolve();
                        break;

                    case false:
                        await writer(writeTxt[3]);
                        setTimeout(async () =>
                        {
                            await writer(writeTxt[4]);
                            await writer(writeTxt[5]);
                            resolve();
                        }, 3000);
                        break;
                }
            });
    }

const waitForIt = ( whatYouWantToHear ) =>
    {
        return new Promise( ( resolve ) =>
            {
                setTimeout(async () =>
                {
                    const booleanValue = (whatYouWantToHear.includes('truthy')) || (whatYouWantToHear.includes('true'));
                    await whosTheAwesome( booleanValue );
                    resolve();
                }, 1000);
            });
    }

const respond = () =>
    {
        return new Promise( ( resolve ) =>
            {
                readline.question( ( '\x1b[36m' + writeTxt[0] + '\x1b[0m' ),
                    async ( whatYouWantToHear ) =>
                    {
                        readline.close();
                        await writer(writeTxt[1]);
                        await waitForIt( whatYouWantToHear );
                        resolve();
                    });
            });
    }

const execute = async () =>
    {
        await writer(theQuestion);
        await respond();
        await writer(copyright, 100);
    }
execute();

//-----------------------------[And this is where the line ends]-----------------------------------