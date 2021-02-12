
const pause = (time = 1000) => 
{
    return new Promise( (resolve) =>
        {
            setTimeout(() => { resolve(); }, time);
        });
};

exports.pause = pause;