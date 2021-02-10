//--------------- Log with typewriter effect in the console --------------

const { pause } = require("./pause");

const writer = async (str, time = 50) =>
    {
        if(str)
        {
            const logEachChar = async (char) =>
            {
                await pause(time);
                process.stdout.write( ('\x1b[36m' + char + '\x1b[0m') );
                return Promise.resolve();
            };

            var arr = str.split("");
            for (var i = 0; i < str.length; i++)
            {
                await logEachChar(arr[i]);
            }

            await pause(100);
        }

        else
        {
            var err =
                [
                    "\n\twriter takes a string as first parameter,",
                    "\n\tand optionally the time perod to log each character."
                ];
            console.log("\x1b[31mError: " + err[0] + err[1]);
        }

        return Promise.resolve();
    };


async function dynamicWriter()
    {
        if(arguments.length > 1)
        {
            var str = arguments[0], start, end, time, newStr;

            for(var i = 1; i < (arguments.length); i++)
            {
                if(i == 1) { start = 0; }
                end = ( str.search( arguments[i][0] ) + arguments[i][0].length );
                time = arguments[i][1];

                newStr = str.slice(start, end);
                await writer(newStr, time);

                start = end;
            }

            if(end < str.length)
            {
                end = str.length;
                time = 50;

                newStr = str.slice(start, end);
                await writer(newStr, time);
            }
        }

        else
        {
            var err =
                [
                    "\n\tdynamicWriter takes a string as first parameter,",
                    "\n\tfollowed by any number of arrays of two elements",
                    "\n\twhich define the final word of the partial string",
                    "\n\tand the time perod to log each character."
                ];
            console.log("\x1b[31mError: " + err[0] + err[1] + err[2] + err[3]);
        }

        return Promise.resolve();        
    }


exports.writer = writer;
exports.dynamicWriter = dynamicWriter;