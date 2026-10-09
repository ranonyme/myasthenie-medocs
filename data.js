// Source : Liste_1_v3.0.0.b.pdf (AMIS, 05/2026) – page 2 – orthographe du PDF
const LIST_VERSION = "3.0.0.b (05/2026)";
const MOLECULES = {
"Anesthésie & Réa":["Alcuronium","Alfentanil","Atracurium","Cisatracurium","Diméthyltubocurinium","Kétamine","Mivacurium","Monoxyde d'azote","Phénobarbital","Procaïne","Rocuronium","Sévoflurane","Suxaméthonium","Thiopental","Vécuronium"],
"Antibiotiques":["Azithromycine","Chloroquine","Ciprofloxacine","Clarithromycine","Clindamycine","Colistine","Dibékacin","D-pénicillinamine","Gentamicine","Halofantrine","Hydroxychloroquine","Isépamicine","Kanamycine","Levofloxacine","Lincomycine","Méfloquine","Moxifloxacine","Néomycine","Nétilmicine","Ofloxacine","Pefloxacine","Polymyxine","Quinine","Quinquina","Rolitétracycline","Telithromycine","Tétracycline","Tigécycline","Tiopronine","Tobramycine"],
"Cardiologie":["Atorvastatine","Fluvastatine","Lovastatine","Pitavastatine","Pravastatine","Quinidine","Rosuvastatine","Simvastatine"],
"Divers ou Autres":["Nicotine (patch)","Patchs nicotiniques"],
"Gastro & Transit":["Adiphénine","Buclizine","Camylofine","Cyclizine","Magnésium IV","Magnésium per os","Oxyphencycliminе","Pentapipéride fumarate","Pidolate de Mg"],
"Immunologie":["Corticoïdes","Interférons alfa-2a/2b","Thiocolchicoside","Vaccins vivants","Viraféronpeg"],
"Neurologie":["Acébutolol","Alimémazine","Alprazolam","Aténolol","Baclofène","Bétatop Gé","Bromazépam","Bromphéniramine","Carbamazépine","Chlordiazépoxide","Chlorphénamine","Chlorpromazine","Cinnarizine","Clidinium","Clobazam","Clonazépam","Clorazépate","Clotiazépam","Dantrolène","Diazépam","Diltiazem","Diphénhydramine","Dipyridamole","Doxylamine","Estazolam","Etifoxine","Flunitrazépam","Fluphénazine","Hydroquinidine","Hydroxyzine","Lévomépromazine","Lidocaïne IV","Lithium","Loflazépate d'éthyle","Loprazolam","Lorazépam","Méclozine","Méphénésine","Méquitazine","Méthocarbamol","Métoprolol","Midazolam","Nadolol","Nifédipine","Nitrazépam","Nordazépam","Octatropine méthylbromure","Oxatomide","Oxazépam","Oxomémazine","Oxprénolol","Phéniramine","Phényltoloxamine","Phénytoïne","Pindolol","Pizotifène","Prazépam","Prométhazine","Propafénone","Propranolol","Témazépam","Tétrazépam","Vérapamil","Zolpidem","Zopiclone"],
"Nutrition & Alimentation":["Schweppes & Tonics"],
"Ophtalmologie":["Bétaxolol","Cartéolol","Timolol"],
"ORL & Déglutition":["Azatadine dimaléate","Carbinoxamine maléate","Chlorphenoxamine","Clémastine fumarate","Dexchlorphéniramine","Histapyrrodine","Isothipendyl","Méfénidramium","Mépyramine maléate","Tényldiamine","Thiazinamium"],
"Produits de contraste":["Buzépide métiodure","Dipyridamole injectable","Etipirium iodure","Gadopentétate de méglumine","Gallamine triiodoéthylate","Iode injectable"],
"Psychiatrie & Sommeil":["Brotizolam","Chlormézanone","Chlorproéthazine","Cloxazolam","Fencarbamide napadisilate","Kétazolam","Methdilazine","Propyromazine bromure","Prozapine"],
"Rhumatologie":["Carisoprodol","Idrocilamide","Orphénadrine"],
"Urologie & Autonomie":["Dipiprovérine","Oxybutynine","Oxydipentonium","Solifenacine"]
};
// Mots-clés supplémentaires (hors PDF) pour les entrées génériques
const ALIASES = {
 "Schweppes & Tonics":["schweppes","tonic","tonics"],
 "Corticoïdes":["corticoide","corticoides","corticosteroide","corticosteroides"],
 "Vaccins vivants":["vaccin","vaccins"],
 "Patchs nicotiniques":["nicotinique","nicotiniques"],
 "Nicotine (patch)":["nicotine"],
 "Iode injectable":["iode"]
};