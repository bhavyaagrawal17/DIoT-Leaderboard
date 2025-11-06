import React, { useState, useMemo } from 'react';
import { Trophy, Users, X, Search, Medal } from 'lucide-react';
import diotLogo from './DIoT_logo.png';     // your uploaded DIoT logo
import swiftwingsLogo from './SW_25_logo.png';  // your uploaded SwiftWings logo
import './App.css';

const Leaderboard = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [teams, setTeams] = useState([
    { id: 1, teamName: "SkyCrew", leader: "Aushka", points: 0, college: "", members: ["", "", "", ""] },
    { id: 2, teamName: "SASAN WINGS", leader: "Saurabh Kushwaha", points: 7, college: "", members: ["", "", "", ""] },
    { id: 3, teamName: "VyomVeg", leader: "Puneet Singh", points: 15, college: "", members: ["", "", "", ""] },
    { id: 4, teamName: "Team AirRex", leader: "Priyanshu Mishra", points: 10, college: "", members: ["", "", "", ""] },
    { id: 5, teamName: "Team NEEV", leader: "Priyanshu Rai", points: 0, college: "", members: ["", "", "", ""] },
    { id: 6, teamName: "Team Albatross", leader: "Anushka Patel", points: 11, college: "", members: ["", "", "", ""] },
    { id: 7, teamName: "HawkEye", leader: "Arjun Rastogi", points: 12, college: "", members: ["", "", "", ""] },
    { id: 8, teamName: "Team_falcons", leader: "AADARSH KUMAR MISHRA", points: 14, college: "", members: ["", "", "", ""] },
    { id: 9, teamName: "Zenith", leader: "SUJAL JOLLY", points: 9, college: "", members: ["", "", "", ""] },
    { id: 10, teamName: "SkyNova", leader: "Samridh Shukla", points: 14, college: "", members: ["", "", "", ""] },
    { id: 11, teamName: "Narayana", leader: "Arav Pratap Singh Chauhan", points: 10, college: "", members: ["", "", "", ""] },
    { id: 12, teamName: "PropelX Duo", leader: "Akshata Shrivastava", points: 11, college: "", members: ["", "", "", ""] },
    { id: 13, teamName: "Airnova", leader: "Disha Yadav", points: 7, college: "", members: ["", "", "", ""] },
    { id: 14, teamName: "THE VALIENTS", leader: "Arpita Mishra", points: 13, college: "", members: ["", "", "", ""] },
    { id: 15, teamName: "Mach-Torrent", leader: "Nehal kumar singh", points: 10, college: "", members: ["", "", "", ""] },
    { id: 16, teamName: "GarudSena", leader: "Satyam Kumar", points: 13, college: "", members: ["", "", "", ""] },
    { id: 17, teamName: "AeroNova", leader: "Khushi Singh", points: 12, college: "", members: ["", "", "", ""] },
    { id: 18, teamName: "Air Predators", leader: "Kartik Pandey", points: 11, college: "", members: ["", "", "", ""] },
    { id: 19, teamName: "AeroVASS", leader: "Shwet pandey", points: 10, college: "", members: ["", "", "", ""] },
    { id: 20, teamName: "Sky Hawks", leader: "Vaishnavi Pandey", points: 12, college: "", members: ["", "", "", ""] },
    { id: 21, teamName: "Falcon Flyers", leader: "Mitali Raj", points: 9, college: "", members: ["", "", "", ""] },
    { id: 22, teamName: "VimanaX", leader: "Ratna Mishra", points: 12, college: "", members: ["", "", "", ""] },
    { id: 23, teamName: "Oracle  Wings", leader: "Aryan Yadav", points: 9, college: "", members: ["", "", "", ""] },
    { id: 24, teamName: "STORM CHASERS", leader: "Tanishk Pandey", points: 8, college: "", members: ["", "", "", ""] },
    { id: 25, teamName: "HAWKS", leader: "Tarun Kumar", points: 11, college: "", members: ["", "", "", ""] },
    { id: 26, teamName: "AERO ACES", leader: "Prakhar Pal", points: 9, college: "", members: ["", "", "", ""] },
    { id: 27, teamName: "WingMaster ", leader: "Om Prakash", points: 7, college: "", members: ["", "", "", ""] },
    { id: 28, teamName: "AEROEAGLES", leader: "PRINCE KUMAR GAUTAM", points: 11, college: "", members: ["", "", "", ""] },
    { id: 29, teamName: "Sky pirates", leader: "Vikash kumar prajapati", points: 11, college: "", members: ["", "", "", ""] },
    { id: 30, teamName: "AeroSynth", leader: "Jahnvi Singh", points: 9, college: "", members: ["", "", "", ""] },
    { id: 31, teamName: "ACE", leader: "Vivek Ashwani", points: 10, college: "", members: ["", "", "", ""] },
    { id: 32, teamName: "Team AARKK", leader: "Adarsh Yadav", points: 12, college: "", members: ["", "", "", ""] },
    { id: 33, teamName: "RISING ROTOR", leader: "Vedant Singh", points: 13, college: "", members: ["", "", "", ""] },
    { id: 34, teamName: "The Predator", leader: "Animesh Yadav", points: 10, college: "", members: ["", "", "", ""] },
    { id: 35, teamName: "AeroPulse ", leader: "Pranjal Chandra", points: 13, college: "", members: ["", "", "", ""] },
    { id: 36, teamName: "Falcon5", leader: "Abhishek Dubey", points: 12, college: "", members: ["", "", "", ""] },
    { id: 37, teamName: "FREEWINGS", leader: "Anmol Srivastava", points: 13, college: "", members: ["", "", "", ""] },
    { id: 38, teamName: "Tech Titans", leader: "keshav Agraval", points: 12, college: "", members: ["", "", "", ""] },
    { id: 39, teamName: "RR", leader: "AKSHAT YADAV", points: 13, college: "", members: ["", "", "", ""] },
    { id: 40, teamName: "FURIOUS SQUADRON", leader: "ANANYA PANDEY", points: 14, college: "", members: ["", "", "", ""] },
    { id: 41, teamName: "Aktisukh", leader: "Harsh Singh", points: 9, college: "", members: ["", "", "", ""] },
    { id: 42, teamName: "Tech vultures", leader: "Anshika Sharma", points: 11, college: "", members: ["", "", "", ""] },
    { id: 43, teamName: "AeroPulse", leader: "ADITYA KUMAR SINGH", points: 13, college: "", members: ["", "", "", ""] },
    { id: 44, teamName: "FalconX", leader: "Mahak keshari", points: 9, college: "", members: ["", "", "", ""] },
    { id: 45, teamName: "Megatron", leader: "Adarsh Singh", points: 11, college: "", members: ["", "", "", ""] },
    { id: 46, teamName: "Future flyers", leader: "Abhinay singh", points: 0, college: "", members: ["", "", "", ""] },
    { id: 47, teamName: "Swiftions", leader: "Abhinav Yadav", points: 13, college: "", members: ["", "", "", ""] },
    { id: 48, teamName: "Badmos Parinda ", leader: "Sparsh Srivastava", points: 0, college: "", members: ["", "", "", ""] },
    { id: 49, teamName: "SkyServos", leader: "Isha Chaurasiya", points: 10, college: "DDU", members: ["", "", "", ""] }
  ]);

  const sortedTeams = useMemo(() => {
    return [...teams].sort((a, b) => b.points - a.points);
  }, [teams]);

  const filteredTeams = useMemo(() => {
    return sortedTeams.filter(team =>
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.leader.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedTeams, searchTerm]);

  const highestScore = useMemo(() => {
    return Math.max(...teams.map(t => t.points), 0);
  }, [teams]);

  const getRankColor = (rank) => {
    if (rank === 1) return 'from-yellow-400 to-yellow-600';
    if (rank === 2) return 'from-gray-300 to-gray-500';
    if (rank === 3) return 'from-orange-400 to-orange-600';
    return 'from-cyan-500 to-blue-600';
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Medal className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-4 md:p-8 relative">
      
      {/* Top Logos */}
      <div className="absolute top-4 left-4 flex items-center">
        <img src={diotLogo} alt="DIoT Club" className="w-20 h-20 object-contain" />
      </div>

      <div className="absolute top-4 right-4 flex items-center">
        <img src={swiftwingsLogo} alt="SwiftWings'25" className="w-24 h-24 object-contain" />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 pt-28">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-cyan-400" />
           <h1
  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
  style={{ fontFamily: "'Transformers', sans-serif" }}
>
  SWIFTWINGS'25 Leaderboard
</h1>


          </div>
          <p className="text-gray-400 text-lg">Drone & IoT Club - MMMUT</p>
          <p className="text-cyan-400 text-sm mt-2">Hosted by DIoT Club</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search teams or leaders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/50 backdrop-blur border border-cyan-500/30 rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-cyan-400">{teams.length}</p>
            <p className="text-gray-400 text-sm">Total Teams</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-cyan-500/30 rounded-lg p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-yellow-400">{highestScore}</p>
            <p className="text-gray-400 text-sm">Highest Score</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-cyan-500/30 rounded-lg p-4 text-center">
            <Medal className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-cyan-400">
              {sortedTeams[0]?.teamName || 'TBD'}
            </p>
            <p className="text-gray-400 text-sm">Current Leader</p>
          </div>
        </div>

        {/* Teams List */}
        <div className="space-y-3">
          {filteredTeams.map((team, index) => {
            const rank = index + 1;
            const isTopThree = rank <= 3;

            return (
              <div
                key={team.id}
                className={`bg-gray-800/50 backdrop-blur border ${
                  isTopThree ? 'border-cyan-400/50' : 'border-cyan-500/20'
                } rounded-lg p-4 md:p-6 transform transition-all duration-500 hover:scale-[1.01] hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${getRankColor(rank)} flex items-center justify-center font-bold text-lg md:text-xl shadow-lg transition-all duration-500`}>
                    {isTopThree ? getRankIcon(rank) : `#${rank}`}
                  </div>

                  <div 
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() => setSelectedTeam(team)}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 truncate">
                      {team.teamName}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base truncate">
                      👤 {team.leader}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg px-4 py-2 md:px-6 md:py-3 transition-all duration-300">
                    <p className="text-2xl md:text-3xl font-bold">{team.points}</p>
                    <p className="text-xs text-cyan-100">points</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Details Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedTeam(null)}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-500/50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 relative">
              <button
                onClick={() => setSelectedTeam(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-3xl font-bold text-white mb-2">{selectedTeam.teamName}</h2>
              <p className="text-cyan-100">Team Details</p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="text-cyan-400 text-sm font-semibold mb-2 block">Team Name</label>
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-3">
                  <p className="text-white text-lg">{selectedTeam.teamName}</p>
                </div>
              </div>

              <div>
                <label className="text-cyan-400 text-sm font-semibold mb-2 block">College Name</label>
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-3">
                  <p className="text-gray-400 italic">{selectedTeam.college || "Not specified"}</p>
                </div>
              </div>

              <div>
                <label className="text-cyan-400 text-sm font-semibold mb-2 block">Team Leader</label>
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <p className="text-white text-lg">{selectedTeam.leader}</p>
                </div>
              </div>

              <div>
                <label className="text-cyan-400 text-sm font-semibold mb-2 block">Team Members</label>
                <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    {selectedTeam.members.map((member, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                          {idx + 1}
                        </span>
                        <span className="italic">{member || "Not specified"}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <label className="text-cyan-400 text-sm font-semibold mb-2 block">Total Points</label>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-4 text-center">
                  <p className="text-5xl font-bold text-white">{selectedTeam.points}</p>
                  <p className="text-cyan-100 mt-1">points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
