//--------------- Log with typewriter effect in the console --------------

const writer = async (str, speed = 50) =>
{
    const logEachChar = (char) =>
    {
        return new Promise(async (resolve) =>
        {
            setTimeout((char) =>
            {
                process.stdout.write( ('\x1b[36m' + char + '\x1b[0m') );
                resolve();
            }, speed, char);
        });
    };

    return new Promise(async (resolve) =>
        {
            var arr = str.split("");
            for (var i = 0; i < str.length; i++)
            {
                await logEachChar(arr[i]);
            }
            resolve();
        });

};


exports.writer = writer;