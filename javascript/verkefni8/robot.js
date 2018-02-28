//listi af öllum staðsetningum á kortinu
//takið eftir því að við notum "-" til að sýna að
//frá x komust við til y: x-y
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];
//function sem tekur við roads listanum sem við notum
//til að robotinn viti hvert hann getur farið
function buildGraph(edges) {
  //búum til hreint object sem hefur ekkert proto
  //objectið mun vera notað til að mynda graph af kortinu
  //þetta mun í raun vera líkt og array of arrays
  let graph = Object.create(null);
  //nested function til að gera graphið úr upplýsingunum
  //við sendum from og to í þetta function frá for loop fyrir neðan
  function addEdge(from, to) {
    //fyrst athugum hvort að array fyrir þessa staðsetningu er til
    if (graph[from] == null) {
      //ef hún er ekki til þá sköpum við hana og
      //gerum fyrsta stak hennar to
      //þetta array mun innihalda allar staðsetningar sem
      //þessi staðsetning er nálægt
      graph[from] = [to];
    } 
      //ef að array fyrir þessa staðsetningu er nú þegar til
      else {
        //þá bætum við bara við annarri staðsetningu við array
      graph[from].push(to);
    }
  }
  //for loop til að taka í sundur hvert stak úr roads
  //með því að skipta stakinu í from og to eftir "-" merkinu
  //talaði um þetta hjá roads
  for (let [from, to] of edges.map(r => r.split("-"))) {
    //við sendum from og to í function sem bætir við staðsetningu sem
    //staðsetning er nálægt við
    //takið eftir að við þurfum að senda from og to sem from og to
    //en einnig öfugt (to sem from og from sem to)
    //út af því hvernig roads er sett upp þá eru sumar staðsetningar
    //bara fundnar sem y en aldrei sem x í þessum x-y pörum
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
//látum roads listan okkar í buildgraph function
//til að geta gert eitthvað úr upplýsingunum
const roadGraph = buildGraph(roads);

//þessi klasi mun lýsa aðstöðum í þorpinu
//og uppfæra pakka og færa póstkarlinn
class VillageState {
  //constructor sem tekur við staðsetningu í þorpinu og pökkum
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  //aðferð sem tekur inn destination
  move(destination) {
    //athugar hvort það er tenging frá current staðsetningu að destination
    if (!roadGraph[this.place].includes(destination)) {
      //ef ekki þá skilar það bara sama VillageState og það notaði til að athuga
      return this;
    } 
      //skapar nýtt VillageState með nýrri staðsetningu
      else {
      //býr til nýtt parcels þar sem það þarf að færa alla parcels
      //sem ekki er verið að skila á þessum stað
      //map hérna sér um að færa .place af öllum parcels yfir í nýju staðsetninguna
      //á meðan filter losar okkur við alla pakka sem áttu að fara til nýja staðsins
      // síðan skapar það nýtt VillageState með uppfærðum pökkum og staðsetningum
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}


//harð kóðuð byrjunar staðsetning þar sem place er alltaf Post Office
//og pakkin á alltaf að fara til Alice
let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
//harð kóðað til að reyna að fara fyrst til Alice
//eftir þetta þá heldur VillageState klasinn áfram að kalla á sjálfan sig
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office


