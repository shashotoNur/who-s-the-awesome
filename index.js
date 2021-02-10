//----------------------------[A JS program to state the obvious]----------------------------------

const { pause } = require("./pause");
const { writer, dynamicWriter } = require("./writer");
const readline = require( 'readline' ).createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

const awesomeGuy    = 'Shashoto';
const theQuestion   = "So who's the awesome???\n";
const copyright     = '\n[   Not under any \u00A9opyright because... wHy w0u1d iT BE?!   ]\n...';

const strings =
    [
        /*[0]*/ '   What sort of answer would you like for that? (truthy || falsy)\n   => ',
        /*[1]*/ 'Wait for it...\n',
        /*[2]*/ `=> ${awesomeGuy} is the awesome, obviously...\n`,
        /*[3]*/ `=> Anyone, who is not ${awesomeGuy}, can be the awesome... * SARCASM *\n`,
        /*[4]*/ '\n\t---------- Just Kidding!!! XD ----------\n',
        /*[5]*/ ` We all know that, ${awesomeGuy} is the awesome, the one and only!\n`,
    ];


const whosTheAwesome = async ( props ) =>
    {
        switch ( props )
        {
            case true:
                await writer(strings[2]);
                break;

            case false:
                await writer(strings[3]);
                await pause(2000);
                await writer(strings[4]);
                await dynamicWriter(strings[5], [",", 50], ["awesome", "150"]);
                break;
        }
        return Promise.resolve();
    }

const waitForIt = async ( whatYouWantToHear ) =>
    {
        const booleanValue = (whatYouWantToHear.includes('truthy'))
                             || (whatYouWantToHear.includes('true'));
        await pause(1000);
        await whosTheAwesome( booleanValue );
        return Promise.resolve();
    }

const revelation = () =>
    {
        return new Promise( ( resolve ) =>
            {
                readline.question( ( '\x1b[36m' + strings[0] + '\x1b[0m' ),
                    async ( whatYouWantToHear ) =>
                    {
                        readline.close();
                        await writer(strings[1]);
                        await waitForIt( whatYouWantToHear );
                        resolve();
                    });
            });
    }

const execute = async () =>
    {
        await writer(theQuestion);
        await revelation();
        await pause(1000);
        await dynamicWriter(copyright, ["because", 40], ["]", 200]);
        await pause(1000);
    }

execute();


//-----------------------------[And this is where the line ends]-----------------------------------