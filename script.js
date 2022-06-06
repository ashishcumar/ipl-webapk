var teamCardContainer = document.getElementsByClassName(".teamCardContainer");
var teamCardbox = document.querySelector(".teamCardbox");
var selectedteam = document.querySelector(".selectedteam");
var selectedteamdetails = document.querySelector(".selectedteamdetails");
var inputData = document.querySelector("input");
var section2 = document.querySelector(".sec2");
var playerContainer = document.querySelector(".playerContainer");
var resultbox = document.querySelector(".resultbox");
var section2home = document.getElementById("#section2home");
var searchresult = document.getElementById("#searchresult");
var addplayer = document.querySelector(".addplayer");
var formname = document.getElementById("fname");
var formteam = document.getElementById("fteam");
var formrole = document.getElementById("role");
var submit = document.getElementById("subbtn");
var deletep = document.getElementById("dlbtn");
var formContainer = document.getElementById("formContainerid");

const check = location.href;

const teamsData = [
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    teamName: "Chennai Super Kings",
    Stadium: "M.A. Chidambaram Stadium",
    Won: "2010,2011,2018,2021",
    background: "linear-gradient(180deg, #FCCA06 0%, #F25C19 100%)",
    border: "2px solid #F25C19;",
    coach: "Stephen Fleming",
    Captain: "MS Dhoni",
    topbowler: "Adam Milne",
    totalPLayer: "25",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    teamName: "Delhi Capitals",
    Stadium: "Arun jaitely Stadium",
    Won: "--",
    background: "linear-gradient(180deg, #0078BC 0%, #17479E 100%)",
    border: "2px solid #17479E;",
    coach: "Ricky Ponting",
    Captain: "Rishabh Pant",
    topbowler: "Anrich Nortje",
    totalPLayer: "24",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    teamName: "Gujrat Titans",
    Stadium: "Narendra Modi Stadium",
    Won: "2022",
    background: "linear-gradient(180deg, #1C1C1C 0%, #0B4973 100%)",
    border: "2px solid #0B4973;",
    coach: "Ashish Nehra",
    Captain: "Hardik Pandya",
    topbowler: "Lockie Ferguson",
    totalPLayer: "23",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    teamName: "Kolkata Knight Riders",
    Stadium: "Eden Gardens",
    Won: "2012,2014",
    background: "linear-gradient(180deg, #3B215D 0%, #552792 100%)",
    border: "2px solid #552792;",
    coach: "Brendon McCullum",
    Captain: "Shreyas Iyer",
    topbowler: "Ashok Sharma",
    totalPLayer: "25",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    teamName: "Lucknow Super Giants",
    Stadium: "BRSABV Ekana Cricket Stadium",
    Won: "--",
    background: "linear-gradient(180deg, #A72056 0%, #FFCC00 100%)",
    border: "2px solid #FFCC00",
    coach: "Andy Flower",
    Captain: "KL Rahul",
    topbowler: "Ankit Rajpoot",
    totalPLayer: "21",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    teamName: "Mumbai Indians",
    Stadium: "Wankhede Stadium",
    Won: "2013,2015,2017,2019,2020",
    background: "linear-gradient(180deg, #006CB7 0%, #003B7A 100%)",
    border: "2px solid #003B7A",
    coach: "Mahela Jayawardene",
    Captain: "Rohit Sharma",
    topbowler: "Basil Thampi",
    totalPLayer: "25",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    teamName: "Punjab Kings",
    Stadium: "Punjab Cricket Association IS Bindra Stadium",
    Won: "--",
    background: "linear-gradient(180deg, #D71920 0%, #84171B 100%)",
    border: "2px solid #84171B",
    coach: "Anil Kumble",
    Captain: "Mayank Agarwal",
    topbowler: "Arshdeep Singh",
    totalPLayer: "25",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    teamName: "Rajasthan Royals",
    Stadium: "Sawai Mansingh Stadium",
    Won: "2008",
    background: "linear-gradient(180deg, #EA1A85 0%, #001D48 100%)",
    border: "2px solid #001D48",
    coach: "Kumar Sangakkara",
    Captain: "Sanju Samson",
    topbowler: "Kuldeep Sen",
    totalPLayer: "24",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    teamName: "Royal Challengers Bangalore",
    Stadium: "M. Chinnaswamy Stadium",
    Won: "--",
    background: "linear-gradient(180deg, #6A6A6A 0%, #1C1C1C 100%)",
    border: "2px solid #1C1C1C",
    coach: "Sanjay Bangar",
    Captain: "Faf du Plessis",
    topbowler: "Akash Deep",
    totalPLayer: "22",
  },
  {
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    teamName: "Sunrisers Hyderabad",
    Stadium: "Rajiv Gandhi Intl. Cricket Stadium",
    Won: "2016",
    background: "linear-gradient(180deg, #F26522 0%, #ED1A37 100%)",
    border: "2px solid #ED1A37",
    coach: "Tom Moody",
    Captain: "Kane Williamson",
    topbowler: "Bhuvneshwar Kr",
    totalPLayer: "23",
  },
];

const playerData = [
  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
      playername: "MS Dhoni",
      role: "Wicketkeeper Batter",
      price: "12cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/7111.png",
      playername: "C Hari Nishaanth",
      role: "Batter",
      price: "20Lakhs",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20572.png",
      playername: "Devon Conway",
      role: "WK-Batsman",
      price: "1cr",
      status: "On-bench",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
      playername: "Robin Uthappa",
      role: "Batter",
      price: "2cr",
      status: "Playing",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
      playername: "Rishabh Pant",
      role: "Wicketkeeper Batter",
      price: "16cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/0.png",
      playername: "Ashwin Hebbar",
      role: "Batter",
      price: "20lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/170.png",
      playername: "David Warner",
      role: "Batter",
      price: "6.25cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
      playername: "Mandeep Singh",
      role: "All-rounder",
      price: "1.10cr",
      status: "Playing",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
      playername: "Hardik Pandya",
      role: " All-rounder",
      price: "15cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20589.png",
      playername: "Abhinav Manohar",
      role: "Batter",
      price: "2.6cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/187.png",
      playername: "David Miller",
      role: "Batter",
      price: "75Lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
      playername: "Matthew Wade",
      role: "Wicket-Keeper",
      price: "2.4cr",
      status: "On-bench",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
      playername: "Shreyas Iyer",
      role: "Batter",
      price: "12.25cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20589.png",
      playername: "Abhinav Manohar",
      role: "Batter",
      price: "2.6cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/187.png",
      playername: "David Miller",
      role: "Batter",
      price: "75Lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
      playername: "Matthew Wade",
      role: "Wicket-Keeper",
      price: "2.4cr",
      status: "On-bench",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1125.png",
      playername: "KL Rahul",
      role: "Batter",
      price: "12.25cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/872.png",
      playername: "Evin Lewis",
      role: "Batter",
      price: "1.6cr",
      status: "On-bench",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1085.png",
      playername: "Manan Vohra",
      role: "Batter",
      price: "20Lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/123.png",
      playername: "Manish Pandey",
      role: "Wicket-Keeper",
      price: "2.4cr",
      status: "On-bench",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2965.png",
      playername: "Rohit Sharma",
      role: "Batter",
      price: "16cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20589.png",
      playername: "Anmolpreet Singh",
      role: "Batter",
      price: "2.6cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20593.png",
      playername: "Dewald Brevis",
      role: "Batter",
      price: "1cr",
      status: "On-bench",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/108.png",
      playername: "Suryakumar Yadav",
      role: "Batter",
      price: "2cr",
      status: "Playing",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/158.png",
      playername: "Mayank Agarwal",
      role: "Batter",
      price: "8cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20604.png",
      playername: "Bhanuka Rajapaksa",
      role: "Batter",
      price: "80Lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/41.png",
      playername: "Shikhar Dhawan",
      role: "Batter",
      price: "13cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
      playername: "Jonny Bairstow",
      role: " Wicketkeeper Batter",
      price: "3cr",
      status: "On-bench",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png",
      playername: "Sanju Samson",
      role: "Batter",
      price: "5cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
      playername: "Devdutt Padikkal",
      role: "Batter",
      price: "1.25cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
      playername: "Jos Buttler",
      role: "Batter",
      price: "75Lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
      playername: "Karun Nair",
      role: "All-rounder",
      price: "2.4cr",
      status: "On-bench",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/24.png",
      playername: "Faf du Plessis",
      role: "Batter",
      price: "12cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3020.png",
      playername: " Wicketkeeper Batter",
      role: "Batter",
      price: "95Lakhs",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
      playername: "Virat Kohli",
      role: "Batter",
      price: "15cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5471.png",
      playername: "Rajat Patidar",
      role: "Batter",
      price: "20Lakh",
      status: "On-bench",
    },
  ],

  [
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/440.png",
      playername: "Kane Williamson",
      role: "Batter",
      price: "14cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
      playername: "Abdul Samad",
      role: "Batter",
      price: "3cr",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1667.png",
      playername: "Aiden Markram",
      role: "Batter",
      price: "97Lakh",
      status: "Playing",
    },
    {
      img: "https://assets.iplt20.com/ipl/IPLHeadshot2022/116.png",
      playername: "Bhuvneshwar Kumar",
      role: "Bowler",
      price: "1.5cr",
      status: "On-bench",
    },
  ],
];

function load() {
  for (var i = 0; i < playerData.length; i++) {
    const pass = playerData[i];
    localStorage.setItem(`playerData${i}`, JSON.stringify(pass));
  }
}

if (check.includes("index")) {
  submit.addEventListener("click", () => {
    const playname = formname.value;
    const playteam = formteam.value;
    const playrole = formrole.value;
    done(playname, playteam, playrole);
    alert("Player Updated Please Check Team");
  });
}

if (check.includes("index")) {
  deletep.addEventListener("click", () => {
    const playteam = formteam.value;
    deletePlayer(playteam);
    alert("Player Deleted Please Check Team");
  });
}

if (check.includes("index")) {
  addplayer.addEventListener("click", () => {
    if (check.includes("index")) {
      formContainer.style.display = "block";
    }
  });
}

function done(name, team, role) {
  var link = 0;
  if (/^c/i.test(team)) {
    link = 0;
  } else if (/^d/i.test(team)) {
    link = 1;
  } else if (/^g/i.test(team)) {
    link = 2;
  } else if (/^k/i.test(team)) {
    link = 3;
  } else if (/^l/i.test(team)) {
    link = 4;
  } else if (/^m/i.test(team)) {
    link = 5;
  } else if (/^p/i.test(team)) {
    link = 6;
  } else if (/^ra/i.test(team)) {
    link = 7;
  } else if (/^ro/i.test(team)) {
    link = 8;
  } else if (/^s/i.test(team)) {
    link = 9;
  } else {
    alert("Please write complete name.");
  }

  const adData = {
    img: "https://media.istockphoto.com/vectors/cricket-player-vector-id184714681?s=612x612",
    playername: `${name}`,
    role: `${role}`,
    price: "20lakh",
    status: "New Added",
  };

  if (localStorage.getItem(`playerData${link}`) != null) {
    playerData[link].push(adData);
    load();
  }
}

if (check.includes("index")) {
  inputData.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      const comp = e.target.value;
      if (/^c/i.test(comp)) {
        search(0);
      } else if (/^d/i.test(comp)) {
        search(1);
      } else if (/^g/i.test(comp)) {
        search(2);
      } else if (/^k/i.test(comp)) {
        search(3);
      } else if (/^l/i.test(comp)) {
        search(4);
      } else if (/^m/i.test(comp)) {
        search(5);
      } else if (/^p/i.test(comp)) {
        search(6);
      } else if (/^ra/i.test(comp)) {
        search(7);
      } else if (/^ro/i.test(comp)) {
        search(8);
      } else if (/^s/i.test(comp)) {
        search(9);
      } else {
        alert("Please write complete name.");
      }
    }
  });
}

function deletePlayer(team) {
  var link = 0;
  if (/^c/i.test(team)) {
    link = 0;
  } else if (/^d/i.test(team)) {
    link = 1;
  } else if (/^g/i.test(team)) {
    link = 2;
  } else if (/^k/i.test(team)) {
    link = 3;
  } else if (/^l/i.test(team)) {
    link = 4;
  } else if (/^m/i.test(team)) {
    link = 5;
  } else if (/^p/i.test(team)) {
    link = 6;
  } else if (/^ra/i.test(team)) {
    link = 7;
  } else if (/^ro/i.test(team)) {
    link = 8;
  } else if (/^s/i.test(team)) {
    link = 9;
  } else {
    alert("Please write complete name.");
  }

  if (localStorage.getItem(`playerData${link}`) != null) {
    playerData[link].pop();
    load();
  }
}

function search(link) {
  teamCardbox.innerHTML = "";
  resultbox.innerHTML = "";
  resultbox.innerHTML = `
  <div class="iplsquaddiv">
        <h1 class="iplsquad">IPL Squad 2022</h1>
        <div class="viewAll">View All</div>
    </div>`;
  for (var k = 0; k < playerData[link].length; k++) {
    const selectteamdata = `
  <div class="playersec" style="background:${teamsData[link].background}; margin:10px 10px ;">
  <div class="playerImg">
  <img src="${playerData[link][k].img}" alt="">
  
  </div>
  <div class="playerabout">
      <h1>${playerData[link][k].playername}</h1>
      <ul>
          <li>Team : ${teamsData[link].teamName} </li>
          <li>Roll : ${playerData[link][k].role}</li>
          <li>Price : ${playerData[link][k].price}</li>
          <li>Status : ${playerData[link][k].status}</li>
      </ul>
  </div>
  </div>
  `;
    resultbox.innerHTML += selectteamdata;
  }
}

for (var i = 0; i < teamsData.length; i++) {
  const teamCards = `<div class="teams" id="${i + 1}"  style="background:${
    teamsData[i].background
  };border:${teamsData[i].border}">
    <a href="teamdetails.html?id=${i + 1}" id="${i + 1}">
        <img src="${teamsData[i].img}" alt="teamLogo" id="${i + 1}">
        <h5>${teamsData[i].teamName}</h5>
        <p>${teamsData[i].Stadium}</p>
        <div> <i class="fa-solid fa-trophy"></i>${teamsData[i].Won} </div>
    </a>
</div>`;
  if (document.querySelector(".teamCardbox") != null) {
    teamCardbox.innerHTML += teamCards;
  }
}
if (!check.includes("index.html") && !check.includes("player-page")) {
  var link = window.location.search.split("=")[1] - 1;
  loadpage2(link);
}

function loadpage2(link) {
  teamCardbox.innerHTML = "";
  const selectteamdata = `
  <div class="cont">
  <div>
      <img class="logo"
          src="${teamsData[link].img}"
          alt="logo">
  </div>
  <div>
      <h2>${teamsData[link].teamName}</h2>
      <div class="officialsite">Official Team Site
          <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i><i
              class="fa-brands fa-facebook"></i>
      </div>
      <div class="trophy"> <i class="fa-solid fa-trophy">${teamsData[link].Won}</i>

          <ul>
              <li><span>Owner</span> : ${teamsData[link].teamName}</li>
              <li> <span>Coach</span> :${teamsData[link].coach}</li>
              <li> <span>Venue</span>: ${teamsData[link].Stadium}</li>
              <li><span>Captain </span>:${teamsData[link].Captain}</li>
              <li> <span>Top Batsman</span>:${teamsData[link].Captain}</li>
              <li> <span>Top Bowler </span>: ${teamsData[link].topbowler}</li>
              <li> <span>Total Players</span>: ${teamsData[link].totalPLayer}</li>
          </ul>
      </div>
  </div>
</div>`;

  selectedteamdetails.innerHTML = selectteamdata;

  const pass2 = JSON.parse(localStorage.getItem(`playerData${link}`));

  for (var j = 0; j < pass2.length; j++) {
    const players = `<div class="playersCard" style="background:${
      teamsData[link].background
    };border:${teamsData[link].border}">
<a href="player-page.html?id=${j + 1}=${link}">
    <img src="${pass2[j].img}" alt="">
<ul style="background:${teamsData[link].background};border:${
      teamsData[link].border
    }">
    <li>${pass2[j].playername}</li>
    <li><span>Team</span>: ${teamsData[link].teamName}</li>
    <li><span>Roll</span>: ${pass2[j].role}</li>
    <li><span>Price</span>:  ${pass2[j].price}</li>
</ul>
</a>
</div>`;
    section2.innerHTML += players;
  }
}

const check2 = location.href;

if (check2.includes("player-page")) {
  var collect = window.location.search.split("=");
  const paraA = window.location.search.split("=")[1] - 1;
  const paraB = window.location.search.split("=")[2];
  loadpage3(paraB, paraA);
}

function loadpage3(link, id) {
  const page3data = `
  <div class="playersec"style="background:${teamsData[link].background}">
  <div class="playerImg">
<img src="${playerData[link][id].img}" alt="">

  </div>
  <div class="playerabout">
      <h1>${playerData[link][id].playername}</h1>
      <ul>
          <li>Team : ${teamsData[link].teamName} </li>
          <li>Role : ${playerData[link][id].role}</li>
          <li>Price : ${playerData[link][id].price}</li>
          <li>Status : ${playerData[link][id].status}</li>
      </ul>
  </div>
</div>
`;
  playerContainer.innerHTML += page3data;
}
