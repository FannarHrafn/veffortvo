//Fannar Hrafn Haraldsson
//verkefni 8
//2.3.2018
//það má taka fram  að meira segja algjörlega  óbreyttur kóði frá http://eloquentjavascript.net/code/chapter/07_robot.js
//virkar ekki einu sinni  svo ég  skil ekki hvernig það er búist við að þetta virki fyrir verkefnið
//ásamt því þá gefur kóðinn hans frá síðunni oft syntax villur sem er  samt ekki hægt að laga án þess að gera bara nýjan kóða
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
    if (graph[from] === null) {
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
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
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
//random robot sem velur random áttir
function randomPick(array) {
    //þar sem Math.random skilar alltaf tölu milli 0 og 1 en alltaf undir 1
    //þá ef maður margfaldar það með  lengd á array  og notar math.floor
    //til að losna við aukastafi þá er maður kominn með random  array index
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
    //þar sem Math.random skilar alltaf tölu milli 0 og 1 en alltaf undir 1
    //þá ef maður margfaldar það með  lengd á array  og notar math.floor
    //til að losna við aukastafi þá er maður kominn með random  array index
  return {direction: randomPick(roadGraph[state.place])};
}
//þetta er til að gefa þorpinu random pakka
//þetta lýtur ekki alveg eins út og úr bókinni þar sem kóðinn var að gefa
//nokkrar syntax villur þá breytti ég  honum aðeins, vona bara að það geri
//ennþá  alveg sömu hlutina
VillageState.random = function  () {
    //fjöldi pakka
  let parcelCount = 5;
  //pakka array
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
      //velur random address frá roadGraph
    let address = randomPick(Object.keys(roadGraph));
    //velur random place
    let place;
    //do lykkjan sér um að place og address  verði ekki sú sömu
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    //bætir við pakka array
    parcels.push({place: address});
  }
  return new VillageState("Post Office", parcels);
};
//runs random robot
runRobot(VillageState.random(), randomRobot);
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns
//harð kóðuð stysta leiðin í gegnum þorpið sem einnig skilar öllum pökkum
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];
//function til að robot fylgji route
function routeRobot(state, memory) {
    //fer alltaf á fyrsta stað í  route og síðan droppar því úr minni
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

//nota multiline comment því að fyrir neðan kemur loksins  alvöru kóðinn fyrir robot
//function til að finna stystu leiðina gegnum þorpið
function findRoute(graph, from, to) {
    //kóðinn hérna byrjar á að athuga hvort staðurinn sem það er að lýta á sé
    //áætluð  staðsetning, ef svo  þá er það  komið með route og endar
    //ef ekki þá er sá staður bættur við listan af stöðum sem það á eftir að lýta
    //á alla tengda staði fyrir til að reyna að finna goal stað
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}
// hérna er robot sem virkar á þann hátt  að hann veit nú þegar  hvar allir pakkarnar eru
function goalOrientedRobot({place, parcels}, route) {
  if (route.length === 0) {
    let parcel = parcels[0];
    //það byrjar á að reyna að finna route til þar sem pakkin byrjar
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
      // ef það er nú þegar með pakkan þá finnur það route til address pakkans
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  //fylgjir route, droppar þar sem hann hefur  farið í route
  return {direction: route[0], memory: route.slice(1)};
}
//runs robot
runRobotAnimation(VillageState.random(),
                  goalOrientedRobot, []);
