$(function(){
              
    // window.PLOTLYENV=window.PLOTLYENV || {};
    // window.PLOTLYENV.BASE_URL='https://plotly.geoplot.com';

    if (document.getElementById("heat_map")) {
    Plotly.newPlot(
        'heat_map',
        [
            {"colorscale": "YlOrRd", 
            "type": "heatmap", 
            "uid": "8c23cb82-804a-46d1-91e8-2078607ce124", 
            "x": ["Additive", "Legume", "Vegetable", "Herb", "Spice", "Plant Derivative", "Meat", "Plant", "Dairy", "Maize", "Condiment", "Nuts and Seeds", "Cereal", "Bakery", "Fruit", "Beverage", "Dish", "Essential Oil", "Fungi", "Fish", "Flower", "Beverage-Alcoholic", "Seafood"], 
            "y": ["Australian", "Belgian", "Canadian", "Caribbean", "Central American", "Chinese and Mongolian", "Deutschland ", "Eastern European", "French", "Greek", "Indian Subcontinent", "Irish", "Italian", "Japanese", "Korean", "Mexican", "Middle Eastern", "Northern Africa", "Rest Africa", "Scandinavian", "South American", "Southeast Asian", "Spanish and Portuguese", "Thai", "UK", "US"], 
            "z": [
                [13.579364431010537, 1.9830896168613676, 3.643493178661874, 2.030062903357569, 4.997549219834981, 3.192141164937505, 11.555428478065517, 1.4132832284944041, 0.49015603300383953, 0.8639000081692673, 0.2634588677395638, 7.930316150641288, 0.6167796748631648, 8.336737194673638, 1.2846172698308962, 0.986439016420227, 8.022220406829508, 2.136263377175067, 1.243770933747243, 4.748386569724696, 0.9108732946654685, 8.498080222204068, 11.27358875908831],

                [22.338334195550956, 1.4899120538023798, 2.0589756854630106, 1.4071391619244698, 6.818416968442835, 1.8623900672529745, 13.626487325400932, 0.9622348680807035, 0.07242628039317124, 0.23797206414899122, 0.14485256078634248, 5.0905328504914635, 0.3621314019658562, 4.159337816864976, 1.2622866011381273, 0.9415416451112262, 10.91567511639938, 2.048629073978272, 1.1277806518365237, 2.555613036730471, 0.6725297465080186, 9.684428349715468, 10.16037247801345],

                [18.87564108906809, 1.9376968617556358, 2.7358630584277446, 1.5864377710714226, 5.207869522914296, 2.9354046075957716, 11.393657547123139, 1.461105888949356, 0.20778706772868943, 0.6167647883375384, 0.3380662609871535, 5.968106334207358, 0.7866224706871814, 7.12412803641221, 1.7810320091030525, 1.060373686901169, 7.645244809446066, 2.1471330331964578, 0.8888669008393938, 3.807780471313841, 0.7767278484143868, 9.706624449611637, 11.011065485908409],
                
                [13.596258458272523, 0.9818230065012603, 6.487992569988059, 3.5159877935518113, 2.670160541329442, 3.5358896112511613, 4.650391402414754, 0.9785060368847021, 0.3250630224227146, 0.6070054398301711, 0.059705453098049616, 8.17633010481624, 0.10282605811330768, 10.617619742603157, 1.6817035955950643, 0.8192914952899031, 6.531113175003317, 0.7098314979434788, 1.4395648135863075, 4.985405333687144, 0.8889478572376277, 13.301048162398832, 13.337534828180974],
                
                [16.171003717472118, 1.7193308550185873, 2.393122676579926, 1.6031598513011152, 4.902416356877323, 4.019516728624535, 8.643122676579926, 1.4637546468401488, 0.37174721189591076, 0.4646840148698885, 0.16263940520446096, 4.112453531598513, 0.44144981412639406, 8.619888475836431, 1.812267657992565, 1.3708178438661711, 8.271375464684015, 0.9758364312267658, 1.2314126394052045, 3.7407063197026025, 0.5111524163568774, 10.130111524163569, 16.86802973977695],
                
                [11.918258000228695, 0.3822467615204927, 1.3149942009572504, 2.4290638221409084, 5.779440351536338, 8.714899456033455, 2.561380008821079, 1.127137886534786, 2.613653070225591, 0.47045755264060635, 0.6223761373474688, 2.0304817289315062, 1.458745119819658, 11.333453125765718, 2.231406308705098, 3.4859597824133814, 9.910645735661662, 1.207181011810445, 1.8295571491579135, 4.996977963637551, 1.8883643432379895, 9.763627750461474, 11.929692732410931],
                
                [18.962432915921287, 2.000099383820314, 2.0199761478831246, 1.9851918107732063, 5.886006758099781, 1.7789703836215465, 13.727390180878555, 1.3615583383025245, 0.06459948320413438, 0.4074736632876168, 0.15652951699463327, 4.73563903796462, 0.6534486185648977, 4.3604651162790695, 1.1627906976744187, 0.7578016298946532, 11.046511627906977, 2.484595507851322, 1.319320214669052, 3.04611409262572, 0.29069767441860467, 10.191810773206122, 11.600576426157822],
                
                [17.395962799468563, 1.0885869798139973, 1.5900227146102088, 1.5343076329661853, 6.124373205331505, 1.7057386534093344, 12.514464492349891, 1.1785882655466506, 0.04285775511078729, 0.3900055715081644, 0.06857240817725968, 3.540050572151031, 0.9900141430591866, 5.841512021600308, 1.0028714695924228, 0.428577551107873, 12.274461063729483, 1.4571636737667681, 1.092872755325076, 2.8757553679338277, 0.1414305918655981, 9.522993185616938, 17.198817125958943], 
                
                [16.906487056502364, 3.558186209477158, 1.8420246963975915, 3.3132632581555943, 3.491852910160901, 1.6991529747933463, 14.526992550260232, 1.2943497635813177, 0.1326665986325135, 0.585093717045957, 0.27213661257951494, 4.59740789876518, 1.013708881858693, 7.757594312344797, 1.5562812531891008, 0.7619825152226417, 9.985712827839576, 1.4100078239276117, 1.389597577984148, 4.350784093614995, 1.2501275640371468, 9.208422628159337, 9.096166275470285],
                
                [11.183205209582246, 2.1745774267108637, 2.8445823635893457, 1.4881162282248395, 3.8249053764957566, 1.4458001269483038, 10.929308601923033, 0.7687425065237323, 0.14340456543714883, 0.3996520676117263, 0.441968168888262, 4.0200296212708935, 0.3667395443966429, 10.698920939417448, 1.161341890589369, 0.2280367679902203, 6.387380398241531, 1.2365705150809883, 2.8633895197122508, 7.325387309871406, 0.6018289959329525, 13.57876672073724, 15.8873451348238],
                
                [11.908487861623897, 0.49024359844340737, 2.596629229043471, 0.12186846514977358, 2.8985306540735922, 0.9029345372460496, 6.489495769225442, 0.5124015011979116, 0.13433228544918224, 0.27697378443130355, 0.44731266185655527, 3.8028500602417985, 0.22157902754504286, 13.816837236355578, 2.743425334792062, 0.4916284673655638, 3.758534254732789, 1.7241618080848649, 0.9943358861083799, 3.7723829439543546, 0.35452644407206857, 22.02218560013295, 19.518342588873963],
                
                [16.80378728685021, 1.3375005745277382, 3.2541251091602703, 4.205543043618146, 5.101806315208898, 2.2567449556464587, 14.565427218826125, 1.525945672657076, 0.2022337638461185, 0.3447166429195202, 0.1930413200349313, 3.7505170749643795, 0.4412373029369858, 6.0210506963276185, 1.2088063611711173, 0.5929126258215747, 9.022383600680241, 1.443213678356391, 1.420232568828423, 3.258721331065864, 0.5699315162936066, 8.94424782828515, 13.53587351197316],
                
                [9.612922999260821, 1.909844291801131, 1.1237913233694508, 2.083521132685501, 5.258982818612869, 2.5931334547268348, 13.166387221230641, 1.1478296404468724, 0.05829291891274692, 0.5480736293652082, 0.5709100305887586, 2.3581589052950402, 1.2445838666834934, 12.465670278423808, 1.136411439835097, 0.38281019945793593, 8.816052788144301, 1.136411439835097, 1.3088863648655957, 6.239145197444727, 0.8154999068515214, 10.888756678144963, 15.133923474017582],
                
                [13.947533147442098, 0.8080578159676777, 1.7868320719285267, 4.9280145678028795, 6.69777499573209, 9.90724406760371, 2.5209127638991635, 1.7982131679280713, 2.91925112388323, 1.7640698799294374, 0.3983383599840665, 2.0429067319182836, 1.667330563933307, 7.835884595686565, 1.4852330279405908, 1.189324531952427, 7.13025664371479, 0.7113184999715473, 0.9275593239628976, 5.451544983781939, 2.0258350879189666, 9.235759403630569, 12.820804643487168],
                
                [13.411938098747237, 0.32424465733235075, 0.6779661016949152, 1.9749447310243184, 7.266028002947679, 9.388356669123066, 0.501105379513633, 1.296978629329403, 5.998526160648489, 0.8253500368459837, 0.10316875460574797, 1.5770081061164332, 1.3411938098747236, 14.900515843773029, 0.9579955784819455, 0.8253500368459837, 7.6050110537951365, 0.6779661016949152, 0.707442888725129, 4.789977892409728, 0.9285187914517318, 9.712601326455417, 14.207811348563007],
                
                [8.68881824425265, 3.4034508882107635, 3.048732998676003, 1.1526561360530732, 1.998031705123939, 4.9724226311429565, 10.103441683954149, 1.7891658819447886, 1.113007030636014, 0.3320612578678694, 0.06584583578190159, 2.768357181798229, 0.22515027718972802, 9.85421873561835, 2.7641090633606864, 2.202649409865547, 7.514921516011866, 0.5529634166200553, 1.206465636261939, 3.6760384879530443, 0.45384065307740784, 12.530533351269835, 19.58311797732921],
                
                [13.718440396292744, 1.3449451368914456, 3.1399808245445833, 0.3648663044636199, 4.346436561201662, 1.0253542132736764, 5.718014275061255, 1.6086076488761054, 0.3169276659209545, 0.20240758495792052, 0.2609992542878449, 5.068179397038457, 0.2583359965910301, 11.393416426973474, 2.7484819431128154, 0.3515500159795462, 5.744646852029402, 2.564717162032598, 0.98806860551827, 6.762011292212635, 0.2743155427719186, 15.966229892404387, 15.833067007563653],
                
                [11.406451612903226, 0.6658064516129032, 2.2916129032258064, 0.40258064516129033, 2.038709677419355, 0.5316129032258065, 2.4670967741935486, 1.8270967741935484, 0.2632258064516129, 0.48516129032258065, 0.22193548387096773, 7.163870967741935, 0.18064516129032257, 11.76258064516129, 2.4929032258064514, 0.25806451612903225, 6.405161290322581, 1.9096774193548387, 1.3058064516129033, 7.401290322580644, 0.31483870967741934, 19.421935483870968, 18.781935483870967],
                
                [14.92676381797175, 0.7379523685289404, 2.825090380529984, 1.4460884797435802, 3.2276098542730427, 1.457269576236443, 5.650180761059968, 1.2224665498863256, 0.2683463158287056, 0.4546979240430845, 0.27580038015728076, 5.788080951138609, 0.19380567254295405, 10.189705937162238, 2.038686593865305, 0.6410495322574634, 6.429130483396071, 1.5839886698222208, 1.5206291230293318, 5.258842383809773, 0.4919682456859603, 15.172747940814729, 18.199098058216244],
                
                [24.43470424381452, 1.712272652793708, 2.0850401441913813, 1.388661314107816, 7.459446174012781, 1.3313124692774045, 15.242503686711453, 0.946255939701786, 0.06554153694904145, 1.1428805505489104, 0.15156480419465837, 5.296575454694413, 0.33180403080452237, 3.3426183844011144, 1.4091430444043913, 0.7578240209732918, 9.843519580534164, 2.785515320334262, 0.6881861379649353, 1.9048009175815173, 0.33999672292315253, 9.700147468458136, 7.639685400622645],
                
                [9.22563761847297, 1.5633686322897318, 1.562012718471614, 1.8589578446393948, 3.4250383045653616, 5.528060636465947, 6.219576683705983, 2.314544887526949, 0.4040623177990807, 0.591178424699326, 0.21423438326259983, 1.886076121001749, 1.4996406828381987, 10.666974007132108, 1.7518406530080948, 1.5009965966563166, 12.437797453593848, 0.34982576507437185, 1.5443858388360836, 3.777575897275969, 0.48812897452237936, 12.363222193597375, 18.82686336456455],
                
                [13.637226970560304, 0.40360873694207033, 3.1291547958214623, 0.49382716049382713, 3.3998100664767335, 8.29059829059829, 1.785375118708452, 0.8547008547008548, 0.9449192782526116, 0.6030389363722697, 0.1851851851851852, 4.539411206077873, 0.43209876543209874, 14.487179487179489, 1.9278252611585944, 0.9829059829059829, 8.328584995251662, 1.3200379867046534, 1.9278252611585944, 4.5251661918328585, 3.3190883190883187, 10.009496676163343, 14.472934472934472],
                
                [10.79063330784078, 1.4239411486215814, 1.8682399213372665, 3.3977930733092974, 3.4961214902217854, 2.112240067008995, 4.632360974543865, 0.7137914709202812, 0.1784478677300703, 0.841254233584617, 0.3059106303944062, 4.421136967842966, 0.4370151862777232, 9.650752030299719, 1.8136130230525511, 0.6700899522925088, 9.483229542226592, 0.9104483047452566, 2.1304490331039005, 6.8684220109982155, 2.0248370297534506, 12.003350449761463, 19.82592228413271],
                
                [10.264359769310264, 0.39003900390039004, 3.95039503950395, 0.38003800380038005, 3.3003300330033, 9.344267760109345, 0.9767643431009767, 0.5967263393005967, 1.2534586792012534, 0.6267293396006267, 0.48338167150048333, 6.523985731906524, 0.9134246758009135, 17.888455512217888, 1.8768543521018768, 0.8000800080008, 6.500650065006501, 1.9835316865019836, 1.8368503517018366, 4.623795712904624, 2.87028702870287, 8.074140747408075, 14.541454145414543], 
                
                [18.806009839117138, 2.082169924212206, 1.8481584895625582, 2.40127642600718, 6.3209679563887775, 1.8667730355005983, 14.11514426273102, 1.3375880866905996, 0.15689403004919558, 0.6568275495279883, 0.4387714399680893, 7.140007977662545, 0.6568275495279883, 5.291849488099986, 1.2604706820901475, 0.9094535301156762, 8.953596596197313, 1.9997340779151707, 1.0264592474404999, 3.30009307272969, 0.46004520675442095, 9.067943092673847, 9.902938439037362],
                
                [16.711092003439383, 2.0851246775580394, 2.463456577815993, 1.6014617368873603, 4.2863284608770424, 4.013327601031815, 9.929062768701634, 1.6809974204643165, 0.33748925193465173, 0.7115219260533103, 0.16337059329320722, 3.5597592433361998, 0.5309544282029235, 7.661220980223559, 1.233877901977644, 1.4251934651762683, 9.284178847807395, 1.63585554600172, 1.1521926053310405, 4.344368013757523, 1.4810834049871022, 10.365434221840069, 13.342648323301805]
                ]
            }
        ],
        {
            "margin": {
                "b": 120, 
                "l": 185, 
                "pad": 0, 
                "r": 100, 
                "t": 50
            }, 
            "height":650,
            "title": {
                "text": "<b>Ingredient Composition of recipes across regions (%)<b>"
            }
        },
        {
            "plotlyServerURL": "https://plotly.geoplot.com", 
            "responsive": true, 
            "autosize": true,
            "linkText": "Export to plotly.geoplot.com", 
            "showLink": false
        }
    )

    };
                

});