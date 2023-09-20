/*   STEP 1   */
export const leagueID = "916114371233808384"; // your league ID
export const leagueName = "Armchair Fantasy Experts"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2023, the Armchair Fantasy Experts began as dynasty league amongst a group of fantasy degens connecting through the Fantasy Footballers Podcast. They all had one goal in mind, to create a dynasty league with like minded people. Each year, the managers compete to win the coveted fantasy football championship ring, and avoid the truly despicable toilet bowl crown.</p>
  <p>In the inaugural startup season we had managers draft a win now team looking to compete for the coveted ring right away, as well as managers playing for the future of the league and building for a future Juggernaut squad.</p>
  <p>Will strategies from both sides pan out in the immediate season as well as beyond? Or will injuries and hidden gems arise to cause teams that thought they would win it all to tear it down and rebuild while the rebuilders switch to trading futures and win it all.</p>
  <p>With a great group of managers coming together to create this league, there is no lack of chatting and trading througout the year to keep managers active and on their toes, wondering what they will need to do to get their team to the next step.</p>
  <p>Even though the coveted ring is the end goal for all managers in this league, there is no end to the tilt, memes, and stress that will keep even the last place team engaged until the very end!</p>
  <p>With the inaugural season upon us for the 23-24 year, there is many questions left to be answered. Which manager will rise? Which manager will crumble as the season progresses? Who will be the major rivalries of the season? And most important of all, WHO TAKES HOME THE RING?!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
       {
         "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "556325345640869888",
         "name": "rjWhitt",
         "location": "TBD", // (optional)
         "joinedLeague": "Inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "917859003743965184",
         "name": "Catch2wnty2",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "725952044090867712",
         "name": "CocoFFL",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "332443107603791872",
         "name": "shmoto",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "TBD", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "461971921773260800",
         "name": "csteele12",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Chase-ing W's", // Can be anything (usually your rival's name)
           link: 8, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "856280771822981120",
         "name": "Mellis97",
         "location": "Nova Scotia", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "TBD", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "739318475067105280",
         "name": "Blitzburgh36",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 4070, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "LB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "408145371701710848",
         "name": "RexburgheadID",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "csteele12", // Can be anything (usually your rival's name)
           link: 5, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1264, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "DL", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "741507716576628736",
         "name": "gardner891",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "431847622773317632",
         "name": "ntriley",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "478562144007221248",
         "name": "kryptycc",
         "location": "Nova Scotia", // (optional)
         "bio": "Dear Leader Commissioner",
         "joinedLeague": "inauguralSeason 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "Anything can be rebuilt if you put your mind to it",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
       {
         "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
         "managerID": "468910069514235904",
         "name": "PootzNBootz",
         "location": "TBD", // (optional)
         "joinedLeague": "inaugural season 2023", // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "Falcons", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
         "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "TBD", // Can be anything (usually your rival's name)
           link: 6, // manager array number within this array, or null to link back to all managers page
           image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
         },
         "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
         "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
         "philosophy": "TBD",
         "tradingScale": 10, // 1 - 10
         "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },      
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
