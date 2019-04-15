import axios from 'axios';

export default {
    getAsync,
    postAsync,
};

async function getAsync(url, allowCache = true, params = {}, config = {})
{
    return new Promise(async (resolve, reject) =>
    {
        try
        {
            const res = await axios.get(url, allowCache ? {params, ...config} : {
                params: {
                    ...params,
                    _t: Date.now(),
                },
                ...config,
            });
            resolve(res.data);
        }
        catch (e)
        {
            reject(e);
        }
    });

}

async function postAsync(url, params = {}, config = {})
{
    return new Promise(async (resolve, reject) =>
    {
        try
        {
            const res = await axios.post(url, params, config);
            resolve(res.data);
        }
        catch (e)
        {
            reject(e);
        }
    });
}