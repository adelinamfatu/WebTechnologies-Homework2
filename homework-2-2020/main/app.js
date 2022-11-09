function addTokens(input, tokens)
{
    if(!isString(input))
    {
        throw "Invalid input";
    }
    if(input.length < 6)
    {
        throw "Input should have at least 6 characters";
    }
    for(i in tokens)
    {
        if(!(tokens[i].hasOwnProperty("tokenName") && isString((tokens[i])["tokenName"])))
        {
            throw new Error("Invalid array format");
        }
    }
    if(!(input.includes("...")))
    {
        return input;
    }
    else
    {
        var i = 0;
        var j = 0;
        var output = "";
        while(j < input.length)
        {
            if(input[j] === "." && input[j + 1] === "." && input[j + 2] === ".")
            {
                output += input.substr(0, j) + "${" + tokens[i]["tokenName"] + "}" + input.substr(j + 3)
                input = output;
                i++;
            }
            j++;
        }
        return output;
    }
}

function isString(input)
{
    if(typeof input === "string")
        return true;
}

const app = {
    addTokens: addTokens
}

module.exports = app;