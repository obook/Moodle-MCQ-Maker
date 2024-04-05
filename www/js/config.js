/*
*
* (C) obook 2020-2024
*
*/

export { ConfigMax, ConfigTheme, ConfigFormatOutput, ConfigQuestionOnly};

let ConfigObjkey = "CONFv1.1";

function ConfigObjectFunction(version) {
    let config = {
        version: ConfigObjkey,
        category: "Default bank category", /* Bank thema */
        format: "GIFT", /* GIFT or XML */ 
        questiononly: false, /* Print question only or not */
        max: 1, /* Maximum questions */
    };
return config;
}

let conf = ConfigObjectFunction();

function ConfigMax(number=null) {
    // Charger la config
    conf = JSON.parse(localStorage.getItem(ConfigObjkey));

    // Régler le max
    let max = conf.max;
    if( number > conf.max) {
        conf.max = number;
        localStorage.setItem(ConfigObjkey, JSON.stringify(conf));
    }
return(conf.max);
}

function ConfigTheme(category=null) {
    // Charger la config
    conf = JSON.parse(localStorage.getItem(ConfigObjkey));

    // Régler la catégorie
    if(category) {
        conf.category = category;
        localStorage.setItem(ConfigObjkey, JSON.stringify(conf));
    }
return(conf.category)
}

function ConfigFormatOutput(format=null) {
    // Charger la config
    conf = JSON.parse(localStorage.getItem(ConfigObjkey));

    // Régler la catégorie
    if(format) {
        conf.format = format;
        localStorage.setItem(ConfigObjkey, JSON.stringify(conf));
    }

return(conf.format)
}

function ConfigQuestionOnly(value=null) {
    console.log("ConfigQuestionOnly received:", value);

    // Charger la config
    conf = JSON.parse(localStorage.getItem(ConfigObjkey));

    // Régler la catégorie
    if(value != null) {
        conf.questiononly = value;
        localStorage.setItem(ConfigObjkey, JSON.stringify(conf));
    }

    console.log("ConfigQuestionOnly:", conf.questiononly);

return(conf.questiononly)
}
