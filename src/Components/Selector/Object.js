const itemText = Symbol('text');
const itemOnClick = Symbol('onClick');
const itemIsActive = Symbol('isActive');

// 选择器中的一个项目，规定项目名以及点击后触发的函数
export class Item
{
    constructor(text, onClick, isActive = false)
    {
        if (typeof text !== 'string')
        {
            throw TypeError('The text of an Item should be a string');
        }
        else if (typeof onClick !== 'function')
        {
            throw TypeError('the onClick of an Item should be a function');
        }
        else if (typeof isActive !== 'boolean')
        {
            throw TypeError('the isActive of an Item should be a boolean');
        }
        else
        {
            this[itemText] = text;
            this[itemOnClick] = onClick;
            this[itemIsActive] = isActive;
        }
    }

    getText()
    {
        return this[itemText];
    }

    getOnClick()
    {
        return this[itemOnClick];
    }

    getIsActive()
    {
        return this[itemIsActive];
    }
}


const seriesCaption = Symbol('caption');
const seriesItemArray = Symbol('itemArray');

// 选择器中的一行，规定行标题以及其中所有的项目
export class Series
{
    constructor(caption, itemArray)
    {
        if (typeof caption !== 'string')
        {
            throw TypeError('The caption of a Series should be a string');
        }
        else if (!Array.isArray(itemArray))
        {
            throw TypeError('The itemArray of a Series should be an array');
        }
        else
        {
            itemArray.forEach(item =>
            {
                if (!(item instanceof Item))
                {
                    throw TypeError('The content of itemArray should be Items');
                }
            });
            this[seriesCaption] = caption;
            this[seriesItemArray] = [...itemArray];
        }
    }

    getCaption()
    {
        return this[seriesCaption];
    }

    getItemArray()
    {
        return [...this[seriesItemArray]];
    }
}