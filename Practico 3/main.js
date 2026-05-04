const users = [{"id":1,"first_name":"Lina","last_name":"De Angelo","email":"ldeangelo0@fotki.com","gender":"Female","ip_address":"1.141.21.80"},
{"id":2,"first_name":"Isabelita","last_name":"Simounet","email":"isimounet1@independent.co.uk","gender":"Female","ip_address":"1.28.255.108"},
{"id":3,"first_name":"Archie","last_name":"Raith","email":"araith2@mac.com","gender":"Male","ip_address":"223.186.252.191"},
{"id":4,"first_name":"Gareth","last_name":"Henningham","email":"ghenningham3@about.me","gender":"Male","ip_address":"99.124.100.248"},
{"id":5,"first_name":"Gamaliel","last_name":"Fransseni","email":"gfransseni4@over-blog.com","gender":"Male","ip_address":"46.246.36.180"},
{"id":6,"first_name":"Batholomew","last_name":"Swanger","email":"bswanger5@ocn.ne.jp","gender":"Male","ip_address":"0.248.114.96"},
{"id":7,"first_name":"Mel","last_name":"Copland","email":"mcopland6@nasa.gov","gender":"Genderqueer","ip_address":"219.227.199.234"},
{"id":8,"first_name":"Giffie","last_name":"Durston","email":"gdurston7@vk.com","gender":"Male","ip_address":"241.230.35.133"},
{"id":9,"first_name":"Cornie","last_name":"Welman","email":"cwelman8@wp.com","gender":"Male","ip_address":"233.3.190.152"},
{"id":10,"first_name":"Quintus","last_name":"Lansdown","email":"qlansdown9@webnode.com","gender":"Male","ip_address":"21.200.197.30"},
{"id":11,"first_name":"Weston","last_name":"Menichino","email":"wmenichinoa@aol.com","gender":"Male","ip_address":"145.196.155.193"},
{"id":12,"first_name":"Lilas","last_name":"McQuie","email":"lmcquieb@samsung.com","gender":"Female","ip_address":"55.225.140.59"},
{"id":13,"first_name":"Errick","last_name":"Howroyd","email":"ehowroydc@indiegogo.com","gender":"Male","ip_address":"20.11.65.98"},
{"id":14,"first_name":"Victor","last_name":"Golling","email":"vgollingd@whitehouse.gov","gender":"Male","ip_address":"191.118.130.14"},
{"id":15,"first_name":"Darline","last_name":"Fogden","email":"dfogdene@flavors.me","gender":"Female","ip_address":"42.218.66.168"},
{"id":16,"first_name":"Lloyd","last_name":"Polfer","email":"lpolferf@slideshare.net","gender":"Non-binary","ip_address":"9.221.219.222"},
{"id":17,"first_name":"Odette","last_name":"Caldero","email":"ocalderog@over-blog.com","gender":"Female","ip_address":"49.54.212.252"},
{"id":18,"first_name":"Kennan","last_name":"Schouthede","email":"kschouthedeh@ning.com","gender":"Male","ip_address":"22.252.191.133"},
{"id":19,"first_name":"Tish","last_name":"Topley","email":"ttopleyi@unc.edu","gender":"Polygender","ip_address":"75.66.114.213"},
{"id":20,"first_name":"Lora","last_name":"Zorzenoni","email":"lzorzenonij@wordpress.com","gender":"Female","ip_address":"22.119.111.43"},
{"id":21,"first_name":"Sigfried","last_name":"Cullon","email":"scullonk@go.com","gender":"Male","ip_address":"141.3.4.236"},
{"id":22,"first_name":"Hildegaard","last_name":"Gonthard","email":"hgonthardl@ucsd.edu","gender":"Female","ip_address":"116.67.1.120"},
{"id":23,"first_name":"Jerad","last_name":"Beeching","email":"jbeechingm@phoca.cz","gender":"Male","ip_address":"228.241.8.128"},
{"id":24,"first_name":"Daryn","last_name":"Svanini","email":"dsvaninin@shutterfly.com","gender":"Female","ip_address":"203.171.226.49"},
{"id":25,"first_name":"Nicky","last_name":"Meredyth","email":"nmeredytho@vk.com","gender":"Female","ip_address":"49.217.20.34"},
{"id":26,"first_name":"Nari","last_name":"Bowring","email":"nbowringp@globo.com","gender":"Female","ip_address":"115.232.247.137"},
{"id":27,"first_name":"Erica","last_name":"Guitel","email":"eguitelq@elpais.com","gender":"Female","ip_address":"113.195.244.134"},
{"id":28,"first_name":"Lindsy","last_name":"Feldheim","email":"lfeldheimr@mediafire.com","gender":"Female","ip_address":"175.51.110.147"},
{"id":29,"first_name":"Rufus","last_name":"Sebright","email":"rsebrights@last.fm","gender":"Male","ip_address":"83.188.160.27"},
{"id":30,"first_name":"Carmon","last_name":"Davidesco","email":"cdavidescot@irs.gov","gender":"Female","ip_address":"179.174.33.131"},
{"id":31,"first_name":"Simone","last_name":"Wodham","email":"swodhamu@illinois.edu","gender":"Non-binary","ip_address":"142.123.218.232"},
{"id":32,"first_name":"Gail","last_name":"Cromblehome","email":"gcromblehomev@bbc.co.uk","gender":"Female","ip_address":"89.204.67.74"},
{"id":33,"first_name":"Stafford","last_name":"Viel","email":"svielw@reuters.com","gender":"Male","ip_address":"62.43.218.19"},
{"id":34,"first_name":"Sterling","last_name":"Stanton","email":"sstantonx@disqus.com","gender":"Male","ip_address":"201.227.219.29"},
{"id":35,"first_name":"Susanetta","last_name":"Varnals","email":"svarnalsy@cam.ac.uk","gender":"Female","ip_address":"134.239.196.136"},
{"id":36,"first_name":"Worth","last_name":"Goodban","email":"wgoodbanz@yahoo.com","gender":"Male","ip_address":"92.202.50.17"},
{"id":37,"first_name":"Odell","last_name":"Keenleyside","email":"okeenleyside10@is.gd","gender":"Male","ip_address":"56.199.60.154"},
{"id":38,"first_name":"Luci","last_name":"Lovering","email":"llovering11@cornell.edu","gender":"Female","ip_address":"196.13.96.108"},
{"id":39,"first_name":"Elvina","last_name":"Deverose","email":"edeverose12@archive.org","gender":"Female","ip_address":"213.223.36.22"},
{"id":40,"first_name":"Christiano","last_name":"Craighall","email":"ccraighall13@usda.gov","gender":"Male","ip_address":"29.136.30.195"},
{"id":41,"first_name":"Dee dee","last_name":"Hansed","email":"dhansed14@kickstarter.com","gender":"Agender","ip_address":"115.225.246.216"},
{"id":42,"first_name":"Lynda","last_name":"Guillot","email":"lguillot15@edublogs.org","gender":"Female","ip_address":"28.69.107.124"},
{"id":43,"first_name":"Thomasine","last_name":"Hallmark","email":"thallmark16@sfgate.com","gender":"Female","ip_address":"224.153.104.152"},
{"id":44,"first_name":"Nancie","last_name":"Thomen","email":"nthomen17@godaddy.com","gender":"Female","ip_address":"17.4.216.125"},
{"id":45,"first_name":"Gene","last_name":"Crasford","email":"gcrasford18@sourceforge.net","gender":"Male","ip_address":"106.198.139.179"},
{"id":46,"first_name":"Glory","last_name":"Kraut","email":"gkraut19@dell.com","gender":"Female","ip_address":"191.16.223.214"},
{"id":47,"first_name":"Hinze","last_name":"Ors","email":"hors1a@wsj.com","gender":"Male","ip_address":"92.55.104.203"},
{"id":48,"first_name":"Arlana","last_name":"Andrejevic","email":"aandrejevic1b@people.com.cn","gender":"Female","ip_address":"205.84.37.130"},
{"id":49,"first_name":"Allix","last_name":"Cufflin","email":"acufflin1c@buzzfeed.com","gender":"Female","ip_address":"252.243.236.35"},
{"id":50,"first_name":"Dorene","last_name":"McAllen","email":"dmcallen1d@bigcartel.com","gender":"Female","ip_address":"195.123.222.55"}]


const id_encontrar = parseInt(prompt("Ingrese ID del usuario"));

const id_encontrado = users.find((user) => {
    return user.id === id_encontrar
});


if (id_encontrado) {
    console.log ("Usuario encontrado:", id_encontrado);
} else{
    console.log("EL usuario no se encontro");
}

const conteoGenero = users.reduce((acc,user) => {
    const genero = user.gender;

    if (acc[genero]) {
        acc[genero]++;
    } else{
        acc[genero] = 1;
    }
    return acc;

},{});

console.log("Cantidad de generos:", conteoGenero)