"use strict";
//data from excel as json
export const rawData01 = [
    {
        "x": "0.295620252",
        "y": "0.050191809",
        "class": -1
    },
    {
        "x": "0.065244686",
        "y": "0.659911584",
        "class": -1
    },
    {
        "x": "0.092269569",
        "y": "0.962340207",
        "class": -1
    },
    {
        "x": "0.207906371",
        "y": "0.155611031",
        "class": -1
    },
    {
        "x": "0.042419818",
        "y": "0.795006146",
        "class": -1
    },
    {
        "x": "0.00628917",
        "y": "0.811329159",
        "class": -1
    },
    {
        "x": "0.000437817",
        "y": "0.919449443",
        "class": -1
    },
    {
        "x": "0.098361576",
        "y": "0.026737757",
        "class": -1
    },
    {
        "x": "0.174684149",
        "y": "0.384440995",
        "class": -1
    },
    {
        "x": "0.131982242",
        "y": "0.102893478",
        "class": -1
    },
    {
        "x": "0.268611558",
        "y": "0.28503746",
        "class": -1
    },
    {
        "x": "0.213780695",
        "y": "0.51020369",
        "class": -1
    },
    {
        "x": "0.018763129",
        "y": "0.615272325",
        "class": -1
    },
    {
        "x": "0.209277394",
        "y": "0.827298752",
        "class": -1
    },
    {
        "x": "0.09588562",
        "y": "0.337415837",
        "class": -1
    },
    {
        "x": "0.404480234",
        "y": "0.207616739",
        "class": -1
    },
    {
        "x": "0.091401445",
        "y": "0.519465386",
        "class": -1
    },
    {
        "x": "0.157622665",
        "y": "0.807722726",
        "class": -1
    },
    {
        "x": "0.151939401",
        "y": "0.297052586",
        "class": -1
    },
    {
        "x": "0.268583679",
        "y": "0.208264362",
        "class": -1
    },
    {
        "x": "0.143289014",
        "y": "0.432611637",
        "class": -1
    },
    {
        "x": "0.179202922",
        "y": "0.900673043",
        "class": -1
    },
    {
        "x": "0.215176604",
        "y": "0.724282811",
        "class": -1
    },
    {
        "x": "0.102444947",
        "y": "0.879358099",
        "class": -1
    },
    {
        "x": "0.024163302",
        "y": "0.441639976",
        "class": -1
    },
    {
        "x": "0.377238983",
        "y": "0.218967843",
        "class": -1
    },
    {
        "x": "0.230961291",
        "y": "0.307508221",
        "class": -1
    },
    {
        "x": "0.390393904",
        "y": "0.146528491",
        "class": -1
    },
    {
        "x": "0.118489456",
        "y": "0.996906467",
        "class": -1
    },
    {
        "x": "0.309574357",
        "y": "0.507377123",
        "class": -1
    },
    {
        "x": "0.146540489",
        "y": "0.31049266",
        "class": -1
    },
    {
        "x": "0.019397246",
        "y": "0.293284744",
        "class": -1
    },
    {
        "x": "0.090347179",
        "y": "0.316944421",
        "class": -1
    },
    {
        "x": "0.11602827",
        "y": "0.823055386",
        "class": -1
    },
    {
        "x": "0.260598488",
        "y": "0.718049922",
        "class": -1
    },
    {
        "x": "0.083213035",
        "y": "0.433423881",
        "class": -1
    },
    {
        "x": "0.863791162",
        "y": "0.948993725",
        "class": 1
    },
    {
        "x": "0.605916504",
        "y": "0.749942637",
        "class": 1
    },
    {
        "x": "0.824019258",
        "y": "0.786517894",
        "class": 1
    },
    {
        "x": "0.197547929",
        "y": "0.986258491",
        "class": 1
    },
    {
        "x": "0.634260682",
        "y": "0.993333551",
        "class": 1
    },
    {
        "x": "0.72445021",
        "y": "0.59387697",
        "class": 1
    },
    {
        "x": "0.226841017",
        "y": "0.897361623",
        "class": 1
    },
    {
        "x": "0.513821549",
        "y": "0.11795163",
        "class": 1
    },
    {
        "x": "0.700786368",
        "y": "0.491363996",
        "class": 1
    },
    {
        "x": "0.544292365",
        "y": "0.03446842",
        "class": 1
    },
    {
        "x": "0.5124826",
        "y": "0.332717243",
        "class": 1
    },
    {
        "x": "0.727633116",
        "y": "0.979760675",
        "class": 1
    },
    {
        "x": "0.965905077",
        "y": "0.948716059",
        "class": 1
    },
    {
        "x": "0.935706927",
        "y": "0.930067634",
        "class": 1
    },
    {
        "x": "0.337261732",
        "y": "0.590342898",
        "class": 1
    },
    {
        "x": "0.95615931",
        "y": "0.347325208",
        "class": 1
    },
    {
        "x": "0.627807629",
        "y": "0.62260808",
        "class": 1
    },
    {
        "x": "0.813140582",
        "y": "0.874262591",
        "class": 1
    },
    {
        "x": "0.537169092",
        "y": "0.46513266",
        "class": 1
    },
    {
        "x": "0.832308354",
        "y": "0.984350007",
        "class": 1
    },
    {
        "x": "0.364307705",
        "y": "0.408660234",
        "class": 1
    },
    {
        "x": "0.292219349",
        "y": "0.872728619",
        "class": 1
    },
    {
        "x": "0.728281506",
        "y": "0.288116604",
        "class": 1
    },
    {
        "x": "0.984543378",
        "y": "0.060328386",
        "class": 1
    },
    {
        "x": "0.535363391",
        "y": "0.934479474",
        "class": 1
    },
    {
        "x": "0.612793404",
        "y": "0.634756446",
        "class": 1
    },
    {
        "x": "0.561351095",
        "y": "0.984985803",
        "class": 1
    },
    {
        "x": "0.923956987",
        "y": "0.039053581",
        "class": 1
    },
    {
        "x": "0.811540703",
        "y": "0.412646917",
        "class": 1
    },
    {
        "x": "0.675877175",
        "y": "0.222218116",
        "class": 1
    },
    {
        "x": "0.727987046",
        "y": "0.285929869",
        "class": 1
    },
    {
        "x": "0.809741398",
        "y": "0.261043847",
        "class": 1
    },
    {
        "x": "0.720055061",
        "y": "0.402515184",
        "class": 1
    },
    {
        "x": "0.492371647",
        "y": "0.996859116",
        "class": 1
    },
    {
        "x": "0.694229634",
        "y": "0.132656532",
        "class": 1
    },
    {
        "x": "0.510291925",
        "y": "0.156866577",
        "class": 1
    },
    {
        "x": "0.614905203",
        "y": "0.516068429",
        "class": 1
    },
    {
        "x": "0.90919419",
        "y": "0.233772814",
        "class": 1
    },
    {
        "x": "0.41098304",
        "y": "0.563024406",
        "class": 1
    },
    {
        "x": "0.708238518",
        "y": "0.795228232",
        "class": 1
    },
    {
        "x": "0.79395971",
        "y": "0.809341203",
        "class": 1
    },
    {
        "x": "0.695035258",
        "y": "0.813760347",
        "class": 1
    },
    {
        "x": "0.429878551",
        "y": "0.945700934",
        "class": 1
    },
    {
        "x": "0.76075871",
        "y": "0.119409271",
        "class": 1
    },
    {
        "x": "0.27973758",
        "y": "0.892783369",
        "class": 1
    },
    {
        "x": "0.27103792",
        "y": "0.819708665",
        "class": 1
    },
    {
        "x": "0.778735038",
        "y": "0.583925748",
        "class": 1
    },
    {
        "x": "0.900525785",
        "y": "0.204622111",
        "class": 1
    },
    {
        "x": "0.698910243",
        "y": "0.595459715",
        "class": 1
    },
    {
        "x": "0.831842627",
        "y": "0.049868027",
        "class": 1
    },
    {
        "x": "0.524509004",
        "y": "0.671718051",
        "class": 1
    },
    {
        "x": "0.545044516",
        "y": "0.198708829",
        "class": 1
    },
    {
        "x": "0.766721564",
        "y": "0.728782991",
        "class": 1
    },
    {
        "x": "0.789957703",
        "y": "0.69438321",
        "class": 1
    },
    {
        "x": "0.632114994",
        "y": "0.16895915",
        "class": 1
    },
    {
        "x": "0.852626531",
        "y": "0.26621675",
        "class": 1
    },
    {
        "x": "0.5353188",
        "y": "0.878760295",
        "class": 1
    },
    {
        "x": "0.406577817",
        "y": "0.31702654",
        "class": 1
    },
    {
        "x": "0.665978978",
        "y": "0.368136594",
        "class": 1
    },
    {
        "x": "0.519319508",
        "y": "0.270354107",
        "class": 1
    },
    {
        "x": "0.376153389",
        "y": "0.976076354",
        "class": 1
    },
    {
        "x": "0.664224458",
        "y": "0.251867374",
        "class": 1
    },
    {
        "x": "0.701633455",
        "y": "0.766216146",
        "class": 1
    },
    {
        "x": "0.554703678",
        "y": "0.575981206",
        "class": 1
    },
    {
        "x": "0.149265947",
        "y": "0.982425733",
        "class": ""
    },
    {
        "x": "0.070486323",
        "y": "0.47816352",
        "class": ""
    },
    {
        "x": "0.759228199",
        "y": "0.429743839",
        "class": ""
    },
    {
        "x": "0.411793286",
        "y": "0.505673751",
        "class": ""
    },
    {
        "x": "0.59105209",
        "y": "0.20312942",
        "class": ""
    },
    {
        "x": "0.905476307",
        "y": "0.466356001",
        "class": ""
    },
    {
        "x": "0.908052102",
        "y": "0.586238335",
        "class": ""
    },
    {
        "x": "0.835891393",
        "y": "0.958843442",
        "class": ""
    },
    {
        "x": "0.830018273",
        "y": "0.86226121",
        "class": ""
    },
    {
        "x": "0.944342248",
        "y": "0.929654608",
        "class": ""
    },
    {
        "x": "0.517529354",
        "y": "0.482239323",
        "class": ""
    }
];
export const rawData02 = [
    {
        "x": "0.065244686",
        "y": "0.659911584",
        "class": -1
    },
    {
        "x": "0.092269569",
        "y": "0.962340207",
        "class": -1
    },
    {
        "x": "0.042419818",
        "y": "0.795006146",
        "class": -1
    },
    {
        "x": "0.00628917",
        "y": "0.811329159",
        "class": -1
    },
    {
        "x": "0.000437817",
        "y": "0.919449443",
        "class": -1
    },
    {
        "x": "0.174684149",
        "y": "0.384440995",
        "class": -1
    },
    {
        "x": "0.268611558",
        "y": "0.28503746",
        "class": -1
    },
    {
        "x": "0.213780695",
        "y": "0.51020369",
        "class": -1
    },
    {
        "x": "0.018763129",
        "y": "0.615272325",
        "class": -1
    },
    {
        "x": "0.209277394",
        "y": "0.827298752",
        "class": -1
    },
    {
        "x": "0.404480234",
        "y": "0.207616739",
        "class": -1
    },
    {
        "x": "0.091401445",
        "y": "0.519465386",
        "class": -1
    },
    {
        "x": "0.157622665",
        "y": "0.807722726",
        "class": -1
    },
    {
        "x": "0.143289014",
        "y": "0.432611637",
        "class": -1
    },
    {
        "x": "0.179202922",
        "y": "0.900673043",
        "class": -1
    },
    {
        "x": "0.215176604",
        "y": "0.724282811",
        "class": -1
    },
    {
        "x": "0.102444947",
        "y": "0.879358099",
        "class": -1
    },
    {
        "x": "0.377238983",
        "y": "0.218967843",
        "class": -1
    },
    {
        "x": "0.230961291",
        "y": "0.307508221",
        "class": -1
    },
    {
        "x": "0.390393904",
        "y": "0.146528491",
        "class": -1
    },
    {
        "x": "0.118489456",
        "y": "0.996906467",
        "class": -1
    },
    {
        "x": "0.309574357",
        "y": "0.507377123",
        "class": -1
    },
    {
        "x": "0.11602827",
        "y": "0.823055386",
        "class": -1
    },
    {
        "x": "0.260598488",
        "y": "0.718049922",
        "class": -1
    },
    {
        "x": "0.083213035",
        "y": "0.433423881",
        "class": -1
    },
    {
        "x": "0.863791162",
        "y": "0.948993725",
        "class": -1
    },
    {
        "x": "0.605916504",
        "y": "0.749942637",
        "class": -1
    },
    {
        "x": "0.824019258",
        "y": "0.786517894",
        "class": -1
    },
    {
        "x": "0.197547929",
        "y": "0.986258491",
        "class": -1
    },
    {
        "x": "0.634260682",
        "y": "0.993333551",
        "class": -1
    },
    {
        "x": "0.72445021",
        "y": "0.59387697",
        "class": -1
    },
    {
        "x": "0.226841017",
        "y": "0.897361623",
        "class": -1
    },
    {
        "x": "0.513821549",
        "y": "0.11795163",
        "class": -1
    },
    {
        "x": "0.700786368",
        "y": "0.491363996",
        "class": -1
    },
    {
        "x": "0.5124826",
        "y": "0.332717243",
        "class": -1
    },
    {
        "x": "0.727633116",
        "y": "0.979760675",
        "class": -1
    },
    {
        "x": "0.965905077",
        "y": "0.948716059",
        "class": -1
    },
    {
        "x": "0.935706927",
        "y": "0.930067634",
        "class": -1
    },
    {
        "x": "0.337261732",
        "y": "0.590342898",
        "class": -1
    },
    {
        "x": "0.627807629",
        "y": "0.62260808",
        "class": -1
    },
    {
        "x": "0.813140582",
        "y": "0.874262591",
        "class": -1
    },
    {
        "x": "0.537169092",
        "y": "0.46513266",
        "class": -1
    },
    {
        "x": "0.832308354",
        "y": "0.984350007",
        "class": -1
    },
    {
        "x": "0.364307705",
        "y": "0.408660234",
        "class": -1
    },
    {
        "x": "0.292219349",
        "y": "0.872728619",
        "class": -1
    },
    {
        "x": "0.728281506",
        "y": "0.288116604",
        "class": -1
    },
    {
        "x": "0.535363391",
        "y": "0.934479474",
        "class": -1
    },
    {
        "x": "0.612793404",
        "y": "0.634756446",
        "class": -1
    },
    {
        "x": "0.561351095",
        "y": "0.984985803",
        "class": -1
    },
    {
        "x": "0.811540703",
        "y": "0.412646917",
        "class": -1
    },
    {
        "x": "0.675877175",
        "y": "0.222218116",
        "class": -1
    },
    {
        "x": "0.727987046",
        "y": "0.285929869",
        "class": -1
    },
    {
        "x": "0.720055061",
        "y": "0.402515184",
        "class": -1
    },
    {
        "x": "0.492371647",
        "y": "0.996859116",
        "class": -1
    },
    {
        "x": "0.510291925",
        "y": "0.156866577",
        "class": -1
    },
    {
        "x": "0.614905203",
        "y": "0.516068429",
        "class": -1
    },
    {
        "x": "0.41098304",
        "y": "0.563024406",
        "class": -1
    },
    {
        "x": "0.708238518",
        "y": "0.795228232",
        "class": -1
    },
    {
        "x": "0.79395971",
        "y": "0.809341203",
        "class": -1
    },
    {
        "x": "0.695035258",
        "y": "0.813760347",
        "class": -1
    },
    {
        "x": "0.429878551",
        "y": "0.945700934",
        "class": -1
    },
    {
        "x": "0.27973758",
        "y": "0.892783369",
        "class": -1
    },
    {
        "x": "0.27103792",
        "y": "0.819708665",
        "class": -1
    },
    {
        "x": "0.778735038",
        "y": "0.583925748",
        "class": -1
    },
    {
        "x": "0.698910243",
        "y": "0.595459715",
        "class": -1
    },
    {
        "x": "0.524509004",
        "y": "0.671718051",
        "class": -1
    },
    {
        "x": "0.545044516",
        "y": "0.198708829",
        "class": -1
    },
    {
        "x": "0.766721564",
        "y": "0.728782991",
        "class": -1
    },
    {
        "x": "0.789957703",
        "y": "0.69438321",
        "class": -1
    },
    {
        "x": "0.632114994",
        "y": "0.16895915",
        "class": -1
    },
    {
        "x": "0.5353188",
        "y": "0.878760295",
        "class": -1
    },
    {
        "x": "0.406577817",
        "y": "0.31702654",
        "class": -1
    },
    {
        "x": "0.665978978",
        "y": "0.368136594",
        "class": -1
    },
    {
        "x": "0.519319508",
        "y": "0.270354107",
        "class": -1
    },
    {
        "x": "0.376153389",
        "y": "0.976076354",
        "class": -1
    },
    {
        "x": "0.664224458",
        "y": "0.251867374",
        "class": -1
    },
    {
        "x": "0.701633455",
        "y": "0.766216146",
        "class": -1
    },
    {
        "x": "0.554703678",
        "y": "0.575981206",
        "class": -1
    },
    {
        "x": "0.295620252",
        "y": "0.050191809",
        "class": 1
    },
    {
        "x": "0.207906371",
        "y": "0.155611031",
        "class": 1
    },
    {
        "x": "0.098361576",
        "y": "0.026737757",
        "class": 1
    },
    {
        "x": "0.131982242",
        "y": "0.102893478",
        "class": 1
    },
    {
        "x": "0.09588562",
        "y": "0.337415837",
        "class": 1
    },
    {
        "x": "0.151939401",
        "y": "0.297052586",
        "class": 1
    },
    {
        "x": "0.268583679",
        "y": "0.208264362",
        "class": 1
    },
    {
        "x": "0.024163302",
        "y": "0.441639976",
        "class": 1
    },
    {
        "x": "0.146540489",
        "y": "0.31049266",
        "class": 1
    },
    {
        "x": "0.019397246",
        "y": "0.293284744",
        "class": 1
    },
    {
        "x": "0.090347179",
        "y": "0.316944421",
        "class": 1
    },
    {
        "x": "0.544292365",
        "y": "0.03446842",
        "class": 1
    },
    {
        "x": "0.95615931",
        "y": "0.347325208",
        "class": 1
    },
    {
        "x": "0.984543378",
        "y": "0.060328386",
        "class": 1
    },
    {
        "x": "0.923956987",
        "y": "0.039053581",
        "class": 1
    },
    {
        "x": "0.809741398",
        "y": "0.261043847",
        "class": 1
    },
    {
        "x": "0.694229634",
        "y": "0.132656532",
        "class": 1
    },
    {
        "x": "0.90919419",
        "y": "0.233772814",
        "class": 1
    },
    {
        "x": "0.76075871",
        "y": "0.119409271",
        "class": 1
    },
    {
        "x": "0.900525785",
        "y": "0.204622111",
        "class": 1
    },
    {
        "x": "0.831842627",
        "y": "0.049868027",
        "class": 1
    },
    {
        "x": "0.852626531",
        "y": "0.26621675",
        "class": 1
    },
    {
        "x": "0.861940417",
        "y": "0.434374507",
        "class": ""
    },
    {
        "x": "0.641735447",
        "y": "0.356162423",
        "class": ""
    },
    {
        "x": "0.651778389",
        "y": "0.82068427",
        "class": ""
    },
    {
        "x": "0.369450242",
        "y": "0.663867204",
        "class": ""
    },
    {
        "x": "0.189103906",
        "y": "0.978213905",
        "class": ""
    },
    {
        "x": "0.733233809",
        "y": "0.139390756",
        "class": ""
    },
    {
        "x": "0.635508071",
        "y": "0.65831345",
        "class": ""
    },
    {
        "x": "0.286480811",
        "y": "0.463953281",
        "class": ""
    },
    {
        "x": "0.677996683",
        "y": "0.392153486",
        "class": ""
    },
    {
        "x": "0.435630014",
        "y": "0.39302594",
        "class": ""
    },
    {
        "x": "0.366574618",
        "y": "0.320904346",
        "class": ""
    }
];
