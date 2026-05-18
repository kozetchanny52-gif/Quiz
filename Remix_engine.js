const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
const adding_source=(ar,index)=>{let big_index=index
    ar.map((item,index)=>{let small_index=index
            item["source"]=big_index+""+small_index
        }
    )
    return ar
}
function flattenplaylists(array){
  if (!Array.isArray(array)){
     return new Array
  }
  return array.map(adding_source)
}
const ScoredTracks=(ar)=>{
    ar.map((item,index)=>{item["score"]=item.votes * 10 - Math.abs(item.bpm - 120)})
    return ar
}
console.log(flattenplaylists(playlists))
let sc=flattenplaylists(playlists)
console.log(sc.map(ScoredTracks))

