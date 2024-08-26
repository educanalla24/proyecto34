import express from "express"; 
import bodyParser from "body-parser";

const app = express();
const port = 3000;  


const paisesJSON = '[{"name":{"common":"Colombia","official":"Republic of Colombia","nativeName":{"spa":{"official":"República de Colombia","common":"Colombia"}}},"currencies":{"COP":{"name":"Colombian peso","symbol":"$"}}},{"name":{"common":"Honduras","official":"Republic of Honduras","nativeName":{"spa":{"official":"República de Honduras","common":"Honduras"}}},"currencies":{"HNL":{"name":"Honduran lempira","symbol":"L"}}},{"name":{"common":"Guam","official":"Guam","nativeName":{"cha":{"official":"Guåhån","common":"Guåhån"},"eng":{"official":"Guam","common":"Guam"},"spa":{"official":"Guam","common":"Guam"}}},"currencies":{"USD":{"name":"United States dollar","symbol":"$"}}},{"name":{"common":"Puerto Rico","official":"Commonwealth of Puerto Rico","nativeName":{"eng":{"official":"Commonwealth of Puerto Rico","common":"Puerto Rico"},"spa":{"official":"Estado Libre Asociado de Puerto Rico","common":"Puerto Rico"}}},"currencies":{"USD":{"name":"United States dollar","symbol":"$"}}},{"name":{"common":"Cuba","official":"Republic of Cuba","nativeName":{"spa":{"official":"República de Cuba","common":"Cuba"}}},"currencies":{"CUC":{"name":"Cuban convertible peso","symbol":"$"},"CUP":{"name":"Cuban peso","symbol":"$"}}},{"name":{"common":"Uruguay","official":"Oriental Republic of Uruguay","nativeName":{"spa":{"official":"República Oriental del Uruguay","common":"Uruguay"}}},"currencies":{"UYU":{"name":"Uruguayan peso","symbol":"$"}}},{"name":{"common":"Equatorial Guinea","official":"Republic of Equatorial Guinea","nativeName":{"fra":{"official":"République de la Guinée Équatoriale","common":"Guinée équatoriale"},"por":{"official":"República da Guiné Equatorial","common":"Guiné Equatorial"},"spa":{"official":"República de Guinea Ecuatorial","common":"Guinea Ecuatorial"}}},"currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}}},{"name":{"common":"Paraguay","official":"Republic of Paraguay","nativeName":{"grn":{"official":"Tetã Paraguái","common":"Paraguái"},"spa":{"official":"República de Paraguay","common":"Paraguay"}}},"currencies":{"PYG":{"name":"Paraguayan guaraní","symbol":"₲"}}},{"name":{"common":"Bolivia","official":"Plurinational State of Bolivia","nativeName":{"aym":{"official":"Wuliwya Suyu","common":"Wuliwya"},"grn":{"official":"Tetã Volívia","common":"Volívia"},"que":{"official":"Buliwya Mamallaqta","common":"Buliwya"},"spa":{"official":"Estado Plurinacional de Bolivia","common":"Bolivia"}}},"currencies":{"BOB":{"name":"Bolivian boliviano","symbol":"Bs."}}},{"name":{"common":"Chile","official":"Republic of Chile","nativeName":{"spa":{"official":"República de Chile","common":"Chile"}}},"currencies":{"CLP":{"name":"Chilean peso","symbol":"$"}}},{"name":{"common":"Argentina","official":"Argentine Republic","nativeName":{"grn":{"official":"Argentine Republic","common":"Argentina"},"spa":{"official":"República Argentina","common":"Argentina"}}},"currencies":{"ARS":{"name":"Argentine peso","symbol":"$"}}},{"name":{"common":"Mexico","official":"United Mexican States","nativeName":{"spa":{"official":"Estados Unidos Mexicanos","common":"México"}}},"currencies":{"MXN":{"name":"Mexican peso","symbol":"$"}}},{"name":{"common":"Belize","official":"Belize","nativeName":{"bjz":{"official":"Belize","common":"Belize"},"eng":{"official":"Belize","common":"Belize"},"spa":{"official":"Belice","common":"Belice"}}},"currencies":{"BZD":{"name":"Belize dollar","symbol":"$"}}},{"name":{"common":"Venezuela","official":"Bolivarian Republic of Venezuela","nativeName":{"spa":{"official":"República Bolivariana de Venezuela","common":"Venezuela"}}},"currencies":{"VES":{"name":"Venezuelan bolívar soberano","symbol":"Bs.S."}}},{"name":{"common":"El Salvador","official":"Republic of El Salvador","nativeName":{"spa":{"official":"República de El Salvador","common":"El Salvador"}}},"currencies":{"USD":{"name":"United States dollar","symbol":"$"}}},{"name":{"common":"Peru","official":"Republic of Peru","nativeName":{"aym":{"official":"Piruw Suyu","common":"Piruw"},"que":{"official":"Piruw Ripuwlika","common":"Piruw"},"spa":{"official":"República del Perú","common":"Perú"}}},"currencies":{"PEN":{"name":"Peruvian sol","symbol":"S/ "}}},{"name":{"common":"Dominican Republic","official":"Dominican Republic","nativeName":{"spa":{"official":"República Dominicana","common":"República Dominicana"}}},"currencies":{"DOP":{"name":"Dominican peso","symbol":"$"}}},{"name":{"common":"Western Sahara","official":"Sahrawi Arab Democratic Republic","nativeName":{"ber":{"official":"Sahrawi Arab Democratic Republic","common":"Western Sahara"},"mey":{"official":"الجمهورية العربية الصحراوية الديمقراطية","common":"الصحراء الغربية"},"spa":{"official":"República Árabe Saharaui Democrática","common":"Sahara Occidental"}}},"currencies":{"DZD":{"name":"Algerian dinar","symbol":"دج"},"MAD":{"name":"Moroccan dirham","symbol":"DH"},"MRU":{"name":"Mauritanian ouguiya","symbol":"UM"}}},{"name":{"common":"Guatemala","official":"Republic of Guatemala","nativeName":{"spa":{"official":"República de Guatemala","common":"Guatemala"}}},"currencies":{"GTQ":{"name":"Guatemalan quetzal","symbol":"Q"}}},{"name":{"common":"Ecuador","official":"Republic of Ecuador","nativeName":{"spa":{"official":"República del Ecuador","common":"Ecuador"}}},"currencies":{"USD":{"name":"United States dollar","symbol":"$"}}},{"name":{"common":"Spain","official":"Kingdom of Spain","nativeName":{"spa":{"official":"Reino de España","common":"España"}}},"currencies":{"EUR":{"name":"Euro","symbol":"€"}}},{"name":{"common":"Panama","official":"Republic of Panama","nativeName":{"spa":{"official":"República de Panamá","common":"Panamá"}}},"currencies":{"PAB":{"name":"Panamanian balboa","symbol":"B/."},"USD":{"name":"United States dollar","symbol":"$"}}},{"name":{"common":"Costa Rica","official":"Republic of Costa Rica","nativeName":{"spa":{"official":"República de Costa Rica","common":"Costa Rica"}}},"currencies":{"CRC":{"name":"Costa Rican colón","symbol":"₡"}}},{"name":{"common":"Nicaragua","official":"Republic of Nicaragua","nativeName":{"spa":{"official":"República de Nicaragua","common":"Nicaragua"}}},"currencies":{"NIO":{"name":"Nicaraguan córdoba","symbol":"C$"}}}]';



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
 

let data;

app.get("/",(req,res) => {
  res.render("index.ejs",{todalaData : data});
} );


app.post("/paisess",(req,res)=> {
  switch(req.body.choice){
    case "colombia":
      data = JSON.parse(paisesJSON)[0];
      break;
      case "honduras":
      data = JSON.parse(paisesJSON)[1];
      break;
      case "cuba":
      data = JSON.parse(paisesJSON)[4];
      break;
      default:
      break;

  }
res.redirect("/")
});




app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });